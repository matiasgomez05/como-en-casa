import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ps-2 pe-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          Template-SPA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#quienes-somos">
                Quiénes Somos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#que-ofrecemos">
                Qué Ofrecemos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;