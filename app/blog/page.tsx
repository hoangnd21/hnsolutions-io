import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getDictionary, getLocaleFromCookie } from "@/lib/i18n";
import { getBlogPosts } from "@/lib/api/mock";
import { cookies } from "next/headers";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - HNSolutions",
  description: "Insights, tips, and news about IT development and digital marketing.",
};

export default async function BlogPage() {
  const cookieStore = await cookies();
  const locale = getLocaleFromCookie(cookieStore.toString());
  const dict = await getDictionary(locale);
  const posts = await getBlogPosts(locale);

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="text-white dark:text-[#e5e5e5]">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
            {dict.nav.blog}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 dark:text-[#e5e5e5]/90">
            Insights, tips, and trends in IT and digital marketing
          </p>
        </div>
      </Section>

      {/* Blog Posts Grid */}
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
                  {new Date(post.date).toLocaleDateString(locale === 'vn' ? 'vi-VN' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{post.title}</h3>
              <p className="text-muted-foreground mb-4 flex-1 dark:text-[#a3a3a3]">{post.excerpt}</p>
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
                {dict.common.readMore} →
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

