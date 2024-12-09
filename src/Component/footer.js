import React from "react";
// import "./Footer.css"; // Optional external CSS for custom styles

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="bg-dark text-light py-4">
        <div className="container">
          <div className="row text-center text-md-start">
            {/* Useful Links Section */}
            <div className="col-12 col-md-4 mb-4">
              <h5 className="text-uppercase mb-3">Useful Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="http://localhost:3000/Resume%20(2).pdf"
                    download="Resume.pdf"
                    className="text-light text-decoration-none"
                  >
                    <i className="fa fa-file-pdf me-2"></i> Download Resume
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    <i className="fa fa-angle-double-right me-2"></i> Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    <i className="fa fa-angle-double-right me-2"></i> Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    <i className="fa fa-angle-double-right me-2"></i> Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    <i className="fa fa-angle-double-right me-2"></i> About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    <i className="fa fa-angle-double-right me-2"></i> Videos
                  </a>
                </li>
              </ul>
            </div>

            {/* Get in Touch Section */}
            <div className="col-12 col-md-4 mb-4">
              <h5 className="text-uppercase mb-3">Get in Touch</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="mailto:zotravo.info@gmail.com" className="text-light text-decoration-none">
                    <i className="fa fa-envelope me-2"></i> zotravo.info@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+12098123432" className="text-light text-decoration-none">
                    <i className="fa fa-phone me-2"></i> +120-98123432
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="col-12 text-center">
              <h5 className="text-uppercase mb-3">Follow Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-light">
                    <i className="fa fa-facebook fa-lg"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-light">
                    <i className="fa fa-twitter fa-lg"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-light">
                    <i className="fa fa-instagram fa-lg"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-light">
                    <i className="fa fa-google-plus fa-lg"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-light">
                    <i className="fa fa-envelope fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-light my-4" />

          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
