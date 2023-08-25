import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesAPI } from 'services/APIservices';

const movieAPI = getMoviesAPI();

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const actorsArray = movieAPI.getActors(movieId);
    actorsArray.then(r => {
      setActors(r);
    });
  }, [movieId]);

  return (
    <>
      <div>Actors of the movie: {movieId}</div>
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <div>{actor.name}</div>
            <img
              alt={actor.name}
              src={`http://image.tmdb.org/t/p/w200${actor.profile_path}`}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
