import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";
interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovies() {
      const apiResponse = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=4a472641e2b0744e34323eedd0ddc66c"
      );

      const jsonResponse = await apiResponse.json();
      setMovies(jsonResponse.results);
    }

    fetchMovies();
  }, []);

  const handleMovieClick = (movieId: number) => {
    navigate("/details/" + movieId);
  };

  return (
    <div>
      <h2>Popular Movies</h2>
      <div className="movies-container">
        {movies?.map((movie) => (
          <div key={movie.id} onClick={() => handleMovieClick(movie.id)}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
              />
            </div>
            <h3>
              {movie.title} ({movie.release_date.split("-")?.[0]})
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
