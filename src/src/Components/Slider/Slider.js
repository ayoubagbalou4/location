import React from 'react';

const Slider = () => {
  return (

    <section data-anim-wrap className="masthead -type-8">
      <div data-anim-child="fade" className="masthead__bg">
        <img src="img/masthead/8/bg.png" alt="image" className="col-12 h-full object-cover"/>
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-10">
            <div className="text-center">
              <h1 data-anim-child="slide-up delay-5" className="text-60 lg:text-40 md:text-30 text-dark-1">Search for the Best Car Hire Deals</h1>
              <p data-anim-child="slide-up delay-6" className="text-dark-1 mt-5">Book better cars from local hosts across the US and around the world.</p>
            </div>
          </div>
        </div>
      </div>

      <div data-anim-child="slide-up delay-7" className="masthead-bottom mt-80 md:mt-40">
        <div className="mainSearch -col-5 -w-1070 mx-auto bg-white pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1">
          <div className="button-grid items-center">

            <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">

              <div data-x-dd-click="searchMenu-loc">
                <h4 className="text-15 fw-500 ls-2 lh-16">Pick up location</h4>

                <div className="text-15 text-light-1 ls-2 lh-16">
                  <input autocomplete="off" type="search" placeholder="City or Airport" className="js-search js-dd-focus" />
                </div>
              </div>


              <div className="searchMenu-loc__field shadow-2 js-popup-window" data-x-dd="searchMenu-loc" data-x-dd-toggle="-is-active">
                <div className="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                  <div className="y-gap-5 js-results">

                    <div>
                      <button className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                        <div className="d-flex">
                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                          <div className="ml-10">
                            <div className="text-15 lh-12 fw-500 js-search-option-target">London</div>
                            <div className="text-14 lh-12 text-light-1 mt-5">Greater London, United Kingdom</div>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div>
                      <button className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                        <div className="d-flex">
                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                          <div className="ml-10">
                            <div className="text-15 lh-12 fw-500 js-search-option-target">New York</div>
                            <div className="text-14 lh-12 text-light-1 mt-5">New York State, United States</div>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div>
                      <button className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                        <div className="d-flex">
                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                          <div className="ml-10">
                            <div className="text-15 lh-12 fw-500 js-search-option-target">Paris</div>
                            <div className="text-14 lh-12 text-light-1 mt-5">France</div>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div>
                      <button className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                        <div className="d-flex">
                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                          <div className="ml-10">
                            <div className="text-15 lh-12 fw-500 js-search-option-target">Madrid</div>
                            <div className="text-14 lh-12 text-light-1 mt-5">Spain</div>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div>
                      <button className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                        <div className="d-flex">
                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                          <div className="ml-10">
                            <div className="text-15 lh-12 fw-500 js-search-option-target">Santorini</div>
                            <div className="text-14 lh-12 text-light-1 mt-5">Greece</div>
                          </div>
                        </div>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>


            <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">

              <div data-x-dd-click="searchMenu-loc">
                <h4 className="text-15 fw-500 ls-2 lh-16">Drop off location</h4>

                <div className="text-15 text-light-1 ls-2 lh-16">
                  <input autocomplete="off" type="search" placeholder="City or Airport" className="js-search js-dd-focus" />
                </div>
              </div>


              <div className="searchMenu-loc__field shadow-2 js-popup-window" data-x-dd="searchMenu-loc" data-x-dd-toggle="-is-active">
                <div className="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                  <div className="y-gap-5 js-results">

                    <div>
                      <button className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                        <div className="d-flex">
                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                          <div className="ml-10">
                            <div className="text-15 lh-12 fw-500 js-search-option-target">London</div>
                            <div className="text-14 lh-12 text-light-1 mt-5">Greater London, United Kingdom</div>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div>
                      <button className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                        <div className="d-flex">
                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                          <div className="ml-10">
                            <div className="text-15 lh-12 fw-500 js-search-option-target">New York</div>
                            <div className="text-14 lh-12 text-light-1 mt-5">New York State, United States</div>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div>
                      <button className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                        <div className="d-flex">
                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                          <div className="ml-10">
                            <div className="text-15 lh-12 fw-500 js-search-option-target">Paris</div>
                            <div className="text-14 lh-12 text-light-1 mt-5">France</div>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div>
                      <button className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                        <div className="d-flex">
                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                          <div className="ml-10">
                            <div className="text-15 lh-12 fw-500 js-search-option-target">Madrid</div>
                            <div className="text-14 lh-12 text-light-1 mt-5">Spain</div>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div>
                      <button className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                        <div className="d-flex">
                          <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                          <div className="ml-10">
                            <div className="text-15 lh-12 fw-500 js-search-option-target">Santorini</div>
                            <div className="text-14 lh-12 text-light-1 mt-5">Greece</div>
                          </div>
                        </div>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>


            <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar js-calendar-el">

              <div data-x-dd-click="searchMenu-date">
                <h4 className="text-15 fw-500 ls-2 lh-16">Pick up</h4>

                <div className="capitalize text-15 text-light-1 ls-2 lh-16">
                  <span className="js-first-date">Wed 2 Mar</span>
                  -
                  <span className="js-last-date">Fri 11 Apr</span>
                </div>
              </div>


              <div className="searchMenu-date__field shadow-2" data-x-dd="searchMenu-date" data-x-dd-toggle="-is-active">
                <div className="bg-white px-30 py-30 rounded-4">
                  <div className="elCalendar js-calendar-el-calendar"></div>
                </div>
              </div>
            </div>


            <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar js-calendar-el">

              <div data-x-dd-click="searchMenu-date">
                <h4 className="text-15 fw-500 ls-2 lh-16">Drop off</h4>

                <div className="capitalize text-15 text-light-1 ls-2 lh-16">
                  <span className="js-first-date">Wed 2 Mar</span>
                  -
                  <span className="js-last-date">Fri 11 Apr</span>
                </div>
              </div>


              <div className="searchMenu-date__field shadow-2" data-x-dd="searchMenu-date" data-x-dd-toggle="-is-active">
                <div className="bg-white px-30 py-30 rounded-4">
                  <div className="elCalendar js-calendar-el-calendar"></div>
                </div>
              </div>
            </div>


            <div className="searchMenu-guests px-30 lg:py-20 lg:px-0 js-form-dd js-form-counters">

              <div data-x-dd-click="searchMenu-guests">
                <h4 className="text-15 fw-500 ls-2 lh-16">Passenger (optional)</h4>

                <div className="text-15 text-light-1 ls-2 lh-16">
                  <span className="js-count-adult">2</span> adults
                  -
                  <span className="js-count-child">1</span> childeren
                  -
                  <span className="js-count-room">1</span> room
                </div>
              </div>


              <div className="searchMenu-guests__field shadow-2" data-x-dd="searchMenu-guests" data-x-dd-toggle="-is-active">
                <div className="bg-white px-30 py-30 rounded-4">
                  <div className="row y-gap-10 justify-between items-center">
                    <div className="col-auto">
                      <div className="text-15 fw-500">Adults</div>
                    </div>

                    <div className="col-auto">
                      <div className="d-flex items-center js-counter" data-value-change=".js-count-adult">
                        <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down">
                          <i className="icon-minus text-12"></i>
                        </button>

                        <div className="flex-center size-20 ml-15 mr-15">
                          <div className="text-15 js-count">2</div>
                        </div>

                        <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up">
                          <i className="icon-plus text-12"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-top-light mt-24 mb-24"></div>

                  <div className="row y-gap-10 justify-between items-center">
                    <div className="col-auto">
                      <div className="text-15 lh-12 fw-500">Children</div>
                      <div className="text-14 lh-12 text-light-1 mt-5">Ages 0 - 17</div>
                    </div>

                    <div className="col-auto">
                      <div className="d-flex items-center js-counter" data-value-change=".js-count-child">
                        <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down">
                          <i className="icon-minus text-12"></i>
                        </button>

                        <div className="flex-center size-20 ml-15 mr-15">
                          <div className="text-15 js-count">1</div>
                        </div>

                        <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up">
                          <i className="icon-plus text-12"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-top-light mt-24 mb-24"></div>

                  <div className="row y-gap-10 justify-between items-center">
                    <div className="col-auto">
                      <div className="text-15 fw-500">Rooms</div>
                    </div>

                    <div className="col-auto">
                      <div className="d-flex items-center js-counter" data-value-change=".js-count-room">
                        <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down">
                          <i className="icon-minus text-12"></i>
                        </button>

                        <div className="flex-center size-20 ml-15 mr-15">
                          <div className="text-15 js-count">1</div>
                        </div>

                        <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up">
                          <i className="icon-plus text-12"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="button-item">
              <button className="mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-dark-1 text-white">
                <i className="icon-search text-20 mr-10"></i>
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="masthead-slider overflow-hidden js-masthead-slider-8">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <img src="img/masthead/8/1.png" alt="image"/>
            </div>

            <div className="swiper-slide">
              <img src="img/masthead/8/1.png" alt="image"/>
            </div>

            <div className="swiper-slide">
              <img src="img/masthead/8/1.png" alt="image"/>
            </div>

          </div>

          <div className="masthead-slider__nav -prev">
            <button className="button -outline-white size-50 flex-center text-white rounded-full js-prev">
              <i className="icon-arrow-sm-left text-12"></i>
            </button>
          </div>

          <div className="masthead-slider__nav -next">
            <button className="button -outline-white size-50 flex-center text-white rounded-full js-next">
              <i className="icon-arrow-sm-right text-12"></i>
            </button>
          </div>
        </div>
      </div>
    </section>


  );
};

export default Slider;