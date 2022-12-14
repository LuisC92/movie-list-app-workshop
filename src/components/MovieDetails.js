import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom"
import axios from "axios";

const MovieDetails = ()=>{

  const [movie, setMovie] = useState()
  const [editMovie, setEditMovie] = useState({});
  const params = useParams()
  const navigate = useNavigate();

  const fetchMovie = () => {
    axios
      .get(
        `/movies/${params.id}`
      )
      .then((response) => {
      
        setMovie(response.data);
      });
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    const newName = e.target.name;
    setEditMovie({ ...editMovie, [newName]: newValue });
  };

  const editMovieDetails = (e, editMovie)=>{
    e.preventDefault();
    axios.put(`/movies/${params.id}`, editMovie)
    fetchMovie();
  }

  const deleteMovie =()=>{
    axios.delete(`/movies/${params.id}`)
    navigate('/movies');
  }

  useEffect(() => {
    fetchMovie();
  },[])
  
    return (
      <div>
        <p>title: {movie?.title}</p>
        <p>director: {movie?.director}</p>
        <p>year: {movie?.year}</p>
        <p>duration: {movie?.duration}</p>
        <p>color: {movie?.color}</p>
        <button onClick={deleteMovie}>Delete this movie</button>
        <br/>
        <br/>
        <form onSubmit={(e) => editMovieDetails(e, editMovie)}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                name="title"
                id="title"
                type="text"
                placeholder="title"
                onChange={handleChange}
              />
              <br />
            </div>
    
            <div>
              <label htmlFor="director">Director</label>
              <input
                name="director"
                id="director"
                type="text"
                placeholder="director"
                onChange={handleChange}
              />
              <br />
            </div>
    
            <div >
              <label htmlFor="year">Year</label>
              <input
                name="year"
                id="year"
                type="text"
                placeholder="year"
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              <label htmlFor="color">Color</label>
              <input
                name="color"
                id="color"
                type="text"
                placeholder="color"
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              <label htmlFor="duration">Duration</label>
              <input
                name="duration"
                id="duration"
                type="text"
                placeholder="duration"
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              <button type="submit">
                Edit Movie
              </button>
            </div>
          </form>
      </div>
    );
  
}

export default MovieDetails;
