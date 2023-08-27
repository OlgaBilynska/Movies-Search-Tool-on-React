import React from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { getMoviesAPI } from 'services/APIservices';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { TrendingList } from './Trending.styled';

const moviesAPI = getMoviesAPI();

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    moviesAPI
      .getTrendingMovies()
      .then(res => {
        if (res.length === 0) {
          throw Error();
        }
        setMovies(res);
        return;
      })
      .catch(error => {
        setError(true);
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    toast.error('Sorry, something went wrong. Please try again.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  if (loading) {
    return (
      <>
        <h1>Trending list is loading...</h1>
        <Loader />
      </>
    );
  }

  return (
    <>
      <TrendingList>
        {movies.map(movie => {
          const nanoId = nanoid();
          return (
            <Link key={nanoId} to={`movies/${movie.id}`}>
              <Card movie={movie} />
            </Link>
          );
        })}
      </TrendingList>
    </>
  );
};

export default Trending;
