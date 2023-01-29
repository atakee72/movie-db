import React, { useEffect } from "react";
import { useContext } from "react";
import { MoviesContext } from "../store/MoviesContext";
import { Button } from "../styles/Button.styles";

function Filter() {
  const {
    deleteMovies,
    popular,
    setFiltered,
    setActiveGenre,
    activeGenre,
    fetchMovies,
    filtered
  } = useContext(MoviesContext);

  useEffect(() => {
    const filteredByActiveGenre = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filteredByActiveGenre);
  }, [activeGenre]);

  const bringBack = () => {
    setActiveGenre(null);
    fetchMovies();
  }

  return (
    <div className="filter-container">
      <Button
        className={activeGenre === null ? "active" : ""}
        onClick={() => bringBack()}
      >
        All Films
      </Button>{" "}
      |
      <Button
        className={activeGenre === 35 ? "active" : ""}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </Button>{" "}
      |
      <Button
        className={activeGenre === 28 ? "active" : ""}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </Button>{" "}
      |
      <Button
        className={activeGenre === 0 ? "active" : ""}
        onClick={deleteMovies}
      >
        Delete list
      </Button>
    </div>
  );
}

export default Filter;

