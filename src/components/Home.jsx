function Home() {
  return (
    <section
      id="home"
      className="bg-purple text-white section-padding"
      style={{ paddingTop: "120px" }}
    >
      <div className="container">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-6">
            <div className="fade-in">
              <h1 className="display-4 fw-bold mb-3">Vadla Shiva Charan</h1>
              <h2 className="h3 mb-4">Full Stack Java Developer</h2>
              <p className="lead mb-4">
                Passionate Full Stack Java Developer with expertise in Spring
                Boot, React, and modern web technologies. Ready to build
                scalable and innovative solutions.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="public/shiva.pdf" className="btn btn-light btn-lg" download>
                  <i className="fas fa-download me-2"></i>Download Resume
                </a>
                <a href="#contact" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-user me-2"></i>Hire Me
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="fade-in">
              <div
                className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center"
                style={{ width: "300px", height: "300px" }}
              >
                <img
                  src="public/photo.png" //your image filename
                  alt="Vadla Shiva Charan"
                  className="rounded-circle"
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
