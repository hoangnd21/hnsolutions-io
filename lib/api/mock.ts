import { IGenericPage, Locale } from '@/types';

// =============================================================================
// MOCK PAGE DATA - Paste raw Sanity JSON here
// =============================================================================

const MOCK_PAGE: IGenericPage = {
  "_id": "03b6f999-a2f2-4ee6-a621-9e23f7a6a124",
  "_type": "genericPage",
  "internalName": "HomePage",
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
