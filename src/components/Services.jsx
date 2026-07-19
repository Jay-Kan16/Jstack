import React from "react";

function Services() {
  const services = [
    {
      icon: "bi-code-slash",
      title: "Web Development",
      description:
        "Modern, responsive, and high-performance websites using React and Bootstrap.",
    },
    {
      icon: "bi-palette",
      title: "UI / UX Design",
      description:
        "Clean, attractive, and user-friendly interfaces with excellent user experience.",
    },
    {
      icon: "bi-phone",
      title: "Responsive Design",
      description:
        "Websites that look perfect on desktop, tablet, and mobile devices.",
    },
    {
      icon: "bi-speedometer2",
      title: "Performance",
      description:
        "Fast-loading and SEO-friendly websites optimized for speed.",
    },
    {
      icon: "bi-laptop",
      title: "Frontend Development",
      description:
        "Interactive web applications using React, JavaScript, and Bootstrap.",
    },
    {
      icon: "bi-gear",
      title: "Maintenance",
      description:
        "Website updates, bug fixes, and long-term technical support.",
    },
  ];

  return (
    <section id="services" className="py-5 bg-white">
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold text-uppercase">
            Services
          </h6>

          <h2 className="fw-bold">
            What I Can Do
          </h2>

          <p className="text-muted">
            Professional solutions for your business.
          </p>
        </div>

        <div className="row g-4">

          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card border-0 shadow h-100 text-center p-4">

                <div className="mb-3">
                  <i
                    className={`bi ${service.icon} text-primary`}
                    style={{ fontSize: "50px" }}
                  ></i>
                </div>

                <h4 className="fw-bold">
                  {service.title}
                </h4>

                <p className="text-muted">
                  {service.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;