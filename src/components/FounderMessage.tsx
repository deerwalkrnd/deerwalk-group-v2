import { ResponsiveImage } from "@/components/ResponsiveImage";
import { siteConfig } from "@/lib/site";

export function FounderMessage() {
  const { founder } = siteConfig;

  return (
    <section className="founder-message" id="about" aria-labelledby="founder-heading">
      <div className="founder-photo">
        <ResponsiveImage
          src={founder.image}
          alt={founder.name}
          width={880}
          height={880}
          sizes="(max-width: 768px) 100vw, 440px"
          className="founder-image"
        />
      </div>
      <div className="founder-copy">
        <h2 id="founder-heading">
          <span>{founder.titleLine1}</span>
          <span className="founder-accent">{founder.titleLine2}</span>
        </h2>
        <p>{founder.body}</p>
        <div className="founder-signoff">
          <span className="founder-rule" aria-hidden="true" />
          <span className="founder-name">{founder.name}</span>
        </div>
      </div>
    </section>
  );
}
