import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/movies" element={<MovieList/>} />
          <Route path="/movies/:id" element={<MovieDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
