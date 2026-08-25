import type { Metadata } from "next";
import { DwgFooter, DwgHeader } from "@/components";
import { StoryFounder } from "@/components/StoryFounder";
import { StoryHero } from "@/components/StoryHero";
import { StoryTimeline } from "@/components/StoryTimeline";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Our Story | ${siteConfig.name}`,
  description:
    "A journey of vision, innovation, and purpose — building world-class education from Nepal to the world.",
};

export default function OurStoryPage() {
  return (
    <>
      <DwgHeader activeHref="/our-story/" />
      <main>
        <StoryHero />
        <StoryFounder />
        <StoryTimeline />
      </main>
      <DwgFooter />
    </>
  );
}
