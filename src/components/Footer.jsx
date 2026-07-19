import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">

      <div className="container">

        <div className="row">

          <div className="col-lg-4 mb-4">

            <h3 className="fw-bold">
              About Me
            </h3>

            <p className="text-light mt-3">
              I build beautiful, responsive and modern websites using
              React, Bootstrap and the latest web technologies.
            </p>

          </div>
          <div className="col-lg-4 mb-4">

            <h4 className="mb-3">
              Quick Links
            </h4>

            <ul className="list-unstyled">

              <li className="mb-2">
                <a href="#hero" className="text-white text-decoration-none">
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a href="#about" className="text-white text-decoration-none">
                  About
                </a>
              </li>

              <li className="mb-2">
                <a href="#services" className="text-white text-decoration-none">
                  Services
                </a>
              </li>

              <li className="mb-2">
                <a href="#portfolio" className="text-white text-decoration-none">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          <div className="col-lg-4 mb-4">

            <h4 className="mb-3">
              Follow Me
            </h4>

            <div className="d-flex gap-3">

              <a href="#" className="btn btn-outline-light rounded-circle">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" className="btn btn-outline-light rounded-circle">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="btn btn-outline-light rounded-circle">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#" className="btn btn-outline-light rounded-circle">
                <i className="bi bi-github"></i>
              </a>

            </div>

          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">

          <p className="mb-0">
            © {new Date().getFullYear()} Portfolio.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;