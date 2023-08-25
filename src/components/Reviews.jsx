import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getMoviesAPI } from 'services/APIservices';

const moviesAPI = getMoviesAPI();

export const Reviews = () => {
  const { movieId } = useParams();

  useEffect =
    (({ movieId }) => {
      getMoviesAPI.getReviews().then(res => console.log('reviews', res));
    },
    []);

  return <div>Reviews of the movie: {movieId}</div>;
};
