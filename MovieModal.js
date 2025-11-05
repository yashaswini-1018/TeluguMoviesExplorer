import React from "react";

function MovieModal({ movie, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={movie.poster} alt={movie.title} />
        <div className="modal-details">
          <h2>{movie.title}</h2>
          <p><strong>Year:</strong> {movie.year}</p>
          <p><strong>Rating:</strong>  {movie.rating}</p>
          <p>{movie.overview}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;

