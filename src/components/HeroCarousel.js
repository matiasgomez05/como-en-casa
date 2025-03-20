import React from 'react';
import img1 from '../img/Hero001.jpg';
import img2 from '../img/Hero002.jpg';

const HeroCarousel = () => {
  return (
    <div id="hero-carousel" className="carousel slide bg-secondary">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div className="carousel-inner h-100">
        <div className="carousel-item active h-100 ">
          <img
            src={ img1 }
            className="d-block w-100 h-100"
            alt="Slide 1"
          />
          <div className="carousel-caption">
            <h5 className='text-bg-light'>Servicio de veterinario 24hs</h5>
          </div>
        </div>
        <div className="carousel-item h-100">
          <img
            src={ img2 }
            className="d-block w-100 h-100"
            alt="Slide 2"
          />
          <div className="carousel-caption">
            <h5 className='text-bg-light'>Opcional baño y corte</h5>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default HeroCarousel;