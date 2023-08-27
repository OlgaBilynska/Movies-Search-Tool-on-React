import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesAPI } from 'services/APIservices';
import {
  CastHeading,
  CastPhotos,
  OnePhoto,
  ActorName,
  ActorText,
  ActorImg,
  DefaultImg,
} from './Cast.styled';

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
      <CastHeading>Actors of the movie: </CastHeading>
      <CastPhotos>
        {actors.map(actor => {
          const nanoId = nanoid();
          return (
            <OnePhoto key={nanoId}>
              <ActorName>
                <ActorText>{actor.name}</ActorText>
              </ActorName>
              {actor.profile_path ? (
                <ActorImg
                  alt={actor.name}
                  src={`http://image.tmdb.org/t/p/w200${actor.profile_path}`}
                />
              ) : (
                <DefaultImg />
              )}
            </OnePhoto>
          );
        })}
      </CastPhotos>
    </>
  );
};

export default Cast;
