import React from "react";
import { Link } from "react-router-dom";
import brandnew from "/photo/brandnewday(1).jpg";

function Hero() {

  const openTrailer = () => {
    window.open("https://youtu.be/Vsn7sVxCq1M?si=R5egltXPCwpnepum", "_blank");
  };

  return (
    <div className="hero">
      <img
        src={brandnew}
        alt="Movie Poster"
        className="hero-img"
      />

      <div className="hero-btns">
        
        <Link to="/movie/Spiderman Brand New Day">
          <button className="hero-btn book">Book Now</button>
        </Link>

        <button className="hero-btn trailer" onClick={openTrailer}>
          Watch Trailer
        </button>

      </div>
    </div>
  );
}

export default Hero;