import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import BookList from "./Components/BookList";
import SearchBar from "./Components/SearchBar";
import BookmarkBooks from "./Components/BookmarkBooks";

function App() {
  return <RouterProvider router={approutes} />;
}
const approutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <SearchBar />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <BookList />,
      },
      {
        path: "/bookmark",
        element: <BookmarkBooks />,
      },
    ],
  },
]);
export default App;
