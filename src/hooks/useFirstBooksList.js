import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_KEY, BASE_API, QUERY_PARAMETERS } from "../utils/constants";
import { addError, addFirstBooks } from "../utils/googleBooksSlice";

const useFirstBooksList = (year) => {
  // const books = useSelector((store) => store.books.firstBooks);
  const dispatch = useDispatch();
  useEffect(() => {
    books(year);
  }, [year]);
  const books = async (year) => {
    try {
      const booksData = await fetch(
        BASE_API +
          `bestseller+fiction+${year}&orderBy=newest` +
          QUERY_PARAMETERS +
          API_KEY
      );
      console.log(booksData);
      if (!booksData.ok) {
        dispatch(addError(`API ERROR: ${booksData.error}`));
        return;
      }
      const jsonData = await booksData.json();
      console.log(jsonData.items);
      dispatch(addFirstBooks(jsonData?.items));
    } catch (error) {
      console.error("An error occurred:", error);
      dispatch(addError(error.message));
    }
  };
};

export default useFirstBooksList;
