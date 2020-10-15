import React from "react";

export default function MovieItem({ movie }) {
  const {
    cast,
    director,
    genre,
    origin,
    plot,
    release_year,
    title,
    wiki_page,
  } = movie;
  return (
    <div>
      <h2>Title: {title}</h2>
      <h3>Released: {release_year}</h3>
      <p>Genre: {genre}</p>
      <p>Origin: {origin}</p>
      <p>Director: {director}</p>
      <p>Cast: {cast}</p>
      <p>Plot: {plot}</p>
      <a href={wiki_page}>Wiki Page</a>
    </div>
  );
}
