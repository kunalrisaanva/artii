"use client";

import React, { useState } from "react";
import data from "../utilities/data"; // Ensure this path is correct
import Link from "next/link";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]); // Initialize with an empty array

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value); // Update the query state

    // Filter the data based on the query
    if (value.trim() !== "") {
      const filteredResults = data.filter(item =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults); // Update results based on the search
    } else {
      setResults([]); // Clear results if input is empty
    }
  };

  return (
    <div className="w-4/5 mx-auto mt-3">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search Aarti, Chalisa, etc..."
          value={query}
          onChange={handleSearch} // Handle input change
          className="w-full px-4 py-2 bg-gray-700 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
        />
      </form>

      {/* Display filtered results */}
      {results.length > 0 ? (
        <ul className="mt-4 bg-gray-800 p-2 rounded-lg">
          {results.map((item) => (
            <li key={item.id} className="text-white py-1 border-b-2 border-gray-500">
              <Link href={`${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        query && (
          // Display message only if query exists and no results found
          <p className="mt-4 text-red-700">No results found</p>
        )
      )}
    </div>
  );
};

export default SearchComponent;
