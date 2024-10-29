import { NextResponse } from "next/server";

export async function GET(request) {

  

  return NextResponse.json({
    method: request.method,
    count: 100
  });

}
export async function POST(request) {

  

  return NextResponse.json({
    method: request.method,
    count: 100
  });

}