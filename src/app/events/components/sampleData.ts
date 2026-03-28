import type { Event } from "./type";

export const sampleEvents: Event[] = [
    {
        id: 1,
        title: "TMI Kickoff Meeting",
        date: "2026-02-11",
        time: "6:00 PM – 8:00 PM",
        location: "Wallberg (WB) 219",
        description:
            `Catch up on our current TMI projects, hear insights from a research talk, and get involved in TMI's new opportunities.`,
        status: "Active",
        spots: 60,
        attendees: 42,
    },
    {
        id: 2,
        title: "Website & Project Showcase Meeting",
        date: "2026-04-01",
        time: "9:00 PM – 10:00 PM",
        location: "Online (Zoom)",
        description:
            "A meeting to showcase the work of the project and web teams.",
        status: "Active",
        spots: 200,
        attendees: 153,
    },
];
