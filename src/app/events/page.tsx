// app/events/page.tsx
import { EventCard } from "./components/EventCard";
import { sampleEvents } from "./components/sampleData";

export default function Events() {
    // Sort events by date (earliest first)
    const sortedEvents = [...sampleEvents].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    return (
        // dynamic viewport height (mobile-safe), full width
        <main className="min-h-dvh w-full bg-background">
            {/* Header */}
            <section className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-secondary">
                    Events
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-text-muted">
                    Upcoming workshops, talks, and community events.
                </p>
            </section>

            {/* Events list */}
            <section className="w-full max-w-6xl mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {sortedEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </section>
        </main>
    );
}
