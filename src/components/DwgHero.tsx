import { Button } from "@/components/Button";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { siteConfig } from "@/lib/site";

export function DwgHero() {
  const { hero } = siteConfig;

  return (
    <section className="dwg-hero" aria-label="Hero">
      <div className="dwg-hero-media" aria-hidden="true">
        <ResponsiveImage
          src={hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="dwg-hero-image"
        />
      </div>
      <div className="dwg-hero-fade" aria-hidden="true" />
      <div className="dwg-hero-copy">
        <p className="dwg-eyebrow">{hero.eyebrow}</p>
        <h1 className="dwg-hero-title">
          {hero.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="dwg-hero-body">
          {hero.bodyLines.map((line) => (
            <span key={line} className="dwg-hero-body-line">
              {line}
            </span>
          ))}
        </p>
        <Button href={hero.cta.href}>{hero.cta.label}</Button>
      </div>
    </section>
  );
}
