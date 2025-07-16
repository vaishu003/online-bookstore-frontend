import React from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

function App() {
  return (
    <div className="App">
      <h1>Online Book Store</h1>
      <AddBook />
      <BookList />
    </div>
  );
}

export default App;
