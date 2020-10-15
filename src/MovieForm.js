import React, { useState } from "react";

export default function MovieForm(props) {
  const [movieObj, setMovieObj] = useState({
    title: "",
    director: "",
    cast: "",
    genre: "",
    release_year: "",
    origin: "",
    wiki_page: "",
    plot: "",
  });

  const handleChange = (e) => {
    setMovieObj({ ...movieObj, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={(e) => props.handleSubmit(movieObj, e)}>
        <label htmlFor="title">
          Title
          <input
            onChange={handleChange}
            id="title"
            name="title"
            value={movieObj["title"]}
            type="text"
          />
        </label>
        <br />
        <label htmlFor="director">
          Director
          <input
            onChange={handleChange}
            id="director"
            name="director"
            value={movieObj["director"]}
            type="text"
          />
        </label>
        <br />
        <label htmlFor="cast">
          Cast
          <input
            onChange={handleChange}
            id="cast"
            name="cast"
            type="text"
            value={movieObj["cast"]}
          />
        </label>
        <br />
        <label htmlFor="genre">
          Genre
          <input
            onChange={handleChange}
            id="genre"
            name="genre"
            type="text"
            value={movieObj["genre"]}
          />
        </label>
        <br />
        <label htmlFor="release_year">
          Release Year
          <input
            onChange={handleChange}
            id="release_year"
            name="release_year"
            value={movieObj["release_year"]}
            type="text"
          />
        </label>
        <br />
        <label htmlFor="origin">
          Origin
          <input
            onChange={handleChange}
            id="origin"
            name="origin"
            type="text"
            value={movieObj["origin"]}
          />
        </label>
        <br />
        <label htmlFor="wiki_page">
          Wiki Page Link
          <input
            onChange={handleChange}
            id="wiki_page"
            name="wiki_page"
            type="text"
            value={movieObj["wiki_page"]}
          />
        </label>
        <br />
        <label htmlFor="plot">
          Plot
          <input
            onChange={handleChange}
            id="plot"
            name="plot"
            type="text"
            value={movieObj["plot"]}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={() => props.toggleMovieForm(false)}>Go Back</button>
      <br/>
      <br/>
      <br/>
    </>
  );
}
