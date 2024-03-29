import React from "react";
import { POSTER_IMG_BASE_URL, POSTER_IMG_PARAMETERS } from "../utils/constants";

const BookCard = ({ bookObj }) => {
  if (!bookObj) return;
  const { title, authors } = bookObj?.volumeInfo;
  const { id } = bookObj;
  const { smallThumbnail, thumbnail } = bookObj?.volumeInfo?.imageLinks || {};
  const allauthors = authors;

  return (
    <div className="w-52 border-black bg-gray-200 inline-block pb-2 pt-4 px-3 rounded-md hover:shadow-2xl transition-all duration-300">
      <img
        className="w-40 h-60 m-auto shadow-md"
        src={
          thumbnail ||
          smallThumbnail ||
          POSTER_IMG_BASE_URL + id + POSTER_IMG_PARAMETERS
        }
        alt="book"
      />
      <div className="ml-3">
        <h2 className="text-md poppins-bold mt-2 truncate">{title}</h2>
        <p className="text-sm text-gray-600  poppins-medium truncate">
          {allauthors}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
