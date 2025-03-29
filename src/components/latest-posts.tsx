import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { getAllPosts } from "~/lib/mdx";

export default function LatestPosts() {
  // Get the 3 most recent posts
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <section className="border-t border-gray-100 py-12">
      <h2 className="mb-8 font-serif text-2xl font-bold text-primary">
        Latest Posts
      </h2>
      <div className="space-y-8">
        {latestPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="flex flex-col gap-6 md:flex-row max-h-48">
              <div className="relative aspect-video overflow-hidden rounded-md border border-gray-100 md:aspect-square md:w-1/3">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="mb-2 text-xl font-bold text-primary transition-colors group-hover:text-accent-blue">
                  {post.title}
                </h3>
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
    </section>
  );
}
