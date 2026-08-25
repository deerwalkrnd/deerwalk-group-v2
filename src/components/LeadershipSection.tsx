import { ResponsiveImage } from "@/components/ResponsiveImage";
import { siteConfig, type Leader } from "@/lib/site";

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <article className="leader-card">
      <div className="leader-photo">
        <ResponsiveImage
          src={leader.image}
          alt={leader.name}
          width={440}
          height={440}
          sizes="(max-width: 768px) 50vw, 220px"
          className="leader-image"
        />
      </div>
      <h3>{leader.name}</h3>
      <p>{leader.role}</p>
    </article>
  );
}

export function LeadershipSection() {
  const { leadership } = siteConfig;

  return (
    <section className="leadership" id="leadership" aria-labelledby="leadership-heading">
      <div className="leadership-intro">
        <h2 id="leadership-heading">{leadership.title}</h2>
        <p className="leadership-eyebrow">{leadership.eyebrow}</p>
      </div>
      <div className="leadership-grid">
        {leadership.people.map((person) => (
          <LeaderCard key={person.name} leader={person} />
        ))}
      </div>
      <p className="leadership-note">{leadership.note}</p>
    </section>
  );
}
