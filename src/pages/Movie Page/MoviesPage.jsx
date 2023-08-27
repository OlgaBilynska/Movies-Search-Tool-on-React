import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { getMoviesAPI } from 'services/APIservices';
import { useDebounce } from 'react-recipes';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import Card from 'components/Card/Card';
import {
  MovieContainer,
  MovieSearchEls,
  FindMovieText,
  FindForm,
  FindInput,
  FindBtn,
  MovieResultCont,
} from './MoviePage.styled';

// import { toast } from 'react-toastify';

const moviesAPI = getMoviesAPI();

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const debouncedQuery = useDebounce(query, 250);

  const location = useLocation();

  useEffect(() => {
    moviesAPI.getMovieBySearch(debouncedQuery).then(res => setMovies(res));
  }, [query, debouncedQuery]);

  const handleFormSubmit = e => {
    e.preventDefault();
    const movieIdValue = e.target.query.value;

    if (movieIdValue === '') {
      return Notify.info('🦄 Please type a movie name.');
    }
    setSearchParams({ query: movieIdValue });
  };

  const updateQueryString = e => {
    const movieIdValue = e.target.value;
    if (movieIdValue.trim() === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: movieIdValue });
  };

  return (
    <MovieContainer>
      <MovieSearchEls>
        <FindMovieText>FIND YOUR FAVORITE MOVIE</FindMovieText>
        <FindForm onSubmit={handleFormSubmit}>
          <FindInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies here"
            value={query}
            onChange={updateQueryString}
          />
          <FindBtn type="submit">Search</FindBtn>
        </FindForm>
      </MovieSearchEls>
      <MovieResultCont>
        {movies.map(movie => {
          const idNanoid = nanoid();
          return (
            <Link key={idNanoid} to={`${movie.id}`} state={{ from: location }}>
              <Card movie={movie} />
            </Link>
          );
        })}
      </MovieResultCont>
    </MovieContainer>
  );
};

export default Movies;
