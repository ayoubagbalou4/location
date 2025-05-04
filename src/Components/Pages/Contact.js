import React from 'react';

const Contact = () => {
  return (
    <>
    <section data-anim="fade" className="d-flex items-center py-15 border-top-light">
      <div className="container">
        <div className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
              <div className="col-auto">
                <div className="">Europe</div>
              </div>
              <div className="col-auto">
              <div className="">{'>'}</div>
              </div>
              <div className="col-auto">
                <div className="">United Kingdom (UK)</div>
              </div>
              <div className="col-auto">
              <div className="">{'>'}</div>
              </div>
              <div className="col-auto">
                <div className="text-dark-1">London</div>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <a href="#" className="text-14 text-light-1">London Tourism: Best of London</a>
          </div>
        </div>
      </div>
    </section>

    <div className="ratio ratio-16:9">
      <div className="map-ratio">
        <div className="map js-map-single"></div>
      </div>
    </div>

    <section>
      <div className="relative container">
        <div className="row justify-end">
          <div className="col-xl-5 col-lg-7">
            <div className="map-form px-40 pt-40 pb-50 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-4 shadow-4">
              <div className="text-22 fw-500">
                Send a message
              </div>

              <div className="row y-gap-20 pt-20">
                <div className="col-12">

                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">Full Name</label>
                  </div>

                </div>
                <div className="col-12">

                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">Email</label>
                  </div>

                </div>
                <div className="col-12">

                  <div className="form-input">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">Subject</label>
                  </div>

                </div>
                <div className="col-12">

                  <div className="form-input ">
                    <textarea required rows="4"></textarea>
                    <label className="lh-1 text-16 text-light-1">Your Messages</label>
                  </div>

                </div>
                <div className="col-auto">

                  <a href="#" className="button px-24 h-50 -dark-1 bg-blue-1 text-white">
                    Send a Messsage <div className="icon-arrow-top-right ml-15"></div>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row x-gap-80 y-gap-20 justify-between">
          <div className="col-12">
            <div className="text-30 sm:text-24 fw-600">Contact Us</div>
          </div>

          <div className="col-lg-3">
            <div className="text-14 text-light-1">Address</div>
            <div className="text-18 fw-500 mt-10">328 Queensberry Street, North Melbourne VIC 3051, Australia.</div>
          </div>

          <div className="col-auto">
            <div className="text-14 text-light-1">Toll Free Customer Care</div>
            <div className="text-18 fw-500 mt-10">+(1) 123 456 7890</div>
          </div>

          <div className="col-auto">
            <div className="text-14 text-light-1">Need live support?</div>
            <div className="text-18 fw-500 mt-10">hi@gotrip.com</div>
          </div>

          <div className="col-auto">
            <div className="text-14 text-light-1">Follow us on social media</div>
            <div className="d-flex x-gap-20 items-center mt-10">
              <a href="#"><i className="icon-facebook text-14"></i></a>
              <a href="#"><i className="icon-twitter text-14"></i></a>
              <a href="#"><i className="icon-instagram text-14"></i></a>
              <a href="#"><i className="icon-linkedin text-14"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="layout-pt-lg layout-pb-lg bg-blue-2">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Why Choose Us</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">These popular destinations have a lot to offer</p>
            </div>
          </div>
        </div>

        <div className="row y-gap-40 justify-between pt-50">

          <div className="col-lg-3 col-sm-6">

            <div className="featureIcon -type-1 ">
              <div className="d-flex justify-center">
                {/* <img src="#" data-src="img/featureIcons/1/1.svg" alt="image" className="js-lazy"> */}
              </div>

              <div className="text-center mt-30">
                <h4 className="text-18 fw-500">Best Price Guarantee</h4>
                <p className="text-15 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

          </div>

          <div className="col-lg-3 col-sm-6">

            <div className="featureIcon -type-1 ">
              <div className="d-flex justify-center">
                {/* <img src="#" data-src="img/featureIcons/1/2.svg" alt="image" className="js-lazy"> */}
              </div>

              <div className="text-center mt-30">
                <h4 className="text-18 fw-500">Easy & Quick Booking</h4>
                <p className="text-15 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

          </div>

          <div className="col-lg-3 col-sm-6">

            <div className="featureIcon -type-1 ">
              <div className="d-flex justify-center">
                {/* <img src="#" data-src="img/featureIcons/1/3.svg" alt="image" className="js-lazy"> */}
              </div>

              <div className="text-center mt-30">
                <h4 className="text-18 fw-500">Customer Care 24/7</h4>
                <p className="text-15 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

    <section className="layout-pt-md layout-pb-md bg-dark-2">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-auto">
            <div className="row y-gap-20  flex-wrap items-center">
              <div className="col-auto">
                <div className="icon-newsletter text-60 sm:text-40 text-white"></div>
              </div>

              <div className="col-auto">
                <h4 className="text-26 text-white fw-600">Your Travel Journey Starts Here</h4>
                <div className="text-white">Sign up and we'll send the best deals to you</div>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
              <div>
                <input className="bg-white h-60" type="text" placeholder="Your Email" />
              </div>

              <div>
                <button className="button -md h-60 bg-blue-1 text-white">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Contact;