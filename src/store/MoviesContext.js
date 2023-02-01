import { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const MoviesContext = createContext();
export const MoviesContextProvider = (props) => {
  console.log("props", props);

  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=b6bd7a2558c1deb52558f3b6755682f6&language=en";

  const {
    popular,
    filtered,
    loading,
    setPopular,
    setFiltered,
    activeGenre,
    setActiveGenre,
    fetchMovies,
  } = useFetch(url);

  const deleteMovies = () => {
    setFiltered([]);
    // setActiveGenre(0);
  };

  return (
    <MoviesContext.Provider
      value={{
        fetchMovies,
        loading,
        setFiltered,
        popular,
        activeGenre,
        filtered,
        deleteMovies,
        setPopular,
        setActiveGenre,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};
