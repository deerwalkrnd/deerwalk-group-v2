import { siteConfig } from "@/lib/site";

export function MissionBand() {
  return (
    <section className="mission-band" id="our-story" aria-label="Mission">
      <p>{siteConfig.mission}</p>
    </section>
  );
}
