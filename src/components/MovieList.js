import React, {useEffect, useState} from "react";
import axios from "axios";
import Movie from "./Movie";

const MovieList = ()=>{

  const [movies, setMovies] = useState()

  const fetchMovies = () => {
    //* loop json to fetch all movies using imdb_id
    axios.get("/movies").then(res => setMovies(res.data))
      // .get(
      //   "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
      // )
      // .get("https://api.themoviedb.org/3/movie/100?api_key=ba0a538bee38fe2f74a7ef545c14aa22")
      // .get("https://api.themoviedb.org/3/find/tt0000001?api_key=ba0a538bee38fe2f74a7ef545c14aa22&language=en-US&external_source=imdb_id")
      // .then((response) =>setMovies(response.data.movie_results));
  };

  useEffect(() => {
    fetchMovies();
  },[])

  //* fetch data from movies json created by data team


    return (
      <div>
        MovieList
        <br/>
        {movies ? 
        movies
          .map((movie) => (
            <div key={movie.id}>
            <Movie {...movie} />
            </div>
          )) : null}
      </div>
    );
  }

export default MovieList;
