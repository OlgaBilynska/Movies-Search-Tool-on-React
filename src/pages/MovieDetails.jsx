import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { getMoviesAPI } from 'services/APIservices';

const movieAPI = getMoviesAPI();

export const MovieDetails = () => {
  const [movie, setMovie] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    movieAPI.getOneMovie(movieId).then(res => setMovie(res));
  }, [movieId]);

  return (
    <>
      <div> Movie Details: {movieId} </div>
      <ul>
        <li>
          <Link to="cast">Actors</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
