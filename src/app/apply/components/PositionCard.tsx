"use client";

import "../apply.css";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export function PositionCard({
    positionTitle,
    applyLink,
}: {
    positionTitle?: string;
    applyLink?: string;
}) {
    return (
        <div className="bg-card p-4 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 justify-between flex flex-col gap-1">
            <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                    <div>
                        <p className="flex items-center gap-1 text-status-open text-sm font-medium bg-green-100 px-2 py-1 rounded-full">
                            Open
                            <CheckCircleIcon className="stroke-status-open size-4" />
                        </p>
                    </div>
                    <h3 className="text-xl flex justify-items-start font-semibold tracking-tight text-gray-900">
                        {positionTitle}
                    </h3>
                </div>
                {applyLink && (
                    <a
                        href={applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className=" bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg py-2 px-4 transition-colors duration-200">
                            Apply
                        </button>
                    </a>
                )}
            </div>
        </div>
    );
}
