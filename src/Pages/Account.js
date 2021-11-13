import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useHistory, useLocation } from "react-router-dom";
export default function Account() {
  const [loginData, setLoginData] = useState({});
  const [regiData, setRegiData] = useState({});
  const { regiUser, loginUser, loading, user, error } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleLog = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const loginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
  };

  const handleRegi = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...regiData };
    newLoginData[field] = value;
    setRegiData(newLoginData);
  };

  const registerSubmit = (e) => {
    regiUser(regiData.email, regiData.password, location, history);
  };

  return (
    <div className="container">
      <div className="breadcrumb d-flex">
        <p>My Account</p>
      </div>
      {!loading && (
        <div className="my-account my-5 py-4">
          <div className="row g-5">
            <div className="col-md-6">
              <div className="login">
                <h1 className="py-2"> Login </h1>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    name="email"
                    onChange={handleLog}
                    type="email"
                    className="form-control extra-padding"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    name="password"
                    onChange={handleLog}
                    type="password"
                    className="form-control extra-padding"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <span
                  onClick={loginSubmit}
                  className="account-btn d-block text-center extra-padding"
                >
                  Login
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="Register">
                <h1 className="py-2">Register</h1>

                <div className="mb-3">
                  <label htmlFor="regiemail" className="form-label">
                    Email address
                  </label>
                  <input
                    name="email"
                    onChange={handleRegi}
                    type="email"
                    className="form-control extra-padding"
                    id="regiemail"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="regipassword" className="form-label">
                    Password
                  </label>
                  <input
                    name="password"
                    onChange={handleRegi}
                    type="password"
                    className="form-control extra-padding"
                    id="regipassword"
                    placeholder="Password"
                  />
                </div>

                <span
                  onClick={registerSubmit}
                  className="account-btn d-block text-center extra-padding"
                >
                  Register
                </span>
              </div>
            </div>
          </div>
          {user?.email && (
            <div className="my-3 alert alert-success" role="alert">
              You Logged Successfully.
            </div>
          )}
          {error && (
            <div class="my-3 alert alert-danger" role="alert">
              {error}
            </div>
          )}
        </div>
      )}
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
