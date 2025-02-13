import { useState } from "react";
import { searchMovies } from "../../components/services/api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
