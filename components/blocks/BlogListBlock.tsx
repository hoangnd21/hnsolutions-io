import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { IBlogPost, Locale } from '@/types';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { getLocaleFromCookie } from '@/lib/i18n';

interface IBlogListBlockProps {
  data: {
    posts: IBlogPost[];
  };
  translations: Record<string, string>;
}

export async function BlogListBlock({ data, translations }: IBlogListBlockProps) {
  const { posts } = data;
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.toString());

  return (
    <Section background="white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Card
            key={post.id}
            hover
            className="overflow-hidden flex flex-col"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="w-full h-48 bg-muted dark:bg-[#1a1a1a] mb-4 -mx-6 -mt-6" />
            <div className="mb-2">
              <p className="text-sm text-muted-foreground dark:text-[#a3a3a3]">
                {new Date(post.date).toLocaleDateString(
                  locale === 'vn' ? 'vi-VN' : 'en-US',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                )}
              </p>
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">{post.title}</h3>
            <p className="text-muted-foreground mb-4 flex-1 dark:text-[#a3a3a3]">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-primary/10 text-primary dark:bg-primary-500/20 dark:text-primary-500 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="text-primary hover:text-primary-400 dark:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium"
            >
              {translations.readMore || 'Read More'} →
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
