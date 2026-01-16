import { NextResponse } from 'next/server';

export async function GET() {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;

  if (!spaceId) {
    // If no space ID is configured, redirect to Contentful homepage
    return NextResponse.redirect('https://www.contentful.com');
  }

  // Redirect to Contentful dashboard for this space
  return NextResponse.redirect(`https://app.contentful.com/spaces/${spaceId}`);
}

