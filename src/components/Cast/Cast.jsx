import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesAPI } from 'services/APIservices';

const movieAPI = getMoviesAPI();

const Cast = () => {
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
      <div>Actors of the movie: </div>
      <ul>
        {actors.map(actor => {
          const nanoId = nanoid();
          return (
            <li key={nanoId}>
              <div>{actor.name}</div>
              {actor.profile_path && (
                <img
                  alt={actor.name}
                  src={`http://image.tmdb.org/t/p/w200${actor.profile_path}`}
                />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
