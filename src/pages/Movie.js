import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


function Movie() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  let location = useLocation();
console.log('location', location)                   //how to use it to get to the next movie page?!? 

  const { id, i } = useParams();
  const movieId = id.split("_")[1];
  const index = id.split("_")[2];
  console.log("id>>>>>>>", movieId);

  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=b6bd7a2558c1deb52558f3b6755682f6&language=en`;

  useEffect(() => {
    axios(url)
      .then((response) => setMovie(response.data))
      .finally(() => setLoading(false))
      .catch((err) => alert(err));
    console.log("response.data", movie);
  }, []);

  return (
    <div>
      {loading && <div className="loading">Loading...</div>}
      {!loading && (
        <div>
          <h3>{movie.title}</h3>
          <div>
            <p>
              <img
                className="posterInternal"
                src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                alt="movie poster"
              />
            </p>
            <div className="internalText">
              <p>
                <strong>
                  Movie Homepage:
                </strong>{" "}
                <br />{" "}
                <a href={movie.homepage} target="_blank">
                  {movie.homepage ? movie.homepage : "N/A"}
                </a>
              </p>
              <p>
                <strong>
                  Overview:
                </strong>{" "}
                <br /> {movie.overview}
              </p>
              {/* <br /> <br /> <br />
            <p>
              <code style={{clear: "left"}}>{JSON.stringify(movie)}</code>
            </p> */}
            </div>
          </div>
        </div>
      )}
      <Link to={`movies/${parseInt(index) + 1}`}><span>Next Movie</span></Link>
    </div>
  );
}

export default Movie;
