import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { getAllPosts } from "~/lib/mdx";

export function PostList() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group block"
        >
          <article className="flex flex-col gap-6 py-4 md:flex-row">
            <div className="relative aspect-video overflow-hidden rounded-md border border-gray-100 md:aspect-square md:w-1/4">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="md:w-3/4">
              <h2 className="mb-2 text-xl font-bold text-primary transition-colors group-hover:text-accent-blue">
                {post.title}
              </h2>
              <p className="mb-2 text-secondary">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 text-sm text-secondary">
                <time dateTime={post.date}>
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </time>
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
  );
}
