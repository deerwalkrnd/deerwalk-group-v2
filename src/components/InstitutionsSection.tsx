"use client";

import { useCallback, useEffect, useState } from "react";
import { InstitutionModal } from "@/components/InstitutionModal";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { siteConfig, type Institution } from "@/lib/site";

function InstitutionCard({
  item,
  onOpen,
}: {
  item: Institution;
  onOpen: (item: Institution) => void;
}) {
  return (
    <button
      type="button"
      className="institution-card"
      onClick={() => onOpen(item)}
    >
      <ResponsiveImage
        src={item.image}
        alt=""
        width={920}
        height={520}
        sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
        className="institution-image"
      />
      <div className="institution-overlay" aria-hidden="true" />
      <div className="institution-content">
        <h3>{item.name}</h3>
        <div className="institution-copy">
          <p>{item.description}</p>
          <span className="institution-cta">{item.cta}</span>
        </div>
      </div>
    </button>
  );
}

function institutionIdFromHash(hash: string) {
  const value = hash.replace(/^#/, "");
  if (value.startsWith("institution-")) {
    return value.slice("institution-".length);
  }
  return null;
}

export function InstitutionsSection() {
  const { institutions } = siteConfig;
  const [active, setActive] = useState<Institution | null>(null);

  const openItem = useCallback((item: Institution) => {
    setActive(item);
    const nextHash = `institution-${item.id}`;
    if (window.location.hash.replace(/^#/, "") !== nextHash) {
      window.history.replaceState(null, "", `#${nextHash}`);
    }
  }, []);

  const closeModal = useCallback(() => {
    setActive(null);
    // Clear institution hash without jumping to #institutions (smooth scroll)
    if (window.location.hash.startsWith("#institution-")) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  }, []);

  useEffect(() => {
    const syncFromHash = () => {
      const id = institutionIdFromHash(window.location.hash);
      if (!id) {
        setActive(null);
        return;
      }
      const match = institutions.items.find((item) => item.id === id);
      setActive(match ?? null);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [institutions.items]);

  return (
    <section
      className="institutions"
      id="institutions"
      aria-labelledby="institutions-heading"
    >
      <div className="institutions-intro">
        <h2 id="institutions-heading">{institutions.title}</h2>
        <p>{institutions.subtitle}</p>
      </div>
      <div className="institutions-grid">
        {institutions.items.map((item) => (
          <InstitutionCard key={item.id} item={item} onOpen={openItem} />
        ))}
      </div>
      <InstitutionModal item={active} onClose={closeModal} />
    </section>
  );
}
