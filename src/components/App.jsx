import Home from 'pages/HomePage';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/MoviesPage';
import Layout from './Layout';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { Route, Routes } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
