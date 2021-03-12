import React, { Component } from 'react';

export default class Navbar extends Component {
    render(){
        return(

<section className="navbar-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <img src="https://www.morgengold.de/customer/javax.faces.resource/Icons/morgengold_logo-white.svg.xhtml?ln=assets" alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTwo" aria-controls="navbarTwo" aria-expanded="false" aria-label="Toggle navigation">
            <span className="toggler-icon" />
            <span className="toggler-icon" />
            <span className="toggler-icon" />
          </button>
          <div className="collapse navbar-collapse sub-menu-bar" id="navbarTwo">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active"><a className="page-scroll" href="#home">FRÜHSTÜCKSSERVICE</a></li>
              <li className="nav-item"><a className="page-scroll" href="#services">Über uns</a></li>
              <li className="nav-item"><a className="page-scroll" href="#portfolio">Franchise</a></li>
              <li className="nav-item"><a className="page-scroll" href="#pricing">Online Journal</a></li>
              <li className="nav-item"><a className="page-scroll" href="#about">Login</a></li>
            </ul>
          </div>
        </nav> {/* navbar */}
      </div>
    </div> {/* row */}
  </div> {/* container */}
</section>

)
    }
}