import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SwiperCarousel } from "@/components/carousel/SwiperCarousel";
import { getDictionary, getLocaleFromCookie } from "@/lib/i18n";
import { getServices, getTestimonials } from "@/lib/api/mock";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.toString());
  const dict = await getDictionary(locale);
  const services = await getServices(locale);
  const testimonials = await getTestimonials(locale);

  const testimonialSlides = testimonials.map((testimonial) => (
    <Card key={testimonial.id} className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-yellow-400 dark:text-yellow-500">★</span>
          ))}
        </div>
        <p className="text-lg mb-6 flex-1 italic dark:text-gray-400">&ldquo;{testimonial.quote}&rdquo;</p>
        <div>
          <p className="font-semibold dark:text-white">{testimonial.clientName}</p>
          <p className="text-sm text-muted-foreground dark:text-gray-400">{testimonial.company}</p>
        </div>
      </div>
    </Card>
  ));

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="text-white dark:text-[#e5e5e5]">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
            {dict.home.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 dark:text-[#e5e5e5]/90">
            {dict.home.hero.subtitle}
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              {dict.home.hero.cta}
            </Button>
          </Link>
        </div>
      </Section>

      {/* Services Section */}
      <Section background="white">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            {dict.home.services.title}
          </h2>
          <p className="text-xl text-muted-foreground dark:text-[#a3a3a3]">
            {dict.home.services.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.id}
              hover
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{service.title}</h3>
              <p className="text-muted-foreground mb-4 dark:text-[#a3a3a3]">{service.description}</p>
              <Link href="/services" className="text-primary hover:text-primary-400 transition-colors">
                {dict.common.learnMore} →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="muted">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            {dict.home.testimonials.title}
          </h2>
          <p className="text-xl text-muted-foreground dark:text-gray-400">
            {dict.home.testimonials.subtitle}
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <SwiperCarousel
            items={testimonialSlides}
            slidesPerView={3}
            autoplay={true}
            navigation={true}
            pagination={true}
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 dark:text-[#a3a3a3]">
            Let&apos;s discuss how we can help you achieve your goals.
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
