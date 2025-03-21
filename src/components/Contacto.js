import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import * as motion from "motion/react-client";

const Contacto = () => {
  return (
    <section 
      id="contacto" 
      className="d-flex align-items-center text-white">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}>
        <h1 className="text-center">Contacto</h1>
        <div className="text-center">
          <h2 className='d-inline'><FaWhatsapp /> </h2>
          <p className='d-inline'>Whatsapp: 1149983173 </p> 
        </div>
      </motion.div>
    </section>
  );
};

export default Contacto;