import Link from "next/link"
import { socials, footer } from "~/data/navigation"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary">{footer}</p>

          <div className="flex items-center gap-4">
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
    </footer>
  )
}

