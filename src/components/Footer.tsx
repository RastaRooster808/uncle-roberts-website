import { SITE } from '../content';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-links">
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">Directions</a>
          <a href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#top">Back to Top</a>
        </div>
        <p>
          Uncle Robert's — Kalapana, Hawaiʻi. This site is a work-in-progress
          build for the family, not yet the confirmed, family-approved live
          site. See the README for what's real and what's still placeholder.
        </p>
      </div>
    </footer>
  );
}
