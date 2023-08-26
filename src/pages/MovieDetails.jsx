import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { getMoviesAPI } from 'services/APIservices';

const movieAPI = getMoviesAPI();

export const MovieDetails = () => {
  const [movie, setMovie] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    movieAPI.getOneMovie(movieId).then(res => {
      console.log('movie', res);
      setMovie(res);
    });
  }, [movieId]);

  return (
    <>
      <div> Movie Details</div>
      <h1> {movie.original_title || movie.name} </h1>

      {movie.poster_path && (
        <img
          src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.original_title || movie.name}
        />
      )}

      <h2>Overview</h2>
      <div>{movie.overview}</div>
      <h2>Genres</h2>
      <ul>
        {movie.genres &&
          movie['genres'].map(genre => {
            const genreId = nanoid();
            return <li key={genreId}>{genre.name}</li>;
          })}
      </ul>
      <ul>
        <li key="cast">
          <Link to="cast">Actors</Link>
        </li>
        <li key="reviews">
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
