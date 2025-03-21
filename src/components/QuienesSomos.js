import React from 'react';
import HeroCarousel from './HeroCarousel';
import * as motion from "motion/react-client";

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="d-flex align-items-center justify-content-center bg-dark text-white bg-opacity-25">
      <div className="container-fluid m-0 p-0">
        <div className="row ">
          <div className="col-12 col-lg-8">
            <HeroCarousel />
          </div>
          <motion.div 
            className="container col-12 col-lg-4 d-flex align-items-center justify-content-center"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}>
            <div className="text-center p-4">
              <h1>Quiénes Somos</h1>
              <p>
                Un grupo familiar que se dedica al cuidado de las mascotas perrunas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;