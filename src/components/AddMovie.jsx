import React, {useState} from 'react'

const AddMovie = ({handleSubmit}) => {

    const [addMovie, setAddMovie] = useState({
        title: "",
        director: "",
        year: "",
        color: "",
        duration: ""
      });
      const handleChange = (e) => {
        const newValue = e.target.value;
        const newName = e.target.name;
        setAddMovie({ ...addMovie, [newName]: newValue });
      };
    
      return (
        <div>
          <form onSubmit={(e) => handleSubmit(e, addMovie)}>
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
                Submit your Movie
              </button>
            </div>
          </form>
          <br/>
        </div>
      );
    };

export default AddMovie