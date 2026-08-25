import { storyPage } from "@/lib/story";

export function StoryHero() {
  const { hero } = storyPage;

  return (
    <section className="story-hero" aria-label="Our Story hero">
      <div className="story-hero-glow story-hero-glow-a" aria-hidden="true" />
      <div className="story-hero-glow story-hero-glow-b" aria-hidden="true" />
      <div className="story-hero-inner">
        <p className="story-hero-eyebrow">{hero.eyebrow}</p>
        <h1 className="story-hero-title">{hero.title}</h1>
        <div className="story-hero-rule" aria-hidden="true" />
        <p className="story-hero-body">{hero.description}</p>
      </div>
    </section>
  );
}
