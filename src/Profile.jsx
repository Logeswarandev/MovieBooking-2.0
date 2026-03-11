import React from "react";

function Profile() {

  const user = JSON.parse(localStorage.getItem("user"));

  const tickets = JSON.parse(localStorage.getItem("tickets")) || [];

  const userTickets = tickets.filter(
    (ticket) => ticket.userEmail === user?.email
  );

  // get only latest ticket
  const latestTicket = userTickets[userTickets.length - 1];

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (

    <div style={{ textAlign: "center", marginTop: "80px" }}>

      <h2>User Profile</h2>

      <p><b>Name:</b> {user?.name}</p>
      <p><b>Email:</b> {user?.email}</p>

      <button onClick={logout} style={{ marginBottom: "30px" }}>
        Logout
      </button>

      <h3>Your Booked Ticket</h3>

      {!latestTicket ? (

        <p>No tickets booked yet</p>

      ) : (

        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px auto",
            width: "300px",
            borderRadius: "10px"
          }}
        >

          <h4>{latestTicket.movie}</h4>

          <p><b>Showtime:</b> {latestTicket.time}</p>

          <p><b>Seats:</b> {latestTicket.seats.join(", ")}</p>

          <p><b>Total:</b> ₹{latestTicket.total}</p>

        </div>

      )}

    </div>

  );

}

export default Profile;