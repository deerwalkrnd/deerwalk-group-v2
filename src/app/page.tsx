import type { Metadata } from "next";
import {
  AnalyticsSection,
  DwgFooter,
  DwgHeader,
  DwgHero,
  FounderMessage,
  InstitutionsSection,
  LeadershipSection,
  MissionBand,
} from "@/components";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Learning, technology, and community`,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <DwgHeader activeHref="/" />
      <main>
        <DwgHero />
        <MissionBand />
        <FounderMessage />
        <LeadershipSection />
        <InstitutionsSection />
        <AnalyticsSection />
      </main>
      <DwgFooter />
    </>
  );
}
