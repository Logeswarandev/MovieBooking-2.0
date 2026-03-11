import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import MovieList from "./MovieList.jsx";
import Books from "./Books.jsx";
import Footer from "./Footer.jsx";
import MovieDetails from "./MovieDetails.jsx";
import { Routes, Route } from "react-router-dom";
import SeatBooking from "./SeatBooking.jsx";
import LoginPage from "./LoginPage.jsx";
import Register from "./Register.jsx";
import Profile from "./Profile.jsx"; 

function App() {
  return (
    <>
      <Nav />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Hero />
              </div>

              <div id="movies">
                <MovieList />
              </div>

              <div id="books">
                <Books />
              </div>

              <div id="about">
                <Footer />
              </div>
            </>
          }
        />

        {/* Auth Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />

        {/* Profile Page */}
        <Route path="/profile" element={<Profile />} />   {/* ✅ Added */}

        {/* Movie Pages */}
        <Route path="/movie/:title" element={<MovieDetails />} />
        <Route path="/SeatBooking/:title/:theaterId/:time" element={<SeatBooking />} />

      </Routes>
    </>
  );
}

export default App;