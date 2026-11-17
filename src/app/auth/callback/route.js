import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const safePath = (value) =>
  typeof value === "string" && value.startsWith("/") && !value.startsWith("//")
    ? value
    : "/guestbook";

export async function GET(request) {
  const url = new URL(request.url);

  const code = url.searchParams.get("code");
  const next = safePath(url.searchParams.get("next"));

  if (code) {
    const supabase = await createClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(new URL(next, url.origin));
    }
  }

  const failure = new URL("/guestbook", url.origin);
  failure.searchParams.set("error", "auth");
  return NextResponse.redirect(failure);
}
