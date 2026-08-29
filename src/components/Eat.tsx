import { VENDOR_EXAMPLES } from '../content';

const CUISINES = ['Hawaiian', 'Filipino', 'Japanese', 'Korean', 'Chinese', 'Thai', 'Mexican', 'Local Produce'];

export function Eat() {
  return (
    <section id="market" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Eat at Uncle's</p>
          <h2>A One-of-a-Kind Mix</h2>
          <p>
            A rotating lineup of food trucks, plate lunch, and produce vendors —
            including the Kalapana Poke Plate regulars rave about. The cards
            below are placeholders; real vendor profiles (photo, menu, socials,
            which days they're usually there) come from market staff.
          </p>
        </div>

        <div className="chip-grid">
          {CUISINES.map(c => <span className="chip" key={c}>{c}</span>)}
        </div>

        <div className="card-grid">
          {VENDOR_EXAMPLES.map(v => (
            <div className="card" key={v.name}>
              <span className="card-tag">{v.category}</span>
              <h4>{v.name}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
