function Projects() {
  const projects = [
    {
      title: "Employee Management System",
      description: "A comprehensive web application for managing employee data with CRUD operations, built using Java Spring Boot and React.",
      techStack: ["Java", "Spring Boot", "React.js", "MySQL", "Bootstrap"],
      github: "https://github.com/shivacharan78/Employee-Management-System-MINIPROJECT"
    },
    {
      title: "Student Management System",
      description: "A full-stack application for managing student information, courses, and academic records with secure authentication.",
      techStack: ["Java", "Spring MVC", "Hibernate", "MySQL", "HTML/CSS"],
      github: "https://github.com/shivacharan78/SPRING-MVC-MINIPROJECT"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-purple">Projects</h2>
            <div className="border-bottom border-purple mx-auto mb-4" style={{width: '60px', height: '3px'}}></div>
          </div>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-purple fw-bold">{project.title}</h5>
                  <p className="card-text mb-3">{project.description}</p>
                  <div className="mb-3">
                    <h6 className="text-muted mb-2">Tech Stack:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="badge bg-purple text-white">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top-0">
                  <a href={project.github} className="btn btn-purple" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github me-2"></i>View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
