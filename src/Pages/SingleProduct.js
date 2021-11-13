import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../Hooks/useAuth";

export default function SingleProduct() {
  const { id } = useParams();
  const { user } = useAuth();
  const [showProduct, setShowProduct] = useState({});
  const [productBuy, setProductBuy] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...productBuy };
    newInfo[field] = value;
    setProductBuy(newInfo);
  };

  const buyProduct = (e) => {
    const product = {
      ...productBuy,
      deliveryName: showProduct.productName,
      deliveryPrice: showProduct.productPrice,
      deliveryEmail: user.email,
    };
    fetch("https://fierce-caverns-02407.herokuapp.com/orders", {
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

  useEffect(() => {
    fetch(`https://fierce-caverns-02407.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const final = data.find((d) => d);
        setShowProduct(final);
      });
  }, []);

  return (
    <div className="container">
      <div className="breadcrumb d-flex">
        <p>Checkout </p>
      </div>
      <div className="about-info my-5 mx-auto">
        <div className="d-flex justify-content-between">
          <div className="contact-form">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Product Name
              </label>
              <input
                onChange={handleOnBlur}
                name="deliveryName"
                defaultValue={showProduct.productName}
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Price
              </label>
              <input
                onChange={handleOnBlur}
                name="deliveryPrice"
                defaultValue={showProduct.productPrice}
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                disabled
                onChange={handleOnBlur}
                name="deliveryEmail"
                defaultValue={user.email}
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Delivery Address
              </label>
              <input
                onChange={handleOnBlur}
                name="deliveryAddress"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Dhaka, Bangladesh"
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                onChange={handleOnBlur}
                name="deliveryMessage"
                placeholder="Your Message"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <div onClick={buyProduct} className="account-btn">
              Buy Now
            </div>
          </div>
          <div>
            <img src="https://emonahmed.com/programming-hero/12/about.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
