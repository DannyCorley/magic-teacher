import { NextRequest, NextResponse } from "next/server";
import { getSupabase, getSupabaseAdmin } from "@/lib/supabase";
import { auth } from "@/auth";

// GET — fetch all guestbook entries (public)
export async function GET() {
  const { data, error } = await getSupabase()
    .from("guestbook")
    .select("id, name, message, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST — submit a new entry (must be signed in)
export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "You must be signed in to sign the guestbook." }, { status: 401 });
  }

  const { message } = await req.json();

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return NextResponse.json({ error: "Message cannot be empty." }, { status: 400 });
  }

  if (message.trim().length > 280) {
    return NextResponse.json({ error: "Message must be 280 characters or less." }, { status: 400 });
  }

  const { data, error } = await getSupabaseAdmin()
    .from("guestbook")
    .insert({
      name: session.user.name ?? session.user.email ?? "Anonymous",
      message: message.trim(),
      user_id: (session.user as { id?: string }).id ?? null,
    })
    .select("id, name, message, created_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
