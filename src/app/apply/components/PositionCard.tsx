"use client";

import "./apply.css";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export function PositionCard({
    positionTitle,
    applyLink,
}: {
    positionTitle?: string;
    applyLink?: string;
}) {
    return (
        <div className="bg-card p-4 rounded-lg border border-secondary/20 dark:border-secondary/30 shadow-md hover:bg-hover-default justify-between flex flex-col gap-1 text-secondary">
            <div className="flex md:flex-row md:items-center md:justify-between md:gap-1 flex-col gap-4">
                <div className="flex gap-4 items-center">
                    <div>
                        <p className="flex items-center gap-1 text-status-open text-sm font-medium bg-status-open/20 px-2 py-1 rounded-full">
                            Open
                            <CheckCircleIcon className="stroke-status-open size-4" />
                        </p>
                    </div>
                    <h3 className="md:text-xl text-md flex justify-items-start font-semibold tracking-tight">
                        {positionTitle}
                    </h3>
                </div>
                {applyLink && (
                    <a
                        href={applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-full bg-primary hover:bg-hover-orange text-white font-semibold text-xs rounded-lg py-2 px-4 transition-colors duration-200">
                            Apply
                        </button>
                    </a>
                )}
            </div>
        </div>
    );
}
