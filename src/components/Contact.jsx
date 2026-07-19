import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold text-uppercase">
            Contact
          </h6>

          <h2 className="fw-bold">
            Let's Work Together
          </h2>

          <p className="text-muted">
            Have a project in mind? Feel free to contact me.
          </p>
        </div>

        <div className="row">

          <div className="col-lg-5 mb-5">

            <div className="mb-4">
              <h4>
                <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                Address
              </h4>

              <p className="text-muted">
                Udaipur, Rajasthan, India
              </p>
            </div>

            <div className="mb-4">
              <h4>
                <i className="bi bi-envelope-fill text-primary me-2"></i>
                Email
              </h4>

              <p className="text-muted">
                jayeshdangi@email.com
              </p>
            </div>

            <div className="mb-4">
              <h4>
                <i className="bi bi-telephone-fill text-primary me-2"></i>
                Phone
              </h4>

              <p className="text-muted">
                +91 9696969696
              </p>
            </div>

            <div className="d-flex gap-3 mt-4">

              <a href="#" className="btn btn-outline-primary rounded-circle">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" className="btn btn-outline-danger rounded-circle">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="btn btn-outline-info rounded-circle">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#" className="btn btn-outline-dark rounded-circle">
                <i className="bi bi-github"></i>
              </a>

            </div>

          </div>
          <div className="col-lg-7">

            <form>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>

              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button className="btn btn-primary px-5">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;