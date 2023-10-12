import './App.css';
import SearchBar from './Components/SearchBar';
import BookData from './Data.json'

function App() {
  return (
    <div className="App">
      <h1>Book Search</h1>
  <SearchBar placeholder="Enter Book Name..." data={BookData}/>
    </div>
  );
}

export default App;
