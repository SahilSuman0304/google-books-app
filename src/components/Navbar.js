import React, { useState } from 'react';
import logoImage from '../images/Group.png';
import companyName from "../images/name.png"
import book from "../images/book.png"
import notify from "../images/notify.png"
import diamond from "../images/diamond.png"
import pic from "../images/IMG20210528181544.png"

import { FiSearch } from "react-icons/fi";

function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <nav >
      <div className="nav">
      <div className="left-nav">
        <img src={logoImage} alt="Logo" />
        <img id="name" src={companyName} alt="company name" />
      </div>
      <div className="right-nav">
        <div className="search">
            <div className="searchbar">
            <FiSearch />
            <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for the book you want to read it now... sherlock Holmes,Harry Pot..."
              />
            </div>
            <button className="btn" onClick={handleSearch}>Search</button>
        </div>
        <div className="icons">
            <img src={book}alt="book" />
            <img src={notify} alt="notify" />
            <img src={diamond} alt="diamond" />
            <img className="myPic" src={pic} alt="pic" />
        </div>
      </div>
    </div> 

      
    </nav>
  );
}

export default Navbar;

