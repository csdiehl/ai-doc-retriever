import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const client = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PRIVATE_KEY!,
  );

  const { data, error } = await client.from("documentInfo").select("*");

  if (data) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: error });
  }
}
