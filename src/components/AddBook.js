import React, { useState } from 'react';
import axios from "axios";

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/books', book)
      .then(response => {
        alert("Book added successfully!");
        setBook({ title: '', author: '', price: '', category: '' });
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={book.title} onChange={handleChange} placeholder="Title" required />
      <input type="text" name="author" value={book.author} onChange={handleChange} placeholder="Author" required />
      <input type="number" name="price" value={book.price} onChange={handleChange} placeholder="Price" required />
      <input type="text" name="category" value={book.category} onChange={handleChange} placeholder="Category" required />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
