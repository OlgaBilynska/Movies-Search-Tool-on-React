import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesAPI } from 'services/APIservices';

const moviesAPI = getMoviesAPI();

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    moviesAPI.getReviews(movieId).then(res => {
      setReviews(res);
    });
  }, [movieId]);

  const idN = nanoid();

  return (
    <>
      <div>Reviews of the movie:</div>
      {reviews.map(review => (
        <li key={idN}>
          <p>{review.content}</p>
        </li>
      ))}
    </>
  );
};

export default Reviews;
