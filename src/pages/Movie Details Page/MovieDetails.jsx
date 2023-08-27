import { nanoid } from 'nanoid';
import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { getMoviesAPI } from 'services/APIservices';
import {
  DetailContainer,
  BackBtn,
  DetailedContent,
  DetailedHeading,
  DetailedRating,
  DetailedImg,
  DetailedSecHeading,
  DetailedText,
  DetailedGenres,
  MoreDetails,
  DetailedBtn,
  DetailedCard,
  DetImageWrapper,
  ImageTemplate,
} from './MovieDetails.styled';
import { LiaBackwardSolid } from 'react-icons/lia';
import Loader from 'components/Loader/Loader';

const movieAPI = getMoviesAPI();

export const MovieDetails = () => {
  const [movie, setMovie] = useState('');

  const { movieId } = useParams();

  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    movieAPI.getOneMovie(movieId).then(res => {
      console.log('r', res);
      setMovie(res);
    });
  }, [movieId]);

  const roundedRating = value => {
    return value.toFixed(1);
  };

  const getYear = date => date.split('-')[0];

  const { release_date } = movie;

  console.log('mP', movie.poster_path);

  return (
    <DetailContainer>
      <BackBtn to={backLinkLocationRef.current}>
        <LiaBackwardSolid />
        <span>Back to movies</span>
      </BackBtn>

      <DetailedHeading>
        {movie.original_title || movie.name} ({getYear(String(release_date))})
      </DetailedHeading>

      <DetailedCard>
        <DetImageWrapper>
          {movie.poster_path ? (
            <DetailedImg
              src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.original_title || movie.name}
            />
          ) : (
            <ImageTemplate />
          )}
        </DetImageWrapper>

        <DetailedContent>
          <DetailedRating>
            Rating: {roundedRating(Number(movie.vote_average))}
          </DetailedRating>

          <DetailedSecHeading>Overview</DetailedSecHeading>
          <DetailedText>{movie.overview}</DetailedText>
          <DetailedSecHeading>Genres</DetailedSecHeading>
          <DetailedGenres>
            {movie.genres &&
              movie['genres'].map(genre => {
                const genreId = nanoid();
                return <li key={genreId}>{genre.name}</li>;
              })}
          </DetailedGenres>
        </DetailedContent>
      </DetailedCard>

      <MoreDetails>
        <DetailedBtn key="cast">
          <Link to="cast">Actors</Link>
        </DetailedBtn>
        <DetailedBtn key="reviews">
          <Link to="reviews">Reviews</Link>
        </DetailedBtn>
      </MoreDetails>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </DetailContainer>
  );
};

export default MovieDetails;
