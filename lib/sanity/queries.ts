import { defineQuery } from 'next-sanity';

export const GENERIC_PAGE_BY_PATH_QUERY = defineQuery(`
  *[_type == "genericPage" && pagePath == $pagePath][0]{
    _id,
    _type,
    internalName,
    pagePath,
    seoTitle,
    seoDescription,
    seoImage,
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
