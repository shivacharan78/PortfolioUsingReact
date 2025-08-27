function Experience() {
  const experiences = [
    {
      title: "Full Stack Java Developer",
      company: "TalentXP",
      period: "Apr 2025 – Present",
      type: "Internship",
      responsibilities: [
        "Developing full-stack web applications using Java Spring Boot and React.js",
        "Implementing RESTful APIs and microservices architecture",
        "Working with databases for data management and optimization",
        "Collaborating with cross-functional teams in Agile environment"
      ]
    },
    {
      title: "Full Stack Java Developer",
      company: "Naresh IT",
      period: "Jul 2024 – Jul 2025",
      type: "Training",
      responsibilities: [
        "Completed comprehensive training in Java Full Stack development",
        "Built projects using Spring Boot, Spring MVC, and Hibernate",
        "Developed responsive web interfaces using HTML, CSS, JavaScript, and React",
        "Gained hands-on experience with database design and SQL queries"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-purple">Experience</h2>
            <div className="border-bottom border-purple mx-auto mb-4" style={{width: '60px', height: '3px'}}></div>
          </div>
        </div>
        <div className="row g-4">
          {experiences.map((exp, index) => (
            <div key={index} className="col-lg-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-header bg-purple text-white">
                  <h5 className="card-title mb-1">{exp.title}</h5>
                  <p className="mb-0">{exp.company} • {exp.type}</p>
                </div>
                <div className="card-body">
                  <p className="text-muted mb-3">
                    <i className="fas fa-calendar-alt me-2"></i>{exp.period}
                  </p>
                  <ul className="list-unstyled">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="mb-2">
                        <i className="fas fa-check text-purple me-2"></i>
                        {resp}
                      </li>
                    ))}
                  </ul>
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