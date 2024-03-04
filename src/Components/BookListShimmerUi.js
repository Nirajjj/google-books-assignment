import React from "react";

const BookListShimmerUi = () => {
  return (
    <div className="w-screen flex items-center flex-col">
      <div className="relative  w-10/12 flex gap-4  flex-wrap justify-center mt-4">
        {Array(15)
          .fill()
          .map((_, index) => (
            <div
              className="w-52 inline-block py-3 px-3 pb-2 pt-4  rounded-md bg-gray-200"
              key={index}
            >
              <div className="absolute shimmertransition"></div>
              <div className="w-40 h-60 m-auto shadow-lg bg-gray-400 rounded-md"></div>
              <div className="ml-3">
                <div className="w-40 h-3 bg-gray-300 mt-2"></div>
                <div className="w-24 h-3 bg-gray-300 mt-2"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookListShimmerUi;
