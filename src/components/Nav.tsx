const LINKS = [
  { href: '#this-week', label: 'This Week' },
  { href: '#market', label: 'Market' },
  { href: '#awa', label: 'ʻAwa' },
  { href: '#story', label: 'ʻOhana' },
  { href: '#aina', label: 'Kalapana' },
  { href: '#visit', label: 'Visit' },
];

export function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-row">
        <a href="#top" className="nav-mark">UNCLE'S</a>
        <div className="nav-links">
          {LINKS.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
