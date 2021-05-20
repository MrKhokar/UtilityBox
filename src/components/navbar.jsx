import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            Utility Manager
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/quotes"
                  className="nav-link"
                  aria-current="page">
                  Random Quotes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/calculator"
                  className="nav-link">
                  Calculator
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/drum" className="nav-link">
                  Drum Pad
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/previewer"
                  className="nav-link">
                  Markman Previewer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/todo" className="nav-link">
                  To-Do
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
