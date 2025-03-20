import React from 'react';
import HeroCarousel from './HeroCarousel';

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="d-flex align-items-center justify-content-center">
      <div className="container-fluid h-100 m-0 p-0">
        <div className="row h-100">
          <div className="col-12 col-lg-8">
            <HeroCarousel />
          </div>
          <div className="col-12 col-lg-4 bg-light d-flex align-items-center justify-content-center">
            <div className="text-center p-4">
              <h1>Quiénes Somos</h1>
              <p>
                Informacion importante sobre quienes somos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;