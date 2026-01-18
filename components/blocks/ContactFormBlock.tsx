import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/forms/ContactForm';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/types';
import { cookies } from 'next/headers';
import { getLocaleFromCookie } from '@/lib/i18n';

interface IContactFormBlockProps {
  data: Record<string, any>;
  translations: Record<string, string>;
}

export async function ContactFormBlock({
  data,
  translations,
}: IContactFormBlockProps) {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.toString());
  const dict = await getDictionary(locale);

  return (
    <Section background="white">
      <div className="max-w-2xl mx-auto" data-aos="fade-up">
        <Card padding="lg">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">
            {dict.contact.form.submit || 'Send us a message'}
          </h2>
          <ContactForm dict={dict} />
        </Card>
      </div>
    </Section>
  );
}
