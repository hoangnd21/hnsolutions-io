import { IFooterColumnBlock, IMenuItemBlock } from '@/types';
import Link from 'next/link';
import { resolveLink } from '@/lib/utils';

interface IFooterColumnBlockProps {
  data: IFooterColumnBlock;
}

export function FooterColumnBlock({ data }: IFooterColumnBlockProps) {
  const { title, items } = data;

  const filteredItems = items?.filter((item) => {
    const href = resolveLink(item.href);
    return href !== undefined;
  }) || [];

  if (filteredItems.length === 0) {
    return null;
  }

  return (
    <div data-component="FooterColumnBlock">
      {title && (
        <h4 className="font-semibold mb-4 dark:text-white">{title}</h4>
      )}
      <ul className="space-y-2">
        {filteredItems.map((item: IMenuItemBlock) => {
          const href = resolveLink(item.href);
          if (!href) return null;
          
          const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
          
          if (isExternal) {
            return (
              <li key={item._id || item._key}>
                <a
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary-500"
                >
                  {item.text}
                </a>
              </li>
            );
          }

          return (
            <li key={item._id || item._key}>
              <Link
                href={href}
                className="text-muted-foreground hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary-500"
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
