import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Car from './Car';

const Carlist = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(12);
    const [totalCars, setTotalCars] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const fetchCars = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `/api/vehicules`,
                    { signal: controller.signal }
                );

                if (isMounted) {
                    console.log('Données reçues :', response.data); // ✅ Affichage ici

                    setCars(response.data);
                    setTotalCars(response.data.length);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    console.error(err);
                    setError(err.message || 'Erreur lors du chargement');
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchCars();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, []);

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (loading) {
        return <div className="text-center py-10">Chargement des voitures...</div>;
    }

    if (error) {
        return <div className="text-red-600 text-center py-10">Erreur : {error}</div>;
    }

    if (!cars.length) {
        return <div className="text-gray-500 text-center py-10">Aucune voiture trouvée.</div>;
    }

    return (
        <>  
            <section className="layout-pt-md layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-30">
                        {/* Sidebar filters - reste inchangé */}
            
            <div className="col-xl-3 col-lg-4 lg:d-none">
                <aside className="sidebar y-gap-40">
                <div className="sidebar__item -no-border">
                    <div className="px-20 py-20 bg-white border-light rounded-4">
                    <h5 className="text-18 fw-500 mb-10">Search Rental</h5>

                    <div className="row y-gap-20 pt-20">
                        <div className="col-12">
                        <div className="px-20 py-10 bg-white border-light rounded-4">

                            <div className="searchMenu-loc  js-form-dd js-liverSearch">

                            <div data-x-dd-click="searchMenu-loc">
                                <h4 className="text-15 fw-500 ls-2 lh-16">Pick up location</h4>

                                <div className="text-15 text-light-1 ls-2 lh-16">
                                <input autoComplete="off" type="search" placeholder="City or Airport" className="js-search js-dd-focus" />
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

                        </div>
                        </div>

                        <div className="col-12">
                        <div className="px-20 py-10 bg-white border-light rounded-4">

                            <div className="searchMenu-loc  js-form-dd js-liverSearch">

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

                        </div>
                        </div>

                        <div className="col-12">
                        <div className="px-20 py-10 bg-white border-light rounded-4">

                            <div className="searchMenu-date  js-form-dd js-calendar js-calendar-el">

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

                        </div>
                        </div>

                        <div className="col-12">
                        <div className="px-20 py-10 bg-white border-light rounded-4">

                            <div className="searchMenu-date  js-form-dd js-calendar js-calendar-el">

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

                        </div>
                        </div>

                        <div className="col-12">
                        <div className="px-20 py-10 bg-white border-light rounded-4">

                            <div className="searchMenu-guests  js-form-dd js-form-counters">

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

                        </div>
                        </div>

                        <div className="col-12">
                        <button className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1">
                            <i className="icon-search text-20 mr-10"></i>
                            Search
                        </button>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="sidebar__item -no-border">
                    <h5 className="text-18 fw-500 mb-10">Location (Heathrow Airport)</h5>
                    <div className="sidebar-checkbox">

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Airport (meet &amp; greet)</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$92</div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Airport (shuttle) </div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$45</div>
                        </div>
                    </div>

                    </div>
                </div>

                <div className="sidebar__item">
                    <h5 className="text-18 fw-500 mb-10">Car Category</h5>
                    <div className="sidebar-checkbox">

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Small</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$92</div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Medium</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$45</div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Large</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$21</div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Premium</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$78</div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">SUV</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$679</div>
                        </div>
                    </div>

                    </div>
                </div>

                <div className="sidebar__item pb-30">
                    <h5 className="text-18 fw-500 mb-10">Price</h5>
                    <div className="row x-gap-10 y-gap-30">
                    <div className="col-12">
                        <div className="js-price-rangeSlider">
                        <div className="text-14 fw-500"></div>

                        <div className="d-flex justify-between mb-20">
                            <div className="text-15 text-dark-1">
                            <span className="js-lower"></span>
                            -
                            <span className="js-upper"></span>
                            </div>
                        </div>

                        <div className="px-5">
                            <div className="js-slider"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="sidebar__item">
                    <h5 className="text-18 fw-500 mb-10">Supplier</h5>
                    <div className="sidebar-checkbox">

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Avis</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$92</div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Budget</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$45</div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Sixt</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$21</div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Europcar</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$78</div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Enterprise</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$679</div>
                        </div>
                    </div>

                    </div>
                </div>

                <div className="sidebar__item">
                    <h5 className="text-18 fw-500 mb-10">Car Specifications</h5>
                    <div className="sidebar-checkbox">

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">With air conditioning</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$92</div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Automatic transmission</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$45</div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Manual transmission</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$21</div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">2 doors</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$78</div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">4 doors</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$679</div>
                        </div>
                    </div>

                    </div>
                </div>

                <div className="sidebar__item">
                    <h5 className="text-18 fw-500 mb-10">Mileage/Kilometres</h5>
                    <div className="sidebar-checkbox">

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Limited</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$92</div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Unlimited</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$45</div>
                        </div>
                    </div>

                    </div>
                </div>

                <div className="sidebar__item">
                    <h5 className="text-18 fw-500 mb-10">Transmission</h5>
                    <div className="sidebar-checkbox">

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Automatic</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$92</div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Manual</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$45</div>
                        </div>
                    </div>

                    </div>
                </div>

                <div className="sidebar__item">
                    <h5 className="text-18 fw-500 mb-10">Fuel Policy</h5>
                    <div className="sidebar-checkbox">

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                        <div className="d-flex items-center">
                            <div className="form-checkbox ">
                            <input type="checkbox" name="name"/>
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                            </div>
                            </div>

                            <div className="text-15 ml-10">Full to full</div>

                        </div>

                        </div>

                        <div className="col-auto">
                        <div className="text-15 text-light-1">$92</div>
                        </div>
                    </div>

                    </div>
                </div>


                <div className="sidebar__item -no-border">
                    <div className="flex-center ratio ratio-15:9 js-lazy" data-bg="img/general/map.png">
                    <button data-x-click="mapFilter" className="button py-15 px-24 -blue-1 bg-white text-dark-1 absolute">
                        <i className="icon-destination text-22 mr-10"></i>
                        Show on map
                    </button>
                    </div>
                </div>
                </aside>
            </div>


                        <div className="col-xl-9 col-lg-8">
                            <div className="row y-gap-10 items-center justify-between">
                                <div className="col-auto">
                                    <div className="text-18">
                                        <span className="fw-500">{totalCars} propriétés</span> disponibles
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <div className="row x-gap-20 y-gap-20">
                                        <div className="col-auto">
                                            <button className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                                                <i className="icon-up-down text-14 mr-10"></i>
                                                Trier
                                            </button>
                                        </div>

                                        <div className="col-auto d-none lg:d-block">
                                            <button data-x-click="filterPopup" className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                                                <i className="icon-up-down text-14 mr-10"></i>
                                                Filtrer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile filters - reste inchangé */}
               
                <div className="filterPopup bg-white" data-x="filterPopup" data-x-toggle="-is-active">
                <aside className="sidebar -mobile-filter">
                    <div data-x-click="filterPopup" className="-icon-close">
                    <i className="icon-close"></i>
                    </div>

                    <div className="sidebar__item -no-border">
                    <h5 className="text-18 fw-500 mb-10">Location (Heathrow Airport)</h5>
                    <div className="sidebar-checkbox">

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Airport (meet &amp; greet)</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$92</div>
                        </div>
                        </div>

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Airport (shuttle) </div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$45</div>
                        </div>
                        </div>

                    </div>
                    </div>

                    <div className="sidebar__item">
                    <h5 className="text-18 fw-500 mb-10">Car Category</h5>
                    <div className="sidebar-checkbox">

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Small</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$92</div>
                        </div>
                        </div>

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Medium</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$45</div>
                        </div>
                        </div>

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Large</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$21</div>
                        </div>
                        </div>

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Premium</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$78</div>
                        </div>
                        </div>

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">SUV</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$679</div>
                        </div>
                        </div>

                    </div>
                    </div>

                    <div className="sidebar__item pb-30">
                    <h5 className="text-18 fw-500 mb-10">Price</h5>
                    <div className="row x-gap-10 y-gap-30">
                        <div className="col-12">
                        <div className="js-price-rangeSlider">
                            <div className="text-14 fw-500"></div>

                            <div className="d-flex justify-between mb-20">
                            <div className="text-15 text-dark-1">
                                <span className="js-lower"></span>
                                -
                                <span className="js-upper"></span>
                            </div>
                            </div>

                            <div className="px-5">
                            <div className="js-slider"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="sidebar__item">
                    <h5 className="text-18 fw-500 mb-10">Supplier</h5>
                    <div className="sidebar-checkbox">

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Avis</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$92</div>
                        </div>
                        </div>

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Budget</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$45</div>
                        </div>
                        </div>

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Sixt</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$21</div>
                        </div>
                        </div>

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Europcar</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$78</div>
                        </div>
                        </div>

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Enterprise</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$679</div>
                        </div>
                        </div>

                    </div>
                    </div>

                    <div className="sidebar__item">
                    <h5 className="text-18 fw-500 mb-10">Car Specifications</h5>
                    <div className="sidebar-checkbox">

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">With air conditioning</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$92</div>
                        </div>
                        </div>

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Automatic transmission</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$45</div>
                        </div>
                        </div>

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Manual transmission</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$21</div>
                        </div>
                        </div>

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">2 doors</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$78</div>
                        </div>
                        </div>

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">4 doors</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$679</div>
                        </div>
                        </div>

                    </div>
                    </div>

                    <div className="sidebar__item">
                    <h5 className="text-18 fw-500 mb-10">Mileage/Kilometres</h5>
                    <div className="sidebar-checkbox">

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Limited</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$92</div>
                        </div>
                        </div>

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Unlimited</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$45</div>
                        </div>
                        </div>

                    </div>
                    </div>

                    <div className="sidebar__item">
                    <h5 className="text-18 fw-500 mb-10">Transmission</h5>
                    <div className="sidebar-checkbox">

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Automatic</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$92</div>
                        </div>
                        </div>

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Manual</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$45</div>
                        </div>
                        </div>

                    </div>
                    </div>

                    <div className="sidebar__item">
                    <h5 className="text-18 fw-500 mb-10">Fuel Policy</h5>
                    <div className="sidebar-checkbox">

                        <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">

                            <div className="d-flex items-center">
                            <div className="form-checkbox ">
                                <input type="checkbox" name="name"/>
                                <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check"></div>
                                </div>
                            </div>

                            <div className="text-15 ml-10">Full to full</div>

                            </div>

                        </div>

                        <div className="col-auto">
                            <div className="text-15 text-light-1">$92</div>
                        </div>
                        </div>

                    </div>
                    </div>

                </aside>
                </div>

                            <div className="mt-30 mb-30 border-top-light"></div>

                            {/* Liste des voitures avec pagination */}
                            <div className="row y-gap-20">
                                {currentCars?.map((car) => (
                                    <Car key={car._id} car={car} />
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="border-top-light mt-30 pt-30">
                                <div className="row x-gap-10 y-gap-20 justify-between md:justify-center">
                                    <div className="col-auto md:order-1">
                                        <button 
                                            onClick={prevPage}
                                            disabled={currentPage === 1}
                                            className={`button -blue-1 size-40 rounded-full border-light ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            <i className="icon-chevron-left text-12"></i>
                                        </button>
                                    </div>

                                    <div className="col-md-auto md:order-3">
                                        <div className="row x-gap-20 y-gap-20 items-center md:d-none">
                                            {pageNumbers.map(number => (
                                                <div className="col-auto" key={number}>
                                                    <button 
                                                        onClick={() => paginate(number)}
                                                        className={`size-40 flex-center rounded-full ${currentPage === number ? 'bg-dark-1 text-white' : 'bg-light-2'}`}
                                                    >
                                                        {number}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">
                                            {currentPage > 1 && (
                                                <div className="col-auto">
                                                    <button 
                                                        onClick={() => paginate(currentPage - 1)}
                                                        className="size-40 flex-center rounded-full"
                                                    >
                                                        {currentPage - 1}
                                                    </button>
                                                </div>
                                            )}

                                            <div className="col-auto">
                                                <div className="size-40 flex-center rounded-full bg-dark-1 text-white">
                                                    {currentPage}
                                                </div>
                                            </div>

                                            {currentPage < pageNumbers.length && (
                                                <div className="col-auto">
                                                    <button 
                                                        onClick={() => paginate(currentPage + 1)}
                                                        className="size-40 flex-center rounded-full"
                                                    >
                                                        {currentPage + 1}
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        <div className="text-center mt-30 md:mt-10">
                                            <div className="text-14 text-light-1">
                                                {indexOfFirstCar + 1} – {Math.min(indexOfLastCar, totalCars)} sur {totalCars} véhicules trouvés
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-auto md:order-2">
                                        <button 
                                            onClick={nextPage}
                                            disabled={currentPage === pageNumbers.length}
                                            className={`button -blue-1 size-40 rounded-full border-light ${currentPage === pageNumbers.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            <i className="icon-chevron-right text-12"></i>
                                        </button>
                                    </div>
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
                            <div className="row y-gap-20 flex-wrap items-center">
                                <div className="col-auto">
                                    <div className="icon-newsletter text-60 sm:text-40 text-white"></div>
                                </div>

                                <div className="col-auto">
                                    <h4 className="text-26 text-white fw-600">Votre voyage commence ici</h4>
                                    <div className="text-white">Inscrivez-vous pour recevoir les meilleures offres</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
                                <div>
                                    <input className="bg-white h-60" type="text" placeholder="Votre Email" />
                                </div>

                                <div>
                                    <button className="button -md h-60 bg-blue-1 text-white">S'abonner</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Carlist;