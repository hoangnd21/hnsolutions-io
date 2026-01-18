import { client } from './client';
import type { QueryParams } from '@sanity/client';

interface ISanityFetchOptions {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: ISanityFetchOptions): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate,
      tags,
    },
  });
}
