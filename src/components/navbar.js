import React from 'react';

import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <header className="navbar section-header">
      <section className="navbar-section">
        <Link to="/" className="btn btn-link">Nearby</Link>
        <Link to="/stations" className="btn btn-link">Stations</Link>
      </section>

      <section className="navbar-center">
        {/*<div className="input-group input-inline">
          <input className="form-input" type="text" placeholder="search" />
          <button className="btn btn-primary input-group-btn">Search</button>
        </div>*/}
      </section>
    </header>
  );
}

export default Navbar;