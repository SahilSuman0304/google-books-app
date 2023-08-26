import React from 'react';

function BookDetail({ book, onSelect }) {
  const { volumeInfo } = book;

  return (
    <div className="BookDetail">
      <div className="book-info">
        <img
          src={volumeInfo.imageLinks.thumbnail}
          alt={volumeInfo.title}
          onClick={onSelect}
          className="expanded-image"
        />
      </div>
    </div>
  );
}

export default BookDetail;
