import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';
import axios from 'axios';

function Homme() {
  const [vehicules, setVehicules] = useState([]);
  const [loadingVehicules, setLoadingVehicules] = useState(true);
  const [error, setError] = useState(null);
  const [debug, setDebug] = useState({});

  const getVehicules = async () => {
    setLoadingVehicules(true);
    setError(null);
    setDebug({});

    try {
      const response = await axios.get('/api/vehicules/random');
      console.log("✅ Réponse API :", response);

      setDebug({
        status: response.status,
        data: response.data,
        length: Array.isArray(response.data) ? response.data.length : 'non-array',
      });

      if (Array.isArray(response.data)) {
        setVehicules(response.data);
      } else {
        setVehicules([]);
        setError("❌ Format inattendu depuis l'API.");
      }
    } catch (err) {
      console.error("❌ Erreur axios :", err);
      setError(err.message || "Erreur inconnue");
      setVehicules([]);
      setDebug({
        message: err.message,
        code: err.code,
        stack: err.stack,
      });
    } finally {
      setLoadingVehicules(false);
    }
  };

  useEffect(() => {
    getVehicules();
  }, []);

  return (
    <>
      <Navbar />
      <Slider />
      <section className="layout-pt-lg layout-pb-md">
        <div data-anim-wrap className="container">
          <div data-anim-child="slide-up delay-1" className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Pourquoi Nous Choisir ?</h2>
                <p className="sectionTitle__text mt-5 sm:mt-0">L'excellence automobile à votre service</p>
              </div>
            </div>
          </div>

          <div className="row y-gap-40 justify-between pt-40 sm:pt-20">

            <div data-anim-child="slide-up delay-2" className="col-lg-4 col-sm-6">
              <div className="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
                <div className="d-flex justify-center">
                  <img src="#" data-src="img/featureIcons/2/1.png" alt="Garantie Prix" className="js-lazy"/>
                </div>
                <div className="text-center mt-30">
                  <h4 className="text-18 fw-500">Meilleur Prix Garanti</h4>
                  <p className="text-15 mt-10">Nous égalons tout prix inférieur trouvé ailleurs ! Transactions transparentes sans frais cachés.</p>
                </div>
              </div>
            </div>

            <div data-anim-child="slide-up delay-3" className="col-lg-4 col-sm-6">
              <div className="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
                <div className="d-flex justify-center">
                  <img src="#" data-src="img/featureIcons/2/2.png" alt="Réservation Rapide" className="js-lazy"/>
                </div>
                <div className="text-center mt-30">
                  <h4 className="text-18 fw-500">Réservation Express</h4>
                  <p className="text-15 mt-10">Processus en 3 étapes • Confirmation immédiate • Paiement sécurisé</p>
                </div>
              </div>
            </div>

            <div data-anim-child="slide-up delay-4" className="col-lg-4 col-sm-6">
              <div className="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
                <div className="d-flex justify-center">
                  <img src="#" data-src="img/featureIcons/2/3.png" alt="Assistance" className="js-lazy"/>
                </div>
                <div className="text-center mt-30">
                  <h4 className="text-18 fw-500">Assistance 24h/24</h4>
                  <p className="text-15 mt-10">Service client dédié • Assistance routière incluse • Support multilingue</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-md">
        <div data-anim-wrap className="container">
          <div data-anim-child="slide-up delay-1" className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Car Hire</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames ac ante ipsum</p>
              </div>
            </div>
          </div>


          <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider" data-gap="30" data-scrollbar data-slider-cols="xl-4 lg-3 md-2 sm-2 base-1" data-nav-prev="js-hotels-prev" data-pagination="js-hotels-pag" data-nav-next="js-hotels-next">
            <div className="swiper-wrapper">

              {
                vehicules.map((vehicule, index) => (
                  <>
                    <div data-anim-child="slide-up delay-1" className="swiper-slide">

                      <a href="car-single.html" className="carCard -type-1 d-block rounded-4 ">
                        <div className="carCard__image">

                          <div className="cardImage ratio border-light ratio-6:5">
                            <div className="cardImage__content">

                              <img className="rounded-4 col-12" src="img/cars/1.png" alt="image" />


                            </div>

                            <div className="cardImage__wishlist">
                              <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                <i className="icon-heart text-12"></i>
                              </button>
                            </div>


                          </div>

                        </div>

                        <div className="carCard__content mt-10">
                          <div className="d-flex items-center lh-14 mb-5">
                            <div className="text-14 text-light-1">Heathrow Airport</div>
                            <div className="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                            <div className="text-14 text-light-1 uppercase">Luxury</div>
                          </div>

                          <h4 className="text-dark-1 text-18 lh-16 fw-500">
                            {vehicule.marque} <span className="text-15 text-light-1 fw-400">or similar</span>
                          </h4>
                          <p className="text-light-1 lh-14 text-14 mt-5"></p>

                          <div className="row x-gap-20 y-gap-10 items-center pt-5">
                            <div className="col-auto">
                              <div className="d-flex items-center text-14 text-dark-1">
                                <i className="icon-user-2 mr-10"></i>
                                <div className="lh-14">4</div>
                              </div>
                            </div>

                            <div className="col-auto">
                              <div className="d-flex items-center text-14 text-dark-1">
                                <i className="icon-luggage mr-10"></i>
                                <div className="lh-14">1</div>
                              </div>
                            </div>

                            <div className="col-auto">
                              <div className="d-flex items-center text-14 text-dark-1">
                                <i className="icon-transmission mr-10"></i>
                                <div className="lh-14">Automatic </div>
                              </div>
                            </div>

                            <div className="col-auto">
                              <div className="d-flex items-center text-14 text-dark-1">
                                <i className="icon-speedometer mr-10"></i>
                                <div className="lh-14">Unlimited</div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex items-center mt-20">
                            <div className="flex-center bg-yellow-1 rounded-4 size-30 text-12 fw-600 text-dark-1">4.8</div>
                            <div className="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                            <div className="text-14 text-light-1 ml-10">3,014 reviews</div>
                          </div>

                          <div className="mt-5">
                            <div className="text-light-1">
                              <span className="fw-500 text-dark-1">US$72</span> total
                            </div>
                          </div>
                        </div>
                      </a>

                    </div>
                  </>
                ))
              }


            </div>


            <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-left-hover js-hotels-prev">
                  <i className="icon icon-arrow-left"></i>
                </button>
              </div>

              <div className="col-auto">
                <div className="pagination -dots text-border js-hotels-pag"></div>
              </div>

              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-hotels-next">
                  <i className="icon icon-arrow-right"></i>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div data-anim-wrap className="container">
          <div data-anim-child="slide-up delay-1" className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Destinations Populaires au Maroc</h2>
                <p className="sectionTitle__text mt-5 sm:mt-0">Découvrez nos meilleures offres de location</p>
              </div>
            </div>
          </div>

          <div className="row y-gap-30 pt-40">

            <div data-anim-child="slide-up delay-2" className="col-xl-2 col-lg-3 col-sm-6">
              <a href="#" className="citiesCard -type-4 d-block text-center">
                <div className="citiesCard__image size-160 rounded-full mx-auto">
                  <img className="object-cover js-lazy" src="#" data-src="img/destinations/1.png" alt="Marrakech" />
                </div>
                <div className="citiesCard__content mt-10">
                  <h4 className="text-18 lh-13 fw-500 text-dark-1">Marrakech</h4>
                  <div className="text-14 text-light-1">À partir de 250 MAD/jour</div>
                </div>
              </a>
            </div>

            <div data-anim-child="slide-up delay-3" className="col-xl-2 col-lg-3 col-sm-6">
              <a href="#" className="citiesCard -type-4 d-block text-center">
                <div className="citiesCard__image size-160 rounded-full mx-auto">
                  <img className="object-cover js-lazy" src="#" data-src="img/destinations/2.png" alt="Casablanca" />
                </div>
                <div className="citiesCard__content mt-10">
                  <h4 className="text-18 lh-13 fw-500 text-dark-1">Casablanca</h4>
                  <div className="text-14 text-light-1">À partir de 200 MAD/jour</div>
                </div>
              </a>
            </div>

            <div data-anim-child="slide-up delay-4" className="col-xl-2 col-lg-3 col-sm-6">
              <a href="#" className="citiesCard -type-4 d-block text-center">
                <div className="citiesCard__image size-160 rounded-full mx-auto">
                  <img className="object-cover js-lazy" src="#" data-src="img/destinations/3.png" alt="Agadir" />
                </div>
                <div className="citiesCard__content mt-10">
                  <h4 className="text-18 lh-13 fw-500 text-dark-1">Agadir</h4>
                  <div className="text-14 text-light-1">À partir de 180 MAD/jour</div>
                </div>
              </a>
            </div>

            <div data-anim-child="slide-up delay-5" className="col-xl-2 col-lg-3 col-sm-6">
              <a href="#" className="citiesCard -type-4 d-block text-center">
                <div className="citiesCard__image size-160 rounded-full mx-auto">
                  <img className="object-cover js-lazy" src="#" data-src="img/destinations/4.png" alt="Fès" />
                </div>
                <div className="citiesCard__content mt-10">
                  <h4 className="text-18 lh-13 fw-500 text-dark-1">Fès</h4>
                  <div className="text-14 text-light-1">À partir de 170 MAD/jour</div>
                </div>
              </a>
            </div>

            <div data-anim-child="slide-up delay-6" className="col-xl-2 col-lg-3 col-sm-6">
              <a href="#" className="citiesCard -type-4 d-block text-center">
                <div className="citiesCard__image size-160 rounded-full mx-auto">
                  <img className="object-cover js-lazy" src="#" data-src="img/destinations/5.png" alt="Tanger" />
                </div>
                <div className="citiesCard__content mt-10">
                  <h4 className="text-18 lh-13 fw-500 text-dark-1">Tanger</h4>
                  <div className="text-14 text-light-1">À partir de 190 MAD/jour</div>
                </div>
              </a>
            </div>

            <div data-anim-child="slide-up delay-7" className="col-xl-2 col-lg-3 col-sm-6">
              <a href="#" className="citiesCard -type-4 d-block text-center">
                <div className="citiesCard__image size-160 rounded-full mx-auto">
                  <img className="object-cover js-lazy" src="#" data-src="img/destinations/6.png" alt="Merzouga" />
                </div>
                <div className="citiesCard__content mt-10">
                  <h4 className="text-18 lh-13 fw-500 text-dark-1">Merzouga</h4>
                  <div className="text-14 text-light-1">4x4 dès 600 MAD/jour</div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>


      
      <section className="layout-pt-lg layout-pb-lg bg-dark-1">
        <div data-anim-wrap className="container">
          <div data-anim-child="slide-up delay-1" className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle text-white">
                <h2 className="sectionTitle__title">Customer Reviews</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">These popular destinations have a lot to offer</p>
              </div>
            </div>
          </div>

          <div data-anim-child="slide-up delay-2" className="overflow-hidden pt-60 lg:pt-40 sm:pt-30 js-section-slider" data-gap="30" data-slider-cols="xl-3 lg-3 md-2 sm-1 base-1">
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40">
                  <h4 className="text-16 fw-500 text-blue-1 mb-20">Hotel Equatorial Melaka</h4>
                  <p className="testimonials__text lh-18 fw-500 text-dark-1">&quot;Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.&quot;</p>

                  <div className="pt-20 mt-28 border-top-light">
                    <div className="row x-gap-20 y-gap-20 items-center">
                      <div className="col-auto">
                        <img className="size-60" src="img/avatars/1.png" alt="image" />
                      </div>

                      <div className="col-auto">
                        <div className="text-15 fw-500 lh-14">Courtney Henry</div>
                        <div className="text-14 lh-14 text-light-1 mt-5">Web Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40">
                  <h4 className="text-16 fw-500 text-blue-1 mb-20">Hotel Equatorial Melaka</h4>
                  <p className="testimonials__text lh-18 fw-500 text-dark-1">&quot;Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.&quot;</p>

                  <div className="pt-20 mt-28 border-top-light">
                    <div className="row x-gap-20 y-gap-20 items-center">
                      <div className="col-auto">
                        <img className="size-60" src="img/avatars/1.png" alt="image" />
                      </div>

                      <div className="col-auto">
                        <div className="text-15 fw-500 lh-14">Courtney Henry</div>
                        <div className="text-14 lh-14 text-light-1 mt-5">Web Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40">
                  <h4 className="text-16 fw-500 text-blue-1 mb-20">Hotel Equatorial Melaka</h4>
                  <p className="testimonials__text lh-18 fw-500 text-dark-1">&quot;Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.&quot;</p>

                  <div className="pt-20 mt-28 border-top-light">
                    <div className="row x-gap-20 y-gap-20 items-center">
                      <div className="col-auto">
                        <img className="size-60" src="img/avatars/1.png" alt="image" />
                      </div>

                      <div className="col-auto">
                        <div className="text-15 fw-500 lh-14">Courtney Henry</div>
                        <div className="text-14 lh-14 text-light-1 mt-5">Web Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40">
                  <h4 className="text-16 fw-500 text-blue-1 mb-20">Hotel Equatorial Melaka</h4>
                  <p className="testimonials__text lh-18 fw-500 text-dark-1">&quot;Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.&quot;</p>

                  <div className="pt-20 mt-28 border-top-light">
                    <div className="row x-gap-20 y-gap-20 items-center">
                      <div className="col-auto">
                        <img className="size-60" src="img/avatars/1.png" alt="image" />
                      </div>

                      <div className="col-auto">
                        <div className="text-15 fw-500 lh-14">Courtney Henry</div>
                        <div className="text-14 lh-14 text-light-1 mt-5">Web Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40">
                  <h4 className="text-16 fw-500 text-blue-1 mb-20">Hotel Equatorial Melaka</h4>
                  <p className="testimonials__text lh-18 fw-500 text-dark-1">&quot;Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.&quot;</p>

                  <div className="pt-20 mt-28 border-top-light">
                    <div className="row x-gap-20 y-gap-20 items-center">
                      <div className="col-auto">
                        <img className="size-60" src="img/avatars/1.png" alt="image" />
                      </div>

                      <div className="col-auto">
                        <div className="text-15 fw-500 lh-14">Courtney Henry</div>
                        <div className="text-14 lh-14 text-light-1 mt-5">Web Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div data-anim-child="slide-up delay-3" className="row y-gap-40 items-center pt-40 sm:pt-20">
            <div className="col-xl-4">
              <div className="row y-gap-30 text-white sm:text-center">
                <div className="col-sm-5 col-6">
                  <div className="text-30 lh-15 fw-600">13m+</div>
                  <div className="lh-15">Happy People</div>
                </div>

                <div className="col-sm-5 col-6">
                  <div className="text-30 lh-15 fw-600">4.88</div>
                  <div className="lh-15">Overall rating</div>

                  <div className="d-flex x-gap-5 items-center sm:justify-center pt-10">

                    <div className="icon-star text-white text-10"></div>

                    <div className="icon-star text-white text-10"></div>

                    <div className="icon-star text-white text-10"></div>

                    <div className="icon-star text-white text-10"></div>

                    <div className="icon-star text-white text-10"></div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8">
              <div className="row y-gap-30 justify-between items-center">

                <div className="col-md-auto col-6">
                  <div className="d-flex justify-center">
                    <img src="img/clients/1.svg" alt="image" />
                  </div>
                </div>

                <div className="col-md-auto col-6">
                  <div className="d-flex justify-center">
                    <img src="img/clients/2.svg" alt="image" />
                  </div>
                </div>

                <div className="col-md-auto col-6">
                  <div className="d-flex justify-center">
                    <img src="img/clients/3.svg" alt="image" />
                  </div>
                </div>

                <div className="col-md-auto col-6">
                  <div className="d-flex justify-center">
                    <img src="img/clients/4.svg" alt="image" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <div className="col-xl-5 col-lg-6">
              <h2 className="text-30 fw-600">GoTrip is a World Leading Car Hire Booking Platform</h2>
              <p className="mt-40 lg:mt-20">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

              <div className="d-inline-block mt-40 lg:mt-20">

                <a href="#" className="button -md -blue-1 bg-dark-1 text-white">
                  Learn More <div className="icon-arrow-top-right ml-15"></div>
                </a>

              </div>
            </div>

            <div className="col-xl-5 col-lg-6">
              <div className="shadow-4">
                <div className="row border-center">

                  <div className="col-sm-6">
                    <div className="py-60 sm:py-30 text-center">
                      <div className="text-40 lg:text-30 lh-13 text-dark-1 fw-600">4,958</div>
                      <div className="text-14 lh-14 text-light-1 mt-10">Destinations</div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="py-60 sm:py-30 text-center">
                      <div className="text-40 lg:text-30 lh-13 text-dark-1 fw-600">2,869</div>
                      <div className="text-14 lh-14 text-light-1 mt-10">Total Properties</div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="py-60 sm:py-30 text-center">
                      <div className="text-40 lg:text-30 lh-13 text-dark-1 fw-600">2M</div>
                      <div className="text-14 lh-14 text-light-1 mt-10">Happy customers</div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="py-60 sm:py-30 text-center">
                      <div className="text-40 lg:text-30 lh-13 text-dark-1 fw-600">574,974</div>
                      <div className="text-14 lh-14 text-light-1 mt-10">Our Volunteers</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div data-anim-wrap className="container">
          <div data-anim-child="slide-up delay-1" className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Get inspiration for your next trip</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames</p>
              </div>
            </div>

            <div className="col-auto">

              <a href="#" className="button -md -blue-1 bg-blue-1-05 text-dark-1">
                More <div className="icon-arrow-top-right ml-15"></div>
              </a>

            </div>
          </div>

          <div className="row y-gap-30 pt-40">

            <div data-anim-child="slide-up delay-2" className="col-lg-4 col-sm-6">

              <a href="#" className="blogCard -type-1 d-block ">
                <div className="blogCard__image">
                  <div className="ratio ratio-4:3 rounded-4 rounded-8">
                    {/* <img className="img-ratio js-lazy" src="#" data-src="img/blog/1.png" alt="image"> */}
                  </div>
                </div>

                <div className="mt-20">
                  <h4 className="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                  <div className="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                </div>
              </a>

            </div>

            <div data-anim-child="slide-up delay-3" className="col-lg-4 col-sm-6">

              <a href="#" className="blogCard -type-1 d-block ">
                <div className="blogCard__image">
                  <div className="ratio ratio-4:3 rounded-4 rounded-8">
                    <img className="img-ratio js-lazy" src="#" data-src="img/blog/2.png" alt="image" />
                  </div>
                </div>

                <div className="mt-20">
                  <h4 className="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                  <div className="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                </div>
              </a>

            </div>


            <div className="col-lg-4">
              <div className="row y-gap-30">

                <div data-anim-child="slide-up delay-4" className="col-lg-12 col-md-6">
                  <a href="blog-single.html" className="blogCard -type-1 d-flex items-center">
                    <div className="blogCard__image size-130 rounded-8">
                      <img src="img/blog/1.png" alt="image" className="object-cover size-130" />
                    </div>

                    <div className="ml-24">
                      <h4 className="text-18 lh-14 fw-500 text-dark-1">The world’s most romantic destinations</h4>
                      <p className="text-15">December 16, 2022</p>
                    </div>
                  </a>
                </div>

                <div data-anim-child="slide-up delay-5" className="col-lg-12 col-md-6">
                  <a href="blog-single.html" className="blogCard -type-1 d-flex items-center">
                    <div className="blogCard__image size-130 rounded-8">
                      <img src="img/blog/1.png" alt="image" className="object-cover size-130" />
                    </div>

                    <div className="ml-24">
                      <h4 className="text-18 lh-14 fw-500 text-dark-1">The world’s most romantic destinations</h4>
                      <p className="text-15">December 16, 2022</p>
                    </div>
                  </a>
                </div>

                <div data-anim-child="slide-up delay-6" className="col-lg-12 col-md-6">
                  <a href="blog-single.html" className="blogCard -type-1 d-flex items-center">
                    <div className="blogCard__image size-130 rounded-8">
                      <img src="img/blog/1.png" alt="image" className="object-cover size-130" />
                    </div>

                    <div className="ml-24">
                      <h4 className="text-18 lh-14 fw-500 text-dark-1">The world’s most romantic destinations</h4>
                      <p className="text-15">December 16, 2022</p>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Frequently Asked Questions</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames</p>
              </div>
            </div>
          </div>

          <div className="row y-gap-30 justify-center pt-40 sm:pt-20">
            <div className="col-xl-8 col-lg-10">
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

      <Footer />
    </>
  );
}
export default Homme;
