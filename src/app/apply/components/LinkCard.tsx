"use client";

import "./apply.css";

export function LinkCard({
    link,
    children,
    className,
}: {
    link?: string;
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-card p-4 rounded-xl border border-secondary/20 dark:border-secondary/30 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all duration-200 hover:-translate-y-0.5 gap-1 ${className}`}
        >
            {children}
        </a>
    );
}
