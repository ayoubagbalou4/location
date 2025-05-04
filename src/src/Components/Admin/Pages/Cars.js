import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(5);
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
            <div className="dashboard__main">
            <div className="dashboard__content bg-light-2">
                <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
                <div className="col-auto">

                    <h1 className="text-30 lh-14 fw-600">Booking History</h1>
                    <div className="text-15 text-light-1">Lorem ipsum dolor sit amet, consectetur.</div>

                </div>

                <div className="col-auto">

                    <div className="row x-gap-20 y-gap-20 items-center">
                    <div className="col-auto">
                        <div className="w-230 single-field relative d-flex items-center">

                        <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" className="date-input bg-white text-dark-1 h-50 rounded-8 pl-45"/>

                        <button className="absolute d-flex items-center h-full pointer-events-none">
                            <i className="icon-calendar text-20 px-15 text-dark-1"></i>
                        </button>
                        </div>
                    </div>

                    <div className="col-auto">

                        <div className="dropdown js-dropdown js-services-active">
                        <div className="dropdown__button d-flex items-center justify-between bg-white rounded-4 w-230 text-14 px-20 h-50 text-14" data-el-toggle=".js-services-toggle" data-el-toggle-active=".js-services-active">
                            <span className="js-dropdown-title">Services</span>
                            <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                        </div>

                        <div className="toggle-element -dropdown  js-click-dropdown js-services-toggle">
                            <div className="text-14 y-gap-15 js-dropdown-list">

                            <div><a href="#" className="d-block js-dropdown-link">Animation</a></div>

                            <div><a href="#" className="d-block js-dropdown-link">Design</a></div>

                            <div><a href="#" className="d-block js-dropdown-link">Illustration</a></div>

                            <div><a href="#" className="d-block js-dropdown-link">Lifestyle</a></div>

                            <div><a href="#" className="d-block js-dropdown-link">Business</a></div>

                            </div>
                        </div>
                        </div>

                    </div>

                    <div className="col-auto">
                        <div className="w-230 single-field relative d-flex items-center">
                        <input className="pl-50 bg-white text-dark-1 h-50 rounded-8" type="email" placeholder="Search"/>
                        <button className="absolute d-flex items-center h-full">
                            <i className="icon-search text-20 px-15 text-dark-1"></i>
                        </button>
                        </div>
                    </div>
                    </div>

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
                                    <td>Actions</td>
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
                                    <td>Actions</td>
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
                                    <td>Actions</td>
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
                                    <td>Actions</td>
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
                                    <td>Actions</td>
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
                                    <td>Actions</td>
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
                                    <td>Actions</td>
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
                                    <td>Actions</td>
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
                                    <td>Actions</td>
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
                                    <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
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
                                <td>Actions</td>
                            </tr>

                            </tbody>
                        </table>
                        </div>
                    </div>

                    </div>
                </div>
                {pageNumbers.length > 1 && (
                    <div className="pt-30">
                        <div className="row justify-between">
                            {/* Previous Button */}
                            <div className="col-auto">
                                <button
                                    onClick={prevPage}
                                    disabled={currentPage === 1}
                                    className={`button -blue-1 size-40 rounded-full border-light ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    aria-label="Previous Page"
                                >
                                    <i className="icon-chevron-left text-12"></i>
                                </button>
                            </div>

                            {/* Page Numbers */}
                            <div className="col-auto">
                                <div className="row x-gap-10 y-gap-10 items-center"> {/* Adjusted gap */}
                                    {/* Add logic here for ellipsis (...) if too many pages */}
                                    {pageNumbers.map(number => (
                                        <div className="col-auto" key={number}>
                                            <button
                                                onClick={() => paginate(number)}
                                                className={`size-40 flex-center rounded-full ${currentPage === number ? 'bg-dark-1 text-white' : 'border-light'}`} // Active vs Inactive style
                                                aria-label={`Go to page ${number}`}
                                                aria-current={currentPage === number ? 'page' : undefined}
                                            >
                                                {number}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Next Button */}
                            <div className="col-auto">
                                <button
                                    onClick={nextPage}
                                    disabled={currentPage === pageNumbers.length}
                                    className={`button -blue-1 size-40 rounded-full border-light ${currentPage === pageNumbers.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    aria-label="Next Page"
                                >
                                    <i className="icon-chevron-right text-12"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                </div>


            </div>
            </div>

        </>

    );
};
export default Cars;