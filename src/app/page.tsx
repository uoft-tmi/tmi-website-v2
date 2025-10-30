export default function Home() {
    return (
        <main className="min-h-dvh w-full flex items-center justify-center">
            <section className="w-full max-w-4xl px-6 py-16 text-center">
                <div className="mx-auto inline-block rounded-full border border-cyan-300/60 bg-cyan-50/60 px-4 py-1 text-xs font-semibold tracking-wide text-cyan-700">
                    Trustworthy Machine Intelligence @ UofT
                </div>

                <h1 className="mt-6 text-4xl font-extrabold leading-tight text-cyan-800 sm:text-5xl">
                    Building a community for ethics in AI
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-neutral-700">
                    The Trustworthy Machine Intelligence Team (TMI) is committed to educating and
                    taking action on ethical concerns within artificial intelligence and data science.
                    Our mission is to make the ethics in AI more accessible through educational
                    workshops and hands-on projects. Our club is committed to building a supportive
                    community of students passionate about ethical principles in AI.
                </p>

                <p className="mx-auto mt-4 max-w-2xl text-pretty text-base font-medium text-orange-600">
                    We welcome all University of Toronto students from all backgrounds of knowledge and experience!
                </p>

                <div className="mt-8 flex items-center justify-center gap-3">
                    <a
                        href="#learn-more"
                        className="rounded-md bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60"
                    >
                        Learn more
                    </a>
                    <a
                        href="#contact"
                        className="rounded-md border border-cyan-300 px-5 py-2.5 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-50"
                    >
                        Get involved
                    </a>
                </div>
            </section>

            {/* subtle aqua glow background */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(34,211,238,0.18),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_80%_20%,rgba(249,115,22,0.10),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,1))]" />
            </div>
        </main>
    );
}
