import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export default function AddProduct() {
  const { admin, user, logout } = useAuth();
  const [productInfo, setProductInfo] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...productInfo };
    newInfo[field] = value;
    setProductInfo(newInfo);
  };

  const addProduct = (e) => {
    const product = { ...productInfo };
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("DONE");
        }
      });
  };

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
                  onBlur={handleOnBlur}
                  name="productName"
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
                    onBlur={handleOnBlur}
                    name="productImg"
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
                    onBlur={handleOnBlur}
                    name="productPrice"
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
                  onBlur={handleOnBlur}
                  name="productDescription"
                  placeholder="Product Description"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div onClick={addProduct} className="account-btn">
              Add Now
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
