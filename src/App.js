import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import SelectedBookCard from './BookCards/SelectedBookCard';
import SelectedBookDetails from './BookCards/SelectedBookDetails';
import './App.css';
import axios from "axios";


function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
function App() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const apiEndpoints = [
        `https://www.googleapis.com/books/v1/volumes?q=harry+potter`,
        `https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes`
      ];

      const responses = await Promise.all(apiEndpoints.map(endpoint => fetch(endpoint)));
      const data = await Promise.all(responses.map(response => response.json()));

      const combinedBooks = data.flatMap(apiData => apiData.items);
      setBooks(combinedBooks);

      const shuffledBooks = shuffleArray(combinedBooks);
      setSelectedBooks(shuffledBooks.slice(0, 3));
    };

    fetchData();
  }, []);

  const searchBooks = async (query) => {
    setClicked(false);
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const newBooks = response.data.items;
      setBooks(() => [...newBooks]);
    } catch (error) {
      console.error("Error fetching Sherlock Holmes books:", error);
    }
  };

  {
    clicked && searchBooks(searchQuery);
  }

  const filteredBooks = books.filter(book =>
    book.volumeInfo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displaySelectedBookDetails = (book) => {
    setSelectedBook(book);
    setSelectedBooks([]);
  };

  return (
    <div className="App">
      <Navbar onSearch= {setSearchQuery} setClicked={setClicked}/>
      <div className="selected-books">
        {selectedBooks.map((book) => (
          <SelectedBookCard key={book.id} book={book} onSelect={displaySelectedBookDetails} />
        ))}
      </div>
      {selectedBook && <SelectedBookDetails selectedBook={selectedBook} />}
      <h2>More Books</h2>
      <BookList books={filteredBooks} onSelect={displaySelectedBookDetails} />
    </div>
  );
}

export default App;