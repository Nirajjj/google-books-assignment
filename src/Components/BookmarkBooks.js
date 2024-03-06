import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "./BookCard";
import { addOneBook, toggleBookInfoState } from "../utils/googleBooksSlice";
import BookInfo from "./BookInfo";

const BookmarkBooks = () => {
  const dispatch = useDispatch();
  const handleBookInfo = (book) => {
    dispatch(toggleBookInfoState(true));
    dispatch(addOneBook(book));
  };
  const bookmarkBooks = useSelector((store) => store.books.bookmarkBooks);
  const booksState = useSelector((store) => store.books.bookInfoState);
  return (
    <div>
      {booksState && <BookInfo />}

      <div className="w-screen flex items-center flex-col">
        <div className="w-10/12 flex gap-4 flex-wrap justify-center">
          {bookmarkBooks?.map((book) => {
            return (
              <div
                className="cursor-pointer"
                key={book?.id + book?.etag}
                onClick={() => handleBookInfo(book)}
              >
                <BookCard bookObj={book} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookmarkBooks;
