import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // 1️⃣ Read request body
    const { name, email } = await req.json();

    // 2️⃣ Basic validation (never trust client)
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // 3️⃣ Read webhook from environment
    const webhookUrl = process.env.DISCORD_EARLY_ACCESS_WEBHOOK;

    if (!webhookUrl) {
      console.error("❌ Discord webhook not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // 4️⃣ Prepare Discord embed payload
    const payload = {
      username: "Inwren Alerts",
      embeds: [
        {
          title: "🚀 New Early Access Signup",
          color: 0x5865f2, // Discord blurple
          fields: [
            {
              name: "Name",
              value: name,
              inline: true,
            },
            {
              name: "Email",
              value: email,
              inline: true,
            },
          ],
          footer: {
            text: "INWREN • Early Access",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    // 5️⃣ Send to Discord (server → Discord)
    const discordRes = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!discordRes.ok) {
      throw new Error("Discord webhook request failed");
    }

    // 6️⃣ Success response to frontend
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Early access API error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
