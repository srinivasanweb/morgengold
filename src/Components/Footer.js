import React, { Component } from 'react';

export default class Footer extends Component {
    render(){
        return(
<footer>
  {/* START: molecules/footer */}
  <div className="section section-bg-grey">
    <div className="footer">
      <h2 className="text-center">"Die Fahrt zum Bäcker<br />ist so teuer wie acht Brötchen."</h2>
      <div className="row mt-5 pt-3">
        <div className="col-12 col-sm-4">
          <h3><a href="/customer/datenschutz">Datenschutz</a></h3>
        </div>
        <div className="col-12 col-sm-4 mt-5 mt-sm-0">
          <h3><a href="/customer/impressum.xhtml">Impressum</a></h3>
        </div>
        <div className="col-12 col-sm-4 mt-5 mt-sm-0">
          <h3><a href="/customer/faq">Wichtige Fragen</a></h3>
        </div>
      </div>
      <div className="mt-5 pt-sm-3">
        <div className="footer-subtext row ">
          <table>
            <tbody>
              <tr>
                <td style={{width: 200}}>
                  <small><strong>
                      <a href="#uc-corner-modal-show" style={{fontSize: 'small', fontWeight: 'bold', color: 'black'}}>Cookie-Einstellungen</a>
                    </strong></small></td>
                <td style={{width: 250}}>
                  <small><strong title="mogo-customer-war Version 1.21.0 Build 10.03.2021-17:51:16">
                      © Morgengold Franchise GmbH</strong></small></td>
                <td>
                  <div className="footer-social-media-links">
                    <a href="https://www.facebook.com/mein.morgengold/" target="_blank" rel="noopener noreferrer"><img src="https://www.morgengold.de/customer/javax.faces.resource/Icons/facebook.svg.xhtml?ln=assets" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/mein.morgengold/" target="_blank" rel="noopener noreferrer"><img src="https://www.morgengold.de/customer/javax.faces.resource/Icons/instagram.svg.xhtml?ln=assets" alt="Instagram" />
                    </a>
                  </div></td>
              </tr>
            </tbody>
          </table>                        
        </div>
      </div>
    </div>
  </div>
  {/* END: molecules/footer */}
</footer>

)
}
}