'use client';

import { useEffect } from 'react';
import { useMenu } from '@/lib/menu-context';
import { IMenuBlock, IMenuItemBlock, IHeaderItem } from '@/types';
import { resolveLink } from '@/lib/utils';

interface IMenuBlockProps {
  data: IMenuBlock;
  translations: Record<string, string>;
}

function transformMenuItem(item: IMenuItemBlock): IHeaderItem {
  return {
    href: resolveLink(item.href),
    text: item.text,
    childItems: item.items?.map(transformMenuItem),
  };
}

export function MenuBlock({ data }: IMenuBlockProps) {
  const { setMenuItems } = useMenu();

  useEffect(() => {
    if (data.internalName === 'MasterMenu' && data.items && data.items.length > 0) {
      const validItems = data.items.filter(
        (item): item is IMenuItemBlock =>
          typeof item === 'object' &&
          item !== null &&
          '_type' in item &&
          (item as { _type: string })._type === 'menuItemBlock'
      );
      
      if (validItems.length > 0) {
        const menuItems = validItems.map(transformMenuItem);
        setMenuItems(menuItems);
      }
    }
  }, [data.internalName, data.items, setMenuItems]);

  return null;
}
