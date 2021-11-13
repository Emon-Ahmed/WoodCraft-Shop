import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../Hooks/useAuth";

export default function ManageOrders() {
  const { admin, user, logout } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://fierce-caverns-02407.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  console.log(orders);

  const deleteOrders = (id) => {
    const url = `https://fierce-caverns-02407.herokuapp.com/orders/${id}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setOrders(orders.filter((item) => item._id != id));
          alert("Deleted");
        }
        console.log(data);
      });
     
  };

  const Delete = <FontAwesomeIcon icon={faTrashAlt} />;

  return (
    <div className="container">
      <div className="breadcrumb d-flex">
        <p>Manage Orders</p>
      </div>
      <div className="dashboard">
        <div className="dashboard-navbar my-5">
          <ul className="nav flex-column d-inline-block">
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
            <table className="table table-hover table-borderless">
              <thead className="table-light">
                <tr>
                  <th className="py-4" scope="col">
                    Product Name
                  </th>
                  <th className="py-4" scope="col">
                    User Email
                  </th>
                  <th className="py-4" scope="col">
                    Price
                  </th>
                  <th className="py-4" scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr>
                    <td>{order.deliveryName}</td>
                    <td>{order.deliveryEmail}</td>
                    <td>{order.deliveryPrice}</td>
                    <td onClick={() => deleteOrders(order._id)} >{Delete}</td>
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
