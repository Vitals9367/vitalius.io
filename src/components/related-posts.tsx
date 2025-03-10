import Link from "next/link";
import Image from "next/image";
import { getRelatedPosts } from "~/lib/mdx";

export default function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const relatedPosts = getRelatedPosts(currentSlug);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-12 border-t border-gray-100 pt-8">
      <h3 className="mb-6 font-serif text-xl font-bold text-primary">
        Related Posts
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="flex gap-4">
              <div className="relative aspect-square w-1/3 overflow-hidden rounded-md border border-gray-100">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="w-2/3">
                <h4 className="text-lg font-medium text-primary transition-colors group-hover:text-accent-blue">
                  {post.title}
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
