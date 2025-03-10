import Link from "next/link";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-16 text-center md:py-24">
      <h1 className="mb-4 font-serif text-4xl font-bold text-primary md:text-5xl">
        Building. Learning. Sharing.
      </h1>
      <p className="mx-auto mb-8 max-w-2xl text-xl text-secondary">
        A solo developer&apos;s journey through indie hacking, tech, and life.
      </p>
      <div className="flex justify-center">
        <Button
          asChild
          variant="outline"
          className="group rounded-md border-accent-blue text-accent-blue transition-colors hover:bg-accent-blue hover:text-white"
        >
          <Link href="/blog" className="flex items-center">
            Read the Blog
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
