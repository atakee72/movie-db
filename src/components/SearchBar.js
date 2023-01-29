import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { MoviesContext } from "../store/MoviesContext";

function Search() {
  const { filtered, setFiltered, popular } = useContext(MoviesContext);
  const [input, setInput] = useState("");

  const handleQuery = (event) => {
    event.preventDefault();
    console.log("Query :>> ", event.target.value);
    setInput(event.target.value);
  };

  const handleClick = (event) => {
    //does not work, hmmm....
    event.preventDefault();
    console.log("Query :>> ", event.target.value);
    setInput(event.target.value);
  };

  const handleKeyUp = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      console.log("Click :>> ", event.target.value);
      setInput(event.target.value);
    }
  };

  useEffect(() => {
    filterMovies();
  }, [input]);

  const filterMovies = () => {
    if (input === 0) {
      setFiltered(popular);
    }
    // else if (activeGenre !== 0) {
    //   const filteredByActiveGenreNQUery = filteredByActiveGenre.filter((movie) =>
    //   movie.title.toLowerCase().includes(input.toLowerCase())
    // );
    //   setFiltered(filteredByActiveGenreNQUery)
    // }
    else {
      const filteredMovies = popular.filter((movie) =>
        movie.title.toLowerCase().includes(input.toLowerCase())
      );
      setFiltered(filteredMovies);
    }
  };

  return (
    <div>
      <Stack spacing={3} sx={{ width: 400 }}>
        <Autocomplete
          // onClick={handleClick}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={popular.map((option) => option.title)}
          renderInput={(params) => (
            <div className="searchTextField">
              <TextField
                {...params}
                onChange={handleQuery}
                onKeyUp={handleKeyUp}
                onClick={handleClick}
                label="Film Ara"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            </div>
          )}
        />
      </Stack>
      <p>
        <span>{filtered.length}</span> movies found!{" "}
      </p>
    </div>
  );
}

export default Search;
