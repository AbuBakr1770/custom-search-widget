import { useState } from "react";

const SearchWidget = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      window.open(`https://www.youtube.com/`, "_blank");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "30px",
        right: 0,
        background: "#fff",
        padding: "10px",
        zIndex: 1000,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        alignItems: "end",
        width: "40%",
      }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        style={{
          padding: "10px",
          width: "75%",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px",
          marginLeft: "10px",
          borderRadius: "4px",
          background: "#007BFF",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchWidget;
