import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_KEY, FIRST_BOOKS_API, QUERY_PARAMETERS } from "../utils/constants";
import { addError, addFirstBooks } from "../utils/googleBooksSlice";

const useFirstBooksList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    books();
  }, []);
  const books = async () => {
    try {
      const booksData = await fetch(
        FIRST_BOOKS_API + QUERY_PARAMETERS + API_KEY
      );
      console.log(booksData);
      if (!booksData.ok) {
        dispatch(addError(`API ERROR: ${booksData.error}`));
        return;
      }
      const jsonData = await booksData.json();
      dispatch(addFirstBooks(jsonData));
    } catch (error) {
      console.error("An error occurred:", error);
      dispatch(addError(error.message));
    }
  };
};

export default useFirstBooksList;
