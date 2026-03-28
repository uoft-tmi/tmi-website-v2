import Link from "next/link";

interface CardButtonProps {
    href: string;
    title: string;
    description: string;
    external?: boolean;
}

function CardButton({ href, title, description, external }: CardButtonProps) {
    const cardClass = "group block rounded-2xl bg-card p-8 shadow-sm text-left relative overflow-hidden transition-all duration-300 hover:shadow-md";

    const content = (
        <>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 dark:group-hover:bg-white/5 transition-all duration-300" />
            <h3 className="mb-3 text-xl font-semibold text-text-primary relative z-10">{title}</h3>
            <p className="text-text-muted relative z-10">{description}</p>
        </>
    );

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
            >
                {content}
            </a>
        );
    }

    return (
        <Link href={href} className={cardClass}>
            {content}
        </Link>
    );
}

export default function Home() {
    return (
        <main className="min-h-dvh w-full bg-background flex flex-col items-center justify-center px-6 pt-40 py-16 gap-16">
            <section className="text-center space-y-6 -translate-y-6 sm:-translate-y-8">
                <h1 className="text-8xl font-extrabold tracking-tight text-primary sm:text-9xl">UofT TMI</h1>
                <p className="text-xl text-text-muted sm:text-2xl">Building Trustworthy Machine Intelligence</p>
                <div className="mt-8 flex items-center justify-center gap-3">
                    <a
                        href="#learn-more"
                        className="rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-on-accent shadow-sm
                        transition hover:bg-hover-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    >
                        Join Us
                    </a>
                </div>
            </section>
            <section id="learn-more" className="max-w-3xl pt-20 space-y-4 text-center">
                <h2 className="text-3xl font-bold text-secondary sm:text-4xl">Our Mission</h2>
                <p className="text-lg leading-relaxed text-text-primary">
                    Our mission is to empower students to build and understand AI systems that are reliable,
                    interpretable, and aligned with human values. Through collaboration, education, and community
                    engagement, we work to ensure that machine intelligence benefits society responsibly.
                </p>
            </section>
            <section className="w-full px-6 py-10">
                <h2 className="mb-12 text-center text-4xl font-bold text-secondary">
                    Get Involved
                </h2>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                    <CardButton
                        href="/newsletter"
                        title="Join Mailing List"
                        description="Stay updated with our latest research and projects"
                    />
                    <CardButton
                        href="https://discord.com/invite/y2XpFCc723"
                        title="Discord"
                        description="Connect with us"
                        external
                    />
                    <CardButton
                        href="/events"
                        title="Upcoming Events"
                        description="Join us in our next workshop, seminar, or event"
                    />
                </div>
            </section>
        </main>
    );
}
