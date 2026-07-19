import React from "react";

function Experience() {
  const experience = [
    {
      year: "2025 - Present",
      title: "Senior Frontend Developer",
      company: "Creative Studio",
      description:
        "Developing modern React applications, improving performance, and leading frontend development.",
    },
    {
      year: "2024 - 2025",
      title: "React Developer",
      company: "Tech Solutions",
      description:
        "Built responsive web applications using React, Bootstrap, and REST APIs.",
    },
    {
      year: "2023 - 2024",
      title: "UI / UX Designer",
      company: "Design Agency",
      description:
        "Designed user-friendly interfaces, prototypes, and responsive website layouts.",
    },
    {
      year: "2022 - 2023",
      title: "Web Designer",
      company: "Freelancer",
      description:
        "Created websites for clients using HTML, CSS, JavaScript, and Bootstrap.",
    },
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold text-uppercase">
            Experience
          </h6>

          <h2 className="fw-bold">
            My Journey
          </h2>

          <p className="text-muted">
            My professional experience over the years.
          </p>
        </div>

        <div className="row">

          {experience.map((item, index) => (
            <div className="col-md-6 mb-4" key={index}>

              <div className="card shadow border-0 h-100">

                <div className="card-body">

                  <span className="badge bg-primary mb-3">
                    {item.year}
                  </span>

                  <h4 className="fw-bold">
                    {item.title}
                  </h4>

                  <h6 className="text-secondary">
                    {item.company}
                  </h6>

                  <p className="text-muted mt-3">
                    {item.description}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;