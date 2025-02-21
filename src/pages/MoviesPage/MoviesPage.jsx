import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../components/services/api";
import s from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return; // Якщо немає запиту, не робимо запит до API

    async function fetchMovies() {
      const results = await fetchMoviesByQuery(query);
      setMovies(results);
    }

    fetchMovies();
  }, [query, setMovies]); // Виконувати при зміні query

  const handleSearch = (values) => {
    if (!values.query.trim()) return;
    setSearchParams({ query: values.query }); // Оновлюємо URL замість локального стейту
  };

  return (
    <div className={s.container}>
      <h1>Search Movies</h1>
      <Formik initialValues={{ query: "" }} onSubmit={handleSearch}>
        <Form className={s.searchForm}>
          <Field
            className={s.searchInput}
            name="query"
            type="text"
            placeholder="Search for a movie.."
          />
          <button className={s.searchButton} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      <MovieList movies={movies} />
    </div>
  );
}
export default MoviesPage;
