import type { Metadata } from "next";
import { inter, poppins, spaceGrotesk } from "@/config/fonts";
import "./globals.css";
import "./glassmorphism.css";
import "@/components/ui/toggle.css";
import "@/components/progress/nprogress.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/lib/analytics/gtm";
import { getDictionary, getLocaleFromCookie } from "@/lib/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProgressBar } from "@/components/progress/ProgressBar";
import { FontSwitcher } from "@/components/ui/FontSwitcher";
import { MenuProvider } from "@/lib/menu-context";
import { cookies } from "next/headers";
import Script from "next/script";

export const metadata: Metadata = {
  title: "HNSolutions - IT & Marketing Solutions",
  description: "Comprehensive IT development and digital marketing services to help your business grow and succeed in the digital age.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieString = cookieStore.toString();
  const locale = getLocaleFromCookie(cookieString);
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning className="dark">
      <head>
        <GoogleTagManager />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} font-sans antialiased`}
        data-locale={locale}
      >
        <GoogleTagManagerNoScript />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          enableColorScheme
        >
          <MenuProvider>
            <ProgressBar />
            <FontSwitcher />
            <div className="flex min-h-screen flex-col">
              <Header dict={dict} />
              <main className="flex-1">{children}</main>
              <Footer dict={dict} />
            </div>
          </MenuProvider>
        </ThemeProvider>
        
        {/* AOS (Animate On Scroll) initialization */}
        <Script
          id="aos-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof AOS !== 'undefined') {
                AOS.init({
                  duration: 800,
                  once: true,
                  offset: 100,
                });
              }
            `,
          }}
        />
        <Script src="https://unpkg.com/aos@next/dist/aos.js" strategy="beforeInteractive" />
        <link href="https://unpkg.com/aos@next/dist/aos.css" rel="stylesheet" />
      </body>
    </html>
  );
}
