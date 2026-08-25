"use client";

import { useEffect, useRef } from "react";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { storyPage, type StoryMilestone } from "@/lib/story";

function MilestoneCard({ item }: { item: StoryMilestone }) {
  return (
    <article className="story-card">
      <div className="story-card-media">
        <ResponsiveImage
          src={item.image}
          alt={item.imageAlt}
          width={936}
          height={512}
          sizes="(max-width: 900px) 100vw, 470px"
          className="story-card-image"
        />
        <div className="story-card-media-fade" aria-hidden="true" />
      </div>
      <div className="story-card-body">
        <span className="story-card-year-mobile">{item.year}</span>
        <h3>{item.title}</h3>
        <p className="story-card-description">{item.description}</p>
        {item.highlights?.length ? (
          <div className="story-card-highlights">
            {item.highlights.map((highlight) => (
              <div key={highlight} className="story-card-highlight">
                <span className="story-card-highlight-dot" aria-hidden="true" />
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function StoryTimeline() {
  const { timelineIntro, milestones } = storyPage;
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fadeEls = document.querySelectorAll(".story-fade-up");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );
    fadeEls.forEach((el) => revealObserver.observe(el));

    const updateProgress = () => {
      const track = trackRef.current;
      const fill = fillRef.current;
      if (!track || !fill) return;
      const rect = track.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = track.offsetHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.min(
          Math.max(
            (windowHeight - rect.top) / (totalHeight + windowHeight * 0.25),
            0,
          ),
          1,
        );
        fill.style.height = `${progress * 100}%`;
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <>
      <section
        className="story-timeline-intro-section"
        aria-labelledby="story-timeline-heading"
      >
        <div className="story-timeline-intro story-fade-up">
          <div className="story-timeline-eyebrow">
            <span className="story-timeline-rule" aria-hidden="true" />
            <span>{timelineIntro.eyebrow}</span>
            <span className="story-timeline-rule" aria-hidden="true" />
          </div>
          <h2 id="story-timeline-heading">
            <span>{timelineIntro.titleBefore} </span>
            <span className="story-timeline-accent">
              {timelineIntro.titleAccent}
            </span>
          </h2>
          <p>{timelineIntro.description}</p>
        </div>
      </section>

      <section className="story-timeline" aria-label="Milestones timeline">
        <div className="story-timeline-track" ref={trackRef}>
          <div className="story-timeline-line" aria-hidden="true">
            <div className="story-timeline-line-base" />
            <div className="story-timeline-line-fill" ref={fillRef} />
          </div>

          {milestones.map((item) => (
            <div
              key={item.year}
              className={`story-milestone story-milestone-${item.side} story-fade-up`}
            >
              <div className="story-milestone-year">
                <span>{item.year}</span>
              </div>
              <div className="story-milestone-spacer" aria-hidden="true" />
              <div className="story-milestone-card">
                <MilestoneCard item={item} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
