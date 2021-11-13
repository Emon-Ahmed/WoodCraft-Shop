import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export default function Dashboard() {
  const { admin, user, logout } = useAuth();
  return (
    <div className="container">
      <div className="breadcrumb d-flex">
        <p>Dashboard</p>
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
            {admin && (
              <div>
                {" "}
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
                </li>{" "}
              </div>
            )}
            <li className="nav-item">
              <Link
                onClick={logout}
                className="nav-link active mx-2"
                aria-current="page"
                to="/"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>

        <div className="dashboard-content d-inline-block py-0 top-0">
          <p>
            Hello <b>{user.email} </b> (not <b> {user.email} </b>?
            <span onClick={logout} className="sub_btn">
              Log out
            </span>{" "}
            )
          </p>
        </div>
      </div>
    </div>
  );
}
