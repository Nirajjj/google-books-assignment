import React, { useState } from "react";
import BookCard from "./BookCard";
import { useDispatch, useSelector } from "react-redux";
import BookListShimmerUi from "./BookListShimmerUi";
import InfiniteScroll from "react-infinite-scroll-component";
import useFirstBooksList from "../hooks/useFirstBooksList";

const BookList = () => {
  const firstBooks = useSelector((store) => store.books?.firstBooks);

  const [year, setYear] = useState(2023);
  useFirstBooksList(year);

  const fetchMoreBooks = () => {
    setYear((prevYear) => prevYear - 1);
  };

  return !firstBooks ? (
    <BookListShimmerUi />
  ) : (
    <div className="w-screen flex items-center flex-col">
      <div className="w-10/12 h-14 flex gap-4">
        <button>sumbmit</button>
      </div>
      <InfiniteScroll
        dataLength={firstBooks?.length}
        next={fetchMoreBooks}
        hasMore={true}
        loader={<BookListShimmerUi />}
      >
        <div className="w-screen flex items-center flex-col">
          <div className="w-10/12 flex gap-4 flex-wrap justify-center">
            {firstBooks.map((book) => {
              return <BookCard key={book.volumeInfo?.id} bookObj={book} />;
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default BookList;
