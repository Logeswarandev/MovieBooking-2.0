import React from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function MovieDetails() {
  const { title } = useParams();

  // Generate today + next 5 days dynamically
  const dates = Array.from({ length: 6 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);

    const day = d.toLocaleDateString("en-US", { weekday: "short" });
    const date = d.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    });

    return { day, date };
  });

  const theaters = [
    {
      name: "ROX Cinemas",
      shows: ["10:10 AM", "01:40 PM", "05:00 PM", "08:20 PM"],
      info: "Non-cancellable • Dolby Atmos",
    },
    {
      name: "SPR Multiplex",
      shows: ["11:00 AM", "02:30 PM", "06:15 PM", "09:45 PM"],
      info: "Cancellable • 4K Laser Screen",
    },
    {
      name: "INOX",
      shows: ["12:50 PM", "03:30 PM", "07:10 PM", "10:20 PM"],
      info: "Cancellable • Dolby 7.1",
    },
  ];

  return (
    <div className="details-page">
      {/* Movie Title */}
      <h1 className="details-title">
        <i className="bi bi-camera-reels" style={{ marginRight: "10px" }}></i>
        {title}
      </h1>

      {/* Dates Row */}
      <div className="dates-row">
        {dates.map((d, i) => (
          <div key={i} className="date-box">
            <p className="day">{d.day}</p>
            <p className="date">{d.date}</p>
          </div>
        ))}
      </div>

      {/* Theater Section */}
      <h2 className="section-title">Theaters</h2>

      {theaters.map((t, index) => (
        <div key={index} className="theater-card">
          <h3 className="theater-name">{t.name}</h3>

          <div className="showtime-row">
            {t.shows.map((time, i) => (
              <button key={i} className="showtime-btn">
                <Link
                  to={`/seatbooking/${title}/${index}/${encodeURIComponent(
                    time
                  )}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {time}
                </Link>
              </button>
            ))}
          </div>

          <p className="theater-info">{t.info}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieDetails;