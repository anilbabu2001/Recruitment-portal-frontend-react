function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-light text-dark text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">About HireUp</h1>
          <p className="lead">
            Your trusted partner in connecting top talent with leading employers.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-vector/gradient-our-mission-concept-illustrated_23-2149081668.jpg"
              alt="Our Mission"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">Our Mission</h2>
            <p>
              At HireUp, our mission is to simplify the hiring process. We
              empower job seekers to showcase their skills while giving employers
              the right tools to find, evaluate, and hire the best candidates.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Core Values</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded h-100 shadow-sm">
                <h5 className="fw-bold">Transparency</h5>
                <p>We ensure an open and fair recruitment process.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded h-100 shadow-sm">
                <h5 className="fw-bold">Efficiency</h5>
                <p>Streamlined workflows to save time for job seekers and employers.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded h-100 shadow-sm">
                <h5 className="fw-bold">Innovation</h5>
                <p>Modern tools that adapt to the changing recruitment landscape.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5">
        <div className="container">
          <h2 className="mb-3">Ready to get started?</h2>
          <p className="mb-4">
            Whether you’re looking for your dream job or the right candidate,
            HireUp is here to help.
          </p>
          <a href="/register" className="btn btn-primary btn-lg me-2">
            Join Now
          </a>
          <a href="/jobs" className="btn btn-outline-primary btn-lg">
            Browse Jobs
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
