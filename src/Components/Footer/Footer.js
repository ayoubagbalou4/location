import React from 'react';

const Footer = () => {
  return (
    <footer className="footer -type-3 text-white bg-dark-1">
      <div className="container">
        <div className="pt-60 pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Contact Us</h5>

              <div className="mt-30">
                <div className="text-14 mt-30">Toll Free Customer Care</div>
                <a href="#" className="text-18 fw-500 mt-5">+(1) 123 456 7890</a>
              </div>

              <div className="mt-35">
                <div className="text-14 mt-30">Need live support?</div>
                <a href="#" className="text-18 fw-500 mt-5">hi@gotrip.com</a>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Company</h5>
              <div className="d-flex y-gap-10 flex-column">
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Blog</a>
                <a href="#">Press</a>
                <a href="#">Gift Cards</a>
                <a href="#">Magazine</a>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Support</h5>
              <div className="d-flex y-gap-10 flex-column">
                <a href="#">Contact</a>
                <a href="#">Legal Notice</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
                <a href="#">Sitemap</a>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Other Services</h5>
              <div className="d-flex y-gap-10 flex-column">
                <a href="#">Car hire</a>
                <a href="#">Activity Finder</a>
                <a href="#">Tour List</a>
                <a href="#">Flight finder</a>
                <a href="#">Cruise Ticket</a>
                <a href="#">Holiday Rental</a>
                <a href="#">Travel Agents</a>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Get Updates & More</h5>

              <div className="single-field relative d-flex justify-end items-center pb-30">
                <input className="bg-white rounded-8" type="email" placeholder="Your Email"/>
                <button className="absolute px-20 h-full text-15 fw-500 underline text-dark-1">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 border-top-white-15">
          <div className="row justify-between items-center y-gap-10">
            <div className="col-auto">
              <div className="row x-gap-30 y-gap-10">
                <div className="col-auto">
                  <div className="d-flex items-center">
                    © 2022 GoTrip LLC All rights reserved.
                  </div>
                </div>

                <div className="col-auto">
                  <div className="d-flex x-gap-15">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Site Map</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <div className="row y-gap-10 items-center">
                <div className="col-auto">
                  <div className="d-flex items-center">
                    <button className="d-flex items-center text-14 fw-500 text-white mr-10">
                      <i className="icon-globe text-16 mr-10"></i>
                      <span className="underline">English (US)</span>
                    </button>

                    <button className="d-flex items-center text-14 fw-500 text-white">
                      <i className="icon-usd text-16 mr-10"></i>
                      <span className="underline">USD</span>
                    </button>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="d-flex x-gap-20 items-center">
                    <a href="#"><i className="icon-facebook text-14"></i></a>
                    <a href="#"><i className="icon-twitter text-14"></i></a>
                    <a href="#"><i className="icon-instagram text-14"></i></a>
                    <a href="#"><i className="icon-linkedin text-14"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
