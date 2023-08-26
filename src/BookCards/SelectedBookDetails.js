import React from 'react';
import { RxDividerVertical } from 'react-icons/rx';

const SelectedBookDetails = ({ selectedBook }) => (
  <div className="selected-book-detail">
      <div>
      <img src={selectedBook.volumeInfo.imageLinks.thumbnail} alt={selectedBook.volumeInfo.title} />
      </div>
      <div className="selected-book-detail_section">
        <div className="selected-book-detail1">
          <div className="title">
          <h2>{selectedBook.volumeInfo.title}</h2>
          <h2>{selectedBook.volumeInfo.authors && selectedBook.volumeInfo.authors.join(', ')}</h2>
          </div>
          <p>Published On : {selectedBook.volumeInfo.publishedDate}</p>
        </div>
        <span>{selectedBook.searchInfo && selectedBook.searchInfo.textSnippet}</span>
      </div>
      <div className="details">
      <h3>Avg Rating : {selectedBook.volumeInfo.averageRating}</h3>
          <RxDividerVertical className="stretch"/>
          <h3>Rating Count : {selectedBook.volumeInfo.ratingsCount}</h3>
           <RxDividerVertical className="stretch"/>
          <h3>Publisher : {selectedBook.volumeInfo.publisher}</h3>
          <RxDividerVertical className="stretch"/>
          <h3>Language : {selectedBook.volumeInfo.language}</h3>
      </div>
      <div className="buttons">
         <button onClick={() => window.open(selectedBook.volumeInfo.previewLink, '_blank')}> Read Now! </button>
         <button onClick={() => window.open(selectedBook.volumeInfo.infoLink, '_blank' )}> More Info ! </button>
       </div>
       
       </div>
);

export default SelectedBookDetails;