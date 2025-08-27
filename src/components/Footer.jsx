function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-purple text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p className="mb-0">© {currentYear} Vadla Shiva Charan. All rights reserved.</p>
          </div>
          <div className="col-lg-6">
            <ul className="list-inline text-lg-end mb-0">
              <li className="list-inline-item"><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li className="list-inline-item"><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li className="list-inline-item"><a href="#skills" className="text-white text-decoration-none">Skills</a></li>
              <li className="list-inline-item"><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
