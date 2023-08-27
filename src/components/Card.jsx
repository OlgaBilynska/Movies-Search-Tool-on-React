import { BsFileImage } from 'react-icons/bs';

const Card = ({ movie }) => {
  return (
    <>
      <div> {movie.name || movie.original_title}</div>
      {movie.poster_path ? (
        <img
          alt={movie.name || movie.original_title}
          src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
        />
      ) : (
        <BsFileImage />
      )}
    </>
  );
};

export default Card;
