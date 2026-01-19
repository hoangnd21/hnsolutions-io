import { IBlock } from '@/types';
import { HeroBlock } from './HeroBlock';
import { ServicesBlock } from './ServicesBlock';
import { TestimonialsBlock } from './TestimonialsBlock';
import { PortfolioBlock } from './PortfolioBlock';
import { BlogListBlock } from './BlogListBlock';
import { BlogPostBlock } from './BlogPostBlock';
import { TeamBlock } from './TeamBlock';
import { ContactFormBlock } from './ContactFormBlock';
import { TextContentBlock } from './TextContentBlock';
import { ImageGalleryBlock } from './ImageGalleryBlock';
import { CTABlock } from './CTABlock';
import { MenuBlock } from './MenuBlock';
import { FooterBlock } from './FooterBlock';
import { CalloutBlock } from './CalloutBlock';

interface IBlockRendererProps {
  blocks: IBlock[];
  translations: Record<string, string>;
}

const blockComponents: Record<string, React.ComponentType<any>> = {
  hero: HeroBlock,
  HeroBlock: HeroBlock,
  services: ServicesBlock,
  testimonials: TestimonialsBlock,
  portfolio: PortfolioBlock,
  'blog-list': BlogListBlock,
  'blog-post': BlogPostBlock,
  team: TeamBlock,
  'contact-form': ContactFormBlock,
  'text-content': TextContentBlock,
  'image-gallery': ImageGalleryBlock,
  cta: CTABlock,
  MenuBlock: MenuBlock,
  menuBlock: MenuBlock,
  FooterBlock: FooterBlock,
  CalloutBlock: CalloutBlock,
};

export async function BlockRenderer({
  blocks,
  translations,
}: IBlockRendererProps) {
  return (
    <>
      {blocks.map((block, index) => {
        const Component = blockComponents[block._type];
        if (!Component) {
          console.warn(`Unknown block type: ${block._type}`);
          return null;
        }
        return (
          <Component
            key={block._id || index}
            data={block}
            translations={translations}
          />
        );
      })}
    </>
  );
}
