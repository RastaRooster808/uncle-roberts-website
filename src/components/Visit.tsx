import { SITE } from '../content';

export function Visit() {
  return (
    <section id="visit" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How Do I Get There</p>
          <h2>Visit</h2>
        </div>

        <div className="visit-grid">
          <div>
            <div className="visit-fact">
              <p className="visit-fact-label">Address</p>
              <p className="visit-fact-value">{SITE.address}</p>
            </div>
            <div className="visit-fact">
              <p className="visit-fact-label">When</p>
              <p className="visit-fact-value">Wednesday nights (live music ~6–9pm) and Saturday mornings (8am–12pm)</p>
            </div>
            <div className="visit-fact">
              <p className="visit-fact-label">Parking</p>
              <p className="visit-fact-value">Follow posted directions on-site — fills up on Wednesday nights.</p>
            </div>
            <div className="hero-actions" style={{ justifyContent: 'flex-start', marginTop: '1.6rem' }}>
              <a className="btn btn-primary" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">Get Directions</a>
              <a className="btn btn-line" href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer">Follow on Facebook ↗</a>
              <a className="btn btn-line" href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer">Follow on Instagram ↗</a>
            </div>
          </div>

          <div className="qr-stack">
            <div className="qr-card">
              <img src="./images/instagram-qr.svg" alt={`QR code linking to ${SITE.instagramHandle} on Instagram`} />
              <p>{SITE.instagramHandle}</p>
              <p className="qr-card-fine">Scan to follow on Instagram</p>
            </div>
            <div className="map-placeholder">
              An interactive "Explore Kalapana" map — Uncle's, the awa bar, the
              market, the music stage, parking, Kaimū, Black Sand Beach — is
              planned here as a follow-up build. For now, use Get Directions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
