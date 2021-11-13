import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

export default function Products() {
  const { user } = useAuth();
  const [showProducts, setShowProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setShowProducts(data));
  }, []);
  return (
    <div className="container">
      <div className="breadcrumb d-flex">
        <p>Products {showProducts.length} </p>
      </div>

      <div className="product-list py-5">
        {showProducts.map((product) => (
          <div className="product">
            <img className="img-blur" src={product.productImg} alt="" />
            <p className="py-1 text-secondary">{product.productName}</p>
            <div className="d-flex justify-content-between align-items-center">
              <p>${product.productPrice}</p>
              <p className="sub_btn d-inline-block">BUY NOW</p>
            </div>
          </div>
        ))}
      </div>

      {/* <Newsletter></Newsletter> */}
    </div>
  );
}
