import axios from 'axios';
import React, { useEffect, useState } from 'react';
import dateFormat from 'dateformat';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';


function Homme() {


  const [reservations, setReservations] = useState([])
  const [loadingReservations, setLoadingReservations] = useState([])
  const getReservations = async () => {
    setLoadingReservations(true)
    try {
      const response = await axios.get('/api/reservations/today')
      setReservations(response.data)
      setLoadingReservations(false)
    } catch (error) {
      console.log(error)
      setLoadingReservations(false)
    }
  }
  useEffect(() => {
    getReservations()
  }, [])



  const [counts, setCounts] = useState([])
  const [loadingCounts, setLoadingCounts] = useState([])
  const getCounts = async () => {
    setLoadingCounts(true)
    try {
      const response = await axios.get('/api/users/counts')
      setCounts(response.data)
      setLoadingCounts(false)
    } catch (error) {
      console.log(error)
      setLoadingCounts(false)
    }
  }
  useEffect(() => {
    getCounts()
  }, [])

  return (
    <>
      <div className="dashboard__main">
        <div className="dashboard__content bg-light-2">
          {/* <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
                <div className="col-auto">

                  <h1 className="text-30 lh-14 fw-600">Dashboard</h1>
                  <div className="text-15 text-light-1">Lorem ipsum dolor sit amet, consectetur.</div>

                </div>

                <div className="col-auto">

                </div>
              </div>  */}


          <div className="row y-gap-30">

            <div className="col-xl-3 col-md-6">
              <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                <div className="row y-gap-20 justify-between items-center">
                  <div className="col-auto">
                    <div className="fw-500 lh-14">Cars</div>
                    <div className="text-26 lh-16 fw-600 mt-5">{counts.vehiculesCount}</div>
                    <div className="text-15 lh-14 text-light-1 mt-5">Total Cars</div>
                  </div>

                  <div className="col-auto">
                    <img src="http://localhost:3000/img/dashboard/icons/1.svg" alt="icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                <div className="row y-gap-20 justify-between items-center">
                  <div className="col-auto">
                    <div className="fw-500 lh-14">Reservations</div>
                    <div className="text-26 lh-16 fw-600 mt-5">{counts.reservationsCount}</div>
                    <div className="text-15 lh-14 text-light-1 mt-5">Total <br /> Reservations</div>
                  </div>

                  <div className="col-auto">
                    <img src="http://localhost:3000/img/dashboard/icons/2.svg" alt="icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                <div className="row y-gap-20 justify-between items-center">
                  <div className="col-auto">
                    <div className="fw-500 lh-14">Contrat</div>
                    <div className="text-26 lh-16 fw-600 mt-5">{counts.contratCount}</div>
                    <div className="text-15 lh-14 text-light-1 mt-5">Total Contrat</div>
                  </div>

                  <div className="col-auto">
                    <img src="http://localhost:3000/img/dashboard/icons/3.svg" alt="icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                <div className="row y-gap-20 justify-between items-center">
                  <div className="col-auto">
                    <div className="fw-500 lh-14">Users</div>
                    <div className="text-26 lh-16 fw-600 mt-5">{counts.usersCount}</div>
                    <div className="text-15 lh-14 text-light-1 mt-5">Total Users</div>
                  </div>

                  <div className="col-auto">
                    <img src="http://localhost:3000/img/dashboard/icons/4.svg" alt="icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-6">
              <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                <div className="row y-gap-20 justify-between items-center">
                  <div className="col-auto">
                    <div className="fw-500 lh-14">Revenue Total</div>
                    <div className="text-26 lh-16 fw-600 mt-5">352647 DH</div>
                    <div className="text-15 lh-14 text-light-1 mt-5">Revenue Total</div>
                  </div>

                  <div className="col-auto">
                    <img src="http://localhost:3000/img/dashboard/icons/2.svg" alt="icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-6">
              <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                <div className="row y-gap-20 justify-between items-center">
                  <div className="col-auto">
                    <div className="fw-500 lh-14">Revenue Aujourd'hui</div>
                    <div className="text-26 lh-16 fw-600 mt-5">860 DH</div>
                    <div className="text-15 lh-14 text-light-1 mt-5">Revenue Aujourd'hui</div>
                  </div>

                  <div className="col-auto">
                    <img src="http://localhost:3000/img/dashboard/icons/2.svg" alt="icon" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="row y-gap-30 pt-20">

            <div className="col-xl-12 col-md-6">
              <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                <div className="d-flex justify-between items-center">
                  <h2 className="text-18 lh-1 fw-500">
                    Reserversion Aujourd'Hui
                  </h2>

                  <div className="">
                    <a href="#" className="text-14 text-blue-1 fw-500 underline">View All</a>
                  </div>
                </div>

                <div className="overflow-scroll scroll-bar-1 pt-30">
                  <table className="table-2 col-12">
                    <thead className="">
                      <tr>
                        <th>date depart</th>
                        <th>date fin</th>
                        <th>montant total</th>
                        <th>numero tel</th>
                        <th>vehicule matricule</th>
                        <th>vehicule marque</th>
                        <th>chauffeur exist</th>
                        <th>Created At</th>
                      </tr>
                    </thead>
                    <tbody>


                      {
                        reservations.map((reservation, index) => (
                          <tr key={index}>
                            <td>{dateFormat(reservation.date_depart, "dd-mm-yyyy")}</td>
                            <td>{dateFormat(reservation.date_fin, "dd-mm-yyyy")}</td>
                            <td>{reservation.montant_total} DH</td>
                            <td>{reservation.numero_tel}</td>
                            <td>{reservation.vehicule_id?.matricule}</td>
                            <td>{reservation.vehicule_id?.marque}</td>
                            <td>{reservation.chauffeur_exist ? 'Oui' : 'Non'}</td>
                            <td>{dateFormat(reservation.createdAt, "dd-mm-yyyy")} ({formatDistanceToNow(reservation.createdAt, { addSuffix: true, locale: fr })}) </td>
                          </tr>
                        ))
                      }




                      {/* <tr>
                        <td>#1</td>
                        <td>New York<br /> Discover America</td>
                        <td className="fw-500">$130</td>
                        <td>$0</td>
                        <td>
                          <div className="rounded-100 py-4 text-center col-12 text-14 fw-500 bg-yellow-4 text-yellow-3">Pending</div>
                        </td>
                        <td>04/04/2022<br />08:16</td>
                      </tr> */}


                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >




    </>
  );
};
export default Homme;