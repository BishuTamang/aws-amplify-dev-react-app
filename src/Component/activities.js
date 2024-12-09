import React from "react";

export default class Activities extends React.Component {
  render() {
    return (
      <div className="container-fluid my-5 px-4">
        {/* Header */}
        <h1 className="text-center mb-4 text-primary fs-3">Activities</h1>

        {/* Features List */}
        <div className="row justify-content-center mb-5">
          {[
            "Home Brewery",
            "Coffee Bar",
            "Restaurant",
            "Room Service",
            "24x7 Reception",
            "Car Rental",
            "Hair Dryer",
            "Secure Wi-Fi",
          ].map((activity, index) => (
            <div key={index} className="col-auto px-2 py-1">
              <h6 className="fs-5">{activity}</h6>
            </div>
          ))}
        </div>

        {/* Activity Cards */}
        <div className="row gy-4">
          {[
            "Linens",
            "Toiletries",
            "Breakfast",
            "Swimming Pool",
            "Wellness Spa",
            "Fine Dining",
            "In-house Bar",
            "Banquet Hall",
          ].map((title, index) => (
            <div key={index} className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex justify-content-center align-items-center text-center">
                  <h5 className="card-title text-primary fs-4">{title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
