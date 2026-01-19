import { defineQuery } from 'next-sanity';

export const GENERIC_PAGE_BY_PATH_QUERY = defineQuery(`
  *[_type == "genericPage" && (pagePath.current == $pagePath || pagePath == $pagePath)][0]{
    _id,
    _type,
    "pagePath": coalesce(pagePath.current, pagePath),
    "seoTitle": coalesce(seoTitle[$locale], seoTitle.en),
    "seoDescription": coalesce(seoDescription[$locale], seoDescription.en),
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
          "title": coalesce(title[$locale], title.en),
          items[]->{
            _id,
            _type,
            internalName,
            "text": coalesce(text[$locale], text.en),
            "href": coalesce(href.url, href.page->pagePath.current, href),
            items[]->{
              _id,
              _type,
              internalName,
              "text": coalesce(text[$locale], text.en),
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
        "copyrightText": coalesce(copyrightText[$locale], copyrightText.en)
      },
      _type == "HeroBlock" => {
        "title": coalesce(title[$locale], title.en),
        "subtitle": coalesce(subtitle[$locale], subtitle.en),
        "ctaText": coalesce(ctaText[$locale], ctaText.en),
        "ctaLink": coalesce(ctaLink.url, ctaLink.page->pagePath.current, ctaLink),
        metadata{
          author,
          date
        },
        "backgroundImage": backgroundImage.asset->url
      },
      _type == "CalloutBlock" => {
        "headline": coalesce(headline[$locale], headline.en),
        "description": coalesce(description[$locale], description.en),
        buttons[]{
          _key,
          "text": coalesce(text[$locale], text.en),
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
