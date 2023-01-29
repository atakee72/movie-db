import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import { MoviesContextProvider } from "./store/MoviesContext";
import { AuthContextProvider } from "./store/AuthContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Footer } from "./styles/Footer.styles";
import { Container } from "./styles/Container.styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Button } from "./styles/Button.styles";
import { GlobalStyle } from './styles/Globalstyle.styles';



function App() {
  const [redTheme, setRedTheme] = useState(false);

  const theme = {
    colors: {
      primary: redTheme ? "#bc4123" : null,
      secondary: redTheme ? "#2b3452" : null,
    },
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <GlobalStyle />
          <AuthContextProvider>
            <header>
              <Navbar redTheme={redTheme} setRedTheme={setRedTheme}/>
              <Button onClick={() => setRedTheme(!redTheme)}>C</Button>
            </header>
            <MoviesContextProvider>
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="register" element={<Register />} />
                  <Route
                    path="about"
                    element={
                      <ProtectedRoute>
                        <About />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="login" element={<Login />} />
  
                  <Route
                    path="/movies"
                    element={
                      <ProtectedRoute>
                        <Movies />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="movies/:id" element={<Movie />} />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
              </main>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <Footer color="white">
                <h3>Movies Database Project</h3>
                <Container>
                  <div>
                    The Movie Database ( TMDb ) is a collaborative database about
                    movies . The project was founded by Travis Bell in 2008 to
                    collect movie posters .{" "}
                  </div>
                </Container>
                <ul>
                  <li>Prepared by atakee with React.js</li>
                  <li>using TMDB database</li>
                  <li> @copyright ? @copyright : " " 😆</li>
                </ul>
              </Footer>
            </MoviesContextProvider>
          </AuthContextProvider>
        </ThemeProvider>
    </div>
  );
}

export default App;
