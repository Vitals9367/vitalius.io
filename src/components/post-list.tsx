import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { getAllPosts } from "~/lib/mdx"

export function PostList() {
  const posts = getAllPosts()

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
          <article className="py-4 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 aspect-video md:aspect-square relative overflow-hidden rounded-md border border-gray-100">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="md:w-3/4">
              <h2 className="text-xl font-bold mb-2 text-primary group-hover:text-accent-blue transition-colors">
                {post.title}
              </h2>
              <p className="text-secondary mb-2">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 text-sm text-secondary">
                <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
                <span>•</span>
                <div className="flex gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={tag}>
                      {tag}
                      {index < post.tags.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}

