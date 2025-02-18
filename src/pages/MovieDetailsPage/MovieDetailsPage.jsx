import { useState, useEffect } from "react";
import { useParams, useNavigate, Routes, Route } from "react-router-dom";
import { fetchMovieDetails } from "../../components/services/api";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import CustomNavLink from "../../components/NavLink/NavLink";
import s from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={s.movieDetails}>
      <button className={s.goBack} onClick={() => navigate("/")}>
        Go back
      </button>
      <h1>{movie.title}</h1>
      <img
        className={s.poster}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={s.details}>
        <p className={s.overview}>{movie.overview}</p>
        <ul>
          <nav className={s.links}>
            <CustomNavLink className={s.link} to={`/movies/${movieId}/cast`}>
              Cast
            </CustomNavLink>
            <CustomNavLink className={s.link} to={`/movies/${movieId}/reviews`}>
              Reviews
            </CustomNavLink>
          </nav>
        </ul>
        <Routes>
          <Route path="cast" element={<MovieCast movieId={movieId} />} />
          <Route path="reviews" element={<MovieReviews movieId={movieId} />} />
        </Routes>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
