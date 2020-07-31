import React, { Component } from "react";
import { Link } from "react-router-dom";
// import store from "./store.svg";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-light bg-dark px-sm-5">
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
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  .nav-link {
    color: #ffa400 !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
  .navbar-brand {
    color: #ffa400 !important;
    font-size: 1.5rem;
    font-family: cursive !important;
    font-weight: bold;
  }
`;
