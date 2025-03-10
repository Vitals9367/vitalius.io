import { notFound } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import RelatedPosts from "~/components/related-posts";
import { getPostBySlug, getPostSlugs } from "~/lib/mdx";
import Markdown from "markdown-to-jsx";
import type { Metadata } from "next";
import About from "~/components/about";

type tParams = Promise<{ slug: string }>;

interface PostPageProps {
  params: tParams;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-2xl px-4 py-8">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-primary transition-colors hover:text-accent-blue"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all posts
      </Link>

      <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-md border border-gray-100">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="mb-8">
        <h1 className="mb-4 font-serif text-3xl font-bold text-primary md:text-4xl">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-secondary">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{post.readingTime}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-secondary/30 bg-transparent text-secondary hover:bg-transparent"
              >
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="prose prose-lg mb-12 max-w-none">
        <Markdown>{post.content}</Markdown>
      </div>

      <RelatedPosts currentSlug={slug} />

      <About />
    </article>
  );
}
