import React from "react";

function Header({ search, setSearch, setSortOrder, darkMode, setDarkMode }) {
  return (
    <header className="header">
      <h1>🎬 CineScope</h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="default">Sort</option>
        <option value="rating">Rating</option>
        <option value="year">Year</option>
      </select>

      <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
