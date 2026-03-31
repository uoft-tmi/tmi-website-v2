"use client";

import { NewsletterCard } from "./NewsletterCard";
import { getRecentNewsletters } from "./data";

export function NewsletterGrid() {
  const recentNewsletters = getRecentNewsletters(2);

  if (recentNewsletters.length === 0) {
    return null;
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
          Recent Newsletters
        </h2>
        <p className="text-text-muted text-sm">Catch up on our latest updates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recentNewsletters.map((newsletter) => (
          <NewsletterCard key={newsletter.id} newsletter={newsletter} />
        ))}
      </div>
    </section>
  );
}
