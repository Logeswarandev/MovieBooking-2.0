import React from "react";
import ikigai from "/photo/â€ŽIkigai.jpg";
import lord from "/photo/lord.jpg";
import harry from "/photo/Love these new Harry Potter covers by Olly Moss.jpg";
import atomic from "/photo/Atomic Habits.jpg";
import alchem from "/photo/The Alchemist cover design by Jim Tierney; art direction by Michele Wetherbee and Laura Beers (HarperOne).jpg";

function Books() {
  const books = [
    {
      title: "Ikigai",
      img: ikigai,
      price: "Rs. 340.00"
    },
    {
      title: "The Lord of the Rings",
      img: lord,
      price: "Rs. 2,222.00"
    },
    {
      title: "Harry Potter",
      img: harry,
      price: "Rs.2,150.00"
    },
    {
      title: "The Alchemist",
      img: alchem,
      price: "Rs.233.00"
    },
    {
      title: "Atomic Habits",
      img: atomic,
      price: "Rs.353.00"
    }
  ];

  return (
    <div className="books-section">
      <h2 className="books-title">Books Available</h2>

      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img className="book-img" src={book.img} alt={book.title} />
            <h3 className="book-name">{book.title}</h3>
            <button className="book-price">{book.price}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;