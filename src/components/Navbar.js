import React, { Component } from "react";
import { Link } from "react-router-dom";
// import store from "./store.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-secondary px-sm-5">
        {/* <Link to="/">
          <img src="img/store.png" alt="store" className="navbar-brand" />
        </Link> */}
        <Link exact to="/">
          <span className="navbar-brand mb-0 h1">e-pola</span>
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="./Cart" className="ml-auto">
          <button className="btn btn-outline-warning my-2 my-sm-0">
            <i class="fa fa-cart-plus mr-2"></i>my cart
          </button>
        </Link>
      </nav>
    );
  }
}
