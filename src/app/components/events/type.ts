// app/components/events/types.ts

export type EventStatus = "Active" | "Paused" | "Completed";

export type EventMedia =
    | { type: "overview" }
    | { type: "image"; src: string; alt?: string }
    | { type: "code"; language: string; code: string }
    | { type: "video"; src: string };

export interface Event {
    id: number;
    title: string;
    date: string;      // ISO date string (YYYY-MM-DD)
    time: string;      // Human-readable time range
    location: string;
    description: string;
    status: EventStatus;
    spots?: number;
    attendees?: number;
    media?: EventMedia[];
}
