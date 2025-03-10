import Link from "next/link"
import { Button } from "~/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-16 md:py-24 text-center">
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">Building. Learning. Sharing.</h1>
      <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
        A solo developer's journey through indie hacking, tech, and life.
      </p>
      <div className="flex justify-center">
        <Button
          asChild
          variant="outline"
          className="rounded-md border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white transition-colors group"
        >
          <Link href="/blog" className="flex items-center">
            Read the Blog
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

