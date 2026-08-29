import { THIS_WEEK } from '../content';

const CHIPS = [
  { emoji: '🎸', label: 'Live Music' },
  { emoji: '💃', label: 'Dancing' },
  { emoji: '🍽️', label: 'Local Food' },
  { emoji: '🌺', label: 'Community' },
  { emoji: '🥥', label: 'ʻAwa Bar' },
  { emoji: '🛍️', label: 'Local Vendors' },
];

export function ThisWeek() {
  return (
    <section id="this-week" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">What's Happening</p>
          <h2>{THIS_WEEK.day} Night</h2>
        </div>

        <div className="chip-grid">
          {CHIPS.map(c => (
            <span className="chip" key={c.label}>
              <span aria-hidden="true">{c.emoji}</span> {c.label}
            </span>
          ))}
        </div>

        <div className="week-card">
          <div className="week-head">
            <h3>This Week at Uncle Robert's</h3>
            <span className="week-badge">{THIS_WEEK.day} · Kalapana</span>
          </div>
          <div className="week-timeline">
            {THIS_WEEK.rows.map(r => (
              <div className="week-row" key={r.time}>
                <span className="week-time">{r.time}</span>
                <span className="week-what">{r.what}</span>
              </div>
            ))}
            <div className="week-row">
              <span className="week-time">Cover</span>
              <span className="week-what">{THIS_WEEK.cover}</span>
            </div>
          </div>
          <p className="week-fine">{THIS_WEEK.note}</p>
        </div>
      </div>
    </section>
  );
}
