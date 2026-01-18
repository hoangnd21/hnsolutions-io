import { Section } from '@/components/ui/Section';

interface ITextContentBlockProps {
  data: {
    content: string;
    title?: string;
  };
  translations: Record<string, string>;
}

export function TextContentBlock({
  data,
  translations,
}: ITextContentBlockProps) {
  const { content, title } = data;

  return (
    <Section background="white">
      <div className="max-w-3xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white" data-aos="fade-up">
            {title}
          </h2>
        )}
        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          data-aos="fade-up"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </Section>
  );
}
