"use client";

import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import "./apply.css";

export function DropdownCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="rounded-xl border border-secondary/20 bg-card px-4 py-3 shadow-sm transition-shadow hover:shadow-md md:px-5 md:py-4">
            <button
                className="w-full flex items-start justify-between gap-4 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-base md:text-lg font-semibold text-secondary">
                    {title}
                </h3>
                {isOpen && <ChevronUpIcon className="size-6 text-primary" />}
                {!isOpen && <ChevronDownIcon className="size-6 text-primary" />}
            </button>
            {isOpen && (
                <p className="mt-3 text-sm md:text-base leading-relaxed text-text-muted">
                    {description}
                </p>
            )}
        </div>
    );
}
