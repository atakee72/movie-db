import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import Search from "../components/SearchBar";
import transformTitle from "../utils/transformTitle";
import { useContext } from "react";
import { MoviesContext } from "../store/MoviesContext";
import { Footer } from "../styles/Footer.styles";

function Movies() {
  const { loading, filtered } =
    useContext(MoviesContext);

  return (
    <div /*className={`${theme === "primary" ? "primary" : ""}`}*/>
      <div className="SnF">
        <div className="searchBar">
          <Search
          />   
        </div>
        <div>
          <Filter
          />
        </div>
      </div>

      {loading && <div className="loading">Loading...</div>}

      {filtered?.length > 0 ? (
        !loading && (
          <div className="popular-movies">
            {filtered.map((movie, i) => (
              //later set popular -> filtered
              <div key={movie.id} movie={movie}>
                <h2>
                  <Link
                    to={
                      transformTitle(movie.title.toLowerCase()) +
                      "_" +
                      movie.id +
                      "_" +
                      (i + 1)
                    }
                  >
                    {movie.title}
                  </Link>
                </h2>
                <Link
                  className="imgAsLink"
                  to={
                    transformTitle(movie.title.toLowerCase()) +
                    "_" +
                    movie.id +
                    "_" +
                    (i + 1)
                  }
                >
                  <img
                    className="poster"
                    src={
                      "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
                    }
                    alt="movie poster"
                  />
                </Link>
              </div>
            ))}
          </div>
        )
      ) : (
        <p>
          No movies here to display, you've deleted them,{" "}
          <span>REMEMBER!?</span>
        </p>
      )}
    </div>
  );
}

export default Movies;