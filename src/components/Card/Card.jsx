import { CardContainer, CardTitle, ImageTemplate } from './Card.styled';

const Card = ({ movie }) => {
  return (
    <CardContainer>
      {movie.poster_path ? (
        <img
          alt={movie.name || movie.original_title}
          src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
        />
      ) : (
        <ImageTemplate />
      )}
      <CardTitle> {movie.name || movie.original_title}</CardTitle>
    </CardContainer>
  );
};

export default Card;
