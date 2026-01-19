import { Section } from '@/components/ui/Section';
import { IBlogPost } from '@/types';
import Link from 'next/link';

interface IBlogPostBlockProps {
  data: {
    post: IBlogPost;
  };
  translations: Record<string, string>;
}

export function BlogPostBlock({ data, translations }: IBlogPostBlockProps) {
  const { post } = data;

  return (
    <Section background="white" data-component="BlogPostBlock">
      <div className="max-w-3xl mx-auto">
        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          data-aos="fade-up"
        >
          <p className="lead">{post.excerpt}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="mt-8 pt-8 border-t border-border" data-aos="fade-up">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8" data-aos="fade-up">
          <Link
            href="/blog"
            className="text-primary hover:underline font-medium"
          >
            {translations.backToBlog || '← Back to Blog'}
          </Link>
        </div>
      </div>
    </Section>
  );
}
