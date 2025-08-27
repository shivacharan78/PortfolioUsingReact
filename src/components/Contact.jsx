import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-purple">Contact Me</h2>
            <div className="border-bottom border-purple mx-auto mb-4" style={{width: '60px', height: '3px'}}></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-5">
            <h4 className="text-purple mb-4">Get In Touch</h4>
            <div className="mb-4">
              <h6 className="text-purple"><i className="fas fa-envelope me-2"></i>Email</h6>
              <p><a href="mailto:shivacharanvadla92@gmail.com" className="text-decoration-none">shivacharanvadla92@gmail.com</a></p>
            </div>
            <div className="mb-4">
              <h6 className="text-purple"><i className="fas fa-phone me-2"></i>Phone</h6>
              <p><a href="tel:+919848572998" className="text-decoration-none">+91 9848572998</a></p>
            </div>
            <div className="mb-4">
              <h6 className="text-purple mb-3">Follow Me</h6>
              <div className="d-flex gap-3">
                <a href="https://www.linkedin.com/in/vadla-shiva-charan-681a66257/" className="btn btn-outline-purple" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/shivacharan78" className="btn btn-outline-purple" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-light p-4 rounded">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button onClick={handleSubmit} className="btn btn-purple">
                <i className="fas fa-paper-plane me-2"></i>Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;