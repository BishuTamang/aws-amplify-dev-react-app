import React from "react";

export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="container-fluid my-5 px-4">
        <h1 className="text-center mb-4">About Us</h1>
        <div className="row d-flex justify-content-center pt-5 pb-5">
          <div className="col-12 col-lg-10">
            <div className="card shadow-lg border-0 w-100">
              <div className="row g-0">
                {/* Left Image Section */}
                <div className="col-sm-12 col-lg-6">
                  <img
                    src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
                    className="img-fluid rounded-start"
                    style={{ objectFit: "cover", height: "100%" }}
                    alt="Beautiful Lake"
                  />
                </div>
                {/* Right Content Section */}
                <div className="col-sm-12 col-lg-6 d-flex align-items-center">
                  <div className="card-body p-4">
                    <h3 className="text-primary">24 Years of Warm Welcome</h3>
                    <p className="text-muted mt-3">
                      Our story began 24 years ago with the simple goal of
                      creating unforgettable experiences for our guests. Since
                      then, we've been dedicated to providing top-notch
                      services, warm hospitality, and cherished memories for
                      everyone who walks through our doors.
                    </p>
                    <p className="text-muted">
                      Whether it's a family vacation, a business retreat, or a
                      solo adventure, we strive to make every moment special.
                      Join us and become part of our journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
