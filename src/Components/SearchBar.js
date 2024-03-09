import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQueryValue } from "../utils/googleBooksSlice";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GiBlackBook } from "react-icons/gi";

const SearchBar = () => {
  const dispatch = useDispatch();
  const bookmarkBooks = useSelector((store) => store.books?.bookmarkBooks);
  const bookmarkCount = bookmarkBooks.length;
  const [toggleRoutes, setToggleRoutes] = useState(false);
  // useFirstBooksList(2023, query);

  const handleInputSearch = (e) => {
    let query = e.target.value;
    dispatch(addQueryValue(query));
  };
  const handleRoutes = () => {
    setToggleRoutes(!toggleRoutes);
  };

  return (
    <div className="w-full relative">
      <img
        className="w-20 md:w-28  absolute -top-6 left-10 mdMax:left-0 mdMax:-top-16 mdMax:right-0 mdMax:mx-auto -z-20"
        src="pageSage.png"
        alt="book-logo"
      />
      <form
        className="mdMax:mx-0 mx-auto w-6/12  my-2 grid grid-cols-12 gap-2 mdMax:mt-12 mdMax:flex mdMax:px-2 mdMax:justify-center mdMax:w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="px-2 py-2 border border-black rounded-md col-span-8 "
          type="text"
          placeholder="Find your next great read"
          onChange={handleInputSearch}
        />
        <button
          className="border border-black col-span-3 rounded-md px-3 cursor-pointer"
          type="submit"
        >
          Search
        </button>

        {!toggleRoutes ? (
          <Link to={"/bookmark"}>
            <div
              className="w-full h-full col-span-1 flex justify-center items-center rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer relative"
              onClick={handleRoutes}
            >
              <CiBookmark className="text-4xl" />
              <div className="absolute text-sm top-">{bookmarkCount}</div>
            </div>
          </Link>
        ) : (
          <Link to={"/"}>
            <div
              className="col-span-1 flex justify-center items-center rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer"
              onClick={handleRoutes}
            >
              <GiBlackBook className="text-4xl" />
            </div>
          </Link>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
