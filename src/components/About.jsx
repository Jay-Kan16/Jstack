import React from "react";

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">


          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src="https://yt3.googleusercontent.com/YGMeFv2kogrM0cNAyI7N1HJoq0IcoA4ZmImE6GkHWpn0Ea6AxLWeSeTuyEySjemxq567G9uQEdo=s900-c-k-c0x00ffffff-no-rj"
              alt="About"
              className="img-fluid rounded-4 shadow"
            />
          </div>

         
          <div className="col-lg-7">

            <h6 className="text-primary text-uppercase fw-bold">
              About Me
            </h6>

            <h2 className="fw-bold mb-4">
              I'm a Creative Web Designer &
              <span className="text-primary"> Developer</span>
            </h2>

            <p className="text-muted mb-4">
              I create modern, responsive, and visually appealing websites
              using React, Bootstrap, and the latest web technologies.
              My focus is on building fast, user-friendly, and scalable
              applications.
            </p>

            <div className="row g-4">

              <div className="col-md-6">
                <div className="border rounded-3 p-3 h-100">

                  <h3 className="text-primary fw-bold">
                    3+
                  </h3>

                  <p className="mb-0">
                    Years Experience
                  </p>

                </div>
              </div>

              <div className="col-md-6">
                <div className="border rounded-3 p-3 h-100">

                  <h3 className="text-primary fw-bold">
                    120+
                  </h3>

                  <p className="mb-0">
                    Projects Completed
                  </p>

                </div>
              </div>

              <div className="col-md-6">
                <div className="border rounded-3 p-3 h-100">

                  <h3 className="text-primary fw-bold">
                    80+
                  </h3>

                  <p className="mb-0">
                    Happy Clients
                  </p>

                </div>
              </div>

              <div className="col-md-6">
                <div className="border rounded-3 p-3 h-100">

                  <h3 className="text-primary fw-bold">
                    15+
                  </h3>

                  <p className="mb-0">
                    Awards Won
                  </p>

                </div>
              </div>

            </div>

            <a href="#" className="btn btn-primary mt-4 px-4">
              Download Resume
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;