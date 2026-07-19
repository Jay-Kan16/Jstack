import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", value: 95 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 88 },
    { name: "React JS", value: 92 },
    { name: "Bootstrap", value: 90 },
    { name: "Node JS", value: 80 },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold text-uppercase">
            Skills
          </h6>

          <h2 className="fw-bold">
            My Technical Skills
          </h2>

          <p className="text-muted">
            Technologies and tools I use to create modern websites.
          </p>
        </div>

        <div className="row align-items-center">

          <div className="col-lg-6 mb-4">
            <h3 className="fw-bold mb-4">
              Professional Skills
            </h3>

            <p className="text-muted">
              I specialize in creating fast, responsive and attractive web
              applications using modern technologies.
            </p>

            <p className="text-muted">
              My goal is to deliver high-quality solutions with clean code,
              great performance and excellent user experience.
            </p>

            <a href="#contact" className="btn btn-primary mt-3">
              Hire Me
            </a>
          </div>


          <div className="col-lg-6">

            {skills.map((skill, index) => (

              <div key={index} className="mb-4">

                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-semibold">
                    {skill.name}
                  </span>

                  <span>
                    {skill.value}%
                  </span>
                </div>

                <div className="progress" style={{ height: "10px" }}>

                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: `${skill.value}%` }}
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;