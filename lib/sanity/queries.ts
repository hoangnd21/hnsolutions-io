import { defineQuery } from 'next-sanity';

export const GENERIC_PAGE_BY_PATH_QUERY = defineQuery(`
  *[_type == "genericPage" && (pagePath.current == $pagePath || pagePath == $pagePath)][0]{
    _id,
    _type,
    "pagePath": coalesce(pagePath.current, pagePath),
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
      ...,
      _type == "FooterBlock" => {
        columns[]->{
          _id,
          _type,
          internalName,
          title,
          items[]->{
            _id,
            _type,
            internalName,
            text,
            "href": coalesce(href.url, href.page->pagePath.current, href),
            items[]->{
              _id,
              _type,
              internalName,
              text,
              "href": coalesce(href.url, href.page->pagePath.current, href)
            }
          }
        },
        socialLinks->{
          _id,
          _type,
          internalName,
          links[]{
            _key,
            platform,
            url,
            "icon": icon.asset->url
          }
        },
        copyrightText
      },
      _type == "HeroBlock" => {
        title,
        subtitle,
        ctaText,
        "ctaLink": coalesce(ctaLink.url, ctaLink.page->pagePath.current, ctaLink),
        metadata{
          author,
          date
        },
        "backgroundImage": backgroundImage.asset->url
      },
      _type == "CalloutBlock" => {
        headline,
        description,
        buttons[]{
          _key,
          text,
          "href": coalesce(href.url, href.page->pagePath.current, href),
          variant
        },
        backgroundGradient
      }
    }
  }
`);

export const ALL_PAGE_PATHS_QUERY = defineQuery(`
  *[_type == "genericPage" && defined(pagePath)]{
    "pagePath": coalesce(pagePath.current, pagePath)
  }
`);
