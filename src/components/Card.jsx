import React from 'react';

const Card = ({ movie }) => {
  return (
    <>
      <div>Card</div>
      <div> {movie.name || movie.original_title}</div>
      {movie.poster_path && (
        <img
          alt={movie.name || movie.original_title}
          src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
        />
      )}
    </>
  );
};

export default Card;
