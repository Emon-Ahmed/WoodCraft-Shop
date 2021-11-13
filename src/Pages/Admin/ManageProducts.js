import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../Hooks/useAuth";

export default function ManageProducts() {
  const { admin, user, logout } = useAuth();

  const [showProducts, setShowProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setShowProducts(data));
  }, []);

  const Edit = <FontAwesomeIcon icon={faEdit} />;
  const Delete = <FontAwesomeIcon icon={faTrashAlt} />;
  const View = <FontAwesomeIcon icon={faEye} />;
  return (
    <div className="container">
      <div className="breadcrumb d-flex">
        <p>Manage Products</p>
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
            <table class="table table-hover table-borderless">
              <thead class="table-light">
                <tr>
                  <th className="py-4" scope="col">
                    Order
                  </th>
                  <th className="py-4" scope="col">
                    Name
                  </th>
                  <th className="py-4" scope="col">
                    Price
                  </th>
                  <th className="py-4" scope="col">
                    Status
                  </th>
                  <th className="py-4" scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {showProducts.map((product) => (
                  <tr>
                    <th scope="row">1</th>
                    <td>{product.productName}</td>
                    <td>{product.productPrice}</td>
                    <td>Otto</td>
                    <td>
                      {View} {Edit} {Delete}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
