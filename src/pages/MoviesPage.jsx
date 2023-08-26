import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { getMoviesAPI } from 'services/APIservices';
import { useDebounce } from 'react-recipes';
import { Link, useSearchParams } from 'react-router-dom';
import Card from 'components/Card';

// import { toast } from 'react-toastify';

const moviesAPI = getMoviesAPI();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  //   const [query, setQuery] = useState('');
  //   const [status, setStatus] = useState('idle');
  //   const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
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
    setSearchParams(query);
    moviesAPI.getMovieBySearch(debouncedQuery).then(res => setMovies(res));
  };

  //   const handleQueryChange = e => {
  //     setQuery(e.target.value.toLowerCase());
  //     moviesAPI.getMovieBySearch(debouncedQuery).then(res => setMovies(res));
  //   };

  const updateQueryString = e => {
    const movieIdValue = e.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: movieIdValue });
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
          onChange={updateQueryString}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => {
          const idNanoid = nanoid();
          return (
            <Link key={idNanoid} to={`${movie.id}`}>
              <Card movie={movie} />
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
