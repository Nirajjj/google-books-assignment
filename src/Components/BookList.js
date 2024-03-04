import React, { useState } from "react";
import BookCard from "./BookCard";
import { useSelector } from "react-redux";
import BookListShimmerUi from "./BookListShimmerUi";
import InfiniteScroll from "react-infinite-scroll-component";
import useFirstBooksList from "../hooks/useFirstBooksList";

const BookList = () => {
  const BooksState = useSelector((store) => store.books);
  // const categoryBook = useSelector((store) => store.books?.categoryBooks);
  console.log(BooksState);
  const [year, setYear] = useState(2023);
  const [category, setCategory] = useState("subject:fiction");
  const [orderBy, setOrderBy] = useState("orderBy:newest");
  useFirstBooksList(year, category, orderBy);
  const parts = category.split(":");

  const booksToDisplay = BooksState.categoryBooks[parts[1]] || [];
  console.log(booksToDisplay);

  const handleSelect = (event) => {
    setCategory(
      `subject:${event.target.value.replace(/ /g, "+").toLowerCase()}`
    );
    console.log(
      `subject:${event.target.value.replace(/ /g, "+").toLowerCase()}`
    );
  };

  const fetchMoreBooks = () => {
    setYear((prevYear) => prevYear - 1);
  };

  return !booksToDisplay ? (
    <BookListShimmerUi />
  ) : (
    <div className="w-screen flex items-center flex-col">
      <div className="w-10/12 h-14 flex gap-4">
        <select defaultValue={"category"} onChange={handleSelect}>
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
          <option>Crafts and Hobbies</option>
          <option>History</option>
          <option>Health and wellness</option>
          <option>Religion and Spirituality</option>
          <option>Science and Nature</option>
          <option>Self-Help</option>
          <option>Travel</option>
        </select>
      </div>
      <InfiniteScroll
        dataLength={booksToDisplay?.length}
        next={fetchMoreBooks}
        hasMore={true}
        loader={<BookListShimmerUi />}
      >
        <div className="w-screen flex items-center flex-col">
          <div className="w-10/12 flex gap-4 flex-wrap justify-center">
            {booksToDisplay?.map((book) => {
              return <BookCard key={book?.id + book?.etag} bookObj={book} />;
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default BookList;
