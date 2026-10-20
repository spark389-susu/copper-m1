import { getPrivacySummary } from "@/lib/copper/catalog";

export function PrivacySummary() {
  const privacy = getPrivacySummary();

  return (
    <section
      data-testid="privacy-summary"
      id="privacy"
      className="bg-accent text-accent-foreground scroll-mt-16"
    >
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight">
          How Copper handles your recordings
        </h2>
        <p className="mt-2 text-lg">
          Here is what our {privacy.policy} privacy policy means for you.
        </p>
        <ul className="mt-6 flex list-disc flex-col gap-3 pl-5 text-lg">
          {privacy.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
