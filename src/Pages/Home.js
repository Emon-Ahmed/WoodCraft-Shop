import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Newsletter from "../Components/Newsletter";

export default function Home() {

  const [showProducts, setShowProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setShowProducts(data));
  }, []);

  return (
    <div className="container">
      <header className="App-header">
        <img src="/logo.png" className="App-logo m-5" alt="logo" />
      </header>
      <div className="text-center header-text">
        <h1 className="fw-bolder my-4 header-text"> The WoodCraft Shop </h1>
        <Link to="/products">
          {" "}
          <p> Shop Now </p>
        </Link>
      </div>
      <div className="container my-4">
        <img
          src="/banner.jpg"
          className="d-block mx-auto banner-img"
          alt="Banner"
        />
      </div>
      <div className="row g-5 mb-5 pb-5">
        <div className="col-md-6">
          <div className="hero-info">
            <div className="py-5 hero-text d-flex flex-column justify-content-center align-items-center">
              <h1>New Arrivals</h1>
              <p className="text-secondary">
                Find a bright ideal to suit your taste with our great.
              </p>
              <div>
                <Link to="/products">
                  <span className="sub_btn me-3">Lightings</span>
                </Link>
                <Link to="/products">
                  <span className="sub_btn">Furnitures</span>
                </Link>
              </div>
            </div>
            <img className="img-fluid img-blur" src="hero_2.jpeg" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="hero-banner img-blur">
            <img className="img-fluid" src="hero_1.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div className="my-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Trending This Week</h1>
          <div className="mobile-hide">
            <span className="fw-bold mx-3"> All </span>
            <span className="fw-bold mx-3"> Furnitures </span>
            <span className="fw-bold mx-3"> Lighting </span>
            <span className="fw-bold mx-3"> Decor </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 my-5">
            <div>
              <div className="card text-black">
                <img
                  src="/product_banner.jpeg"
                  className="card-img"
                  alt="Product Banner"
                />
                <div className="card-img-overlay text-center py-5 my-4">
                  <h4 className="">BEST CHOICE</h4>
                  <h1 className="card-title py-3">The Last Sales</h1>
                  <Link to="/products"><button className="custom-btn">SHOP NOW</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-5">
            <div className="product-items">
              
              {
                showProducts.map( product => ( <div className="product">
                <img className="img-blur" src={product.productImg} alt="" />
                <p className="py-1 text-secondary">{product.productName}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p>${product.productPrice}</p>
                  <p className="sub_btn d-inline-block">BUY NOW</p>
                </div>
              </div> ) ).slice(0, 4)
              }
              
              

              {/* <div className="product">
                <img className="img-blur" src="/product/1.jpg" alt="" />
                <p className="py-1 text-secondary">Bobber Table Lamp</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p>$165.58</p>
                  <p className="sub_btn d-inline-block">BUY NOW</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-6">
          <div className="bottom">
            <div className="card text-black">
              <img
                src="/product/banner-2.jpg"
                className="card-img bottom"
                alt="Product Banner"
              />
              <div className="card-img-overlay d-flex align-items-end p-5 my-4">
                <div className="bottom-banner">
                  <h1 className="card-title py-3">Sunset Lamp</h1>
                  <Link to="/products"><div className="sub_btn">Shop Now</div></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bottom">
            <div className="card text-black">
              <img
                src="/product/banner-3.jpeg"
                className="card-img bottom"
                alt="Product Banner"
              />
              <div className="card-img-overlay d-flex align-items-end p-5 my-4">
                <div className="bottom-banner">
                  <h1 className="card-title py-3">Sofia Collection</h1>
                  <Link to="/products"><div className="sub_btn">Shop Now</div></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter></Newsletter>
    </div>
  );
}
