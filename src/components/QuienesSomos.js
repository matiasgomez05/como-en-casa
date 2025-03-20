import React from 'react';
import HeroCarousel from './HeroCarousel';
import * as motion from "motion/react-client";

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="d-flex align-items-center justify-content-center">
      <motion.div className="container-fluid h-100 m-0 p-0"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}>
        <div className="row h-100">
          <div className="col-12 col-lg-8">
            <HeroCarousel />
          </div>
          <div className="container col-12 col-lg-4 bg-light d-flex align-items-center justify-content-center">
            <div className="text-center p-4">
              <h1>Quiénes Somos</h1>
              <p>
                Un grupo familiar que se dedica al cuidado de las mascotas perrunas.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default QuienesSomos;