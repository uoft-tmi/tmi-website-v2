import { NextRequest, NextResponse } from "next/server";

// Mock storage, replace with actual database
const subscribers: { name: string; email: string; subscribedAt: string }[] = [];

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email } = body;

        // Validate required fields
        if (!name || !email) {
            return NextResponse.json(
                { error: "Name and email are required" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        // Check for duplicate email (mock implementation)
        const existingSubscriber = subscribers.find((s) => s.email === email);
        if (existingSubscriber) {
            return NextResponse.json(
                { error: "Email already subscribed" },
                { status: 409 }
            );
        }

        // Add subscriber (mock - logs to console)
        const newSubscriber = {
            name,
            email,
            subscribedAt: new Date().toISOString(),
        };
        subscribers.push(newSubscriber);

        // Log for debugging - replace with actual database save
        console.log("New newsletter subscriber:", newSubscriber);
        console.log("Total subscribers:", subscribers.length);

        return NextResponse.json(
            { message: "Successfully subscribed", subscriber: { name, email } },
            { status: 201 }
        );
    } catch (error) {
        console.error("Newsletter signup error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function GET() {
    // For debugging - lists all subscribers
    // In production, this should be protected/removed
    console.log("Current subscribers:", subscribers);
    return NextResponse.json({ count: subscribers.length, subscribers });
}
