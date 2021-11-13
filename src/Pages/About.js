import React from "react";
import { Link } from "react-router-dom";



export default function About() {
  return (
    <div className="container">
      <div className="breadcrumb d-flex">
        <p>About</p>
      </div>
      <div className="my-5 contact d-flex justify-content-between align-items-center">
        <div>
          <div className="about-info my-5">
            <h1 className="py-2">About Us</h1>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              accusantium illum impedit rerum distinctio ratione minima, rem
              tenetur exercitationem. Doloribus!
            </p>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              accusantium illum impedit rerum distinctio ratione minima, rem
              tenetur exercitationem. Doloribus!
            </p>
            <Link to="/contact"><div className="account-btn">Contact Us</div></Link>
          </div>
        </div>
        <div>
          <div className="about-image">
            <img
              style={{ width: "280px" }}
              className="about-img d-block ms-auto"
              src="https://emonahmed.com/programming-hero/12/about.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
