import { notFound } from "next/navigation"
import Image from "next/image"
import { format } from "date-fns"
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react"
import Link from "next/link"
import { Badge } from "~/components/ui/badge"
import RelatedPosts from "~/components/related-posts"
import { getPostBySlug, getPostSlugs } from "~/lib/mdx"
import Markdown from "markdown-to-jsx"
import type { Metadata } from "next"
import About from "~/components/about"

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    }
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
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-2xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 mb-8 text-primary hover:text-accent-blue transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all posts
      </Link>

      <div className="relative aspect-[16/9] w-full mb-8 overflow-hidden rounded-md border border-gray-100">
        <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill priority className="object-cover" />
      </div>

      <div className="mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-primary">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-secondary text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
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
                className="bg-transparent text-secondary border-secondary/30 hover:bg-transparent"
              >
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <Markdown>{post.content}</Markdown>
      </div>

      <RelatedPosts currentSlug={slug} />

      <About />
    </article>
  )
}

