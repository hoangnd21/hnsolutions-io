# HNSolutions Website

A modern, bilingual company website built with Next.js 16, TypeScript, Tailwind CSS, and featuring dark mode, i18n support, and comprehensive IT/Marketing services showcase.

## 🚀 Features

- ✨ **Modern Tech Stack**: Next.js 16 with App Router, TypeScript, Tailwind CSS v4
- 🌐 **Bilingual Support**: English and Vietnamese with cookie-based locale switching
- 🌙 **Dark Mode**: System preference detection with manual toggle
- 📱 **Fully Responsive**: Mobile-first design with beautiful UI
- 🎨 **Smooth Animations**: AOS (Animate On Scroll) integration
- 📸 **Image Galleries**: Lightbox2 for portfolio showcases
- 🎠 **Carousels**: Swiper for testimonials and team members
- 📝 **Contact Form**: Validated form with API endpoint (ready for email service)
- 🔍 **SEO Optimized**: Dynamic metadata, sitemap, robots.txt
- 📊 **Analytics Ready**: Google Tag Manager integration
- 🎯 **State Management**: Zustand for global state
- 🗂️ **Sanity CMS**: Headless CMS integration with GROQ queries

## 📋 Prerequisites

- Node.js 20+ 
- npm, yarn, pnpm, or bun

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hnsolutions-io
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
# Create .env.local with the following variables:
CONTACT_EMAIL=contact@hnsolutions.io
MAX_EMAIL=max@hnsolutions.io
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX  # Optional

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=hoekvd4n
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-19
SANITY_API_READ_TOKEN=<your-viewer-token>
CONTENT_SOURCE=sanity  # or 'mock' for development
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── blog/                # Blog listing & detail pages
│   ├── contact/             # Contact page
│   ├── portfolio/           # Portfolio page
│   ├── services/            # Services page
│   ├── [...page]/           # Dynamic CMS pages
│   ├── api/contact/         # Contact form API
│   ├── cms/                 # CMS redirect route
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/
│   ├── blocks/              # CMS block components
│   ├── carousel/            # Swiper carousel components
│   ├── forms/               # Contact form
│   ├── gallery/             # Lightbox2 gallery
│   ├── layout/              # Header, Footer, Navigation
│   └── ui/                  # Reusable UI components
├── config/
│   ├── fonts.ts             # Font configuration
│   └── theme.ts             # Color palette
├── i18n/
│   ├── dictionaries/        # EN/VN translations
│   └── locales.ts           # Locale definitions
├── lib/
│   ├── analytics/           # Google Tag Manager
│   ├── api/                 # Content providers
│   │   ├── content-provider.ts  # Unified content API
│   │   └── mock.ts          # Mock data fallback
│   ├── sanity/              # Sanity CMS integration
│   │   ├── client.ts        # Sanity client config
│   │   ├── queries.ts       # GROQ queries
│   │   └── fetch.ts         # Fetch helper with caching
│   ├── store/               # Zustand store
│   ├── cookies.ts           # Cookie utilities
│   ├── i18n.ts              # i18n utilities
│   ├── theme-provider.tsx   # next-themes wrapper
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript interfaces
└── middleware.ts            # Locale cookie detection
```

## 🌍 Internationalization (i18n)

The website supports English and Vietnamese:
- Cookie-based language preference (`NEXT_LOCALE`)
- Language switcher in header
- Content from Sanity CMS
- UI labels from JSON dictionaries

## 🎨 Customization

### Colors
Update colors in `config/theme.ts`:
```typescript
export const theme = {
  colors: {
    primary: { /* your brand colors */ },
    secondary: { /* your brand colors */ },
  },
};
```

### Content
Content is managed via Sanity CMS:
1. Access the CMS at `https://cms-staging.hnsolutions.io`
2. Create and edit `genericPage` documents
3. Pages are fetched via GROQ queries with ISR caching
4. Visit `/cms` route for quick dashboard access

## 📧 Contact Form

The contact form API endpoint is at `/api/contact`. Currently logs submissions to console.

**To enable email sending:**
1. Choose email service (Resend, SendGrid, Nodemailer)
2. Add API key to environment variables
3. Update `app/api/contact/route.ts` with email logic

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms
Build the production version:
```bash
npm run build
npm start
```

## 📊 Analytics

Add Google Tag Manager ID to `.env.local`:
```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## 🔗 Quick Links

- **Home**: `/`
- **About**: `/about`
- **Services**: `/services`
- **Portfolio**: `/portfolio`
- **Blog**: `/blog`
- **Contact**: `/contact`
- **CMS Dashboard**: `/cms` (redirects to Sanity Studio)

## 🛠️ Technologies

- **Framework**: Next.js 16.1.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **CMS**: Sanity
- **Animations**: AOS (Animate On Scroll)
- **Carousel**: Swiper
- **Gallery**: Lightbox2
- **Theme**: next-themes
- **State**: Zustand
- **i18n**: Custom cookie-based implementation

## 📝 TODO

- [ ] Update brand colors in `config/theme.ts`
- [ ] Implement email service for contact form
- [ ] Add company logo and brand assets
- [ ] Configure Google Tag Manager
- [ ] Add real content and images
- [ ] Set up GDPR cookie consent (if targeting EU)

## 📄 License

All rights reserved © 2026 HNSolutions

---

Built with ❤️ by HNSolutions Team
