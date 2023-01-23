import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./Details.css";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  backdrop_path: string;
}

const Details = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const params = useParams();

  useEffect(() => {
    if (!movie) {
      fetchMovie();
    }
    async function fetchMovie() {
      const apiResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=4a472641e2b0744e34323eedd0ddc66c`
      );

      const jsonResponse = await apiResponse.json();

      setMovie(jsonResponse);
    }
  }, []);

  if (!movie) {
    return <div>No movie details</div>;
  }

  return (
    <div className="details-container">
      <div className="breadcrumb">
        <ul>
          <li>
            <Link to="/">Movie List</Link>
          </li>
          <li>{movie.title}</li>
        </ul>
      </div>
      <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} />
      <h4>{movie.title}</h4>
      <p className="film-describtion">{movie.overview}</p>
    </div>
  );
};

export default Details;
