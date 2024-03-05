import React from "react";
import useFirstBooksList from "../hooks/useFirstBooksList";
import { useDispatch, useSelector } from "react-redux";
import { addQueryValue } from "../utils/googleBooksSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((store) => store.books?.queryValue);
  // useFirstBooksList(2023, query);

  const handleInputSearch = (e) => {
    let query = e.target.value;
    dispatch(addQueryValue(query));
  };

  return (
    <div className="w-screen">
      <form
        className="mx-auto w-5/12 my-2 grid grid-cols-12 gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="px-2 py-2 border border-black rounded-md col-span-9"
          type="text"
          placeholder="What you will read today"
          onChange={handleInputSearch}
        />
        <button
          className="border border-black col-span-3 rounded-md px-3 cursor-pointer"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
