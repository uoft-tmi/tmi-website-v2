"use client";

import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import "../apply.css";

export function DropdownCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-4">
            <button
                className=" w-full flex justify-between"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h1 className="text-2xl font-bold text-cyan-800">{title}</h1>
                {isOpen && <ChevronUpIcon className="size-6 text-cyan-800" />}
                {!isOpen && (
                    <ChevronDownIcon className="size-6 text-cyan-800" />
                )}
            </button>
            {isOpen && (
                <p className="mt-2 text-xl text-cyan-700">{description}</p>
            )}
        </div>
    );
}
