import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export default function MakeAdmin() {
  const { user, logout } = useAuth();
  return (
    <div className="container">
      <div className="breadcrumb d-flex">
        <p>Make Admin</p>
      </div>
      <div className="dashboard">
        <div className="dashboard-navbar my-5">
          <ul class="nav flex-column d-inline-block">
            <li className="nav-item">
              <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="/myorders"
              >
                My Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="/reviews"
              >
                My Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="/addproducts"
              >
                Add A Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="/manageorders"
              >
                Manage Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="/manageproducts"
              >
                Manage Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="/makeadmin"
              >
                Make A Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={logout} className="nav-link active mx-2" aria-current="page" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>

        <div className="dashboard-content d-inline-block py-0 top-0">
          <p>
            Hello <b>technicalboyemon</b> ( Do You Want To Add A Review About
            Our Website ??? )
          </p>

          <div className="contact-form mt-5">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
               <h4> Admin Email</h4>
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Admin Email"
              />
            </div>
          </div>
          <div className="account-btn">Make Admin</div>
        </div>
      </div>
    </div>
  );
}
