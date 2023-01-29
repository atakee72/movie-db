import axios from "axios";
import { useState, useEffect } from "react";

function useFetch(url) {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeGenre, setActiveGenre] = useState(null);

  const fetchMovies = () => {
    // setActiveGenre(null);

    try {
      axios(url)
        .then((response) => {
          console.log("response.data", response.data.results);
          setPopular(response.data.results);
          setFiltered(response.data.results);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, [url]);

  return {
    popular,
    filtered,
    loading,
    setFiltered,
    setPopular,
    activeGenre,
    setActiveGenre,
    fetchMovies,
  };
}

export default useFetch;
