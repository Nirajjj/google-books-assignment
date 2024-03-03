import React from "react";
import BookCard from "./BookCard";

const BookList = () => {
  return (
    <div className="w-screen flex items-center flex-col">
      <div className="w-10/12 h-14 flex gap-3"></div>
      <div className="w-10/12 flex gap-3 flex-wrap justify-center">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};

export default BookList;
