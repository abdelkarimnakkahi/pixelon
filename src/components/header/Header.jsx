import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  //client_id=YOUR_ACCESS_KEY
  const handleSubmit = (e) => {
    e.preventDefault();
    const api_url = "https://api.unsplash.com/search/photos";
    const api_key = import.meta.env.VITE_UNSPLASH_KEY;

    fetch(`${api_url}?per_page=20&query=${searchTerm}&client_id=${api_key}`)
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    setSearchTerm("");
  };

  return (
    <header>
      <div className="container">
        <h1>Explore beautiful free images</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
          facilis!
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            id="search"
            onChange={handleSearchChange}
            value={searchTerm}
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
