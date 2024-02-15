import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/TechTowerShop.jpeg'
import "./navbar.css"

export default function NavBar() {
  return (
    <header className="header">
        <img className="logo" src={logo}></img>

        <div className="bx bx-menu" id="menu-icon"></div>

        <nav className="navbar">
            <Link to="/home">
            <span>Home</span>
            </Link>
            <Link to="/Products">
            <span>Products</span>
            </Link>
            <Link to="/about">
            <span>About Us</span>
            </Link>
            <Link to="/trolley">
            <span>Trolley</span>
            </Link>
            <Link to="/log_in">
            <span>Log In</span>
            </Link>
        </nav>

        <div className="container">
        <input
          type="text"
          name="text"
          className="input"
          required
          placeholder="Type to search..."
        />
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Search</title>
            <path
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            ></path>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M338.29 338.29L448 448"
            ></path>
          </svg>
        </div>
      </div>

    </header>
  )
}
