"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Initialize from localStorage or system preference using lazy initializer
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // This function only runs once during initial render on client
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            return savedTheme === "dark" || (!savedTheme && prefersDark);
        }
        return false; // Server-side default
    });

    useEffect(() => {
        // Sync DOM with state changes
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        
        if (newTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/events", label: "Events" },
        { href: "/projects", label: "Projects" },
        { href: "/newsletter", label: "Newsletter" },
        { href: "/apply", label: "Apply" },
    ];

    return (
        <>
            {/* Desktop Navbar - md and above */}
            <nav className="hidden md:block w-full bg-card border-b border-secondary/20">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-xl font-bold text-secondary hover:text-primary transition-colors"
                        >
                            <Image
                                src="/images/TMI.png"
                                alt="TMI"
                                width={240}
                                height={96}
                                className="h-12 w-auto"
                            />
                            <span>UofT TMI</span>
                        </Link>
                        <div className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-text-primary hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="p-2 text-text-primary hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-md"
                                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {isDarkMode ? (
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar - sm and below */}
            <nav className="md:hidden w-full bg-card border-b border-secondary/20">
                <div className="px-6 py-4 flex items-center gap-4">
                    <button
                        onClick={toggleMobileMenu}
                        className="p-2 text-text-primary hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-md"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-xl font-bold text-secondary hover:text-primary transition-colors"
                        onClick={closeMobileMenu}
                    >
                        <Image
                            src="/images/TMI.png"
                            alt="TMI"
                            width={240}
                            height={96}
                            className="h-12 w-auto"
                        />
                        <span>UofT TMI</span>
                    </Link>
                    <button
                        onClick={toggleTheme}
                        className="ml-auto p-2 text-text-primary hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-md"
                        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {isDarkMode ? (
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <>
                {/* Overlay */}
                <div
                    className={`md:hidden fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ease-in-out ${
                        isMobileMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    }`}
                    onClick={closeMobileMenu}
                />
                {/* Sidebar */}
                <aside
                    className={`md:hidden fixed top-0 left-0 h-full w-64 bg-card border-r border-secondary/20 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
                        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="flex flex-col h-full">
                        <div className="px-6 py-4 flex items-center justify-between border-b border-secondary/20">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-xl font-bold text-secondary hover:text-primary transition-colors"
                                onClick={closeMobileMenu}
                            >
                                <Image
                                    src="/images/TMI.png"
                                    alt="TMI"
                                    width={240}
                                    height={96}
                                    className="h-12 w-auto"
                                />
                                <span>UofT TMI</span>
                            </Link>
                            <button
                                onClick={closeMobileMenu}
                                className="p-2 text-text-primary hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-md"
                                aria-label="Close menu"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <nav className="flex-1 px-6 py-6">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-base font-medium text-text-primary hover:text-primary transition-colors py-2"
                                        onClick={closeMobileMenu}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <button
                                    onClick={() => {
                                        toggleTheme();
                                        closeMobileMenu();
                                    }}
                                    className="flex items-center gap-3 text-base font-medium text-text-primary hover:text-primary transition-colors py-2 text-left"
                                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                                >
                                    {isDarkMode ? (
                                        <>
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                            <span>Light Mode</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                            </svg>
                                            <span>Dark Mode</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </nav>
                    </div>
                </aside>
            </>
        </>
    );
}

