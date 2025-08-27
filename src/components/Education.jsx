function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "KPRIT, Hyderabad",
      period: "2020 – 2024",
      grade: "6.7 CGPA"
    },
    {
      degree: "Intermediate (M.P.C)",
      institution: "Sree Sandeepani Jr College",
      period: "2018 – 2020",
      grade: "7.2 CGPA"
    },
    {
      degree: "Schooling",
      institution: "Krishnaveni Talent School",
      period: "2017 – 2018",
      grade: "8.7 CGPA"
    }
  ];

  return (
    <section id="education" className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-purple">Education</h2>
            <div className="border-bottom border-purple mx-auto mb-4" style={{width: '60px', height: '3px'}}></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <ul className="timeline">
              {educationData.map((edu, index) => (
                <li key={index}>
                  <div className="timeline-badge">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title text-purple fw-bold">{edu.degree}</h4>
                      <p className="text-muted mb-2">{edu.institution}</p>
                    </div>
                    <div className="timeline-body">
                      <p className="mb-1"><strong>Period:</strong> {edu.period}</p>
                      <p className="mb-0"><strong>Grade:</strong> {edu.grade}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;