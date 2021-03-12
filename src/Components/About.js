import React, { Component } from 'react';

export default class About extends Component {
    render(){
        return(

<main className="page-main">
  <div className="section section-with-image">
    <div className="section-bg-image-rb">
      <img data-src="https://www.morgengold.de/customer/javax.faces.resource/assets/Bilder/startseite_erklaerung_brezeln.png.xhtml" alt="Teaser Startseite" className=" ls-is-cached lazyloaded" src="https://www.morgengold.de/customer/javax.faces.resource/assets/Bilder/startseite_erklaerung_brezeln.png.xhtml" />
      {/*&lt;h:graphicImage alt="Brezeln" library="assets" name="Bilder/startseite_erklaerung_brezeln.png" class="lazyload" loading="lazy"/&gt;*/}
    </div>
    <div className="section-content">
      <div className="container">
        <div className="text-center">
          <h2 className="h1">So einfach funktioniert es</h2>
          <div className="row pt-4 pb-5">
            <div className="col-12 offset-lg-1 col-lg-10">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="pb-4"><img src="https://www.morgengold.de/customer/javax.faces.resource/Icons/startseite_step1.svg.xhtml?ln=assets" alt="Anmelden" height={47} width={47} />
                  </div>
                  <h3 className="h2 mt-3 mb-3">Prüfen</h3>
                  <p>Klicken Sie auf „Kunde werden“ und prüfen Sie, ob unser Service in Ihrer Region verfügbar ist.</p>
                </div>
                <div className="col-12 col-md-4 mt-5 mt-md-0">
                  <div className="pb-4"><img src="https://www.morgengold.de/customer/javax.faces.resource/Icons/startseite_step2.svg.xhtml?ln=assets" alt="Bestellen" height={47} width={47} />
                  </div>
                  <h3 className="h2 mt-3 mb-3">Bestellen</h3>
                  <p>Wählen Sie Ihre Lieblingsbackwaren und die gewünschten Liefertage aus. Legen Sie danach Ihr persönliches Kundenkonto an, um Ihre Bestellung abzuschließen.</p>
                </div>
                <div className="col-12 col-md-4 mt-5 mt-md-0">
                  <div className="pb-4"><img src="https://www.morgengold.de/customer/javax.faces.resource/Icons/startseite_step3.svg.xhtml?ln=assets" alt="Geniessen" height={47} width={47} />
                  </div>
                  <h3 className="h2 mt-3 mb-3">Geniessen</h3>
                  <p>Im <label style={{fontStyle: 'italic'}} title=" In seltenen Fällen kann es vorkommen, dass aus bestimmten Gründen keine Zustellung möglich ist oder Nachfragen erforderlich sind.">Normalfall*</label> dürfen Sie sich dann schon in Kürze frühmorgens auf Ihre frischen Backwaren von Morgengold freuen.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3"><button type="button" onclick="window.location.href='/customer/kunde-werden'; return false;" value id="instantSubscriptionButton" className="btn btn-primary">Kunde werden</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section section-bg-grey" id="partner" data-limit-height="76%" style={{height: '585.96px', marginBottom: '270.64px'}}>
    <form id="j_idt1112" name="j_idt1112" method="post" action="/customer/start" encType="application/x-www-form-urlencoded">
      <input type="hidden" name="j_idt1112" defaultValue="j_idt1112" />
      <div className="container h-100">
        <div className="row flex-md-nowrap h-100">
          <div className="col-12 col-md-6 text-center"><img src="https://www.morgengold.de/customer/javax.faces.resource/Bilder/maps/startseite_map.svg.xhtml?ln=assets" width="494.88" className="mw-100" />
          </div>
          <div className="col-12 mt-5 align-self-center col-md-6 mt-md-0 col-lg-5">
            <h2 className="h1 text-center text-md-left">Morgengold in Ihrer Nähe</h2>
            <p className="mb-4">Hier können Sie ganz leicht herausfinden, ob ein Morgengold Lieferservice
              in Ihrer Nähe verfügbar ist. Geben Sie einfach Ihre Postleitzahl ein und
              klicken Sie auf „Prüfen“.</p>
            <div />
            <div className="row">
              <div className="col pr-1 col-lg-7"><input id="j_idt1120:zip" name="j_idt1120:zip" maxLength={5} placeholder="Postleitzahl eingeben" type="text" className="form-control" />
                <div>
                </div>
              </div>
              <div className="col-auto pl-1"><button id="j_idt1129" type="submit" name="j_idt1129" value onclick="mojarra.ab(this,event,'action','@form','@form');return false" className="btn btn-primary pr-2 pl-2">Prüfen</button>
              </div>
            </div>
          </div>
        </div>
      </div><input type="hidden" name="javax.faces.ViewState" id="j_id1:javax.faces.ViewState:1" defaultValue="-3268758327128883883:1266092461769847446" autoComplete="off" />
    </form>
  </div>
  <div className="section">
    <div className="container">
      <h2 className="h1 mb-5 text-center">Ihre Vorteile</h2>
      <div className="slider slider-variant-1 slick-initialized slick-slider"><div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 1170, transform: 'translate3d(0px, 0px, 0px)'}}><div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{width: 585}}><div><div style={{width: '100%', display: 'inline-block'}}>
                  <div className="row mb-4" data-equalize-height="group1" style={{height: 101}}>
                    <div className="col-3"><img src="https://www.morgengold.de/customer/javax.faces.resource/Icons/startseite_backfrisch.svg.xhtml?ln=assets" alt="Icon Backfrisch" height="64.17" width={75} className="m-auto mw-100 ls-is-cached lazyloaded" />
                    </div>
                    <div className="col-9">
                      <h3>Natürlich backfrisch</h3>
                      <p>Ihre Backwaren kommen ofenfrisch aus der Backstube einer Handwerksbäckerei
                        in Ihrer Region.</p>
                    </div>
                  </div>
                  <div className="row" data-equalize-height="group2" style={{height: 147}}>
                    <div className="col-3"><img src="https://www.morgengold.de/customer/javax.faces.resource/Icons/startseite_vielfalt.svg.xhtml?ln=assets" alt="Icon Vielfalt" height="54.71" width={75} className="m-auto mw-100 ls-is-cached lazyloaded" />
                    </div>
                    <div className="col-9">
                      <h3 className="mb-3">Große Vielfalt</h3>
                      <p>Wählen Sie, was Ihr Herz begehrt: Brötchen, Brot, Croissants, süße Stückchen oder saisonale Backwaren.</p>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-active" data-slick-index={1} aria-hidden="false" style={{width: 585}}><div><div style={{width: '100%', display: 'inline-block'}}>
                  <div className="row mb-4" data-equalize-height="group1" style={{height: 101}}>
                    <div className="col-3"><img src="https://www.morgengold.de/customer/javax.faces.resource/Icons/startseite_zeit.svg.xhtml?ln=assets" alt="Icon Zeit" height={75} width={75} className="m-auto mw-100" />
                    </div>
                    <div className="col-9">
                      <h3 className="mb-3">Mehr Zeit</h3>
                      <p>Sie ersparen sich den Weg zum Bäcker und können Ihr Frühstück backfrisch
                        genießen.</p>
                    </div>
                  </div>
                  <div className="row" data-equalize-height="group2" style={{height: 147}}>
                    <div className="col-3"><img src="https://www.morgengold.de/customer/javax.faces.resource/Icons/startseite_fexibel.svg.xhtml?ln=assets" alt="Icon Flexibel" height="65.26" width={75} className="m-auto mw-100" />
                    </div>
                    <div className="col-9">
                      <h3 className="mb-3">Regelmässig und flexibel</h3>
                      <p>Wir liefern frühmorgens. An jedem von Ihnen gewünschten Tag. Auch am Wochenende.
                        Sie können Ihre regelmäßige Lieferung jederzeit anpassen oder unterbrechen.</p>
                    </div>
                  </div>
                </div></div></div></div></div></div>
    </div>
  </div>
  <div className="section">
    <div className="hero hero-variant-1">
      <div className="hero-image-wrapper">
        <picture>
          <source media="(max-width: 767.98px)" srcSet="/customer/javax.faces.resource/assets/Bilder/_mobile/startseite_teaser_kostenlos_mobile.jpg.xhtml" />
          <source media="(max-width: 991.98px)" srcSet="/customer/javax.faces.resource/assets/Bilder/_tablet/startseite_teaser_kostenlos_tablet.jpg.xhtml" />
          <img data-src="https://www.morgengold.de/customer/javax.faces.resource/assets/Bilder/startseite_teaser_kostenlos.jpg.xhtml" alt="Kostenlos testen" className="hero-image lazyloaded" src="https://www.morgengold.de/customer/javax.faces.resource/assets/Bilder/startseite_teaser_kostenlos.jpg.xhtml" />
          {/*&lt;h:graphicImage alt="Kostenlos testen" class="hero-image lazyload" library="assets" name="Bilder/startseite_teaser_kostenlos.jpg" /&gt;*/}
        </picture>
      </div>
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h2 className="mb-3 ">
            GRATIS PROBIEREN
          </h2>
          <div>Fordern Sie jetzt einmalig Ihre Probelieferung an – kostenlos und unverbindlich.
            Wir prüfen die Verfügbarkeit in Ihrer Region und liefern Ihnen ausgewählte
            Backwaren zum Probieren.</div> 
          <div className="btn btn-primary mt-3">JETZT TESTEN
            <a href="/customer/probieren" className="div-link" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container mb-5">
      <h2 className="h1 text-center">Zufriedene Kunden berichten</h2>
    </div>
    <div className="hero hero-variant-3">
      <div className="hero-image-wrapper">
        <picture>
          <source media="(max-width: 767.98px)" srcSet="/customer/javax.faces.resource/assets/Bilder/_mobile/startseite_zitat_mobile.jpg.xhtml" className=" lazyloaded" />
          <source media="(max-width: 991.98px)" srcSet="/customer/javax.faces.resource/assets/Bilder/_tablet/startseite_zitat_tablet.jpg.xhtml" className=" lazyloaded" />
          <img data-src="https://www.morgengold.de/customer/javax.faces.resource/assets/Bilder/startseite_zitat.jpg.xhtml" alt="Kostenlos testen" className="hero-image ls-is-cached lazyloaded" src="https://www.morgengold.de/customer/javax.faces.resource/assets/Bilder/startseite_zitat.jpg.xhtml" />
          {/*&lt;h:graphicImage alt="Kostenlos testen" class="hero-image lazyload" library="assets" name="Bilder/startseite_zitat.jpg"/&gt;*/}
        </picture>
      </div>
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h2 className="mb-3  text-normal">
            „Vielen Dank für die zuverlässigen Dienste, auch bei Schnee und -19 Grad.“
          </h2>
          <div>Familie D. aus Bayreuth</div>
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container">
      <h2 className="h1 text-center pb-5">Online Journal</h2>
      {/* START: molecules/slider */}
      <div className="slider slider-variant-2 slick-initialized slick-slider"><div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 1170, transform: 'translate3d(0px, 0px, 0px)'}}><div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{width: 390}}><div><div className="p-1" style={{width: '100%', display: 'inline-block'}}>
                  {/* START: molecules/card */}
                  <div className="card hasImage border-0 shadow-sm">
                    <img className="card-img-top" src="https://www.morgengold.de/journal/wp-content/uploads/2021/02/schokokringel_beitragsbild-533x400.jpg" alt="schokokringel_beitragsbild-533x400.jpg" />
                    <div className="card-body">
                      <h2 className="card-title">SÜSSES GEBÄCK – ZEIT FÜR GENUSS</h2><p>Eine kleine Kaffeepause mit süßen Köstlichkeiten von Morgengold hilft dabei, kurz dem herausfordernden Alltag in Corona Zeiten zu entfliehen.</p>
                    </div>
                    <div className="card-footer text-center">
                      <a className="btn btn-primary" href="https://www.morgengold.de/journal/gebaeck/" target="_blank" tabIndex={0}>Zum Artikel</a>
                    </div>
                  </div>
                  {/* END: molecules/card */}
                </div></div></div><div className="slick-slide slick-active" data-slick-index={1} aria-hidden="false" style={{width: 390}}><div><div className="p-1" style={{width: '100%', display: 'inline-block'}}>
                  {/* START: molecules/card */}
                  <div className="card hasImage border-0 shadow-sm">
                    <img className="card-img-top" src="https://www.morgengold.de/journal/wp-content/uploads/2021/02/beitragsbild_schnee-320x400.jpg" alt="beitragsbild_schnee-320x400.jpg" />
                    <div className="card-body">
                      <h2 className="card-title">BACKFRISCHES FRÜHSTÜCK TROTZ EIS UND SCHNEE. GOLDWERT.</h2><p>Wer sein Frühstück nach Hause bestellt, den lässt der Winter kalt.</p>
                    </div>
                    <div className="card-footer text-center">
                      <a className="btn btn-primary" href="https://www.morgengold.de/journal/fruehstueck-bestellen/" target="_blank" tabIndex={0}>Zum Artikel</a>
                    </div>
                  </div>
                  {/* END: molecules/card */}
                </div></div></div><div className="slick-slide slick-active" data-slick-index={2} aria-hidden="false" style={{width: 390}}><div><div className="p-1" style={{width: '100%', display: 'inline-block'}}>
                  {/* START: molecules/card */}
                  <div className="card hasImage border-0 shadow-sm">
                    <img className="card-img-top" src="https://www.morgengold.de/journal/wp-content/uploads/2021/01/Beitragsbild_Ablage-552x400.jpg" alt="Beitragsbild_Ablage-552x400.jpg" />
                    <div className="card-body">
                      <h2 className="card-title">GESCHÜTZT VOR WIND UND WETTER</h2><p>Damit Ihre Morgengold Lieferung sauber und trocken bei Ihnen zu Hause ankommt, sollten Sie immer einen gut geschützten Ablageort für die frischen Backwaren wählen.</p>
                    </div>
                    <div className="card-footer text-center">
                      <a className="btn btn-primary" href="https://www.morgengold.de/journal/morgengold-fruehstuecksdienst/" target="_blank" tabIndex={0}>Zum Artikel</a>
                    </div>
                  </div>
                  {/* END: molecules/card */}
                </div></div></div></div></div></div>
      {/* END: molecules/slider */}
      <div className="mt-5 text-center">
        <a className="btn btn-outline-primary" href="https://www.morgengold.de/journal/" target="_blank">Online Journal</a>
      </div>
    </div>
  </div>
  <div className="section mb-0">
  </div>
</main>

            )
    }
}