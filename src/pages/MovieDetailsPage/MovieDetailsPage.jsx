import { useEffect, useState } from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { fetchMovieDetails, IMAGE_URL } from "../../components/services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1>{movie.title}</h1>
      <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
