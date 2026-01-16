import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getDictionary, getLocaleFromCookie } from "@/lib/i18n";
import { getServices } from "@/lib/api/mock";
import { cookies } from "next/headers";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - HNSolutions",
  description: "Explore our comprehensive IT development and digital marketing services.",
};

export default async function ServicesPage() {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.toString());
  const dict = await getDictionary(locale);
  const services = await getServices(locale);

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="text-white dark:text-[#e5e5e5]">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
            {dict.nav.services}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 dark:text-[#e5e5e5]/90">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              hover
              padding="lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">{service.title}</h2>
              <p className="text-lg text-muted-foreground mb-6 dark:text-[#a3a3a3]">
                {service.description}
              </p>
              <div className="mb-6">
                <h3 className="font-semibold mb-3 dark:text-white">Key Features:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 dark:text-[#a3a3a3]">
                      <span className="text-primary mt-1 dark:text-primary-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact">
                <Button variant="outline">{dict.common.getStarted}</Button>
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="muted">
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8 dark:text-[#a3a3a3]">
            Ready to take your business to the next level? Contact us today.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              {dict.common.contactUs}
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

