import React from 'react';

const HeroCarousel = () => {
  return (
    <div id="hero-carousel" className="carousel slide bg-secondary" data-bs-ride="carousel">
      <div className="carousel-inner h-100">
        <div className="carousel-item active h-100 ">
          <img
            src="https://fakeimg.pl/640x435/ff0000/"
            className="d-block w-100 h-100"
            alt="Slide 1"
          />
          <div className="carousel-caption">
            <h5>Primer Slide</h5>
            <p>Texto descriptivo para el primer slide.</p>
          </div>
        </div>
        <div className="carousel-item h-100">
          <img
            src="https://fakeimg.pl/640x435/ff0000/"
            className="d-block w-100 h-100"
            alt="Slide 2"
          />
          <div className="carousel-caption">
            <h5>Segundo Slide</h5>
            <p>Texto descriptivo para el segundo slide.</p>
          </div>
        </div>
        <div className="carousel-item h-100">
          <img
            src="https://fakeimg.pl/640x435/ff0000/"
            className="d-block w-100 h-100"
            alt="Slide 3"
          />
          <div className="carousel-caption">
            <h5>Tercer Slide</h5>
            <p>Texto descriptivo para el tercer slide.</p>
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