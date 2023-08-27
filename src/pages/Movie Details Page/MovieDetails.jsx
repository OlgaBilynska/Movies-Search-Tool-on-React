import { nanoid } from 'nanoid';
import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { getMoviesAPI } from 'services/APIservices';

const movieAPI = getMoviesAPI();

export const MovieDetails = () => {
  const [movie, setMovie] = useState('');

  const { movieId } = useParams();

  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    movieAPI.getOneMovie(movieId).then(res => {
      console.log('movie', res);
      setMovie(res);
    });
  }, [movieId]);

  const roundedRating = value => {
    return value.toFixed(1);
  };

  const getYear = date => date.split('-')[0];

  const { release_date } = movie;

  return (
    <>
      <div> Movie Details</div>
      <Link to={backLinkLocationRef.current}>Back to movies</Link>
      <h1>
        {' '}
        {movie.original_title || movie.name} ({getYear(String(release_date))})
      </h1>

      <div>Rating: {roundedRating(Number(movie.vote_average))}</div>

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
      <Suspense fallback={<div>Loading the subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
