import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { MoviesContext } from "../store/MoviesContext";
import { AuthContext } from "../store/AuthContext";

function Home() {
  const { filtered } = useContext(MoviesContext);
  const { user } = useContext(AuthContext);

  return (
    <div>

      {user && (<><h3 className='welcoming'>Welcome! You are logged in with this email: </h3> {" "}<span>{user?.email}</span>!!!</>)}


      <h4>A Huge Database of Movies</h4>
      <p>
        The Movie Database ( TMDb ) is a collaborative database about movies .
        The project was <i>founded by Travis Bell in 2008 to collect movie posters</i>
        . The initial database was a donation from the free Open Media Database
        (omdb) project. TMDb is a competitor project to the commercial Internet
        Movie Database and can e.g. B. be used by the media center software Kodi
        .
      </p>
      <p>
        In 2010, TMDb was sold to the Fan TV company, however, the site is still
        managed by its founder. In mid-2020, the database contained <i>568,729
        films and 1,752,577 people</i>.
      </p>
      <p className="internalink">
        <Link to="movies">Find your favourite movies here!</Link>
      </p>
      {user && (<p>
        Number of movies available: <span>{filtered.length}</span>
      </p>)}
    </div>
  );
}

export default Home