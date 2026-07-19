import React from "react";

function Blog() {
  const blogs = [
    {
      title: "Modern Web Design Trends in 2026",
      date: "July 15, 2026",
      author: "John Doe",
      image: "https://picsum.photos/600/400?random=11",
    },
    {
      title: "Why React is the Future of Frontend Development",
      date: "July 10, 2026",
      author: "John Doe",
      image: "https://picsum.photos/600/400?random=12",
    },
    {
      title: "Bootstrap vs Tailwind CSS: Which One Should You Choose?",
      date: "July 5, 2026",
      author: "John Doe",
      image: "https://picsum.photos/600/400?random=13",
    },
  ];

  return (
    <section id="blog" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-primary text-uppercase fw-bold">
            Blog
          </h6>

          <h2 className="fw-bold">
            Latest Articles
          </h2>

          <p className="text-muted">
            Sharing knowledge, tutorials and web development tips.
          </p>
        </div>

        <div className="row g-4">

          {blogs.map((blog, index) => (
            <div className="col-lg-4 col-md-6" key={index}>

              <div className="card border-0 shadow h-100">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="card-img-top"
                />

                <div className="card-body">

                  <small className="text-muted">
                    {blog.date} | {blog.author}
                  </small>

                  <h4 className="mt-3">
                    {blog.title}
                  </h4>

                  <p className="text-muted">
                    Learn the latest techniques, trends, and best practices
                    in modern web development.
                  </p>

                  <button className="btn btn-primary">
                    Read More
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

export default Blog;