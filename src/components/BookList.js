import React from 'react';
import BookDetail from './BookDetail';

function BookList({ books, onSelect }) {
  return (
    <div className="BookList">
      <div className="grid-container">
        {books.map((book) => (
          <BookDetail key={book.id} book={book} onSelect={() => onSelect(book)} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
