import { NextResponse } from "next/server";
import { auth } from "../../lib/auth";
import { headers } from "next/headers";

export async function GET() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user.role !== "user") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  return NextResponse.json({ message: "Welcome to the user area!" });
}
