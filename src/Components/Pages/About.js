import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const About = () => {
  return (
   <>
   
   <Navbar />


   
    <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item col-12">
          <img src="img/pages/about/1.png" alt="image" />
        </div>
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="text-40 md:text-25 fw-600 text-white">Roulez avec élégance</h1>
              <div className="text-white mt-15">Votre partenaire de confiance pour la location de voitures haut de gamme</div>
            </div>
          </div>
        </div>
    </section>


    <section className="layout-pt-lg layout-pb-md">
      <div data-anim-wrap className="container">
        <div data-anim-child="slide-up delay-1" className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Pourquoi nous choisir ?</h2>
              <p className="sectionTitle__text mt-5 sm:mt-0">Des services fiables pour tous vos besoins de déplacement</p>
            </div>
          </div>
        </div>

        <div className="row y-gap-40 justify-between pt-50">

          <div data-anim-child="slide-up delay-2" className="col-lg-3 col-sm-6">
            <div className="featureIcon -type-1">
              <div className="d-flex justify-center">
                <img src="#" data-src="img/featureIcons/1/1.svg" alt="image" className="js-lazy" />
              </div>
              <div className="text-center mt-30">
                <h4 className="text-18 fw-500">Prix imbattables</h4>
                <p className="text-15 mt-10">Profitez des meilleures offres sans compromettre la qualité.</p>
              </div>
            </div>
          </div>

          <div data-anim-child="slide-up delay-3" className="col-lg-3 col-sm-6">
            <div className="featureIcon -type-1">
              <div className="d-flex justify-center">
                <img src="#" data-src="img/featureIcons/1/2.svg" alt="image" className="js-lazy" />
              </div>
              <div className="text-center mt-30">
                <h4 className="text-18 fw-500">Réservation facile</h4>
                <p className="text-15 mt-10">Un système simple et rapide pour réserver votre véhicule.</p>
              </div>
            </div>
          </div>

          <div data-anim-child="slide-up delay-4" className="col-lg-3 col-sm-6">
            <div className="featureIcon -type-1">
              <div className="d-flex justify-center">
                <img src="#" data-src="img/featureIcons/1/3.svg" alt="image" className="js-lazy" />
              </div>
              <div className="text-center mt-30">
                <h4 className="text-18 fw-500">Assistance 24h/24</h4>
                <p className="text-15 mt-10">Une équipe disponible à tout moment pour vous accompagner.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    <section className="layout-pt-md">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-lg-5">
            <h2 className="text-30 fw-600">À propos de GoTrip.com</h2>
            <p className="mt-5">Une nouvelle façon de voyager en toute liberté</p>

            <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20">
              GoTrip.com est votre plateforme de confiance pour la location de véhicules partout dans le monde. Que vous planifiez un voyage d'affaires, une escapade en famille ou une aventure improvisée, nous mettons à votre disposition des véhicules fiables et adaptés à vos besoins.
              <br /><br />
              Grâce à notre réseau de partenaires, vous pouvez réserver en quelques clics une voiture dans les plus grandes villes et destinations touristiques. Profitez de tarifs compétitifs, d’un service client réactif, et partez l’esprit tranquille avec GoTrip.com.
            </p>
          </div>

          <div className="col-lg-6">
            <img src="img/pages/about/2.png" alt="image" className="rounded-4"/>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-60">
      <div className="container">
        <div className="border-bottom-light pb-40">
          <div className="row y-gap-30 justify-center text-center">

            <div className="col-xl-3 col-6">
              <div className="text-40 lg:text-30 lh-13 fw-600">200+</div>
              <div className="text-14 lh-14 text-light-1 mt-5">Véhicules disponibles</div>
            </div>

            <div className="col-xl-3 col-6">
              <div className="text-40 lg:text-30 lh-13 fw-600">20</div>
              <div className="text-14 lh-14 text-light-1 mt-5">Villes desservies</div>
            </div>

            <div className="col-xl-3 col-6">
              <div className="text-40 lg:text-30 lh-13 fw-600">500+</div>
              <div className="text-14 lh-14 text-light-1 mt-5">Clients satisfaits</div>
            </div>

            <div className="col-xl-3 col-6">
              <div className="text-40 lg:text-30 lh-13 fw-600">24h/7j</div>
              <div className="text-14 lh-14 text-light-1 mt-5">Support client</div>
            </div>

          </div>
        </div>
      </div>
    </section>


    <section className="section-bg layout-pt-lg layout-pb-lg">
  <div className="section-bg__item -mx-20 bg-light-2"></div>

  <div className="container">
    <div className="row justify-center text-center">
      <div className="col-auto">
        <div className="sectionTitle -md">
          <h2 className="sectionTitle__title">Overheard from travelers in Tanger</h2>
          <p className="sectionTitle__text mt-5 sm:mt-0">Découvrez l'expérience de nos clients à Tanger</p>
        </div>
      </div>
    </div>

    <div className="overflow-hidden pt-80 js-section-slider" data-gap="30" data-slider-cols="xl-3 lg-3 md-2 sm-1 base-1">
      <div className="swiper-wrapper">

        <div className="swiper-slide">
          <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40">
            <h4 className="text-16 fw-500 text-blue-1 mb-20">Location à Tanger</h4>
            <p className="testimonials__text lh-18 fw-500 text-dark-1">&quot;Nous avons loué un véhicule à Tanger pour explorer la ville et les environs. C'était une expérience inoubliable. La location était rapide et le service excellent.&quot;</p>

            <div className="pt-20 mt-28 border-top-light">
              <div className="row x-gap-20 y-gap-20 items-center">
                <div class="col-auto">
                  <img class="size-60" src="img/avatars/1.png" alt="image"/>
                </div>

                <div class="col-auto">
                  <div class="text-15 fw-500 lh-14">Rachid El Amrani</div>
                  <div class="text-14 lh-14 text-light-1 mt-5">Touriste à Tanger</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40">
            <h4 className="text-16 fw-500 text-blue-1 mb-20">Location à Tanger</h4>
            <p className="testimonials__text lh-18 fw-500 text-dark-1">&quot;Nous avons adoré notre séjour à Tanger. Louer un véhicule nous a permis de découvrir les merveilles de la région avec liberté. Service impeccable et véhicule en excellent état.&quot;</p>

            <div className="pt-20 mt-28 border-top-light">
              <div className="row x-gap-20 y-gap-20 items-center">
                <div class="col-auto">
                  <img class="size-60" src="img/avatars/2.png" alt="image"/>
                </div>

                <div class="col-auto">
                  <div class="text-15 fw-500 lh-14">Sofia Bensouda</div>
                  <div class="text-14 lh-14 text-light-1 mt-5">Voyageuse à Tanger</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40">
            <h4 className="text-16 fw-500 text-blue-1 mb-20">Location à Tanger</h4>
            <p className="testimonials__text lh-18 fw-500 text-dark-1">&quot;Séjour magnifique à Tanger. Nous avons loué une voiture pour visiter la ville et ses environs. L'expérience de location était très fluide et le personnel très serviable.&quot;</p>

            <div className="pt-20 mt-28 border-top-light">
              <div className="row x-gap-20 y-gap-20 items-center">
                <div class="col-auto">
                  <img class="size-60" src="img/avatars/3.png" alt="image"/>
                </div>

                <div class="col-auto">
                  <div class="text-15 fw-500 lh-14">Amine Oulad</div>
                  <div class="text-14 lh-14 text-light-1 mt-5">Voyageur à Tanger</div>
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
};
export default About;