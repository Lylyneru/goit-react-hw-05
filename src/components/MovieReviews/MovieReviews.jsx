import { useState, useEffect } from "react";
import { fetchMovieReviews } from "../services/api";

function MovieReviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <strong>{review.author}:</strong> {review.content}
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
