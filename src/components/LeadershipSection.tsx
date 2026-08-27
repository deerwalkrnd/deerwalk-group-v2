"use client";

import { useCallback, useState } from "react";
import { LeaderModal } from "@/components/LeaderModal";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { siteConfig, type Leader } from "@/lib/site";

function LeaderCard({
  leader,
  onOpen,
}: {
  leader: Leader;
  onOpen: (leader: Leader) => void;
}) {
  return (
    <button
      type="button"
      className="leader-card"
      onClick={() => onOpen(leader)}
    >
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
    </button>
  );
}

export function LeadershipSection() {
  const { leadership } = siteConfig;
  const [active, setActive] = useState<Leader | null>(null);

  const openLeader = useCallback((leader: Leader) => {
    setActive(leader);
  }, []);

  const closeModal = useCallback(() => {
    setActive(null);
  }, []);

  return (
    <section
      className="leadership"
      id="leadership"
      aria-labelledby="leadership-heading"
    >
      <div className="leadership-intro">
        <h2 id="leadership-heading">{leadership.title}</h2>
        <p className="leadership-eyebrow">{leadership.eyebrow}</p>
      </div>
      <div className="leadership-grid">
        {leadership.people.map((person) => (
          <LeaderCard key={person.name} leader={person} onOpen={openLeader} />
        ))}
      </div>
      <p className="leadership-note">{leadership.note}</p>
      <LeaderModal leader={active} onClose={closeModal} />
    </section>
  );
}
