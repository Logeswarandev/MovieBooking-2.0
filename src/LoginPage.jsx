import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function LoginPage(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try{

      const res = await axios.post(
        "https://moviebooking-2-0-1.onrender.com/login",  // ✅ updated
        {
          email,
          password
        }
      );

      localStorage.setItem("token",res.data.token);
      localStorage.setItem("user",JSON.stringify(res.data.user));

      alert("Login Successful");

      window.location.href="/MovieBooking-2.0/#/";

    }catch(err){

      alert(err.response?.data?.message || "Login failed");

    }

  };

  return(

    <div className="auth-container">

      <div className="auth-box">

        <h2 className="auth-title">Sign In</h2>

        <form onSubmit={handleLogin}>

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
            Sign In
          </button>

          <p className="auth-link">
            Don't have an account? <Link to="/register">Register</Link>
          </p>

        </form>

      </div>

    </div>

  );

}

export default LoginPage;