import clientPromise from '@/src/shared/lib';
import { NextResponse } from 'next/server';
 
export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const queryParams = Object.fromEntries(url.searchParams.entries());
    
    const page = parseInt(queryParams.page) || 0; // Default to 0

    const client = await clientPromise;
    const db = client.db('molecule-base')
    const fragments = await db.collection('molecule')
      .find({})
      .limit(10)
      .skip(0)
      .toArray()
    return NextResponse.json(fragments)
  } catch (e) {
    return NextResponse.error()
  }
}