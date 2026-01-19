import { IFooterBlock } from '@/types';
import { FooterColumnBlock } from './FooterColumnBlock';
import { FooterSocialLinksBlock } from './FooterSocialLinksBlock';

interface IFooterBlockProps {
  data: IFooterBlock;
  translations: Record<string, string>;
}

export function FooterBlock({ data, translations }: IFooterBlockProps) {
  const { columns, socialLinks, copyrightText } = data;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted dark:bg-[var(--color-dark)] dark:border-gray-700" data-component="FooterBlock">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {columns && columns.length > 0 && (
            <>
              {columns.map((column, index) => {
                if (index === 0 && socialLinks) {
                  return (
                    <div key={column._id || index} className="col-span-1 md:col-span-2">
                      <div className="mb-4">
                        <FooterColumnBlock data={column} />
                      </div>
                      {socialLinks && (
                        <div className="mt-4">
                          <FooterSocialLinksBlock data={socialLinks} />
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <FooterColumnBlock key={column._id || index} data={column} />
                );
              })}
            </>
          )}
          
          {socialLinks && (!columns || columns.length === 0) && (
            <div className="col-span-1 md:col-span-2">
              <FooterSocialLinksBlock data={socialLinks} />
            </div>
          )}
        </div>

        {copyrightText && (
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground dark:border-gray-700 dark:text-gray-400">
            <p>
              {copyrightText.replace('{year}', currentYear.toString())}
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}
