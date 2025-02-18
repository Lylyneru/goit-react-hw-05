import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjY0YzY2MzcyNzc5NWI5OTQzMWZkNWE0NTkxOWQ5MCIsIm5iZiI6MTczOTE5MTI1Ny45MTM5OTk4LCJzdWIiOiI2N2E5ZjNkOWIwMTE1M2Q2ZjQ5MzdjZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KIDT7u0v41p579vs3H7elafYmHfUbYMQemrPXVZGbZ0";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${BEARER_TOKEN}`;
axios.defaults.headers.common["Accept"] = "application/json";

/**
 * Отримання популярних фільмів
 */
export async function fetchTrendingMovies() {
  try {
    const { data } = await axios.get("/trending/movie/day");
    return data.results;
  } catch (error) {
    console.error("Помилка при завантаженні трендових фільмів:", error);
    throw error;
  }
}

/**
 * Пошук фільмів за запитом
 */
export async function fetchMoviesByQuery(query) {
  try {
    const { data } = await axios.get("/search/movie", {
      params: { query },
    });
    return data.results;
  } catch (error) {
    console.error("Помилка при пошуку фільмів:", error);
    throw error;
  }
}

/**
 * Детальна інформація про фільм
 */
export async function fetchMovieDetails(movieId) {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.error("Помилка при завантаженні деталей фільму:", error);
    throw error;
  }
}

/**
 * Акторський склад фільму
 */
export async function fetchMovieCast(movieId) {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`);
    return data.cast;
  } catch (error) {
    console.error("Помилка при завантаженні акторського складу:", error);
    throw error;
  }
}

/**
 * Відгуки про фільм
 */
export async function fetchMovieReviews(movieId) {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`);
    return data.results;
  } catch (error) {
    console.error("Помилка при завантаженні рецензій:", error);
    throw error;
  }
}
