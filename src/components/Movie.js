import React from "react";
import { Link } from "react-router-dom";

const Movie=(movie)=> {
  const {title, id} = movie
  return (
    <div>
      <p>Movie Card</p>
      <Link to={`/movies/${id}`}>
      <p>title: {title}</p>
      </Link>
      <hr/>
    </div>
  );
}

export default Movie;
