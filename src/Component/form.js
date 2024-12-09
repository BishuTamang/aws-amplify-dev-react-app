import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center vh-75 pt-5 pb-5"
        style={{ backgroundColor: "#4e4978" }}
      >
        <div className="card w-50">
          <div className="row g-0">
            <div className="col-lg-6 p-4">
              <div className="mb-3">
                <input
                  type="name"
                  className="form-control"
                  placeholder="Name"
                ></input>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                ></input>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
              </div>
              <a
                className="btn btn-primary text-center w-100"
                href="#"
                role="button"
              >
                Send
              </a>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center p-4">
              <div className="card-body text-center">
                <h3>Ask Your Queries</h3>
                <p>or</p>
                <a
                  className="btn btn-primary text-center"
                  href="#"
                  role="button"
                >
                  Make A Query
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
