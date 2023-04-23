import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import Search from "../components/SearchBar";
import transformTitle from "../utils/transformTitle";
import { useContext } from "react";
import { MoviesContext } from "../store/MoviesContext";
import { WatchListContext } from "../store/WatchListContext";
import { Button } from "../styles/Button.styles";
import { useState } from "react";
import { useEffect } from "react";
import {
  arrayUnion,
  collection,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { AuthContext } from "../store/AuthContext";
import { db } from "../config/firebaseConfig";

function Movies() {
  const { loading, filtered } = useContext(MoviesContext);
  const { user } = useContext(AuthContext);
  const [watchList, setWatchList] = useState([]);
  const [listCounter, setListCounter] = useState(0);
  const { addToWatchList } = useContext(WatchListContext);

  const handleAddings = async (item) => {
    console.log("button clicked");
    addToWatchList(item);
  };
  console.log("watchList :>> ", watchList);
  console.log(watchList.length);
  // const docRef = await updateDoc(doc(db, "watchLists", "test@test.com"), {
  //   movies: arrayUnion(item.original_title),
  // });
  console.log("element saved to watchlist");

  useEffect(() => {
    setListCounter(watchList.length);
    console.log("listCounter", listCounter);
  }, [watchList]);

  return (
    <div /*className={`${theme === "primary" ? "primary" : ""}`}*/>
      <div className="SnF">
        <div className="searchBar">
          <Search />
        </div>
        <div>
          <Filter />
        </div>
      </div>

      {loading && <div className="loading">Loading...</div>}
      <p className="addedMovie">
        You have added {listCounter} movies to your personal watchlist!
      </p>
      {filtered?.length > 0 ? (
        !loading && (
          <div className="popular-movies">
            {filtered.map((movie, i) => (
              //later set popular -> filtered
              <div key={movie.id} movie={movie}>
                <h5>
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
                </h5>
                <Link
                  className="imgAsLink"
                  to={
                    transformTitle(movie.title.toLowerCase()) +
                    "_" +
                    movie.id +
                    "_" +
                    (i + 1)
                  }
                  state={{ nextMovie: "sdfsadf" }}
                >
                  <img
                    className="poster"
                    src={
                      "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
                    }
                    alt="movie poster"
                  />
                </Link>
                <Button
                  onClick={() => handleAddings(movie)}
                  style={{ position: "relative", bottom: "18%" }}
                >
                  +
                </Button>
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
