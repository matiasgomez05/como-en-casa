import React from 'react';
import * as motion from "motion/react-client";

const QueOfrecemos = () => {
  return (
    <section id="que-ofrecemos" className="d-flex align-items-center bg-dark">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}>
        <h1 className="text-center text-light">Qué Ofrecemos</h1>
        <p className="text-center text-light">
          Estadia por dia, semana o mes. <br />
          Servicio de veterinario 24hs <br />
          Opcional baño y corte de pelo.
        </p>
      </motion.div>
    </section>
  );
};

export default QueOfrecemos;