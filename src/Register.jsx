import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try{

      const res = await axios.post(
        "https://moviebooking-2-0-1.onrender.com/register",  // ✅ updated
        {
          name,
          email,
          password
        }
      );

      alert(res.data.message);

      // Auto login
      const loginRes = await axios.post(
        "https://moviebooking-2-0-1.onrender.com/login",  // ✅ updated
        {
          email,
          password
        }
      );

      localStorage.setItem("token",loginRes.data.token);
      localStorage.setItem("user",JSON.stringify(loginRes.data.user));

      window.location.href="/MovieBooking-2.0/#/";

    }catch(err){

      alert(err.response?.data?.message || "Error");

    }

  };

  return(

    <div className="auth-container">

      <div className="auth-box">

        <h2 className="auth-title">Create Account</h2>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Enter username"
            className="auth-input"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter email"
            className="auth-input"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            className="auth-input"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-btn">
            Register
          </button>

          <p className="auth-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>

        </form>

      </div>

    </div>

  );

}

export default Register;