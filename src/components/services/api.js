import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjY0YzY2MzcyNzc5NWI5OTQzMWZkNWE0NTkxOWQ5MCIsIm5iZiI6MTczOTE5MTI1Ny45MTM5OTk4LCJzdWIiOiI2N2E5ZjNkOWIwMTE1M2Q2ZjQ5MzdjZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KIDT7u0v41p579vs3H7elafYmHfUbYMQemrPXVZGbZ0";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, options);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits`,
    options
  );
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews`,
    options
  );
  return response.data.results;
};

export { IMAGE_URL };
export default API_KEY;
