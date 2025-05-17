import React from 'react';

const Navbar = ({ children }) => {

    return (
        <>
            <div class="header-margin"></div>
            <header data-add-bg="" class="header -dashboard bg-white js-header" data-x="header" data-x-toggle="is-menu-opened">
                <div data-anim="fade" class="header__container px-30 sm:px-20">
                    <div class="-left-side">
                        <a href="index.html" class="header-logo" data-x="header-logo" data-x-toggle="is-logo-dark">
                            <img src="http://localhost:3000/img/general/logo-dark.svg" alt="logo icon" />
                            <img src="http://localhost:3000/img/general/logo-dark.svg" alt="logo icon" />
                        </a>
                    </div>

                    <div class="row justify-between items-center pl-60 lg:pl-20">
                        <div class="col-auto">
                            <div class="d-flex items-center">
                                <button data-x-click="dashboard">
                                    <i class="icon-menu-2 text-20"></i>
                                </button>

                                <div class="single-field relative d-flex items-center md:d-none ml-30">
                                    <input class="pl-50 border-light text-dark-1 h-50 rounded-8" type="email" placeholder="Search" />
                                    <button class="absolute d-flex items-center h-full">
                                        <i class="icon-search text-20 px-15 text-dark-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-auto">
                            <div class="d-flex items-center">

                                


                                <div class="row items-center x-gap-5 y-gap-20 pl-20 lg:d-none">
                                    <div class="col-auto">
                                        <button class="button -blue-1-05 size-50 rounded-22 flex-center">
                                            <i class="icon-email-2 text-20"></i>
                                        </button>
                                    </div>

                                    <div class="col-auto">
                                        <button class="button -blue-1-05 size-50 rounded-22 flex-center">
                                            <i class="icon-notification text-20"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="pl-15">
                                    <img src="http://localhost:3000/img/avatars/3.png" alt="image" class="size-50 rounded-22 object-cover" />
                                </div>

                                <div class="d-none xl:d-flex x-gap-20 items-center pl-20" data-x="header-mobile-icons" data-x-toggle="text-white">
                                    <div><button class="d-flex items-center icon-menu text-20" data-x-click="html, header, header-logo, header-mobile-icons, mobile-menu"></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div className="dashboard" data-x="dashboard" data-x-toggle="-is-sidebar-open">
                <div className="dashboard__sidebar bg-white scroll-bar-1">

                    <div className="sidebar -dashboard">

                        <div className="sidebar__item ">


                            <a href="db-dashboard.html" className="sidebar__button d-flex items-center text-15 lh-1 fw-500">
                                <img src="http://localhost:3000/img/dashboard/sidebar/compass.svg" alt="image" className="mr-15" />
                                Acceuil
                            </a>


                        </div>

                        <div className="sidebar__item ">


                            <a href="#" className="sidebar__button d-flex items-center text-15 lh-1 fw-500">
                                <img src="http://localhost:3000/img/dashboard/sidebar/booking.svg" alt="image" className="mr-15" />
                                Users
                            </a>

                        </div>
                        <div className="sidebar__item ">


                            <a href="#" className="sidebar__button d-flex items-center text-15 lh-1 fw-500">
                                <img src="http://localhost:3000/img/dashboard/sidebar/booking.svg" alt="image" className="mr-15" />
                                Cars
                            </a>

                        </div>

                        <div className="sidebar__item ">


                            <a href="#" className="sidebar__button d-flex items-center text-15 lh-1 fw-500">
                                <img src="http://localhost:3000/img/dashboard/sidebar/booking.svg" alt="image" className="mr-15" />
                                Reservations
                            </a>

                        </div>

                        <div className="sidebar__item ">


                            <div className="accordion -db-sidebar js-accordion">
                                <div className="accordion__item">
                                    <div className="accordion__button">
                                        <div className="sidebar__button col-12 d-flex items-center justify-between">
                                            <div className="d-flex items-center text-15 lh-1 fw-500">
                                                <img src="http://localhost:3000/img/dashboard/sidebar/booking.svg" alt="image" className="mr-10" />
                                                Assurance
                                            </div>
                                            <div className="icon-chevron-sm-down text-7"></div>
                                        </div>
                                    </div>

                                    <div className="accordion__content">
                                        <ul className="list-disc pt-15 pb-5 pl-40">

                                            <li>
                                                <a href="#" className="text-15">All Hotels</a>
                                            </li>

                                            <li>
                                                <a href="#" className="text-15">Add Hotel</a>
                                            </li>

                                            <li>
                                                <a href="#" className="text-15">Recovery</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="sidebar__item ">


                            <div className="accordion -db-sidebar js-accordion">
                                <div className="accordion__item">
                                    <div className="accordion__button">
                                        <div className="sidebar__button col-12 d-flex items-center justify-between">
                                            <div className="d-flex items-center text-15 lh-1 fw-500">
                                                <img src="http://localhost:3000/img/dashboard/sidebar/booking.svg" alt="image" className="mr-10" />
                                                Contrats
                                            </div>
                                            <div className="icon-chevron-sm-down text-7"></div>
                                        </div>
                                    </div>

                                    <div className="accordion__content">
                                        <ul className="list-disc pt-15 pb-5 pl-40">

                                            <li>
                                                <a href="#" className="text-15">All Hotels</a>
                                            </li>

                                            <li>
                                                <a href="#" className="text-15">Add Hotel</a>
                                            </li>

                                            <li>
                                                <a href="#" className="text-15">Recovery</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="sidebar__item ">
                            <a href="#" className="sidebar__button d-flex items-center text-15 lh-1 fw-500">
                                <img src="http://localhost:3000/img/dashboard/sidebar/booking.svg" alt="image" className="mr-15" />
                                Message Contacts
                            </a>
                        </div>
                        <div className="sidebar__item ">
                            <a href="#" className="sidebar__button d-flex items-center text-15 lh-1 fw-500">
                                <img src="http://localhost:3000/img/dashboard/sidebar/booking.svg" alt="image" className="mr-15" />
                                Message Contacts
                            </a>
                        </div>
                        <div className="sidebar__item ">
                            <a href="#" className="sidebar__button d-flex items-center text-15 lh-1 fw-500">
                                <img src="http://localhost:3000/img/dashboard/sidebar/booking.svg" alt="image" className="mr-15" />
                                Review
                            </a>
                        </div>
                        <div className="sidebar__item ">
                            <a href="#" className="sidebar__button d-flex items-center text-15 lh-1 fw-500">
                                <img src="http://localhost:3000/img/dashboard/sidebar/booking.svg" alt="image" className="mr-15" />
                                Send Email
                            </a>
                        </div>



                        <div className="sidebar__item ">


                            <a href="#" className="sidebar__button d-flex items-center text-15 lh-1 fw-500">
                                <img src="http://localhost:3000/img/dashboard/sidebar/log-out.svg" alt="image" className="mr-15" />
                                Logout
                            </a>


                        </div>

                    </div>

                </div>

                {children}

            </div>


        </>

    );


};

export default Navbar;