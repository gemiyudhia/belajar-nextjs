import { NextResponse } from "next/server";

// api menggunakan async
export async function GET() {
  return NextResponse.json({ status: 200, message: "Success" });
}
