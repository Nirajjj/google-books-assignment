import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_KEY, BASE_API, QUERY_PARAMETERS } from "../utils/constants";
import {
  addCategoryBooks,
  addError,
  addFirstBooks,
} from "../utils/googleBooksSlice";

const useFirstBooksList = (year, category, orderBy) => {
  // const books = useSelector((store) => store.books.firstBooks);
  const dispatch = useDispatch();
  useEffect(() => {
    books();
  }, [year, category]);

  const books = async () => {
    try {
      const booksData = await fetch(
        // https://www.googleapis.com/books/v1/volumes?q=subject:CATEGORY&orderBy=newest&key=YOUR_API_KEY
        BASE_API + `${category}+${year}&${orderBy}` + QUERY_PARAMETERS + API_KEY
      );
      console.log(booksData);
      if (!booksData.ok) {
        dispatch(addError(`API ERROR: ${booksData.error}`));
        return;
      }
      const jsonData = await booksData.json();
      console.log(jsonData.items);
      const parts = category.split(":");
      if (parts[1] === "fiction") {
        dispatch(addFirstBooks(jsonData?.items));
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
