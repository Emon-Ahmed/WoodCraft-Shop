import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export default function MakeAdmin() {
  const { admin, user, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const addAdmin = () => {
    const user = { email };
    fetch("https://fierce-caverns-02407.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
  };

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

        {admin && (
          <div className="dashboard-content d-inline-block py-0 top-0">
            <p>
              Hello <b>technicalboyemon</b> ( Do You Want To Add A Review About
              Our Website ??? )
            </p>

            <div className="contact-form mt-5">
              <div class="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">
                  <h4> Admin Email</h4>
                </label>
                <input
                  onBlur={handleOnBlur}
                  name="email"
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Admin Email"
                />
              </div>
            </div>
            <div onClick={addAdmin} className="account-btn">
              Make Admin
            </div>
            {success && (
              <div className="my-3 alert alert-success" role="alert">
                Made Admin Successfully.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
