import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getMoviesAPI } from 'services/APIservices';

const movieAPI = getMoviesAPI();

export const Cast = () => {
  const { movieId } = useParams();

  useEffect(movieId => {
    movieAPI.getActors(movieId).then(res => console.log('actors', res));
  }, []);

  return <div>Actors of the movie: {movieId}</div>;
};
