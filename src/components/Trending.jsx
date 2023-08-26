import React from 'react';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { getMoviesAPI } from 'services/APIservices';
import { Link } from 'react-router-dom';
import Card from './Card';

const moviesAPI = getMoviesAPI();

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesAPI
      .getTrendingMovies()
      .then(res => {
        if (res.length === 0) {
          throw Error();
        }
        setMovies(res);
        return;
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <ul>
        {movies.map(movie => {
          const nanoId = nanoid();
          return (
            <Link key={nanoId} to={`movies/${movie.id}`}>
              <Card movie={movie} />
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Trending;
