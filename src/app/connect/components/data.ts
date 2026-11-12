import type { Newsletter } from "./types";

export const newsletters: Newsletter[] = [
  {
    id: "march-2025",
    title: "March 2025 Newsletter",
    date: "2025-03-15",
    filename: "march-2026.pdf",
    description: "AI Safety updates and upcoming events",
  },
  {
    id: "february-2025",
    title: "February 2025 Newsletter",
    date: "2025-02-15",
    filename: "february-2026.pdf",
    description: "Research highlights and team updates",
  },
];

export function getRecentNewsletters(count: number = 2): Newsletter[] {
  return [...newsletters]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
