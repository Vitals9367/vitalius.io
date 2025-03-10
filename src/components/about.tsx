import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"
import { socials } from "~/data/navigation"

export default function About() {
  return (
    <section className="py-12 border-t border-gray-100">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
        <div className="md:pr-4 flex justify-center md:justify-start">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-200">
            <Image src="/profile.png" alt="Developer profile" fill className="object-cover" />
          </div>
        </div>
        <div className="md:w-3/4 text-center md:text-left">
          <h2 className="font-serif text-2xl font-bold mb-2 text-primary">Hi, I'm Vitalijus 👋</h2>
          <p className="text-secondary mb-4">
            I'm a full-stack developer building indie products and writing about my experiences in tech and business.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-secondary hover:text-accent-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
            >
              <social.image className="h-5 w-5" />
              <span className="sr-only">{social.name}</span>
            </Link>))}
          </div>
        </div>
      </div>
    </section>
  )
}

