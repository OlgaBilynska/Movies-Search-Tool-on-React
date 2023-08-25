import axios from 'axios';
import { Notify } from 'notiflix';

const API_KEY = '713e88f7db14c265e0543f2dd0843d0c';

const API_ENDPOINTS = {
  baseURL: 'https://api.themoviedb.org/3/',
  trending_URL: 'trending/all/day',
  Movie_URL: 'search/movie',
  Details_URL: 'movie/{movie_id}',
  Actors_URL: 'movie/{movie_id}/credits',
  Reviews_URL: 'movie/{movie_id}/reviews',
};

axios.defaults.baseURL = API_ENDPOINTS.baseURL;

const getTrendingMovies = async () => {
  try {
    const result = await axios.get(API_ENDPOINTS.trending_URL, {
      params: { api_key: API_KEY, language: 'en-US' },
    });

    return result.data.results;
  } catch (error) {
    Notify.failure('Sorry, something went wrong. Please try again.');
    throw new Error(error.response.data.message);
  }
};

const getMovieBySearch = async query => {
  try {
    const result = await axios.get(API_ENDPOINTS.Movie_URL, {
      params: { api_key: API_KEY, language: 'en-US', query },
    });
    console.log('r', result.data.results);
    return result.data.results;
  } catch (error) {
    Notify.failure('Sorry, something went wrong. Please try again.');
    throw new Error(error.response.data.message);
  }
};

const getOneMovie = async () => {
  try {
    const result = await axios.get(API_ENDPOINTS.Movie_URL);
    return result.data;
  } catch (error) {
    Notify.failure(`Sorry, we can't find any information about this movie :()`);
    throw new Error(error.response.data.message);
  }
};

const getActors = async () => {
  try {
    const result = await axios.get(API_ENDPOINTS.Actors_URL);
    return result.results;
  } catch (error) {
    Notify.failure(`Sorry, we can't find this actor.`);
    throw new Error(error.response.data.message);
  }
};

const getReviews = async () => {
  try {
    const result = await axios.get(API_ENDPOINTS.Reviews_URL);
    return result.results;
  } catch (error) {
    Notify.failure(`Sorry, no one has written a review yet.`);
    throw new Error(error.response.data.message);
  }
};

export const getMoviesAPI = () => {
  return {
    getTrendingMovies,
    getMovieBySearch,
    getOneMovie,
    getActors,
    getReviews,
  };
};
