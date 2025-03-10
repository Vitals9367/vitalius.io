import { PostList } from "~/components/post-list";
import type { Metadata } from "next";
import { baseMetadata } from "~/data/navigation";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Blog | Vitalijus",
  description:
    "Explore articles on indie hacking, web development, and productivity.",
  openGraph: {
    title: "Blog | Vitalijus",
    description:
      "Explore articles on indie hacking, web development, and productivity.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-8 font-serif text-3xl font-bold text-primary">
        All Posts
      </h1>
      <PostList />
    </div>
  );
}
