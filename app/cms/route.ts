import { NextResponse } from 'next/server';

export async function GET() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  if (!projectId) {
    return NextResponse.redirect('https://www.sanity.io');
  }

  return NextResponse.redirect(`https://cms-staging.hnsolutions.io`);
}
