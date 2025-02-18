import { useState, useEffect } from "react";
import { fetchMovieCast } from "../services/api";

function MovieCast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          {actor.name} as {actor.character}
        </li>
      ))}
    </ul>
  );
}
export default MovieCast;
