import BookList from "./Components/BookList";
import SearchBar from "./Components/SearchBar";
import useFirstBooksList from "./hooks/useFirstBooksList";

function App() {
  useFirstBooksList();
  return (
    <div className="App">
      <SearchBar />
      <BookList />
    </div>
  );
}

export default App;
