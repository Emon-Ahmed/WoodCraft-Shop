import React from "react";
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
                {" "}
                <FontAwesomeIcon icon={faFacebook} />{" "}
              </div>
              <div className="mx-2">
                {" "}
                <FontAwesomeIcon icon={faTwitter} />{" "}
              </div>
              <div className="mx-2">
                {" "}
                <FontAwesomeIcon icon={faInstagram} />{" "}
              </div>
              <div className="mx-2">
                {" "}
                <FontAwesomeIcon icon={faPinterest} />{" "}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-menu text-secondary d-flex justify-content-end">
              <div className="mx-3"> About Us </div>
              <div className="mx-3"> Blog </div>
              <div className="mx-3"> FAQs </div>
              <div className="mx-3"> Contact </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
