/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { getMovieList, searchMovie } from "./api";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setMovies(result);
    });
  }, []);

  function search(q) {
    if (q.length > 3) { 
      searchMovie(q).then((result) => {
        setMovies(result);
      });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CARIIN FILM</h1>
        <input
          type="text"
          placeholder="cari film"
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          {movies.map((movie) => (
            <div key={movie.id} className="Movie-wrapper">
              <div className="Movie-title">{movie.original_title}</div>
              <img width="100%" className="Movie-image" src={process.env.REACT_APP_BASEIMGURL+movie.poster_path}  />
              <div className="Movie-date">Release Date : {movie.release_date}</div>
              <div className="Movie-rate">Rating : {movie.vote_average}</div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
