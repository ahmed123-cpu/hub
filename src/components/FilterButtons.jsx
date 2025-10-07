import "./FilterButtons.css"

function FilterButtons({ selectedCategory, onCategoryChange }) {
  const categories = [
    { id: "all", label: "All Products" },
    { id: "electronics", label: "Electronics" },
    { id: "clothing", label: "Clothing" },
    { id: "home", label: "Home & Decor" },
  ]

  return (
    <div className="filter-buttons">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`filter-button ${selectedCategory === category.id ? "active" : ""}`}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons
