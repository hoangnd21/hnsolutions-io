import { defineQuery } from 'next-sanity';

export const GENERIC_PAGE_BY_PATH_QUERY = defineQuery(`
  *[_type == "genericPage" && pagePath == $pagePath][0]{
    _id,
    _type,
    pagePath,
    seoTitle,
    seoDescription,
    "seoImage": seoImage.asset->url,
    generalTranslations->{
      _id,
      internalName,
      pairs[]{ _key, key, value }
    },
    blocks[]->{
      _id,
      _type,
      internalName,
      ...
    }
  }
`);

export const ALL_PAGE_PATHS_QUERY = defineQuery(`
  *[_type == "genericPage" && defined(pagePath)]{
    "pagePath": pagePath
  }
`);
