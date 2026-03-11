import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Nav() {

  // check if user is logged in
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

      {/* Logo */}
      <Link className="navbar-brand d-flex align-items-center ms-4" to="/">
        <span className="cine-text">Cine</span>
        <span className="book-text">Book</span>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Center Navigation */}
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav gap-4">

          <li className="nav-item">
            <a className="nav-link nav-effect" href="#home">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link nav-effect" href="#movies">Movies</a>
          </li>

          <li className="nav-item">
            <a className="nav-link nav-effect" href="#books">Books</a>
          </li>

          <li className="nav-item">
            <a className="nav-link nav-effect" href="#about">About</a>
          </li>

        </ul>
      </div>

      {/* Right Button */}
      {user ? (
        <Link to="/profile">
          <button className="btn sign-btn me-4">Profile</button>
        </Link>
      ) : (
        <Link to="/login">
          <button className="btn sign-btn me-4">Sign In</button>
        </Link>
      )}

    </nav>
  );
}

export default Nav;