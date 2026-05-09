import React, { useState } from "react";
import "./Header.css";

function Header({ searchTerm, setSearchTerm, images, setImages }) {
  console.log(images);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const api_url = "https://api.unsplash.com/search/photos";
    const api_key = import.meta.env.VITE_UNSPLASH_KEY;
    const per_page = 20;

    fetch(
      `${api_url}?query=${searchTerm}&client_id=${api_key}&per_page=${per_page}`,
    )
      .then((response) => response.json())
      .then((data) => setImages(data.results))
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
