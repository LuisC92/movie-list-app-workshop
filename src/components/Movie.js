import React from "react";
import { Link } from "react-router-dom";

const Movie=(movie)=> {
  const {title, year, director, id} = movie
  return (
    <div>
      <p>Movie Card</p>
      <p>title: {title}</p>
      <p>year: {year}</p>
      <p>director: {director}</p>
      <Link to={`/movies/${id}`}>View details</Link>
    </div>
  );
}

export default Movie;
