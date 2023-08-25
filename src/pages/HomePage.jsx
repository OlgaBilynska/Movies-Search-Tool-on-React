import { useEffect, useState } from 'react';
import { getMoviesAPI } from 'services/APIservices';

const moviesAPI = getMoviesAPI();

const Home = () => {
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
      <div>Home Page</div>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <div>{movie.original_title || movie.name}</div>
            <img
              alt={movie.original_title || movie.name}
              src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
