import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SeatBooking() {

  const { title, theaterId, time } = useParams();
  const navigate = useNavigate();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  const pricePerSeat = 160;

  const rows = 5;
  const cols = 8;

  // unique key for each movie + theater + time
  const bookingKey = `${title}-${theaterId}-${time}`;

  useEffect(() => {

    const allBookings = JSON.parse(localStorage.getItem("seatBookings")) || {};

    if (allBookings[bookingKey]) {
      setBookedSeats(allBookings[bookingKey]);
    }

  }, [bookingKey]);


  const handleSeatClick = (seatNumber) => {

    // prevent clicking already booked seats
    if (bookedSeats.includes(seatNumber)) return;

    if (selectedSeats.includes(seatNumber)) {

      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));

    } else {

      setSelectedSeats([...selectedSeats, seatNumber]);

    }

  };


  const handleBooking = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {

      alert("Please Sign In First");
      navigate("/login");
      return;

    }

    const allBookings = JSON.parse(localStorage.getItem("seatBookings")) || {};

    // update booked seats
    const updatedBookedSeats = [...bookedSeats, ...selectedSeats];

    allBookings[bookingKey] = updatedBookedSeats;

    localStorage.setItem("seatBookings", JSON.stringify(allBookings));

    setBookedSeats(updatedBookedSeats);

    // create ticket
    const ticket = {
      movie: title,
      theater: theaterId,
      time: decodeURIComponent(time),
      seats: selectedSeats,
      total: selectedSeats.length * pricePerSeat,
      userEmail: user.email
    };

    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];

    // prevent duplicate ticket
    const filteredTickets = tickets.filter(
      (t) =>
        !(
          t.movie === ticket.movie &&
          t.time === ticket.time &&
          JSON.stringify(t.seats) === JSON.stringify(ticket.seats)
        )
    );

    filteredTickets.push(ticket);

    localStorage.setItem("tickets", JSON.stringify(filteredTickets));

    alert("Ticket Booked Successfully 🎟️");

    setSelectedSeats([]);

    navigate("/profile");

  };


  return (

    <div className="seat-page">

      <h2 className="seat-title">
        Booking for {title} — Theater #{theaterId}
      </h2>

      <p className="seat-time">
        Showtime: <strong>{decodeURIComponent(time)}</strong>
      </p>

      <div className="screen-box">SCREEN</div>

      <div className="seat-container">

        {[...Array(rows)].map((_, r) => (

          <div key={r} className="seat-row">

            {[...Array(cols)].map((_, c) => {

              const seatNumber = r * cols + (c + 1);

              const isSelected = selectedSeats.includes(seatNumber);
              const isBooked = bookedSeats.includes(seatNumber);

              return (

                <div
                  key={seatNumber}
                  className={`seat-box ${
                    isBooked
                      ? "booked-seat"
                      : isSelected
                      ? "selected-seat"
                      : "free-seat"
                  }`}
                  onClick={() => handleSeatClick(seatNumber)}
                >

                  {seatNumber}

                </div>

              );

            })}

          </div>

        ))}

      </div>

      <div className="pay-bar">

        <p className="pay-text">
          {selectedSeats.length} Seat(s) Selected — ₹
          {selectedSeats.length * pricePerSeat}
        </p>

        <button
          className="pay-btn"
          disabled={selectedSeats.length === 0}
          onClick={handleBooking}
        >
          Book Now
        </button>

      </div>

    </div>

  );

}

export default SeatBooking;