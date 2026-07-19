import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, Tech Solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Working with this developer was an amazing experience. The website was delivered on time with excellent quality.",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Professional, creative, and highly skilled. I highly recommend their services for any web project.",
    },
    {
      name: "David Wilson",
      role: "Startup Founder",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      review:
        "Outstanding work! The UI is beautiful, responsive, and exactly what we wanted for our business.",
    },
  ];

  return (
    <section id="testimonials" className="py-5 bg-white">
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold text-uppercase">
            Testimonials
          </h6>

          <h2 className="fw-bold">
            What My Clients Say
          </h2>

          <p className="text-muted">
            Feedback from clients I've worked with.
          </p>
        </div>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >

          <div className="carousel-inner">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === 0 ? "active" : ""
                }`}
              >

                <div className="card border-0 shadow text-center p-5 mx-auto"
                  style={{ maxWidth: "750px" }}>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-circle mx-auto mb-4"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />

                  <p className="lead fst-italic">
                    "{item.review}"
                  </p>

                  <h4 className="mt-4 mb-1">
                    {item.name}
                  </h4>

                  <span className="text-muted">
                    {item.role}
                  </span>

                </div>

              </div>
            ))}

          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;