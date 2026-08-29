const FACTS = [
  {
    title: 'What it is',
    body: 'ʻAwa (kava) is made from the root of the ʻawa plant, ground and mixed with water. It has a mild, earthy taste and a calming, relaxing effect — not intoxicating like alcohol.',
  },
  {
    title: 'The tradition',
    body: 'ʻAwa has long been used across the Pacific for ceremony, hospitality, and talking story — a way of settling in together, not a novelty drink.',
  },
  {
    title: 'At the bar',
    body: 'Served in a shared bowl or cup, often with a small ritual around the first pour. Watch, ask, and follow the lead of whoever is serving.',
  },
  {
    title: 'If it\'s your first time',
    body: 'Go slow, drink water alongside it, and don\'t expect an instant effect — it builds. Ask questions; people here are usually happy to explain.',
  },
];

export function Awa() {
  return (
    <section id="awa" className="awa-section">
      <div className="container">
        <p className="eyebrow">A Drink. A Tradition. A Gathering.</p>
        <h2 className="awa-mark">ʻAwa</h2>
        <p style={{ color: 'var(--stone)', maxWidth: '58ch' }}>
          The awa bar is the center of Uncle Robert's — not a gimmick, not a
          "Hawaiian cocktail experience." It's a place people have gathered
          around for generations.
        </p>
        <div className="awa-grid">
          {FACTS.map(f => (
            <div key={f.title}>
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
