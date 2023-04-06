// import './App.css';
import axios from "axios";
import { useState, useEffect, useRef } from "react";

function App() {
  const [query, setQuery] = useState();
  const [results, setResults] = useState([]);
  const inputRef = useRef();
  const tenor_api_base = "https://g.tenor.com/v1";
  const tenor_api_seacrh = tenor_api_base + "/search";

  const handleSearch = async () => {
    setQuery(inputRef.current.value);
    const searchResults = await axios.get(tenor_api_seacrh, {
      params: {
        q: inputRef.current.value,
        key: "LIVDSRZULELA",
        limit: 20,
      }
    });
    console.log(searchResults.data.results)
    setResults(prev => searchResults.data.results);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div class="container m-3">
          <div class="col-8 d-flex flex-row m-3">
            <input type="text" ref={inputRef} class="form-control" placeholder="Search GIFs" />
            <button class="btn btn-primary" onClick={() => handleSearch()}>search</button>
          </div>
          <div class="row">
            {
              results == null ?
                <></>
                :
                results.map((g, i) => (
                  <div class="col-4">
                    <img src={g.media[0].gif.url} alt="logo" />
                  </div>
                ))
            }

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
