import React from "react";

const SearchBar = () => {
  const handleSearch = () => {};
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
        />
        <button
          className="border border-black col-span-3 rounded-md px-3"
          type="submit"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
