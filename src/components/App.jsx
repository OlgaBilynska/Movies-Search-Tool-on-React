import Home from 'pages/HomePage';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/MoviesPage';
import { NavLink, Route, Routes } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
      {/* <ToastContainer autoClose={3000} /> */}
    </div>
  );
};
