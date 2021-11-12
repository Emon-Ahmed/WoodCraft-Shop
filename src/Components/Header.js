import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <div>
      <nav className="navbar my-3 navbar-expand-lg navbar-light">
        <div className="container">
          <ul className="navbar-nav me-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="navbar-brand" to="/">
                <img className="img-fluid logo" src="/mainlogo.png" alt="" />
              </Link>
            </li>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="/reviews"
                >
                  Reviews
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  aria-current="page"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {user?.email ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active mx-2 account-btn"
                    aria-current="page"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                  <Link
                  onClick={logout}
                    className="nav-link active mx-2 account-btn"
                    aria-current="page"
                    to="/account"
                  >
                    Logout
                  </Link>
                </li>
                
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link active mx-2 account-btn"
                    aria-current="page"
                    to="/account"
                  >
                    Account
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
