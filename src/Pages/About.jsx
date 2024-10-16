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
            Woodcraft is responding to COVID-19 by providing customers with essential services such as curbside pickup at our store locations for your safety and convenience. Please contact your local store for details. Woodcraft.com is open 24/7 with normal delivery times to meet your needs. Click here to learn more.
            </p>
            <p className="text-secondary">
            Woodcraft Supply, LLC is one of the nation's oldest and largest suppliers of quality woodworking tools and supplies. You'll find Woodcraft stores in more than 70 major metropolitan areas across the U.S.; and Woodcraft annually distributes 1.5 million catalogs featuring more than 8,000 items to all 50 states and 117 foreign countries. 
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
