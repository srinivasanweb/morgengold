import React, { Component } from 'react';

export default class Header extends Component {
    render(){
        return(          
<div className="hero">
  <div className="hero-image-wrapper">
    <picture>
      <source media="(max-width: 768px)" srcSet="https://www.morgengold.de/customer/javax.faces.resource/assets/Bilder/_mobile/startseite_stage1_mobile.jpg.xhtml" /><img src="https://www.morgengold.de/customer/javax.faces.resource/Bilder/startseite_stage1.jpg.xhtml?ln=assets" alt="Teaser Startseite" className="hero-image" />
    </picture><a href="/customer/probieren">
      <div className="hero-sticker text-uppercase" id="probeAnfordern">Jetzt unverbindlich Probe anfordern</div></a>
  </div>
  <div className="hero-content-wrapper">
    <div className="hero-content">
      <h2 className="mb-3  h1">
        Morgengold bringt’s:<br />Freu Dich drauf
      </h2>
      <div>Frische Backwaren zum Frühstück – wir liefern sie Ihnen frühmorgens direkt
        an die Haustür.</div>
    </div>
  </div>
</div>



)
    }
}