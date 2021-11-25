import React from "react";
import "../css/Service.css";

function Service() {
  return (
    <div className="service component__space" id="Services">

      <div className="heading">
        <h1 className="heading">Provided services</h1>
        <p className="heading p__color">
          I provide several services , such as :
        </p>
      </div>

      <div className="container">
        <div className="row">
        <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Desktop Software Development</h1>
                <p className="p service__text p__color">
                  I provide desktop software development 
                </p>
                <p className="p service__text p__color">
                  meeting your functional or technical needs
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Website Development</h1>
                <p className="p service__text p__color">
                  Whether it is an eCommerce,  
                </p>
                <p className="p service__text p__color">
                a blog or any type of websites ,
                </p>
                <p className="p service__text p__color">i can develop it using latest technologies.</p>
              </div>
            </div>
          </div>

          


          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Mobile App Development</h1>
                <p className="p service__text p__color">
                  To meet your business needs,
                </p>
                <p className="p service__text p__color">
                  a mobile application is almost mandatory 
                </p>
                <p className="p service__text p__color">for everyone , we can handle it too.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
