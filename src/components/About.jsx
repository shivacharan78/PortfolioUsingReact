function About() {
  return (
    <section id="about" className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-purple">About Me</h2>
            <div
              className="border-bottom border-purple mx-auto mb-4"
              style={{ width: "60px", height: "3px" }}
            ></div>
          </div>
        </div>

        {/* Centered text content */}
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="fs-5 mb-4">
              I am a dedicated and passionate Full Stack Java Developer with a
              strong foundation in computer science and hands-on experience in
              modern web development technologies.
            </p>
            <p className="fs-6 mb-4">
              Currently working as a Full Stack Java Developer Intern at
              TalentXP, I specialize in building scalable web applications using
              Java, Spring Boot, React, and various databases. My goal is to
              contribute to innovative projects while continuously learning and
              growing in the tech industry.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://www.linkedin.com/in/vadla-shiva-charan-681a66257/"
                className="btn btn-outline-purple"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin me-2"></i>LinkedIn
              </a>
              <a
                href="https://github.com/shivacharan78"
                className="btn btn-outline-purple"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github me-2"></i>GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
