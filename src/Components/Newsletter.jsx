import React from "react";

export default function Newsletter() {
  return (
    <div className="container">
      <div className="newsletter text-center my-5 pt-2 pb-5">
        <h2 className="pt-5 mt-5">Newsletter</h2>
        <p className="text-secondary my-3">
          Get timely updates from your favorite products
        </p>
        <div className="mt-4 mb-5">
          <input
            className="input text-secondary"
            placeholder="Your Email Address"
            type="text"
          />
          <span className="sub_btn ms-3">SUBSCRIBE</span>
        </div>
      </div>
    </div>
  );
}
