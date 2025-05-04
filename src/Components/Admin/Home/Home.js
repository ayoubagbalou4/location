import React from 'react';

function Homme() {
    return (
      <>
        <div className="dashboard__main">
            <div className="dashboard__content bg-light-2">
              <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
                <div className="col-auto">

                  <h1 className="text-30 lh-14 fw-600">Dashboard</h1>
                  <div className="text-15 text-light-1">Lorem ipsum dolor sit amet, consectetur.</div>

                </div>

                <div className="col-auto">

                </div>
              </div> 


              <div className="row y-gap-30">

                <div className="col-xl-3 col-md-6">
                  <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                    <div className="row y-gap-20 justify-between items-center">
                      <div className="col-auto">
                        <div className="fw-500 lh-14">Pending</div>
                        <div className="text-26 lh-16 fw-600 mt-5">$12,800</div>
                        <div className="text-15 lh-14 text-light-1 mt-5">Total pending</div>
                      </div>

                      <div className="col-auto">
                        {/* <img src="img/dashboard/icons/1.svg" alt="icon"> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6">
                  <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                    <div className="row y-gap-20 justify-between items-center">
                      <div className="col-auto">
                        <div className="fw-500 lh-14">Earnings</div>
                        <div className="text-26 lh-16 fw-600 mt-5">$14,200</div>
                        <div className="text-15 lh-14 text-light-1 mt-5">Total earnings</div>
                      </div>

                      <div className="col-auto">
                        {/* <img src="img/dashboard/icons/2.svg" alt="icon"> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6">
                  <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                    <div className="row y-gap-20 justify-between items-center">
                      <div className="col-auto">
                        <div className="fw-500 lh-14">Bookings</div>
                        <div className="text-26 lh-16 fw-600 mt-5">$8,100</div>
                        <div className="text-15 lh-14 text-light-1 mt-5">Total bookings</div>
                      </div>

                      <div className="col-auto">
                        {/* <img src="img/dashboard/icons/3.svg" alt="icon"> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6">
                  <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                    <div className="row y-gap-20 justify-between items-center">
                      <div className="col-auto">
                        <div className="fw-500 lh-14">Services</div>
                        <div className="text-26 lh-16 fw-600 mt-5">22,786</div>
                        <div className="text-15 lh-14 text-light-1 mt-5">Total bookable services</div>
                      </div>

                      <div className="col-auto">
                        {/* <img src="img/dashboard/icons/4.svg" alt="icon"> */}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row y-gap-30 pt-20">
                <div className="col-xl-7 col-md-6">
                  <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                    <div className="d-flex justify-between items-center">
                      <h2 className="text-18 lh-1 fw-500">
                        Earning Statistics
                      </h2>


                      <div className="dropdown js-dropdown js-category-active">
                        <div className="dropdown__button d-flex items-center bg-white border-light rounded-100 px-15 py-10 text-14 lh-12" data-el-toggle=".js-category-toggle" data-el-toggle-active=".js-category-active">
                          <span className="js-dropdown-title">This Week</span>
                          <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                        </div>

                        <div className="toggle-element -dropdown  js-click-dropdown js-category-toggle">
                          <div className="text-14 y-gap-15 js-dropdown-list">

                            <div><a href="#" className="d-block js-dropdown-link">Animation</a></div>

                            <div><a href="#" className="d-block js-dropdown-link">Design</a></div>

                            <div><a href="#" className="d-block js-dropdown-link">Illustration</a></div>

                            <div><a href="#" className="d-block js-dropdown-link">Business</a></div>

                          </div>
                        </div>
                      </div>

                    </div>

                      <div className="pt-30">
                        <canvas id="lineChart"></canvas>
                      </div>
                  </div>
              </div>

          <div className="col-xl-5 col-md-6">
            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <div className="d-flex justify-between items-center">
                <h2 className="text-18 lh-1 fw-500">
                  Recent Bookings
                </h2>

                <div className="">
                  <a href="#" className="text-14 text-blue-1 fw-500 underline">View All</a>
                </div>
              </div>

              <div className="overflow-scroll scroll-bar-1 pt-30">
                <table className="table-2 col-12">
                  <thead className="">
                    <tr>
                      <th>#</th>
                      <th>Item</th>
                      <th>Total</th>
                      <th>Paid</th>
                      <th>Status</th>
                      <th>Created At</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>#1</td>
                      <td>New York<br/> Discover America</td>
                      <td className="fw-500">$130</td>
                      <td>$0</td>
                      <td>
                        <div className="rounded-100 py-4 text-center col-12 text-14 fw-500 bg-yellow-4 text-yellow-3">Pending</div>
                      </td>
                      <td>04/04/2022<br/>08:16</td>
                    </tr>

                    <tr>
                      <td>#2</td>
                      <td>New York<br/> Discover America</td>
                      <td className="fw-500">$130</td>
                      <td>$0</td>
                      <td>
                        <div className="rounded-100 py-4 text-center col-12 text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</div>
                      </td>
                      <td>04/04/2022<br/>08:16</td>
                    </tr>

                    <tr>
                      <td>#3</td>
                      <td>New York<br/> Discover America</td>
                      <td className="fw-500">$130</td>
                      <td>$0</td>
                      <td>
                        <div className="rounded-100 py-4 text-center col-12 text-14 fw-500 bg-red-3 text-red-2">Rejected</div>
                      </td>
                      <td>04/04/2022<br/>08:16</td>
                    </tr>

                    <tr>
                      <td>#4</td>
                      <td>New York<br/> Discover America</td>
                      <td className="fw-500">$130</td>
                      <td>$0</td>
                      <td>
                        <div className="rounded-100 py-4 text-center col-12 text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</div>
                      </td>
                      <td>04/04/2022<br/>08:16</td>
                    </tr>

                    <tr>
                      <td>#5</td>
                      <td>New York<br/> Discover America</td>
                      <td className="fw-500">$130</td>
                      <td>$0</td>
                      <td>
                        <div className="rounded-100 py-4 text-center col-12 text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</div>
                      </td>
                      <td>04/04/2022<br/>08:16</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
              </div>
        </div>
    </div>




      </>
    );
  };
export default Homme;