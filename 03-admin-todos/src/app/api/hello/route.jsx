import { NextResponse, NextRequest } from 'next/server'

export async function GET(Request) { 

  return NextResponse.json({ message: 'Hello, Next.js!' })
}
export async function POST(Request) { 

  const body = await Request.json()

  return NextResponse.json({ message: 'Hello, Next.js!', body })
}