import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY, BASE_API, QUERY_PARAMETERS } from "../utils/constants";
import {
  addCategoryBooks,
  addError,
  addFirstBooks,
  addQueryBooks,
} from "../utils/googleBooksSlice";

const useFirstBooksList = (year, category) => {
  const queryStatus = useSelector((store) => store.books.queryValue);
  const query = queryStatus ? queryStatus : category;
  const dispatch = useDispatch();
  useEffect(() => {
    books();
  }, [year, query]);

  const books = async () => {
    try {
      const booksData = await fetch(
        BASE_API + `${query}+${year}` + QUERY_PARAMETERS + API_KEY
      );

      if (!booksData.ok) {
        dispatch(addError(`API ERROR: ${booksData.error}`));
        return;
      }
      const jsonData = await booksData.json();

      const parts = category.split(":");
      if (parts[1] === "fiction" && !queryStatus) {
        dispatch(addFirstBooks(jsonData?.items));
      } else if (queryStatus) {
        dispatch(addQueryBooks({ query, books: jsonData?.items }));
      } else {
        dispatch(
          addCategoryBooks({ category: parts[1], books: jsonData?.items })
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
      dispatch(addError(error.message));
    }
  };
};

export default useFirstBooksList;
