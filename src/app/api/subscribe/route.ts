import { NextResponse } from "next/server";
import { handleSubscribeRequest } from "@/lib/subscribe-handler";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return await handleSubscribeRequest(body);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to capture lead.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
