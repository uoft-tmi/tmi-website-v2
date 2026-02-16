"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ConfirmationContent() {
    const searchParams = useSearchParams();
    const name = searchParams.get("name") || "there";

    return (
        <main className="min-h-dvh w-full flex items-center justify-center bg-background">
            <section className="w-full max-w-md px-6 py-16 text-center">
                {/* Success Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <svg
                        className="h-8 w-8 text-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                <h1 className="text-3xl font-extrabold leading-tight text-secondary sm:text-4xl">
                    You&apos;re subscribed!
                </h1>

                <p className="mx-auto mt-4 max-w-sm text-pretty text-base leading-7 text-text-muted">
                    Thanks for signing up, <span className="font-medium text-text-primary">{name}</span>! 
                    We&apos;ll keep you updated with the latest news on AI ethics, events, and projects.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="/"
                        className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-on-accent shadow-sm transition hover:bg-hover-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/projects"
                        className="rounded-md border border-secondary/60 px-5 py-2.5 text-sm font-semibold text-secondary transition hover:bg-secondary/10"
                    >
                        View Projects
                    </Link>
                </div>
            </section>

            {/* Subtle background glow - matching home page */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(10,171,190,0.18),transparent_60%)] dark:bg-[radial-gradient(60%_40%_at_50%_10%,rgba(27,197,217,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_80%_20%,rgba(255,94,56,0.10),transparent_60%)] dark:bg-[radial-gradient(40%_30%_at_80%_20%,rgba(255,107,74,0.12),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(251,250,249,0.9),rgba(251,250,249,1))] dark:bg-[linear-gradient(to_bottom,rgba(26,24,22,0.9),rgba(26,24,22,1))]" />
            </div>
        </main>
    );
}

export default function Confirmation() {
    return (
        <Suspense fallback={
            <main className="min-h-dvh w-full flex items-center justify-center bg-background">
                <div className="text-text-muted">Loading...</div>
            </main>
        }>
            <ConfirmationContent />
        </Suspense>
    );
}
