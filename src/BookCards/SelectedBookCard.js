import React from 'react';

const SelectedBookCard = ({ book, onSelect }) => (
  <div className="selected-book" onClick={() => onSelect(book)}>
    <div className="selected-book-image">
      <img className="" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
    </div>
    <div className="selected-book-details">
      <h3 >{book.volumeInfo.title+"..."}</h3>
      <p>{book.searchInfo && book.searchInfo.textSnippet && book.searchInfo.textSnippet.slice(0, 100) + '...'}</p>
      <button className="read-now-button" onClick={() => window.open(book.volumeInfo.previewLink, '_blank')}>Read Now</button>
    </div>
  </div>
);

export default SelectedBookCard;
/*<h2 style="
    background-color: transparent;
">Harry Potter: The Complete Collection (1-7)</h2> */