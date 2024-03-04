import {
  BrowserRouter,
  Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import BookList from "./Components/BookList";
import SearchBar from "./Components/SearchBar";
import BookInfo from "./Components/BookInfo";

function App() {
  return <RouterProvider router={approutes} />;
}

const approutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <SearchBar />
        <BookList />
      </div>
    ),
  },
]);

export default App;
