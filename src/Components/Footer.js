import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="mobile-footer row py-4">
          <div className="col-md-4">
            <div className="footer-text text-secondary">
              <p>
                © 2021 <span className="text-black">WOODCRAFT</span>. All Rights
                Reserved
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-icons text-secondary d-flex justify-content-center">
              <div className="mx-2">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="mx-2">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="mx-2">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="mx-2">
                <FontAwesomeIcon icon={faPinterest} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-menu text-secondary d-flex justify-content-end">
              <div className="mx-3 text-decoration-none footer-text">
                <Link to="/"> Home </Link>
              </div>

              <div className="mx-3 text-decoration-none footer-text">
                <Link to="/blogs"> Blogs </Link>
              </div>
              <div className="mx-3 text-decoration-none footer-text">
                <Link to="/about"> About </Link>
              </div>

              <div className="mx-3 text-decoration-none footer-text">
                <Link to="/contact"> Contact </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
