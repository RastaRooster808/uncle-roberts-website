export function Hero() {
  return (
    <header id="top" className="hero">
      <p className="hero-kicker">Kalapana · Hawaiʻi</p>
      <h1>Uncle Robert's</h1>
      <p className="hero-tags">Awa Bar · Market · Music · ʻOhana</p>
      <p className="hero-place">The Wednesday Night Market — a gathering place that happens to welcome visitors.</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#this-week">Tonight at Uncle's</a>
        <a className="btn btn-gold" href="#market">Visit the Market</a>
        <a className="btn btn-line" href="#story">Our Story</a>
      </div>
      <p className="hero-note">
        A cinematic hero video is planned for this space once the family shares
        footage of a market night — this scaffold uses text so nothing is faked.
      </p>
    </header>
  );
}
