"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { DescriptionList } from "./components/DescriptionList";
import { PositionCard } from "./components/PositionCard";
import { DropdownCard } from "./components/DropdownCard";
import { LinkCard } from "./components/LinkCard";
import { NewsletterGrid } from "./components/NewsletterGrid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

// Animation variant for fading in and sliding up
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Connect() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const positions = [
        // {
        //     title: "General Member 📣",
        //     applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSdDnTaJPdHzBvyi8vkjx_zMsdvmEUr0pIlrQ3AO24IEVRvZVQ/viewform",
        // }
    ];

    const descriptions = [
        "Contribute to building fairer and more trustworthy AI systems.",
        "Simulate real-world data deletion requests and pipelines.",
        "Collaborate with a diverse team of passionate individuals.",
        "Participate in workshops and discussions surrounding ethical concerns.",
        "Make a positive impact on the AI community and society.",
    ];

    const faqs = [
        {
            title: "What is this club about?",
            description: "TMI is focused on exploring the ethical implications of AI technologies through hands-on projects and collaborative discussions.",
        },
        {
            title: "How many hours are required a week?",
            description: "This depends on the position you apply for and the project scope.",
        },
        {
            title: "What skills are required?",
            description: "We welcome members from all backgrounds. Specific skills may be required for certain positions.",
        },
        {
            title: "Who do I contact for questions?",
            description: "You can reach out to us by joining our Discord server or emailing",
        },
    ];

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = (): boolean => {
        const newErrors: { name?: string; email?: string } = {};
        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        else if (!validateEmail(email)) newErrors.email = "Please enter a valid email address";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Subscription failed");
            }

            router.push(`/connect/confirmation?name=${encodeURIComponent(name)}`);
        } catch (error) {
            console.error("Signup error:", error);
            setIsSubmitting(false);
        }
    };

    // Smooth scroll handler for the anchor link
    const scrollToPositions = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById("positions");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className="min-h-dvh w-full bg-background text-secondary">
            <section className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
                
                {/* Header */}
                <motion.header 
                    className="text-center"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-secondary">
                        Connect with TMI
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-text-muted leading-relaxed">
                        Build real-world, ethical AI projects with a collaborative community of students from diverse backgrounds.
                    </p>
                </motion.header>

                {/* Why Join Section */}
                <motion.section 
                    className="mt-10 md:mt-14 rounded-2xl border border-secondary/20 bg-card shadow-sm p-6 md:p-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-12">
                        <Image
                            src="/tmi-team.png"
                            alt="TMI Team Picture"
                            width={560}
                            height={560}
                            className="w-full max-w-md mx-auto h-auto object-contain rounded-xl"
                        />
                        <div className="flex flex-col gap-6 items-start">
                            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-secondary">
                                Why Join?
                            </h2>
                            <DescriptionList descriptions={descriptions} />
                            <a 
                                href="#positions"
                                onClick={scrollToPositions}
                                className="mt-4 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-on-accent shadow-sm transition hover:bg-hover-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                            >
                                View Open Positions
                            </a>
                        </div>
                    </div>
                </motion.section>

                {/* Stay Up to Date (Socials) */}
                <motion.section 
                    className="mt-12 md:mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Stay Up to Date
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 auto-rows-fr">
                        <LinkCard link="https://docs.google.com/forms/d/e/1FAIpQLSdS1rDb7ixs7ub8Tnd914hGWpINzhEaGipffXfqs5dyxlCd3g/viewform" className="flex gap-4 items-center justify-center">
                            <EnvelopeIcon className="size-8" />
                            <h3 className="md:text-xl text-md font-semibold tracking-tight">Mailing List</h3>
                        </LinkCard>
                        <LinkCard link="https://discord.com/invite/y2XpFCc723" className="flex gap-4 items-center justify-center">
                            <Image src="/discord-logo.svg" alt="Discord Logo" width={32} height={32} />
                            <h3 className="md:text-xl text-md font-semibold tracking-tight">Discord Server</h3>
                        </LinkCard>
                        <LinkCard link="https://www.instagram.com/uoft_tmi/" className="flex gap-4 items-center justify-center">
                            <Image src="/instagram-logo.svg" alt="Instagram Logo" width={32} height={32} />
                            <h3 className="md:text-xl text-md font-semibold tracking-tight ">Instagram</h3>
                        </LinkCard>
                    </div>
                </motion.section>

                {/* Positions */}
                <motion.section 
                    id="positions" 
                    className="mt-12 md:mt-16 scroll-mt-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        Positions
                    </h2>
                    {positions.length > 0 ? (
                        <div className="grid grid-flow-row gap-4 mt-6">
                            {positions.map((position, index) => (
                                <PositionCard
                                    key={index}
                                    positionTitle={position.title}
                                    applyLink={position.applyLink}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-secondary/20 bg-card py-16 px-6 text-center shadow-sm">
                            <h3 className="text-xl md:text-2xl font-semibold text-secondary">
                                Check Back Later!
                            </h3>
                            <p className="mt-3 max-w-md text-text-muted leading-relaxed">
                                We aren't currently hiring for any positions. Subscribe to our newsletter below to be the first to know when applications open.
                            </p>
                        </div>
                    )}
                </motion.section>

                {/* Newsletter Form */}
                <motion.section 
                    className="mt-12 md:mt-16 w-full flex justify-center rounded-2xl border border-secondary/20 bg-card p-6 md:p-10 shadow-sm"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                >
                    <div className="w-full max-w-md">
                        <div className="text-center mb-8">
                            <div className="mx-auto inline-block rounded-full border border-secondary/60 bg-secondary/10 px-4 py-1 text-xs font-semibold tracking-wide text-secondary">
                                Newsletter
                            </div>
                            <h2 className="mt-6 text-2xl md:text-3xl font-bold leading-tight text-secondary">
                                Subscribe for Updates
                            </h2>
                            <p className="mx-auto mt-4 text-sm md:text-base leading-7 text-text-muted">
                                Get the latest updates on AI ethics, events, and project news delivered to your inbox.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1.5">Name</label>
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
                                        errors.name ? "border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400" : "border-secondary/30 focus:ring-primary"
                                    } bg-background px-4 py-2.5 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 transition`}
                                />
                                {errors.name && <p className="mt-1.5 text-sm text-red-500 dark:text-red-400">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1.5">Email Address</label>
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
                                        errors.email ? "border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400" : "border-secondary/30 focus:ring-primary"
                                    } bg-background px-4 py-2.5 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 transition`}
                                />
                                {errors.email && <p className="mt-1.5 text-sm text-red-500 dark:text-red-400">{errors.email}</p>}
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
                    </div>
                </motion.section>

                {/* Newsletter Previews */}
                <motion.div 
                    className="mt-12 md:mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                >
                    <NewsletterGrid />
                </motion.div>

                {/* FAQ */}
                <motion.section 
                    className="mt-12 md:mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                        FAQ
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                        {faqs.map((faq, index) => (
                            <DropdownCard
                                key={index}
                                title={faq.title}
                                description={faq.description}
                            />
                        ))}
                    </div>
                </motion.section>
            </section>

            {/* Subtle background glow */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(10,171,190,0.18),transparent_60%)] dark:bg-[radial-gradient(60%_40%_at_50%_10%,rgba(27,197,217,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_80%_20%,rgba(255,94,56,0.10),transparent_60%)] dark:bg-[radial-gradient(40%_30%_at_80%_20%,rgba(255,107,74,0.12),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(251,250,249,0.9),rgba(251,250,249,1))] dark:bg-[linear-gradient(to_bottom,rgba(26,24,22,0.9),rgba(26,24,22,1))]" />
            </div>
        </main>
    );
}