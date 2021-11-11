import React from "react";

export default function Account() {
  return (
    <div className="container">
      <div className="breadcrumb d-flex">
        <p>My Account</p>
      </div>
      <div className="my-account my-5 py-4">
        <div className="row g-5">
          <div className="col-md-6">
            <div className="login">
              <h1 className="py-2"> Login </h1>

              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control extra-padding"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control extra-padding"
                  id="password"
                  placeholder="Password"
                />
              </div>

              <span className="account-btn d-block text-center extra-padding"> Login </span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="Register">
              <h1 className="py-2">Register</h1>

              <div className="mb-3">
                <label for="regiemail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control extra-padding"
                  id="regiemail"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="regipassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control extra-padding"
                  id="regipassword"
                  placeholder="Password"
                />
              </div>

              <span className="account-btn d-block text-center extra-padding"> Register </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
