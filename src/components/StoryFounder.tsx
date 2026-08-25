import { ResponsiveImage } from "@/components/ResponsiveImage";
import { storyPage } from "@/lib/story";

export function StoryFounder() {
  const { founder } = storyPage;

  return (
    <section className="story-founder" aria-labelledby="story-founder-heading">
      <div className="story-founder-inner story-fade-up">
        <div className="story-founder-photo">
          <ResponsiveImage
            src={founder.image}
            alt={founder.imageAlt}
            width={880}
            height={1100}
            sizes="(max-width: 900px) 100vw, 42vw"
            className="story-founder-image"
          />
          <div className="story-founder-photo-fade" aria-hidden="true" />
        </div>

        <div className="story-founder-copy">
          <div className="story-founder-eyebrow">
            <span className="story-founder-rule" aria-hidden="true" />
            <span>{founder.eyebrow}</span>
          </div>
          <h2 id="story-founder-heading">
            <span>{founder.titleLine1}</span>
            <span className="story-founder-accent">{founder.titleAccent}</span>
          </h2>
          {founder.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
