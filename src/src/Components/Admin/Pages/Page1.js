import React from 'react';

function Page1() {
    return (
        <>

<div className="dashboard__main">
      <div className="dashboard__content bg-light-2">
        <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
          <div className="col-auto">

            <h1 className="text-30 lh-14 fw-600">Booking History</h1>
            <div className="text-15 text-light-1">Lorem ipsum dolor sit amet, consectetur.</div>

          </div>

          <div className="col-auto">

          </div>
        </div>


        <div className="py-30 px-30 rounded-4 bg-white shadow-3">
          <div className="tabs -underline-2 js-tabs">
            <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">

              <div className="col-auto">
                <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button is-tab-el-active" data-tab-target=".-tab-item-1">All Booking</button>
              </div>

              <div className="col-auto">
                <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button " data-tab-target=".-tab-item-2">Completed</button>
              </div>

              <div className="col-auto">
                <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button " data-tab-target=".-tab-item-3">Processing</button>
              </div>

              <div className="col-auto">
                <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button " data-tab-target=".-tab-item-4">Confirmed</button>
              </div>

              <div className="col-auto">
                <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button " data-tab-target=".-tab-item-5">Cancelled</button>
              </div>

              <div className="col-auto">
                <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button " data-tab-target=".-tab-item-6">Paid</button>
              </div>

              <div className="col-auto">
                <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button " data-tab-target=".-tab-item-7">Unpaid</button>
              </div>

              <div className="col-auto">
                <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button " data-tab-target=".-tab-item-8">Partial Payment</button>
              </div>

            </div>

            <div className="tabs__content pt-30 js-tabs-content">

              <div className="tabs__pane -tab-item-1 is-tab-el-active">
                <div className="overflow-scroll scroll-bar-1">
                  <table className="table-3 -border-bottom col-12">
                    <thead className="bg-light-2">
                      <tr>
                        <th>Type</th>
                        <th>Title</th>
                        <th>Order Date</th>
                        <th>Execution Time</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Remain</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">Pending</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-1-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-1-toggle" data-el-toggle-active=".js-actions-1-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-1-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-2-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-2-toggle" data-el-toggle-active=".js-actions-2-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-2-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">Rejected</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-3-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-3-toggle" data-el-toggle-active=".js-actions-3-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-3-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-4-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-4-toggle" data-el-toggle-active=".js-actions-4-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-4-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-5-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-5-toggle" data-el-toggle-active=".js-actions-5-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-5-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>

              <div className="tabs__pane -tab-item-2 ">
                <div className="overflow-scroll scroll-bar-1">
                  <table className="table-3 -border-bottom col-12">
                    <thead className="bg-light-2">
                      <tr>
                        <th>Type</th>
                        <th>Title</th>
                        <th>Order Date</th>
                        <th>Execution Time</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Remain</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">Pending</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-1-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-1-toggle" data-el-toggle-active=".js-actions-1-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-1-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-2-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-2-toggle" data-el-toggle-active=".js-actions-2-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-2-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">Rejected</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-3-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-3-toggle" data-el-toggle-active=".js-actions-3-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-3-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-4-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-4-toggle" data-el-toggle-active=".js-actions-4-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-4-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-5-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-5-toggle" data-el-toggle-active=".js-actions-5-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-5-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>

              <div className="tabs__pane -tab-item-3 ">
                <div className="overflow-scroll scroll-bar-1">
                  <table className="table-3 -border-bottom col-12">
                    <thead className="bg-light-2">
                      <tr>
                        <th>Type</th>
                        <th>Title</th>
                        <th>Order Date</th>
                        <th>Execution Time</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Remain</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">Pending</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-1-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-1-toggle" data-el-toggle-active=".js-actions-1-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-1-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-2-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-2-toggle" data-el-toggle-active=".js-actions-2-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-2-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">Rejected</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-3-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-3-toggle" data-el-toggle-active=".js-actions-3-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-3-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-4-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-4-toggle" data-el-toggle-active=".js-actions-4-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-4-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-5-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-5-toggle" data-el-toggle-active=".js-actions-5-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-5-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>

              <div className="tabs__pane -tab-item-4 ">
                <div className="overflow-scroll scroll-bar-1">
                  <table className="table-3 -border-bottom col-12">
                    <thead className="bg-light-2">
                      <tr>
                        <th>Type</th>
                        <th>Title</th>
                        <th>Order Date</th>
                        <th>Execution Time</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Remain</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">Pending</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-1-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-1-toggle" data-el-toggle-active=".js-actions-1-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-1-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-2-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-2-toggle" data-el-toggle-active=".js-actions-2-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-2-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">Rejected</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-3-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-3-toggle" data-el-toggle-active=".js-actions-3-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-3-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-4-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-4-toggle" data-el-toggle-active=".js-actions-4-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-4-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-5-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-5-toggle" data-el-toggle-active=".js-actions-5-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-5-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>

              <div className="tabs__pane -tab-item-5 ">
                <div className="overflow-scroll scroll-bar-1">
                  <table className="table-3 -border-bottom col-12">
                    <thead className="bg-light-2">
                      <tr>
                        <th>Type</th>
                        <th>Title</th>
                        <th>Order Date</th>
                        <th>Execution Time</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Remain</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">Pending</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-1-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-1-toggle" data-el-toggle-active=".js-actions-1-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-1-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-2-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-2-toggle" data-el-toggle-active=".js-actions-2-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-2-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">Rejected</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-3-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-3-toggle" data-el-toggle-active=".js-actions-3-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-3-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-4-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-4-toggle" data-el-toggle-active=".js-actions-4-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-4-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-5-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-5-toggle" data-el-toggle-active=".js-actions-5-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-5-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>

              <div className="tabs__pane -tab-item-6 ">
                <div className="overflow-scroll scroll-bar-1">
                  <table className="table-3 -border-bottom col-12">
                    <thead className="bg-light-2">
                      <tr>
                        <th>Type</th>
                        <th>Title</th>
                        <th>Order Date</th>
                        <th>Execution Time</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Remain</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">Pending</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-1-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-1-toggle" data-el-toggle-active=".js-actions-1-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-1-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-2-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-2-toggle" data-el-toggle-active=".js-actions-2-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-2-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">Rejected</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-3-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-3-toggle" data-el-toggle-active=".js-actions-3-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-3-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-4-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-4-toggle" data-el-toggle-active=".js-actions-4-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-4-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-5-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-5-toggle" data-el-toggle-active=".js-actions-5-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-5-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>

              <div className="tabs__pane -tab-item-7 ">
                <div className="overflow-scroll scroll-bar-1">
                  <table className="table-3 -border-bottom col-12">
                    <thead className="bg-light-2">
                      <tr>
                        <th>Type</th>
                        <th>Title</th>
                        <th>Order Date</th>
                        <th>Execution Time</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Remain</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">Pending</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-1-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-1-toggle" data-el-toggle-active=".js-actions-1-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-1-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-2-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-2-toggle" data-el-toggle-active=".js-actions-2-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-2-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">Rejected</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-3-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-3-toggle" data-el-toggle-active=".js-actions-3-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-3-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-4-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-4-toggle" data-el-toggle-active=".js-actions-4-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-4-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-5-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-5-toggle" data-el-toggle-active=".js-actions-5-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-5-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>

              <div className="tabs__pane -tab-item-8 ">
                <div className="overflow-scroll scroll-bar-1">
                  <table className="table-3 -border-bottom col-12">
                    <thead className="bg-light-2">
                      <tr>
                        <th>Type</th>
                        <th>Title</th>
                        <th>Order Date</th>
                        <th>Execution Time</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Remain</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">Pending</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-1-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-1-toggle" data-el-toggle-active=".js-actions-1-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-1-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-2-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-2-toggle" data-el-toggle-active=".js-actions-2-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-2-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">Rejected</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-3-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-3-toggle" data-el-toggle-active=".js-actions-3-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-3-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-4-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-4-toggle" data-el-toggle-active=".js-actions-4-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-4-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Hotel</td>
                        <td>The May Fair Hotel</td>
                        <td>04/04/2022</td>
                        <td className="lh-16">Check in : 05/14/2022<br/>Check out : 05/29/2022</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>$35</td>
                        <td><span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">Confirmed</span></td>

                        <td>
                          <div className="dropdown js-dropdown js-actions-5-active">
                            <div className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5" data-el-toggle=".js-actions-5-toggle" data-el-toggle-active=".js-actions-5-active">
                              <span className="js-dropdown-title">Actions</span>
                              <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                            </div>

                            <div className="toggle-element -dropdown-2 js-click-dropdown js-actions-5-toggle">
                              <div className="text-14 fw-500 js-dropdown-list">

                                <div><a href="#" className="d-block js-dropdown-link">Details</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Invoice</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Confirm</a></div>

                                <div><a href="#" className="d-block js-dropdown-link">Cancel</a></div>

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>

          <div className="pt-30">
            <div className="row justify-between">
              <div className="col-auto">
                <button className="button -blue-1 size-40 rounded-full border-light">
                  <i className="icon-chevron-left text-12"></i>
                </button>
              </div>

              <div className="col-auto">
                <div className="row x-gap-20 y-gap-20 items-center">

                  <div className="col-auto">

                    <div className="size-40 flex-center rounded-full">1</div>

                  </div>

                  <div className="col-auto">

                    <div className="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                  </div>

                  <div className="col-auto">

                    <div className="size-40 flex-center rounded-full">3</div>

                  </div>

                  <div className="col-auto">

                    <div className="size-40 flex-center rounded-full bg-light-2">4</div>

                  </div>

                  <div className="col-auto">

                    <div className="size-40 flex-center rounded-full">5</div>

                  </div>

                  <div className="col-auto">

                    <div className="size-40 flex-center rounded-full">...</div>

                  </div>

                  <div className="col-auto">

                    <div className="size-40 flex-center rounded-full">20</div>

                  </div>

                </div>
              </div>

              <div className="col-auto">
                <button className="button -blue-1 size-40 rounded-full border-light">
                  <i className="icon-chevron-right text-12"></i>
                </button>
              </div>
            </div>
          </div>
        </div>


        <footer className="footer -dashboard mt-60">
          <div className="footer__row row y-gap-10 items-center justify-between">
            <div className="col-auto">
              <div className="row y-gap-20 items-center">
                <div className="col-auto">
                  <div className="text-14 lh-14 mr-30">© 2022 GoTrip LLC All rights reserved.</div>
                </div>

                <div className="col-auto">
                  <div className="row x-gap-20 y-gap-10 items-center text-14">
                    <div className="col-auto">
                      <a href="#" className="text-13 lh-1">Privacy</a>
                    </div>
                    <div className="col-auto">
                      <a href="#" className="text-13 lh-1">Terms</a>
                    </div>
                    <div className="col-auto">
                      <a href="#" className="text-13 lh-1">Site Map</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex x-gap-5 y-gap-5 items-center">
                <button className="text-14 fw-500 underline">English (US)</button>
                <button className="text-14 fw-500 underline">USD</button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
        </>
    );
};
export default Page1;