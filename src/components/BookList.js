import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
       ) : (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              {book.title} - {book.author} (${book.price}) [{book.category}]
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
