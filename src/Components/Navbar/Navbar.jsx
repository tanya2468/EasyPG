import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
  state = {
    isOpen: false,
    isLoggedIn: false, // Add state for tracking login status
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    // Destructure state variables
    const { isOpen, isLoggedIn } = this.state;

    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            {/* Navbar toggle button */}
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          {/* Navbar links */}
          <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
            {/* Conditional rendering of links based on login status */}
            <li>
              <Link to="/">Login</Link>
            </li>
            {isLoggedIn && (
              <div>
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                
                <li>
                  <Link to="/Rooms">Rooms</Link>
                </li>
                
              </div>
            )}
            
          </ul>
        </div>
        {/* Redirect to login if not logged in */}
        {!isLoggedIn || <Navigate to="/login" />}
      </nav>
    );
  }
}
