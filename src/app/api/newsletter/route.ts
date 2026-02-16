import { NextRequest, NextResponse } from "next/server";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdEt76EV-aLWW9fpReGtceIfwhDHeAUIahyYmv7nqW8dhmNLA/formResponse";

const ENTRY_NAME = "entry.1763355021";
const ENTRY_EMAIL = "entry.965786865";
const ENTRY_SUBSCRIBED_AT = "entry.318865415";

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

    const subscribedAt = new Date().toISOString();

    // Build Google Form payload
    const formData = new URLSearchParams();
    formData.append(ENTRY_NAME, name);
    formData.append(ENTRY_EMAIL, email);
    formData.append(ENTRY_SUBSCRIBED_AT, subscribedAt);

    // Send to Google Form
    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    return NextResponse.json(
      {
        message: "Successfully subscribed",
        subscriber: { name, email, subscribedAt },
      },
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
