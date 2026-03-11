import React from "react";

function Footer() {
  return (
    <footer className="footer">

      {/* Background overlay */}
      <div className="footer-overlay">

        {/* Navigation Links */}
        <div className="footer-links">
          <a href="#" className="footer-link">Home</a>
          <a href="#" className="footer-link">Movies</a>
          <a href="#" className="footer-link">Books</a>
          <a href="#" className="footer-link">About</a>
        </div>

        {/* Quote Section */}
        <p className="footer-quote">
          “Movies inspire us. Books transform us.” 
        </p>

        {/* Contact Section */}
        <div className="footer-contact">
          <p>Email: cinebook@gmail.com</p>
          <p>Phone: +91-9876543210</p>
        </div>

        <p className="footer-bottom">
          © 2026 MediaWorld. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;