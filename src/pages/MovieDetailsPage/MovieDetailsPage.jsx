import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../components/services/api";
import CustomNavLink from "../../components/NavLink/NavLink";
import s from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const prevLocationRef = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={s.movieDetails}>
      <button
        className={s.goBack}
        onClick={() => navigate(prevLocationRef.current)}
      >
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
        <Outlet />
      </div>
    </div>
  );
}

export default MovieDetailsPage;
