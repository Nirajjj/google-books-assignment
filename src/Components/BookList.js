import React, { useState } from "react";
import BookCard from "./BookCard";
import { useDispatch, useSelector } from "react-redux";
import BookListShimmerUi from "./BookListShimmerUi";
import InfiniteScroll from "react-infinite-scroll-component";
import useFirstBooksList from "../hooks/useFirstBooksList";
import {
  addOneBook,
  addQueryValue,
  toggleBookInfoState,
} from "../utils/googleBooksSlice";
import BookInfo from "./BookInfo";

const BookList = () => {
  const dispatch = useDispatch();
  const booksState = useSelector((store) => store.books);

  const [year, setYear] = useState(2023);
  const [category, setCategory] = useState("subject:fiction");

  useFirstBooksList(year, category);
  const parts = category.split(":");

  const booksToDisplay = booksState.queryValue
    ? booksState.queryBooks[booksState.queryValue]
    : booksState.categoryBooks[parts[1]] || [];

  const handleSelect = (event) => {
    dispatch(addQueryValue(null));
    setCategory(
      `subject:${event.target.value.replace(/ /g, "+").toLowerCase()}`
    );
  };

  const fetchMoreBooks = () => {
    setYear((prevYear) => prevYear - 1);
  };
  const handleBookInfo = (book) => {
    dispatch(toggleBookInfoState(true));
    dispatch(addOneBook(book));
  };
  return !booksToDisplay ? (
    <BookListShimmerUi />
  ) : (
    <div className="w-screen flex items-center flex-col gap-3 ">
      {booksState.error && (
        <div>
          <h1>an error occurred: {booksState.error}</h1>
        </div>
      )}

      <div className="w-[80%] h-14 flex gap-4 mt-3">
        <select
          className="py-1 px-4 w-40 h-10 border-[1px] border-black rounded-md "
          defaultValue={"category"}
          onChange={handleSelect}
        >
          <option disabled value={"category"}>
            Category
          </option>
          <optgroup label="FICTION" />
          <option>Fantasy</option>
          <option>Horror</option>
          <option>Humor</option>
          <option>Romance</option>
          <optgroup label="NON-FICTION" />
          <option>Business and Economics</option>
          <option>Cookbooks</option>
          <option>Art</option>
          <option>History</option>
          <option>Health and wellness</option>
          <option>Religion and Spirituality</option>
          <option>Science and Nature</option>
          <option>Self-Help</option>
          <option>Travel</option>
        </select>
        <button></button>
      </div>
      {booksState.bookInfoState && <BookInfo />}
      <InfiniteScroll
        dataLength={booksToDisplay?.length}
        next={fetchMoreBooks}
        hasMore={true}
        loader={<BookListShimmerUi />}
      >
        <div className="w-screen flex items-center flex-col">
          <div className="w-10/12 flex gap-4 flex-wrap justify-center">
            {booksToDisplay?.map((book) => {
              return (
                <div
                  key={book?.id + book?.etag}
                  onClick={() => handleBookInfo(book)}
                >
                  <BookCard bookObj={book} />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default BookList;
