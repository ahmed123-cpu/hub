
import { useState } from "react"
import "./Navbar.css"
import { FaShoppingCart } from "react-icons/fa";

function Navbar({ cartCount, onCartClick, searchQuery, onSearchChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-left">
            <a href="#" className="logo">
              Qanas-Hub
            </a>

            <div className="nav-links desktop-only">
              <a
                href="#shop"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("shop")
                }}
              >
                Shop
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("about")
                }}
              >
                About
              </a>
              <a
                href="#deals"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("deals")
                }}
              >
                Deals
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
              >
                Contact
              </a>
            </div>
          </div>

          <div className="navbar-right">
            <div className="search-bar desktop-only">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
              />
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>

            <button className="cart-button" onClick={onCartClick}>
                <FaShoppingCart className="cart-icon"/>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            <button className="menu-button mobile-only" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="search-bar mobile-search">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
              />
            </div>
            <a
              href="#shop"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("shop")
              }}
            >
              Shop
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("about")
              }}
            >
              About
            </a>
            <a
              href="#deals"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("deals")
              }}
            >
              Deals
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
