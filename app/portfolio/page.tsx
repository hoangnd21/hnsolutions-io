import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getDictionary, getLocaleFromCookie } from "@/lib/i18n";
import { getPortfolioItems } from "@/lib/api/mock";
import { cookies } from "next/headers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - HNSolutions",
  description: "Explore our successful projects and case studies.",
};

export default async function PortfolioPage() {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.toString());
  const dict = await getDictionary(locale);
  const portfolio = await getPortfolioItems(locale);

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="text-white dark:text-[#e5e5e5]">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
            {dict.nav.portfolio}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 dark:text-[#e5e5e5]/90">
            Successful projects that showcase our expertise and commitment to excellence
          </p>
        </div>
      </Section>

      {/* Portfolio Grid */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((item, index) => (
            <Card
              key={item.id}
              hover
              className="overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full h-48 bg-muted dark:bg-[#1a1a1a] mb-4 -mx-6 -mt-6" />
              <div className="mb-2">
                <span className="text-xs font-semibold text-primary bg-primary/10 dark:bg-primary-500/20 dark:text-primary-500 px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
              <p className="text-muted-foreground mb-4 dark:text-[#a3a3a3]">{item.description}</p>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2 dark:text-white">Client:</p>
                <p className="text-sm text-muted-foreground dark:text-[#a3a3a3]">{item.client}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2 dark:text-white">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-muted dark:bg-[#1a1a1a] dark:text-[#a3a3a3] px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

