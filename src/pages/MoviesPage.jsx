import { Notify } from 'notiflix';
import { useState } from 'react';
import { getMoviesAPI } from 'services/APIservices';
import { useDebounce } from 'react-recipes';
// import { toast } from 'react-toastify';

const moviesAPI = getMoviesAPI();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const debouncedQuery = useDebounce(query, 250);

  //   useEffect(() => {
  //     setPage(1);
  //     setStatus('pending');
  //     moviesAPI.getMovieBySearch().then(res => console.log('r', res));
  //   }, [query]);

  const handleFormSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return Notify.info('🦄 Please type a movie name.');
    }
    setQuery(query);
    moviesAPI.getMovieBySearch(debouncedQuery).then(res => setMovies(res));
  };

  const handleQueryChange = e => {
    setQuery(e.target.value.toLowerCase());
    moviesAPI.getMovieBySearch(debouncedQuery).then(res => setMovies(res));
  };

  return (
    <>
      <div>Find your favorite movie</div>
      <form onSubmit={handleFormSubmit}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies here"
          value={query}
          onChange={handleQueryChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <div>{movie.name || movie.original_title}</div>
            <img
              alt={movie.name || movie.original_title}
              src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
