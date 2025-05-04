import React from 'react';

const NotFound = () => {
  return (
   <>
   
   <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-lg-6">
            {/* <img src="img/general/404.svg" alt="image"> */}
          </div>

          <div className="col-lg-5">
            <div className="no-page">
              <div className="no-page__title">40<span className="text-blue-1">4</span></div>

              <h2 className="text-30 fw-600">Oops! It looks like you're lost.</h2>

              <div className="pr-30 mt-5">The page you're looking for isn't available. Try to search again or use the go to.</div>

              <div className="d-inline-block mt-40 md:mt-20">
                <a href="#" className="button -md -dark-1 bg-blue-1 text-white">Go back to homepage</a>
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
                <input className="bg-white h-60" type="text" placeholder="Your Email"/>
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

export default NotFound;