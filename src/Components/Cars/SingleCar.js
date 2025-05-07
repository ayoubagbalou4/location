import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

const SingleCar = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [vehicleBasePrice, setVehicleBasePrice] = useState(null);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const res = await axios.get(
                    `api/vehicules/${id}`
                );
                setCar(res.data);
                setVehicleBasePrice(res.data.prix);
            } catch (err) {
                console.error('❌ Erreur lors de la récupération de la voiture:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCar();
    }, [id]);


    const [formData, setFormData] = useState({
        date_depart: new Date(),
        date_fin: new Date(new Date().setDate(new Date().getDate() + 1)),
        montant_total: 0,
        numero_tel: '',
        date_naissance: '',
        chauffeur_exist: false,
        chauffeur_id: null,
        vehicule_id: id
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const driverDailyCost = 30;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleDateChange = (name, date) => {
        if (name === 'date_depart' && date > formData.date_fin) {
            setFormData(prev => ({
                ...prev,
                date_depart: date,
                date_fin: date // Reset end date if start date goes past it
            }));
        } else if (name === 'date_fin' && date < formData.date_depart) {
            setFormData(prev => ({
                ...prev,
                date_fin: formData.date_depart // Don't allow end date before start date
            }));
        }
        else {
            setFormData(prev => ({
                ...prev,
                [name]: date
            }));
        }
    };

    useEffect(() => {
        const calculateTotal = () => {
            const startDate = new Date(formData.date_depart);
            const endDate = new Date(formData.date_fin);

            if (isNaN(startDate.getTime()) || isNaN(endDate.getTime()) || endDate < startDate) {
                setFormData(prev => ({ ...prev, montant_total: 0 }));
                return; // Invalid dates
            }

            const timeDiff = endDate.getTime() - startDate.getTime();
            const days = Math.max(1, Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1); // Rent for at least 1 day

            const dailyRate = formData.chauffeur_exist ? (vehicleBasePrice + driverDailyCost) : vehicleBasePrice;
            const total = dailyRate * days;
            setFormData(prev => ({ ...prev, montant_total: total }));
        };

        calculateTotal();
    }, [formData.date_depart, formData.date_fin, formData.chauffeur_exist, vehicleBasePrice]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!formData.numero_tel || !formData.date_naissance) {
            setError('Please fill in all required fields (Phone, Date of Birth).');
            return;
        }

        if (new Date(formData.date_fin) < new Date(formData.date_depart)) {
            setError('Drop off date cannot be before Pick up date.');
            return;
        }

        try {
            const submissionData = {
                ...formData,
                date_depart: formData.date_depart.toISOString().split('T')[0],
                date_fin: formData.date_fin.toISOString().split('T')[0],
                date_naissance: formData.date_naissance,
                chauffeur_id: formData.chauffeur_exist ? formData.chauffeur_id : null
            };

            console.log("Submitting:", submissionData);

            const response = await axios.post('/api/reservations', submissionData);

            if(response.data.message){
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Reservation created successfully!',
                    confirmButtonColor: '#3085d6'
                });
    
                setFormData({});
            }


        } catch (err) {
            console.error("Submission error:", err.response || err);
            setError(err.response?.data?.message || 'Error creating reservation. Please check details and try again.');
            setSuccess('');
        }
    };




    if (loading) return <div>Chargement...</div>;
    if (!car) return <div>Voiture non trouvée</div>;

    return (
        <>


            <section className="py-10 d-flex items-center bg-light-2">
                <div className="container">
                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">
                            <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
                                <div className="col-auto">
                                    <div className="">Home</div>
                                </div>
                                <div className="col-auto">
                                    <div className="">{'>'}</div>
                                </div>
                                <div className="col-auto">
                                    <div className="">London Hotels</div>
                                </div>
                                <div className="col-auto">
                                    <div className="">{'>'}</div>
                                </div>
                                <div className="col-auto">
                                    <div className="text-dark-1">Great Northern Hotel, a Tribute Portfolio Hotel, London</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-auto">
                            <a href="#" className="text-14 text-blue-1 underline">All Hotel in London</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-40">
                <div className="container">
                    <div className="row y-gap-30">
                        <div className="col-lg-8">
                            <div className="row y-gap-20 justify-between items-end">
                                <div className="col-auto">
                                    <h1 className="text-30 sm:text-24 fw-600">{car.marque}</h1>

                                    <div className="row x-gap-10 items-center pt-10">
                                        <div className="col-auto">
                                            <div className="d-flex x-gap-5 items-center">
                                                <i className="icon-location text-16 text-light-1"></i>
                                                <div className="text-15 text-light-1">Greater London, United Kingdom</div>
                                            </div>
                                        </div>

                                        <div className="col-auto">
                                            <button data-x-click="mapFilter" className="text-blue-1 text-15 underline">Show on map</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <div className="row x-gap-10 y-gap-10">
                                        <div className="col-auto">
                                            <button className="button px-15 py-10 -blue-1">
                                                <i className="icon-share mr-10"></i>
                                                Share
                                            </button>
                                        </div>

                                        <div className="col-auto">
                                            <button className="button px-15 py-10 -blue-1 bg-light-2">
                                                <i className="icon-heart mr-10"></i>
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carsSlider mt-40">
                                <div className="carsSlider-slides js-cars-slides">

                                    {car.images && car.images.map((src, index) => (
                                        <div
                                            key={index}
                                            className={`carsSlider-slides__item rounded-4 ${index === 0 ? '-is-active' : ''}`}
                                        >
                                            <img src={src} alt={`Car ${index + 1}`} />
                                        </div>
                                    ))}



                                </div>

                                <div className="carsSlider-slider">
                                    <div className="js-cars-slider">
                                        <div className="swiper-wrapper">

                                            <div className="swiper-slide">
                                                {/* <img src="img/cars/slider/1.png" alt="image" className="rounded-4"> */}
                                            </div>

                                            <div className="swiper-slide">
                                                {/* <img src="img/cars/slider/2.png" alt="image" className="rounded-4"> */}
                                            </div>

                                            <div className="swiper-slide">
                                                {/* <img src="img/cars/slider/3.png" alt="image" className="rounded-4"> */}
                                            </div>

                                            <div className="swiper-slide">
                                                {/* <img src="img/cars/slider/4.png" alt="image" className="rounded-4"> */}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="d-flex justify-end">
                                {/* --- Price/Rating Display (Static Part) --- */}
                                <div className="px-30 py-30 rounded-4 border-light shadow-4 bg-white w-360 lg:w-full">
                                    <div className="row y-gap-15 items-center justify-between">
                                        <div className="col-auto">
                                            <div className="text-14 text-light-1">
                                                From
                                                <span className="text-20 fw-500 text-dark-1 ml-5">
                                                    {vehicleBasePrice} MAD</span>
                                                <span className="text-14 text-light-1">/day</span>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            {/* Rating part - kept from original */}
                                            <div className="d-flex items-center">
                                                <div className="text-14 text-right mr-10">
                                                    <div className="lh-15 fw-500">Exceptional</div>
                                                    <div className="lh-15 text-light-1">3,014 reviews</div>
                                                </div>
                                                <div className="size-40 flex-center bg-yellow-1 rounded-4">
                                                    <div className="text-14 fw-600 text-dark-1">4.8</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* --- Booking Form --- */}
                                    <form onSubmit={handleSubmit}>
                                        <div className="row y-gap-20 pt-20">

                                            {/* Pick up Date */}
                                            <div className="col-12">
                                                <div className="searchMenu-date px-20 py-10 border-light rounded-4">
                                                    <h4 className="text-15 fw-500 ls-2 lh-16 mb-1">Pick up Date</h4>
                                                    <DatePicker
                                                        selected={formData.date_depart}
                                                        onChange={(date) => handleDateChange('date_depart', date)}
                                                        selectsStart
                                                        startDate={formData.date_depart}
                                                        endDate={formData.date_fin}
                                                        minDate={new Date()} // Cannot select past dates
                                                        dateFormat="EEE d MMM"
                                                        className="text-15 text-light-1 ls-2 lh-16 custom-date-picker" // Add custom class if needed for styling
                                                        wrapperClassName="w-100" // Ensure wrapper takes full width
                                                    />
                                                </div>
                                            </div>

                                            {/* Drop off Date */}
                                            <div className="col-12">

                                                <div className="searchMenu-date px-20 py-10 border-light rounded-4">
                                                    <h4 className="text-15 fw-500 ls-2 lh-16 mb-1">Drop off Date</h4>
                                                    <DatePicker
                                                        selected={formData.date_fin}
                                                        onChange={(date) => handleDateChange('date_fin', date)}
                                                        selectsEnd
                                                        startDate={formData.date_depart}
                                                        endDate={formData.date_fin}
                                                        minDate={formData.date_depart}
                                                        dateFormat="EEE d MMM"
                                                        className="text-15 text-light-1 ls-2 lh-16 custom-date-picker"
                                                        wrapperClassName="w-100"
                                                    />
                                                </div>

                                            </div>



                                            {/* Phone Number */}
                                            <div className="col-12">
                                                <div className="form-input px-20 py-10 border-light rounded-4">
                                                    <label className="text-15 fw-500 ls-2 lh-16" htmlFor="numero_tel">Phone Number</label>
                                                    <input
                                                        id="numero_tel"
                                                        type="tel"
                                                        name="numero_tel"
                                                        placeholder="e.g., +1 555 1234"
                                                        value={formData.numero_tel}
                                                        onChange={handleChange}
                                                        className="text-15 text-light-1 ls-2 lh-16 mt-1 w-100 border-0"
                                                        
                                                    />
                                                </div>
                                            </div>

                                            {/* Date of Birth */}
                                            <div className="col-12">
                                                <div className="form-input px-20 py-10 border-light rounded-4">
                                                    <label className="text-15 fw-500 ls-2 lh-16" htmlFor="date_naissance">Date of Birth</label>
                                                    <input
                                                        id="date_naissance"
                                                        type="date" // Use standard date input for simplicity here
                                                        name="date_naissance"
                                                        value={formData.date_naissance}
                                                        onChange={handleChange}
                                                        className="text-15 text-light-1 ls-2 lh-16 mt-1 w-100 border-0"
                                                        
                                                    />
                                                </div>
                                            </div>

                                            {/* Driver Option */}
                                            <div className="col-12">
                                                <div className="d-flex items-center px-20 py-10 border-light rounded-4">
                                                    <input
                                                        type="checkbox"
                                                        id="chauffeur_exist"
                                                        name="chauffeur_exist"
                                                        checked={formData.chauffeur_exist}
                                                        onChange={handleChange}
                                                        className="mr-10"
                                                        style={{ width: 'auto' }} // Override default browser styles if needed
                                                    />
                                                    <label htmlFor="chauffeur_exist" className="text-15 text-light-1 ls-2 lh-16 mb-0">
                                                        Add Driver (+ {driverDailyCost}/day MAD)
                                                    </label>
                                                </div>
                                            </div>

                                            {/* Total Amount Display */}
                                            <div className="col-12 mt-10">
                                                <div className="text-16 fw-500 text-dark-1">
                                                    Estimated Total: <span className="text-20">{formData.montant_total} MAD</span>
                                                </div>
                                                {/* Simple duration display */}
                                                {new Date(formData.date_fin) >= new Date(formData.date_depart) &&
                                                    <div className="text-14 text-light-1">
                                                        ({Math.max(1, Math.ceil((new Date(formData.date_fin).getTime() - new Date(formData.date_depart).getTime()) / (1000 * 60 * 60 * 24)) + 1)} days)
                                                    </div>
                                                }
                                            </div>


                                            {/* Messages */}
                                            {error && (
                                                <div className="col-12 mt-10">
                                                    <div className="text-red-1 text-14">{error}</div>
                                                </div>
                                            )}
                                            {success && (
                                                <div className="col-12 mt-10">
                                                    <div className="text-green-1 text-14">{success}</div>
                                                </div>
                                            )}


                                            {/* Submit Button */}
                                            <div className="col-12 mt-20">
                                                <button
                                                    type="submit"
                                                    className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1"
                                                    disabled={success}
                                                >
                                                    {success ? 'Booked!' : 'Book Now'}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div>
                                <h3 className="text-22 fw-500">
                                    Property highlights
                                </h3>

                                <div className="row y-gap-30 justify-between pt-20">

                                    <div className="col-md-auto col-6">
                                        <div className="d-flex">
                                            <i className="icon-user-2 text-22 text-dark-1 mr-10"></i>
                                            <div className="text-15 lh-15">
                                                User<br />  {car.N_porte}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-auto col-6">
                                        <div className="d-flex">
                                            <i className="icon-luggage text-22 text-dark-1 mr-10"></i>
                                            <div className="text-15 lh-15">
                                                Valises <br /> {car.N_valise}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-auto col-6">
                                        <div className="d-flex">
                                            <i className="icon-transmission text-22 text-dark-1 mr-10"></i>
                                            <div className="text-15 lh-15">
                                                Transmission<br /> {car.boite_vitesse}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-auto col-6">
                                        <div className="d-flex">
                                            <i className="icon-location text-22 text-dark-1 mr-10"></i>
                                            <div className="text-15 lh-15">
                                                Couleur <br /> {car.couleur}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="border-top-light mt-40 mb-40"></div>

                            <div>
                                <h3 className="text-22 fw-500">Overview</h3>
                                <p className="text-dark-1 text-15 mt-20">
                                    Unless you hire a car, visiting Stonehenge, Bath, and Windsor Castle in one day is next to impossible. Designed specifically for travelers with limited time in London, this tour allows you to check off a range of southern England's historical attractions in just one day by eliminating the hassle of traveling between each one independently. Travel by comfortable coach and witness your guide bring each UNESCO World Heritage Site to life with commentary. Plus, all admission tickets are included in the tour price.
                                </p>
                                <a href="#" className="d-block text-14 text-blue-1 fw-500 underline mt-10">Show More</a>

                                <div className="mt-60 lg:mt-40 md:mt-30">
                                    <h5 className="text-16 fw-500">Highlights</h5>
                                    <ul className="list-disc text-15 mt-10">
                                        <li>Travel between the UNESCO World Heritage sites aboard a comfortable coach</li>
                                        <li>Explore with a guide to delve deeper into the history</li>
                                        <li>Great for history buffs and travelers with limited time</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border-top-light mt-40 mb-40"></div>

                            <div>
                                <h3 className="text-22 fw-500">Specifications</h3>

                                <div className="col-xl-9">
                                    <div className="row y-gap-30 pt-15">

                                        <div className="col-sm-4">
                                            <div className="fw-500">Make</div>
                                            <div className="text-15">{car.marque}</div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="fw-500">Model</div>
                                            <div className="text-15">{car.marque}</div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="fw-500">Made Year</div>
                                            <div className="text-15">{car.marque}</div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="fw-500">Mileage</div>
                                            <div className="text-15">{car.marque}</div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="fw-500">Mileage</div>
                                            <div className="text-15">{car.marque}</div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="fw-500">Version</div>
                                            <div className="text-15">{car.marque}</div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="fw-500">Horsepower (hp)</div>
                                            <div className="text-15">200</div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="fw-500">Transmission</div>
                                            <div className="text-15">{car.marque}</div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="fw-500">Condition</div>
                                            <div className="text-15">{car.age_min}</div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="border-top-light mt-40 mb-40"></div>

                            <div>
                                <h3 className="text-22 fw-500">Amenities</h3>

                                <div className="row y-gap-10 pt-15">

                                    <div className="col-sm-5">
                                        <div className="d-flex items-center">
                                            <i className="icon-check text-10 mr-15"></i>
                                            <div className="text-15">Airbag</div>
                                        </div>
                                    </div>

                                    <div className="col-sm-5">
                                        <div className="d-flex items-center">
                                            <i className="icon-check text-10 mr-15"></i>
                                            <div className="text-15">FM Radio</div>
                                        </div>
                                    </div>

                                    <div className="col-sm-5">
                                        <div className="d-flex items-center">
                                            <i className="icon-check text-10 mr-15"></i>
                                            <div className="text-15">Power Windows</div>
                                        </div>
                                    </div>

                                    <div className="col-sm-5">
                                        <div className="d-flex items-center">
                                            <i className="icon-check text-10 mr-15"></i>
                                            <div className="text-15">Sensor</div>
                                        </div>
                                    </div>

                                    <div className="col-sm-5">
                                        <div className="d-flex items-center">
                                            <i className="icon-check text-10 mr-15"></i>
                                            <div className="text-15">Speed Km</div>
                                        </div>
                                    </div>

                                    <div className="col-sm-5">
                                        <div className="d-flex items-center">
                                            <i className="icon-check text-10 mr-15"></i>
                                            <div className="text-15">Steering Wheel</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="border-top-light mt-40"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-40">
                <div className="container">
                    <h3 className="text-22 fw-500 mb-20">Car Location</h3>

                    <div className="map rounded-4 map-500 js-map-single"></div>
                </div>
            </section>

            <div className="mt-40"></div>

            <section>
                <div className="container">
                    <div className="row y-gap-20">
                        <div className="col-lg-4">
                            <h2 className="text-22 fw-500">FAQs about<br /> The Crown Hotel</h2>
                        </div>

                        <div className="col-lg-8">
                            <div className="accordion -simple row y-gap-20 js-accordion">

                                <div className="col-12">
                                    <div className="accordion__item px-20 py-20 border-light rounded-4">
                                        <div className="accordion__button d-flex items-center">
                                            <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                                                <i className="icon-plus"></i>
                                                <i className="icon-minus"></i>
                                            </div>

                                            <div className="button text-dark-1">What do I need to hire a car?</div>
                                        </div>

                                        <div className="accordion__content">
                                            <div className="pt-20 pl-60">
                                                <p className="text-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="accordion__item px-20 py-20 border-light rounded-4">
                                        <div className="accordion__button d-flex items-center">
                                            <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                                                <i className="icon-plus"></i>
                                                <i className="icon-minus"></i>
                                            </div>

                                            <div className="button text-dark-1">How old do I have to be to rent a car?</div>
                                        </div>

                                        <div className="accordion__content">
                                            <div className="pt-20 pl-60">
                                                <p className="text-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="accordion__item px-20 py-20 border-light rounded-4">
                                        <div className="accordion__button d-flex items-center">
                                            <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                                                <i className="icon-plus"></i>
                                                <i className="icon-minus"></i>
                                            </div>

                                            <div className="button text-dark-1">Can I book a hire car for someone else?</div>
                                        </div>

                                        <div className="accordion__content">
                                            <div className="pt-20 pl-60">
                                                <p className="text-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="accordion__item px-20 py-20 border-light rounded-4">
                                        <div className="accordion__button d-flex items-center">
                                            <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                                                <i className="icon-plus"></i>
                                                <i className="icon-minus"></i>
                                            </div>

                                            <div className="button text-dark-1">How do I find the cheapest car hire deal?</div>
                                        </div>

                                        <div className="accordion__content">
                                            <div className="pt-20 pl-60">
                                                <p className="text-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="accordion__item px-20 py-20 border-light rounded-4">
                                        <div className="accordion__button d-flex items-center">
                                            <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                                                <i className="icon-plus"></i>
                                                <i className="icon-minus"></i>
                                            </div>

                                            <div className="button text-dark-1">What should I look for when I&#39;m choosing a car?</div>
                                        </div>

                                        <div className="accordion__content">
                                            <div className="pt-20 pl-60">
                                                <p className="text-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mt-40 mb-40">
                <div className="border-top-light"></div>
            </div>

            <section>
                <div className="container">
                    <div className="row y-gap-40 justify-between">
                        <div className="col-xl-3">
                            <h3 className="text-22 fw-500">Guest reviews</h3>

                            <div className="d-flex items-center mt-20">
                                <div className="flex-center bg-yellow-1 rounded-4 size-70 text-22 fw-600 text-dark-1">4.8</div>
                                <div className="ml-20">
                                    <div className="text-16 text-dark-1 fw-500 lh-14">Exceptional</div>
                                    <div className="text-15 text-light-1 lh-14 mt-4">3,014 reviews</div>
                                </div>
                            </div>

                            <div className="row y-gap-20 pt-20">

                                <div className="col-12">
                                    <div className="">
                                        <div className="d-flex items-center justify-between">
                                            <div className="text-15 fw-500">Excellent</div>
                                            <div className="text-15 text-light-1">1,050</div>
                                        </div>

                                        <div className="progressBar mt-10">
                                            <div className="progressBar__bg bg-blue-2"></div>
                                            <div className="progressBar__bar bg-yellow-1" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="">
                                        <div className="d-flex items-center justify-between">
                                            <div className="text-15 fw-500">Very good</div>
                                            <div className="text-15 text-light-1">341</div>
                                        </div>

                                        <div className="progressBar mt-10">
                                            <div className="progressBar__bg bg-blue-2"></div>
                                            <div className="progressBar__bar bg-yellow-1" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="">
                                        <div className="d-flex items-center justify-between">
                                            <div className="text-15 fw-500">Average</div>
                                            <div className="text-15 text-light-1">100</div>
                                        </div>

                                        <div className="progressBar mt-10">
                                            <div className="progressBar__bg bg-blue-2"></div>
                                            <div className="progressBar__bar bg-yellow-1" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="">
                                        <div className="d-flex items-center justify-between">
                                            <div className="text-15 fw-500">Poor</div>
                                            <div className="text-15 text-light-1">20</div>
                                        </div>

                                        <div className="progressBar mt-10">
                                            <div className="progressBar__bg bg-blue-2"></div>
                                            <div className="progressBar__bar bg-yellow-1" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="">
                                        <div className="d-flex items-center justify-between">
                                            <div className="text-15 fw-500">Terrible</div>
                                            <div className="text-15 text-light-1">40</div>
                                        </div>

                                        <div className="progressBar mt-10">
                                            <div className="progressBar__bg bg-blue-2"></div>
                                            <div className="progressBar__bar bg-yellow-1" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-xl-8">
                            <div className="row y-gap-40">


                                <div className="col-12">
                                    <div className="row x-gap-20 y-gap-20 items-center">
                                        <div className="col-auto">
                                            {/* <img src="img/avatars/2.png" alt="image"> */}
                                        </div>
                                        <div className="col-auto">
                                            <div className="fw-500 lh-15">Tonko</div>
                                            <div className="text-14 text-light-1 lh-15">March 2022</div>
                                        </div>
                                    </div>

                                    <h5 className="fw-500 text-blue-1 mt-20">9.2 Superb</h5>
                                    <p className="text-15 text-dark-1 mt-10">Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores. </p>


                                    <div className="row x-gap-30 y-gap-30 pt-20">

                                        <div className="col-auto">
                                            {/* <img src="img/testimonials/1/1.png" alt="image" className="rounded-4"> */}
                                        </div>

                                        <div className="col-auto">
                                            {/* <img src="img/testimonials/1/2.png" alt="image" className="rounded-4"> */}
                                        </div>

                                        <div className="col-auto">
                                            {/* <img src="img/testimonials/1/3.png" alt="image" className="rounded-4"> */}
                                        </div>

                                        <div className="col-auto">
                                            {/* <img src="img/testimonials/1/4.png" alt="image" className="rounded-4"> */}
                                        </div>

                                    </div>


                                    <div className="d-flex x-gap-30 items-center pt-20">
                                        <button className="d-flex items-center text-blue-1">
                                            <i className="icon-like text-16 mr-10"></i>
                                            Helpful
                                        </button>

                                        <button className="d-flex items-center text-light-1">
                                            <i className="icon-dislike text-16 mr-10"></i>
                                            Not helpful
                                        </button>
                                    </div>
                                </div>


                                <div className="col-12">
                                    <div className="row x-gap-20 y-gap-20 items-center">
                                        <div className="col-auto">
                                            {/* <img src="img/avatars/2.png" alt="image"> */}
                                        </div>
                                        <div className="col-auto">
                                            <div className="fw-500 lh-15">Tonko</div>
                                            <div className="text-14 text-light-1 lh-15">March 2022</div>
                                        </div>
                                    </div>

                                    <h5 className="fw-500 text-blue-1 mt-20">9.2 Superb</h5>
                                    <p className="text-15 text-dark-1 mt-10">Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores. </p>


                                    <div className="row x-gap-30 y-gap-30 pt-20">

                                        <div className="col-auto">
                                            {/* <img src="img/testimonials/1/1.png" alt="image" className="rounded-4"> */}
                                        </div>

                                        <div className="col-auto">
                                            {/* <img src="img/testimonials/1/2.png" alt="image" className="rounded-4"> */}
                                        </div>

                                        <div className="col-auto">
                                            {/* <img src="img/testimonials/1/3.png" alt="image" className="rounded-4"> */}
                                        </div>

                                        <div className="col-auto">
                                            {/* <img src="img/testimonials/1/4.png" alt="image" className="rounded-4"> */}
                                        </div>

                                    </div>


                                    <div className="d-flex x-gap-30 items-center pt-20">
                                        <button className="d-flex items-center text-blue-1">
                                            <i className="icon-like text-16 mr-10"></i>
                                            Helpful
                                        </button>

                                        <button className="d-flex items-center text-light-1">
                                            <i className="icon-dislike text-16 mr-10"></i>
                                            Not helpful
                                        </button>
                                    </div>
                                </div>


                                <div className="col-12">
                                    <div className="row x-gap-20 y-gap-20 items-center">
                                        <div className="col-auto">
                                            {/* <img src="img/avatars/2.png" alt="image"> */}
                                        </div>
                                        <div className="col-auto">
                                            <div className="fw-500 lh-15">Tonko</div>
                                            <div className="text-14 text-light-1 lh-15">March 2022</div>
                                        </div>
                                    </div>

                                    <h5 className="fw-500 text-blue-1 mt-20">9.2 Superb</h5>
                                    <p className="text-15 text-dark-1 mt-10">Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores. </p>


                                    <div className="d-flex x-gap-30 items-center pt-20">
                                        <button className="d-flex items-center text-blue-1">
                                            <i className="icon-like text-16 mr-10"></i>
                                            Helpful
                                        </button>

                                        <button className="d-flex items-center text-light-1">
                                            <i className="icon-dislike text-16 mr-10"></i>
                                            Not helpful
                                        </button>
                                    </div>
                                </div>


                                <div className="col-12">
                                    <div className="row x-gap-20 y-gap-20 items-center">
                                        <div className="col-auto">
                                            {/* <img src="img/avatars/2.png" alt="image"> */}
                                        </div>
                                        <div className="col-auto">
                                            <div className="fw-500 lh-15">Tonko</div>
                                            <div className="text-14 text-light-1 lh-15">March 2022</div>
                                        </div>
                                    </div>

                                    <h5 className="fw-500 text-blue-1 mt-20">9.2 Superb</h5>
                                    <p className="text-15 text-dark-1 mt-10">Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores. </p>


                                    <div className="d-flex x-gap-30 items-center pt-20">
                                        <button className="d-flex items-center text-blue-1">
                                            <i className="icon-like text-16 mr-10"></i>
                                            Helpful
                                        </button>

                                        <button className="d-flex items-center text-light-1">
                                            <i className="icon-dislike text-16 mr-10"></i>
                                            Not helpful
                                        </button>
                                    </div>
                                </div>


                                <div className="col-auto">

                                    <a href="#" className="button -md -outline-blue-1 text-blue-1">
                                        Show all 116 reviews <div className="icon-arrow-top-right ml-15"></div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mt-40 mb-40">
                <div className="border-top-light"></div>
            </div>

            <section>
                <div className="container">
                    <div className="row y-gap-30 justify-between">
                        <div className="col-xl-3">
                            <div className="row">
                                <div className="col-auto">
                                    <h3 className="text-22 fw-500">Leave a Reply</h3>
                                    <p className="text-15 text-dark-1 mt-5">Your email address will not be published.</p>
                                </div>
                            </div>

                            <div className="row y-gap-30 pt-30">

                                <div className="col-sm-6">
                                    <div className="text-15 lh-1 fw-500">Location</div>
                                    <div className="d-flex x-gap-5 items-center pt-10">

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="text-15 lh-1 fw-500">Staff</div>
                                    <div className="d-flex x-gap-5 items-center pt-10">

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="text-15 lh-1 fw-500">Cleanliness</div>
                                    <div className="d-flex x-gap-5 items-center pt-10">

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="text-15 lh-1 fw-500">Value for money</div>
                                    <div className="d-flex x-gap-5 items-center pt-10">

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="text-15 lh-1 fw-500">Comfort</div>
                                    <div className="d-flex x-gap-5 items-center pt-10">

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="text-15 lh-1 fw-500">Facilities</div>
                                    <div className="d-flex x-gap-5 items-center pt-10">

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="text-15 lh-1 fw-500">Free WiFi</div>
                                    <div className="d-flex x-gap-5 items-center pt-10">

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                        <div className="icon-star text-10 text-yellow-1"></div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-xl-8">
                            <div className="row y-gap-30">
                                <div className="col-xl-6">

                                    <div className="form-input ">
                                        <input type="text" required />
                                        <label className="lh-1 text-16 text-light-1">Text</label>
                                    </div>

                                </div>
                                <div className="col-xl-6">

                                    <div className="form-input ">
                                        <input type="text" required />
                                        <label className="lh-1 text-16 text-light-1">Email</label>
                                    </div>

                                </div>
                                <div className="col-12">

                                    <div className="form-input ">
                                        <textarea required rows="6"></textarea>
                                        <label className="lh-1 text-16 text-light-1">Write Your Comment</label>
                                    </div>

                                </div>
                                <div className="col-auto">

                                    <a href="#" className="button -md -dark-1 bg-blue-1 text-white">
                                        Post Comment <div className="icon-arrow-top-right ml-15"></div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="layout-pt-lg"></div>



        </>
    );
};

export default SingleCar;