"use client";

import "../apply.css";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export function PositionCard({
    positionTitle,
    positionStatus,
    description,
}: {
    positionTitle?: string;
    positionStatus?: string;
    description?: string;
}) {
    return (
        <div className="bg-card p-4 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 justify-between flex flex-col gap-4">
            <p className="text-status-open flex items-center gap-1 font-medium flex justify-end">
                {positionStatus}
                <CheckCircleIcon className="stroke-status-open size-6" />
            </p>
            <div className="flex justify-between items-center">
                <h3 className="text-xl flex justify-items-start font-semibold tracking-tight text-gray-900">
                    {positionTitle}
                </h3>
            </div>
            <div className="mt-2  text-gray-700">{description}</div>
            <a href="http://localhost:3000/">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg py-2 px-4 whitespace-nowrap">
                    Apply
                </button>
            </a>
        </div>
    );
}
