import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookInfoState } from "../utils/googleBooksSlice";
import { MdBookmarkBorder } from "react-icons/md";
import { MdBookmarkRemove } from "react-icons/md";

const BookInfo = () => {
  const dispatch = useDispatch();
  const book = useSelector((store) => store.books.oneBook);
  const [bookMark, setBookMark] = useState(false);

  const {
    title,
    subtitle,
    pageCount,
    authors,
    categories,
    description,
    language,
    publishedDate,
  } = book.volumeInfo;
  const { thumbnail } = book.volumeInfo?.imageLinks;

  const handleBookInfo = () => {
    dispatch(toggleBookInfoState(null));
  };
  const handlebookMark = () => {
    setBookMark(!bookMark);
  };
  const handleInnerDiv = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed w-screen h-screen backdrop-blur-sm flex justify-center top-0 z-50 "
      onClick={handleBookInfo}
    >
      <div
        className="absolute w-6/12  h-[65%] flex justify-start mt-24 bg-gray-200 rounded-2xl overflow-hidden "
        onClick={handleInnerDiv}
      >
        <div className="h-full w-[60%]">
          <img className="w-full h-full" src={thumbnail} alt="book-image" />
        </div>
        <div className="relative w-full bg-gray-200 flex flex-col items-center overflow-y-scroll overflow-x-hidden pt-3">
          <div className="relative flex justify-between items-center h-20 w-full p-4 ">
            <div>
              <h1 className="text-lg font-bold">{title}</h1>
              <h1 className="text-sm">{subtitle}</h1>
            </div>
            <div className="flex justify-center">
              {bookMark ? (
                <MdBookmarkBorder
                  className=" text-xl"
                  onClick={handlebookMark}
                />
              ) : (
                <MdBookmarkRemove
                  className=" text-xl"
                  onClick={handlebookMark}
                />
              )}
            </div>
          </div>

          <div className="p-4">
            <p className="text-sm">{description}</p>
            <p>authors: {authors}</p>
            <p>language: {language}</p>
            <p>categories: {categories}</p>
            <p>page count: {pageCount}</p>
            <p>publishDate: {publishedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
