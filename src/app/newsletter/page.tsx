"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Newsletter() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = (): boolean => {
        const newErrors: { name?: string; email?: string } = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Subscription failed");
            }

            router.push(`/newsletter/confirmation?name=${encodeURIComponent(name)}`);
        } catch (error) {
            console.error("Signup error:", error);
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-dvh w-full flex items-center justify-center bg-background">
            <section className="w-full max-w-md px-6 py-16">
                <div className="text-center mb-8">
                    <div className="mx-auto inline-block rounded-full border border-secondary/60 bg-secondary/10 px-4 py-1 text-xs font-semibold tracking-wide text-secondary">
                        Stay Connected
                    </div>
                    <h1 className="mt-6 text-3xl font-extrabold leading-tight text-secondary sm:text-4xl">
                        Subscribe to our Newsletter
                    </h1>
                    <p className="mx-auto mt-4 max-w-sm text-pretty text-base leading-7 text-text-muted">
                        Get the latest updates on AI ethics, events, and project news delivered to your inbox.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-secondary mb-1.5"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                            }}
                            placeholder="Your name"
                            className={`w-full rounded-md border ${
                                errors.name
                                    ? "border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400"
                                    : "border-secondary/30 focus:ring-primary"
                            } bg-card px-4 py-2.5 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 transition`}
                        />
                        {errors.name && (
                            <p className="mt-1.5 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-secondary mb-1.5"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                            }}
                            placeholder="you@example.com"
                            className={`w-full rounded-md border ${
                                errors.email
                                    ? "border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400"
                                    : "border-secondary/30 focus:ring-primary"
                            } bg-card px-4 py-2.5 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 transition`}
                        />
                        {errors.email && (
                            <p className="mt-1.5 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-on-accent shadow-sm transition hover:bg-hover-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Signing up..." : "Sign Up"}
                    </button>
                </form>

                <p className="mt-6 text-center text-xs text-text-muted">
                    We respect your privacy. Unsubscribe at any time.
                </p>
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

