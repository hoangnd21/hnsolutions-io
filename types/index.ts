// Barreled interface exports for HNSolutions website

// ============================================================================
// Sanity Base Types
// ============================================================================

// Allows any additional properties beyond specified fields
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DynamicComponentProps = Record<string, any>;

// Base Sanity document fields
interface ISanityDocumentBase {
  _id: string;
  _type: string;
  _createdAt?: string;
  _updatedAt?: string;
  _rev?: string;
}

// Sanity document with known fields + any extras
export type ISanityDocument = ISanityDocumentBase & DynamicComponentProps;


export interface ISanityReference {
  _ref: string;
  _type: 'reference';
}

export interface ITranslationPair {
  _key: string;
  key: string;
  value: string;
}

export interface IGenericTranslationsBlock extends ISanityDocument {
  _type: 'GenericTranslationsBlock';
  internalName: string;
  pairs?: ITranslationPair[];
}

// ============================================================================
// Content Types
// ============================================================================

export interface IPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogImage?: string;
}

export interface IService {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  slug: string;
}

export interface IPortfolioItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  client: string;
  technologies: string[];
  slug: string;
  category: string;
}

export interface IBlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  featuredImage: string;
  tags: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface ITeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface ITestimonial {
  id: string;
  clientName: string;
  company: string;
  quote: string;
  photo?: string;
  rating: number;
}

export interface IContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

// ============================================================================
// Generic Page Structure
// ============================================================================

// Raw type from Sanity (with expanded reference)
export interface ISanityGenericPage extends ISanityDocument {
  _type: 'genericPage';
  internalName: string;
  pagePath: string;
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: string;
  generalTranslations?: IGenericTranslationsBlock;
  blocks?: IBlock[];
}

// Frontend-friendly type (translations as object)
export interface IGenericPage {
  _id: string;
  _type: 'genericPage';
  internalName: string;
  pagePath: string;
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: string;
  generalTranslations: Record<string, string>;
  blocks: IBlock[];
}

export interface IBlock extends ISanityDocument {
  internalName: string;
}

export interface ILinkObject {
  linkType?: 'page' | 'url';
  page?: {_ref: string; _type: 'reference'} | {pagePath: string};
  url?: string;
}

export interface IMenuItemBlock extends IBlock {
  _type: 'MenuItemBlock';
  text: string;
  href?: ILinkObject | string;
  items?: IMenuItemBlock[];
}

export interface IMenuBlock extends IBlock {
  _type: 'MenuBlock';
  items?: IMenuItemBlock[];
}

export interface IFooterColumnBlock extends IBlock {
  _type: 'FooterColumnBlock';
  title?: string;
  items?: IMenuItemBlock[];
}

export interface IFooterSocialLink {
  _key: string;
  platform: string;
  url: string;
  icon?: string;
}

export interface IFooterSocialLinksBlock extends IBlock {
  _type: 'FooterSocialLinksBlock';
  links?: IFooterSocialLink[];
}

export interface IFooterBlock extends IBlock {
  _type: 'FooterBlock';
  columns?: IFooterColumnBlock[];
  socialLinks?: IFooterSocialLinksBlock;
  copyrightText?: string;
}

export interface IHeroBlock extends IBlock {
  _type: 'HeroBlock';
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: ILinkObject | string;
  metadata?: {
    author?: string;
    date?: string;
  };
  backgroundImage?: string | {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    url?: string;
  };
}

export interface ICalloutButton {
  _key: string;
  text: string;
  href: ILinkObject | string;
  variant?: 'primary' | 'primaryInvert' | 'reversePrimary';
}

export interface ICalloutBlock extends IBlock {
  _type: 'CalloutBlock';
  headline: string;
  description: string;
  buttons?: ICalloutButton[];
  backgroundGradient?: string;
}

export type BlockType =
  | 'hero'
  | 'HeroBlock'
  | 'services'
  | 'testimonials'
  | 'portfolio'
  | 'blog-list'
  | 'blog-post'
  | 'team'
  | 'contact-form'
  | 'text-content'
  | 'image-gallery'
  | 'cta'
  | 'FooterBlock'
  | 'CalloutBlock';

// ============================================================================
// Component Props
// ============================================================================

export interface IButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'primaryInvert' | 'reversePrimary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface ICardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export interface ISectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'muted' | 'gradient';
  aos?: string;
  aosDelay?: number;
}

export interface ISwiperCarouselProps {
  items: React.ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: boolean;
  navigation?: boolean;
  pagination?: boolean;
}

export interface IImageGalleryProps {
  images: {
    src: string;
    thumbnail: string;
    alt: string;
    title?: string;
  }[];
}

// ============================================================================
// Navigation Types
// ============================================================================

export interface IHeaderItem {
  href?: string;
  text: string;
  childItems?: IHeaderItem[];
}

// ============================================================================
// i18n Types
// ============================================================================

export type Locale = 'en' | 'vn';

export interface IDictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    blog: string;
    contact: string;
  };
  common: {
    readMore: string;
    learnMore: string;
    getStarted: string;
    contactUs: string;
    viewAll: string;
    backToHome: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    services: {
      title: string;
      subtitle: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      company: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

// ============================================================================
// Store Types
// ============================================================================

export interface IAppStore {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

