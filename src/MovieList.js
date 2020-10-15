import React from "react";
import MovieItem from "./MovieItem.js";


export default function MovieList(props) {
  const renderMovies = () => {
    return props.movies.map((movie) => <MovieItem movie={movie} key={movie.title}/>);
  };

  return (
    <div>
      <label htmlFor="search">Look Up A Movie<input type="text" id="search" placeholder="Sherlock, Jr."/></label> <button>Search</button>
      <ul>
        {renderMovies()}
      </ul>
    </div>
  );
}
