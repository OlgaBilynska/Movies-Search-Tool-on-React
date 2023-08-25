import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { getMoviesAPI } from 'services/APIservices';

const movieAPI = getMoviesAPI();

const MovieDetails = () => {
  const [id, setId] = useState('');

  const { movieId } = useParams();

  //   setId(movieId);

  //   useEffect(() => {
  //     console.log('id', id);
  //     movieAPI.getOneMovie(id).then(res => console.log('id', res));
  //   }, [id]);

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
