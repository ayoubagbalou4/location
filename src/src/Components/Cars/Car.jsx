import React from "react";
import { Link } from "react-router-dom";

const Car = ({ car }) => {
    return (
        <div className="col-lg-4 col-sm-6">
            <Link to={`/car/${car._id}`} className="carCard -type-1 d-block rounded-4">
                <div className="carCard__image">
                    <div className="cardImage ratio border-light ratio-6:5">
                        <div className="cardImage__content">
                        <img
                            className="rounded-4 col-12"
                            src={`/images/${car.images?.[0] || "default.jpg"}`}
                            alt={car.marque}
                        />
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
                    <div className="text-14 text-light-1">Disponible</div>
                    <div className="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                    <div className="text-14 text-light-1 uppercase">
                    {car.categorie?.nom || "Inconnue"}
                    </div>
                </div>

                <h4 className="text-dark-1 text-18 lh-16 fw-500">
                    {car.marque} - {car.matricule}{" "}
                    <span className="text-15 text-light-1 fw-400">ou similaire</span>
                </h4>

                <div className="row x-gap-20 y-gap-10 items-center pt-5">
                    <div className="col-auto">
                    <div className="d-flex items-center text-14 text-dark-1">
                        <i className="icon-user-2 mr-10"></i>
                        <div className="lh-14">{car.N_porte}</div>
                    </div>
                    </div>
                    <div className="col-auto">
                    <div className="d-flex items-center text-14 text-dark-1">
                        <i className="icon-luggage mr-10"></i>
                        <div className="lh-14">{car.N_valise}</div>
                    </div>
                    </div>
                    <div className="col-auto">
                    <div className="d-flex items-center text-14 text-dark-1">
                        <i className="icon-transmission mr-10"></i>
                        <div className="lh-14">{car.boite_vitesse}</div>
                    </div>
                    </div>
                    <div className="col-auto">
                    <div className="d-flex items-center text-14 text-dark-1">
                        <i className="icon-speedometer mr-10"></i>
                        <div className="lh-14">Illimité</div>
                    </div>
                    </div>
                </div>

                <div className="d-flex items-center mt-20">
                    <div className="flex-center bg-yellow-1 rounded-4 size-30 text-12 fw-600 text-dark-1">4.8</div>
                    <div className="text-14 text-dark-1 fw-500 ml-10">Exceptionnel</div>
                    <div className="text-14 text-light-1 ml-10">3 014 avis</div>
                </div>

                <div className="mt-5">
                    <div className="text-light-1">
                    <span className="fw-500 text-dark-1">{car.prix}€</span> total
                    </div>
                </div>
                </div>
            </Link>
        </div>
    );
};

export default Car;
