import "../apply.css";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export function PositionCard() {
    return (
        <a href="#" className="">
            <div className="bg-card p-4 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                <div className="flex justify-between items-center gap-4 ">
                    <h3 className="text-xl flex justify-items-start font-semibold tracking-tight text-gray-900">
                        LLM Social Simulation Member
                    </h3>
                    <p className="text-status-open flex gap-1">
                        Open{" "}
                        <CheckCircleIcon className="stroke-status-open size-6" />
                    </p>
                </div>
            </div>
        </a>
    );
}
