import React from "react";

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <div style={{ marginBottom: 15 }}>
      <label>Category: </label>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Tech">Tech</option>
        <option value="Health">Health</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
