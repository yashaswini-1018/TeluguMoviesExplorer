import React, { useState } from "react";
import mockMovies from "./data/mockMovies";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(mockMovies);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Search filter
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  // Sort by rating or year
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortOrder === "rating") return b.rating - a.rating;
    if (sortOrder === "year") return b.year - a.year;
    return 0;
  });

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Header
        search={search}
        setSearch={setSearch}
        setSortOrder={setSortOrder}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* ✅ Updated movie grid section */}
      <div className="movie-grid">
        {sortedMovies.length > 0 ? (
          sortedMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => setSelectedMovie(movie)}
            />
          ))
        ) : (
          <p
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              fontSize: "18px",
              color: darkMode ? "#ccc" : "#333",
            }}
          >
            🎬 No movies found. Try another search!
          </p>
        )}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default App;
