import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <div className="breadcrumb d-flex">
        <p>Contact</p>
      </div>
      <div className="my-5 contact d-flex justify-content-between align-items-center">
        <div>
          <div className="about-info my-5">
            <h1 className="py-2">Contact Us</h1>

            <div className="contact-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                placeholder="Your Message"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="account-btn">Send Now</div>
          </div>
        </div>
        <div>
          <div className="about-image">
            <img
              style={{ width: "320px" }}
              className="about-img d-block ms-auto"
              src="/contact.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
