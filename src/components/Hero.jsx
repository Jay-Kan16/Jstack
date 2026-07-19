import React from "react";

function Hero() {
  return (
    <section id="hero" className="hero py-5">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          <div className="col-lg-6 text-center text-lg-start">

            <span className="badge bg-warning text-dark px-3 py-2 mb-3">
              👋 Hello, I'm
            </span>

            <h1 className="display-3 fw-bold mt-3">
              JAYESH <span className="text-primary">DANGI</span>
            </h1>

            <h3 className="text-secondary mb-4">
              Creative UI/UX Designer
            </h3>

            <p className="lead text-muted mb-4">
              I design beautiful, responsive, and user-friendly websites
              that help businesses grow online.
            </p>

            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <a href="#portfolio" className="btn btn-primary btn-lg px-4">
                View Portfolio
              </a>

              <a
                href="#contact"
                className="btn btn-outline-dark btn-lg px-4"
              >
                Hire Me
              </a>
            </div>

            <div className="mt-5 d-flex gap-3 justify-content-center justify-content-lg-start">

              <a href="#">
                <i className="bi bi-facebook fs-3"></i>
              </a>

              <a href="#">
                <i className="bi bi-instagram fs-3"></i>
              </a>

              <a href="#">
                <i className="bi bi-linkedin fs-3"></i>
              </a>

              <a href="#">
                <i className="bi bi-github fs-3"></i>
              </a>

            </div>

          </div>

          <div className="col-lg-6 text-center mt-5 mt-lg-0">

            <img
              src="https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6ed912d437c075e28e96b4163f9363c9dacc76b059373ce68f81b0b89a7ed18374597707831ace324f7b1b87b9e0bb29e5370129335deddef0ccc9c2785c5f4eb5"
              alt="Profile"
              className="img-fluid rounded-circle shadow"
              style={{
                width: "420px",
                height: "420px",
                objectFit: "cover",
              }}
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;