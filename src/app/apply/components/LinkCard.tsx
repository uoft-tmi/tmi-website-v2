"use client";

import "../apply.css";

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
            className={`bg-card p-4 rounded-lg border border-gray-200 shadow-md hover:bg-hover-default gap-1 ${className}`}
        >
            {children}
        </a>
    );
}
