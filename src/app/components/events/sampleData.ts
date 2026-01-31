// app/components/events/sampleData.ts
import type { Event } from "./type";

export const sampleEvents: Event[] = [
    {
        id: 1,
        title: "LLM Interpretability Workshop",
        date: "2026-01-18",
        time: "2:00 PM – 4:00 PM",
        location: "Bahen Centre (BA) 1230",
        description:
            "Hands-on workshop covering activation patching, probing methods, and interpretability tooling. Bring a laptop.",
        status: "Active",
        spots: 60,
        attendees: 42,
    },
    {
        id: 2,
        title: "AI Ethics Roundtable",
        date: "2026-02-05",
        time: "6:00 PM – 7:30 PM",
        location: "Online (Zoom)",
        description:
            "A discussion-based session on auditing LLM outputs, documenting harms, and designing evaluations.",
        status: "Active",
        spots: 200,
        attendees: 153,
    },
    {
        id: 3,
        title: "Guest Talk: Mechanistic Interpretability",
        date: "2026-02-21",
        time: "3:30 PM – 5:00 PM",
        location: "Myhal Centre (MY) 150",
        description:
            "Case studies on debugging failures and evaluating explanation faithfulness in production systems.",
        status: "Paused",
        spots: 120,
        attendees: 118,
    },
    {
        id: 4,
        title: "Reading Group Kickoff",
        date: "2026-03-03",
        time: "5:00 PM – 6:15 PM",
        location: "Robarts Library, Seminar Room 2",
        description:
            "Kickoff meeting to select papers and set discussion norms for the semester.",
        status: "Active",
        spots: 40,
        attendees: 27,
    },
    {
        id: 5,
        title: "Demo Night: Student AI Safety Projects",
        date: "2026-03-20",
        time: "7:00 PM – 8:30 PM",
        location: "Bahen Centre Atrium",
        description:
            "Lightning demos from student teams building interpretability and evaluation tools.",
        status: "Completed",
        spots: 150,
        attendees: 140,
    },
    {
        id: 6,
        title: "Community Research Pitch Meetup",
        date: "2026-04-02",
        time: "4:30 PM – 6:00 PM",
        location: "MaRS Discovery District",
        description:
            "Pitch research ideas, form teams, and identify next steps for collaboration.",
        status: "Active",
        spots: 80,
        attendees: 63,
    },
];
