export default function Home() {
    return (
        <main className="min-h-dvh w-full flex items-center justify-center bg-background">
            <section className="w-full max-w-4xl px-6 py-16 text-center">
                <div className="mx-auto inline-block rounded-full border border-secondary/60 bg-secondary/10 px-4 py-1 text-xs font-semibold tracking-wide text-secondary">
                    Trustworthy Machine Intelligence @ UofT
                </div>

                <h1 className="mt-6 text-4xl font-extrabold leading-tight text-secondary sm:text-5xl">
                    Building a community for ethics in AI
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-text-muted">
                    The Trustworthy Machine Intelligence Team (TMI) is committed to educating and
                    taking action on ethical concerns within artificial intelligence and data science.
                    Our mission is to make the ethics in AI more accessible through educational
                    workshops and hands-on projects. Our club is committed to building a supportive
                    community of students passionate about ethical principles in AI.
                </p>

                <p className="mx-auto mt-4 max-w-2xl text-pretty text-base font-medium text-primary">
                    We welcome all University of Toronto students from all backgrounds of knowledge and experience!
                </p>

                <div className="mt-8 flex items-center justify-center gap-3">
                    <a
                        href="#learn-more"
                        className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-on-accent shadow-sm transition hover:bg-hover-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    >
                        Learn more
                    </a>
                    <a
                        href="#contact"
                        className="rounded-md border border-secondary/60 px-5 py-2.5 text-sm font-semibold text-secondary transition hover:bg-secondary/10"
                    >
                        Get involved
                    </a>
                </div>
            </section>

            {/* subtle aqua glow background */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(10,171,190,0.18),transparent_60%)] dark:bg-[radial-gradient(60%_40%_at_50%_10%,rgba(27,197,217,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_80%_20%,rgba(255,94,56,0.10),transparent_60%)] dark:bg-[radial-gradient(40%_30%_at_80%_20%,rgba(255,107,74,0.12),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(251,250,249,0.9),rgba(251,250,249,1))] dark:bg-[linear-gradient(to_bottom,rgba(26,24,22,0.9),rgba(26,24,22,1))]" />
            </div>
        </main>
    );
}
