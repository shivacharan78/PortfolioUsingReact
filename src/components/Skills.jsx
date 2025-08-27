function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C","Java"],
      icon: "fas fa-code"
    },
    {
      title: "Java Technologies",
      skills: ["JDBC","Servlets","JSP","Java EE"],
    //   skills: [, , "Spring Security", "Hibernate", "JPA"],

      icon: "fab fa-java"
    },
    {
      title: "Frameworks",
      skills: ["Spring","Spring Boot","Spring Data JPA","Spring MVC","Hibernate","React.js"],
      icon: "fas fa-layer-group"
    },
    {
      title: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js 19", "Bootstrap"],
      icon: "fas fa-palette"
    },
    {
      title: "Databases",
      skills: ["MySQL","Oracle"],
      icon: "fas fa-database"
    },
    {
      title: "Tools & IDEs",
      skills: ["Eclipse","STS","VS Code", "Git", "GitHub","Postman","Swagger"],
      icon: "fas fa-tools"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-purple">Skills</h2>
            <div
              className="border-bottom border-purple mx-auto mb-4"
              style={{ width: "60px", height: "3px" }}
            ></div>
          </div>
        </div>
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div className="text-purple mb-3">
                    <i className={`${category.icon} fa-3x`}></i>
                  </div>
                  <h5 className="card-title text-purple fw-bold">{category.title}</h5>
                  <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>
                        <span
                          className="badge rounded-pill px-3 py-2"
                          style={{
                            backgroundColor: "#6f42c1", // purple background
                            color: "#fff",              // white text
                            border: "1px solid #6f42c1",
                            fontWeight: "500"
                          }}
                        >
                          {skill}
                        </span>
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

export default Skills;
