import React, { useEffect, useState } from "react";
import MovieList from "./MovieList.js";
import MovieForm from "./MovieForm.js"

const DB_URL = "http://127.0.0.1:5000/";

export default function Container() {
  const [movies, setMovies] = useState([]);
  const [movieForm, toggleMovieForm] = useState(false)
  
  const formatMovieObj = (movie) => {
    return ({
      release_year: movie[0],
      title: movie[1],
      origin: movie[2],
      director: movie[3],
      cast: movie[4],
      genre: movie[5],
      wiki_page: movie[6],
      plot: movie[7],
    })
  }

  useEffect(() => {
    fetch(`${DB_URL}index`)
      .then((resp) => resp.json())
      .then((data) => {
        const modifiedMovies = data.movies.map((movie) => formatMovieObj(movie));
        setMovies(modifiedMovies)
      });
  }, []);

  const handleSubmit = (movieObj, e) => {
    e.preventDefault();
    console.log(movieObj)
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({movieObj})
    }

    fetch(`${DB_URL}add`, reqObj)
    .then(resp => resp.json())
    .then(data => {
      const modifiedMovies = data.movies.map((movie) => formatMovieObj(movie));
      setMovies(modifiedMovies)
    })
    toggleMovieForm(false)
  }

  return (
    <div>
      <h1>Movies Galore!</h1>
      {movieForm ? <MovieForm handleSubmit={handleSubmit} toggleMovieForm={toggleMovieForm} /> : <button onClick={() => toggleMovieForm(!movieForm)}>Add Movie</button>}
      <br/>
      <MovieList movies={movies}/>
    </div>
  );
}
