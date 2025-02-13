import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../components/services/api";
import MovieList from "../../pages/HomePage/HomePage";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className={s.container}>
      <nav className={s.navbar}>
        <a href="/" className={s.navlink}>
          Home
        </a>
        <a href="/movies" className={s.navlink}>
          Movies
        </a>
      </nav>

      <input type="text" placeholder="Search" className={s.searchbar} />

      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
