import React from "react";

function MovieCard({ movie, onClick }) {
  return (
    <div className="movie-card fade-in" onClick={onClick}>
      <img src={movie.poster} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>
           {movie.rating} |  {movie.year}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
