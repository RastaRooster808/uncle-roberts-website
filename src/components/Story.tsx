import { STORY_TIMELINE, SOURCES, type SourceTag } from '../content';

const TAG_CLASS: Record<SourceTag, string> = {
  'Documented History': 'tag-documented',
  'Family Oral History': 'tag-oral',
  'Later Development': 'tag-later',
};

export function Story() {
  return (
    <section id="story" className="section section--alt">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">ʻOhana</p>
          <h2>The Legacy of Uncle Robert</h2>
          <p>
            Not a generic "About Us" page. Below is a timeline built from
            independent historical sources, cross-checked against what the
            family has shared — separating documented history, family oral
            history, and the market's later growth. It's still owed a real
            review by the family: names, dates, and the details flagged
            below should be confirmed or corrected by them before this is
            called final. Old photographs and video interviews belong here
            too, once the family is ready to share them.
          </p>
        </div>

        <div className="timeline">
          {STORY_TIMELINE.map(node => (
            <div className="timeline-node" key={node.year + node.title}>
              <span className={`timeline-tag ${TAG_CLASS[node.tag]}`}>{node.tag}</span>
              <h4>{node.year} — {node.title}</h4>
              <p>{node.body}</p>
              {node.needsFamilyInput && (
                <span className="placeholder-tag">Detail needs family confirmation</span>
              )}
            </div>
          ))}
        </div>

        <div className="sources-box">
          <p className="sources-label">Sources</p>
          <ul className="sources-list">
            {SOURCES.map(s => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label} ↗</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
