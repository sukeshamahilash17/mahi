// Navbar.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Ensure correct path to your CSS file
import logo from './assets/images/logo.jpeg'; // Adjust the path according to your project structure

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    } else {
      alert('Please enter a search term.');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="LENGDNER WATCHES" className="navbar-logo" />
          <span className="ms-2">LENGDER WATCHES</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" id="collectionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Collection
              </Link>
              <ul className="dropdown-menu" aria-labelledby="collectionDropdown">
                <li><Link to="/collection/mens-watches" className="dropdown-item">Men's Watches</Link></li>
                <li><Link to="/collection/womens-watches" className="dropdown-item">Women's Watches</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to="/collection/all-watches" className="dropdown-item">All Watches</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Sign Up</Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search🔎</button>
            <Link to="/cart" className="btn btn-outline-success ms-2">
              Cart🛒
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
