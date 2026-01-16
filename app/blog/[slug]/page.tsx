import { Section } from "@/components/ui/Section";
import { getDictionary, getLocaleFromCookie } from "@/lib/i18n";
import { getBlogPost } from "@/lib/api/mock";
import { cookies } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.toString());
  const post = await getBlogPost(resolvedParams.slug, locale);

  if (!post) {
    return {
      title: "Post Not Found - HNSolutions",
    };
  }

  return {
    title: `${post.title} - HNSolutions Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.toString());
  const dict = await getDictionary(locale);
  const post = await getBlogPost(resolvedParams.slug, locale);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="text-white">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="mb-4">
            <Link href="/blog" className="text-white/80 hover:text-white">
              ← {dict.common.backToHome}
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-4 text-white/80">
            <span>{post.author}</span>
            <span>•</span>
            <span>
              {new Date(post.date).toLocaleDateString(locale === 'vn' ? 'vi-VN' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </Section>

      {/* Article Content */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none" data-aos="fade-up">
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
              ← Back to Blog
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

