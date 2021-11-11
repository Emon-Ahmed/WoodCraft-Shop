import React from "react";
import { Link } from "react-router-dom";

export default function AddProduct() {
  return (
    <div className="container">
      <div className="breadcrumb d-flex">
        <p>Add A Product</p>
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
              <Link className="nav-link active mx-2" aria-current="page" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-75 dashboard-content d-inline-block py-0 top-0">
          <p>
            Hello <b>technicalboyemon</b> (Do You Want To Sell Your Products
            ???)
          </p>
          <div className="contact-form mt-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Product Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Product Name"
              />
            </div>
            <div className="d-flex">
              <div class="mb-3 me-2">
                <label for="exampleFormControlInput1" class="form-label">
                  Product Photo URL
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="PHOTO LINK"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Price
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Price"
                />
              </div>
            </div>
            <div class="mb-2">
              <label for="exampleFormControlTextarea1" class="form-label">
                Product Description
              </label>
              <textarea
                placeholder="Product Description"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="account-btn">Add Now</div>
        </div>
      </div>
    </div>
  );
}
