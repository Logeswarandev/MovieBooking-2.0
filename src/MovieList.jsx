import React from "react";
import { useNavigate } from "react-router-dom";
import doomsday from "/photo/doomsday fanmade poster.jpg";
import beyond from "/photo/beyond(book).jpg";
import ody from "/photo/ody.jpg";
import batposter from "/photo/batposter.jpg";

function MovieList() {
  const navigate = useNavigate();

  const movies = [
    { title: "Avengers: Dooms Day", img: doomsday  },
    { title: "Spider-Man: Beyond the Spider-Verse", img: beyond},
    { title: "The Odyssey", img: ody },
    { title: "The Batman: Part II", img: batposter }
  ];

  return (
    <div className="movie-section">
      <h2 className="movie-title">Now Running in Theaters</h2>

      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            onClick={() => navigate(`/movie/${movie.title}`, { state: movie })}
          >
            <img src={movie.img} alt={movie.title} className="movie-img" />
            <h3 className="movie-name">{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;