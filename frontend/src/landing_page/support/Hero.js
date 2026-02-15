import React from "react";

function Hero() {
  return (
    <section id="supportHero" className="container-fluid">
      <div className="container py-5">

        {/* Top bar */}
        <div className="d-flex justify-content-between align-items-center mb-5 ">
          <h4 className="mb-0">Support Portal</h4>
          
          <a href="#" style={{fontSize:"15px"}}>Track Tickets</a>
        </div>

        {/* Main content */}
        <div className="row align-items-start mt-5">

          {/* Left */}
          <div className="col-md-6 pe-md-5">
            <h1 className="fs-4 fw-semibold mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>

            <input
              type="text"
              className="form-control form-control-lg mb-4"
              placeholder="Eg. how do I activate F&O"
            />

            <div className="d-flex flex-wrap gap-4">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>

          {/* Right */}
          <div className="col-md-6 ps-md-5 mt-5 mt-md-0">
            <h5 className="fw-semibold mb-3">Featured</h5>
            <ul className="ps-3">
              <li className="mb-2">
                <a href="#">Current Takeover and Delisting - January 2024</a>
              </li>
              <li>
                <a href="#">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
