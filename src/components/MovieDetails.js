import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import axios from "axios";

const MovieDetails = ()=>{

  const [movie, setMovie] = useState()
  const params = useParams()

  useEffect(() => {
    fetchMovie();
  },[])

  const fetchMovie = () => {
    axios
      .get(
        `/movies/${params.id}`
      )
      .then((response) => {
      
        setMovie(response.data);
      });
  };

    return (
      <div>
        <p>title: {movie?.title}</p>
        <p>year: {movie?.year}</p>
        <p>director: {movie?.director}</p>
        <p>year: {movie?.year}</p>
        <p>duration: {movie?.duration}</p>
        <p>color: {movie?.color}</p>
      </div>
    );
  
}

export default MovieDetails;
