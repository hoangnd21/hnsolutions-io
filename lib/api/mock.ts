// @ts-nocheck
import { IGenericPage, Locale } from '@/types';

// =============================================================================
// MOCK PAGE DATA - Paste raw Sanity JSON here
// =============================================================================

const MOCK_PAGE: IGenericPage = {
  "_id": "03b6f999-a2f2-4ee6-a621-9e23f7a6a124",
  "_type": "genericPage",
  "pagePath": "/",
  "seoTitle": "HN Solutions - Your digital partner",
  "seoDescription": "HN Solutions - Your digital partner HN Solutions - Your digital partner HN Solutions - Your digital partner HN Solutions - Your digital partner HN Solutions - Your digital partner HN Solutions - Your digital partner HN Solutions - Your digital partner HN Solutions - Your digital partner HN Solutions - Your digital partner ",
  "seoImage": "https://cdn.sanity.io/images/hoekvd4n/production/2f1e8f1da8e28c67d6f840460a748112db9c5d69-472x312.jpg",
  "generalTranslations": {
    "welcome": "Welcome",
    "contactUsText": "Contact Us"
  },
  "blocks": [
    {
      "_createdAt": "2026-01-18T14:30:24Z",
      "_id": "67ae10cf-0414-4ee4-ab96-ab575755bd59",
      "_rev": "VE6hR9TiWS4BEmHxKL46Qb",
      "_system": {
        "base": {
          "id": "67ae10cf-0414-4ee4-ab96-ab575755bd59",
          "rev": "iLrFcRMmM9mmBZd8RZ36RV"
        }
      },
      "_type": "menuBlock",
      "_updatedAt": "2026-01-18T15:55:54Z",
      "internalName": "MasterMenu",
      "items": [
        {
          "_key": "73a9d14db98a",
          "_type": "menuItemBlock",
          "href": "/our-work",
          "internalName": "MenuItem.OurWork",
          "text": "Our work"
        },
        {
          "_key": "3981ff9748c8",
          "_type": "menuItemBlock",
          "href": "/about",
          "internalName": "MenuItem.About",
          "text": "About"
        },
        {
          "_key": "e56c72dec08f",
          "_type": "menuItemBlock",
          "internalName": "MenuItem.SubMenuSample",
          "items": [
            {
              "_key": "e38efb95b64f",
              "_type": "menuItemBlock",
              "href": "/sub-menu",
              "internalName": "submenuitem1",
              "text": "submenuitem1"
            }
          ],
          "text": "Submenu Sample"
        }
      ]
    },
    {
      "_createdAt": "2026-01-18T16:05:44Z",
      "_id": "b1e6d098-b2fb-4314-86c7-e2bd91ab32e8",
      "_rev": "d5y53MbRG9hlbHOiHNC9ns",
      "_type": "MenuBlock",
      "_updatedAt": "2026-01-18T16:10:29Z",
      "internalName": "MasterMenu",
      "items": [
        {
          "_key": "4b626efa7122",
          "_ref": "9a8abfe6-d971-47fc-83a2-b1d3ea9136e1",
          "_type": "reference"
        },
        {
          "_key": "66791c917425",
          "_ref": "d34b26c2-8f54-4f28-b02c-951e7205ca39",
          "_type": "reference"
        },
        {
          "_key": "fcd30164336e",
          "_ref": "84cd2bb8-1fbf-4b84-9c2b-54b9399e5e68",
          "_type": "reference"
        }
      ]
    },
    {
      "_createdAt": "2026-01-19T05:53:03Z",
      "_id": "806af0e6-1522-408e-8f26-ed32ede6a29e",
      "_rev": "d5y53MbRG9hlbHOiHNtn1F",
      "_type": "HeroBlock",
      "_updatedAt": "2026-01-19T05:56:29Z",
      "backgroundImage": "https://cdn.sanity.io/images/hoekvd4n/production/602a3dc097843a5c6d81acb898a17453bb7d0d69-3840x2160.png",
      "ctaLink": "/contact",
      "ctaText": "Contact us",
      "internalName": "HomePageHeroBlock",
      "metadata": null,
      "subtitle": "HNSolutions can do that",
      "title": "Transform your digital home"
    },
    {
      "_createdAt": "2026-01-19T05:27:04Z",
      "_id": "c13d7319-ccf5-4722-96c5-1822044820ce",
      "_rev": "d5y53MbRG9hlbHOiHNtRJh",
      "_system": {
        "base": {
          "id": "c13d7319-ccf5-4722-96c5-1822044820ce",
          "rev": "iLrFcRMmM9mmBZd8RZsgEF"
        }
      },
      "_type": "FooterBlock",
      "_updatedAt": "2026-01-19T05:52:42Z",
      "columns": [
        {
          "_id": "b3cbba70-fdc3-43d5-b9c5-05d381e11f96",
          "_type": "FooterColumnBlock",
          "internalName": "FooterColumn/FirstColumn",
          "items": null,
          "title": null
        },
        {
          "_id": "18d97537-8cd6-422f-a89a-1c83c96e5923",
          "_type": "FooterColumnBlock",
          "internalName": "FooterColumn/SecondColumn",
          "items": [
            {
              "_id": "d34b26c2-8f54-4f28-b02c-951e7205ca39",
              "_type": "MenuItemBlock",
              "href": "/porfolio",
              "internalName": "MenuItem/Porfolio",
              "items": null,
              "text": "Porfolio"
            },
            {
              "_id": "9a8abfe6-d971-47fc-83a2-b1d3ea9136e1",
              "_type": "MenuItemBlock",
              "href": "/about",
              "internalName": "MenuItem/About",
              "items": null,
              "text": "About"
            }
          ],
          "title": "Services"
        },
        {
          "_id": "bbf9c1c7-019c-4d23-866b-3217e023dac6",
          "_type": "FooterColumnBlock",
          "internalName": "FooterColumn/ThirdColumn",
          "items": [
            {
              "_id": "6dcbdd7b-1e96-47ff-941a-479ef13e737a",
              "_type": "MenuItemBlock",
              "href": "mailto:max@solutions.io",
              "internalName": "MenuItem/EmailMax",
              "items": null,
              "text": "max@solutions.io"
            },
            {
              "_id": "e5a4b61b-f024-4341-a649-393dc7b470fb",
              "_type": "MenuItemBlock",
              "href": "tel:+84344357744",
              "internalName": "MenuItem/CallMax",
              "items": null,
              "text": "+84 344 35 7744"
            }
          ],
          "title": "Contact"
        }
      ],
      "copyrightText": "© 2026 HNSolutions. All rights reserved.",
      "internalName": "MasterFooter",
      "socialLinks": {
        "_id": "cb91bef3-6b20-4a8c-a301-f4bf53535c65",
        "_type": "FooterSocialLinksBlock",
        "internalName": "SocialLinks",
        "links": [
          {
            "_key": "b8de04fb26e7",
            "icon": null,
            "platform": "LinkedIn",
            "url": "https://www.linkedin.com/in/max-hoang-nguyen/"
          }
        ]
      }
    }
  ]
}

// =============================================================================
// MOCK PROVIDER
// =============================================================================

export async function getGenericPage(
  pagePath: string,
  _locale: Locale = 'en'
): Promise<IGenericPage | null> {
  const normalizedPath = pagePath === '' ? '/' : `/${pagePath.replace(/^\//, '')}`;
  const mockPath = MOCK_PAGE.pagePath === '' ? '/' : MOCK_PAGE.pagePath;

  console.log('[Mock] Requested:', normalizedPath, '| Mock pagePath:', mockPath);

  if (normalizedPath === mockPath) {
    console.log('[Mock] Match found:', MOCK_PAGE.internalName);
    return MOCK_PAGE;
  }

  console.log('[Mock] No match - returning null');
  return null;
}
