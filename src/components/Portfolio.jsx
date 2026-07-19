import React from "react";

function Portfolio() {
  const projects = [
    {
      title: "Portfolio Website",
      category: "Web Development",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      title: "E-Commerce Website",
      category: "React Project",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      title: "Dashboard UI",
      category: "UI / UX Design",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      title: "Restaurant Website",
      category: "Bootstrap",
      image: "https://picsum.photos/600/400?random=4",
    },
    {
      title: "Travel Website",
      category: "Frontend",
      image: "https://picsum.photos/600/400?random=5",
    },
    {
      title: "Agency Landing Page",
      category: "React",
      image: "https://picsum.photos/600/400?random=6",
    },
  ];

  return (
    <section id="portfolio" className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold text-uppercase">
            Portfolio
          </h6>

          <h2 className="fw-bold">
            My Latest Projects
          </h2>

          <p className="text-muted">
            A selection of websites and applications I've built.
          </p>
        </div>

        <div className="row g-4">

          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card shadow border-0 h-100">

                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />

                <div className="card-body">

                  <h5 className="fw-bold">
                    {project.title}
                  </h5>

                  <p className="text-muted">
                    {project.category}
                  </p>

                  <button className="btn btn-outline-primary">
                    View Project
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Portfolio;