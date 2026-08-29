import { AINA_GUIDANCE } from '../content';

export function Aina() {
  return (
    <section id="aina" className="section section--alt">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">You Are Entering Kalapana</p>
          <h2>Respect the ʻĀina</h2>
          <p>
            Uncle Robert's isn't a commercial venue — it's connected to a
            living community and family property. A few things to know before
            you go.
          </p>
        </div>
        <ul className="aina-list">
          {AINA_GUIDANCE.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
