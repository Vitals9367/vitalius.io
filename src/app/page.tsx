import Hero from "~/components/hero";
import LatestPosts from "~/components/latest-posts";
import About from "~/components/about";
import Categories from "~/components/categories";
import type { Metadata } from "next";
import { baseMetadata } from "~/data/navigation";

export const metadata: Metadata = baseMetadata;

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <LatestPosts />
      <About />
    </div>
  );
}
