import React from "react";
import "../App.css";

export default function Home() {
  return (
    <div className="container">
      <header className="App-header">
        <img src="/logo.png" className="App-logo my-5" alt="logo" />
      </header>
      <div className="text-center header-text">
        <h1 className="fw-bolder my-4 header-text"> The WoodCraft Shop </h1>
        <p>Shop Now</p>
      </div>
      <div className="container my-4">
        <img
          src="/banner.jpg"
          className="d-block mx-auto banner-img"
          alt="Banner"
        />
      </div>
      <div className="row g-5">
        <div className="col-md-6">
          <div className="hero-info">
            <div className="py-5 hero-text d-flex flex-column justify-content-center align-items-center">
              <h1>New Arrivals</h1>
              <p className="text-secondary">Find a bright ideal to suit your taste with our great.</p>
              <div>
                <span className="sub_btn me-3">Lightings</span> <span className="sub_btn">Furnitures</span>
              </div>
            </div>
            <img className="img-fluid" src="hero_2.jpeg" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="hero-banner">
            <img className="img-fluid" src="hero_1.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
