import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../components/services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews.length ? (
        reviews.map((review) => <li key={review.id}>{review.content}</li>)
      ) : (
        <p>No reviews</p>
      )}
    </ul>
  );
};

export default MovieReviews;
