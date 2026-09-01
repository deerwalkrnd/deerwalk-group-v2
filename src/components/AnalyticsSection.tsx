import { siteConfig } from "@/lib/site";

export function AnalyticsSection() {
  const { analytics } = siteConfig;

  return (
    <section className="analytics" aria-labelledby="analytics-heading">
      <h2 id="analytics-heading">{analytics.title}</h2>
      <div className="analytics-bar">
        {analytics.stats.map((stat) => (
          <div key={stat.label} className="analytics-stat">
            <p className="analytics-value">{stat.value}</p>
            <p className="analytics-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
