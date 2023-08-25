import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesAPI } from 'services/APIservices';

const moviesAPI = getMoviesAPI();

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    moviesAPI.getReviews(movieId).then(res => setReviews(res));
  }, [movieId]);

  return (
    <>
      <div>Reviews of the movie: {movieId}</div>
      {reviews.map(review => (
        <li key={review.id}>
          <p>{review.content}</p>
        </li>
      ))}
    </>
  );
};
