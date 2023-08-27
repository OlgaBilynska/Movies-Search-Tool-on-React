import { lazy } from 'react';
import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

const Home = lazy(() => import('../../pages/Home Page/HomePage'));
const Movies = lazy(() => import('../../pages/Movie Page/MoviesPage'));
const MovieDetails = lazy(() =>
  import('../../pages/Movie Details Page/MovieDetails')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

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
