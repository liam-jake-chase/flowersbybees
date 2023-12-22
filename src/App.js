import "./App.scss";
import logo from "./assets/logo2.png";
import Home from "../src/components/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import cartImage from "./assets/shopping-cart-1985.png";

function App() {
 
  

  return (
    <Router>
      <header>
        <Nav>
          <img
            className="navbar__logo d-flex justify-content-start"
            src={logo}
            alt="flowers"
          />

          <ul className="navbar d-flex justify-content-end">
            <li className="navbar__item" id="Home">
              <Link
                style={{ textDecoration: "none" }}
                className="navbar__link"
                to="/flowersbybees"
              >
                HOME
              </Link>
            </li>
            <li className="navbar__item" id="Shop">
              <Link
                style={{ textDecoration: "none" }}
                className="navbar__link"
                to="/shop"
              >
                SHOP
              </Link>
            </li>
            <li className="navbar__item" id="Contact">
              <Link
                style={{ textDecoration: "none" }}
                className="navbar__link"
                to="/contact"
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <img className="navbar__cart" src={cartImage} alt="cartImage" />{" "}
              </Link>
            </li>
          </ul>
        </Nav>
      </header>

      <Routes>
        <Route index path="/flowersbybees" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
