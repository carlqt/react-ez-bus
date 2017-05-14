import React from 'react';

import './navbar.css'
import 'spectre.css';

const Navbar = () => {
  return(
    <header className="navbar section-header">
      <section className="navbar-section">
        <a href="#" className="navbar-brand mr-10">Nearby</a>
        <a href="#" className="btn btn-link">Stations</a>
        <a href="#" className="btn btn-link">Buses</a>
      </section>

      <section className="navbar-center">
        <div className="input-group input-inline">
          <input className="form-input" type="text" placeholder="search" />
          <button className="btn btn-primary input-group-btn">Search</button>
        </div>
      </section>
    </header>
  );
}

export default Navbar;