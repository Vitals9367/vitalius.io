import Link from "next/link";
import { socials, footer } from "~/data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-secondary">{footer}</p>

          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-secondary transition-colors hover:text-accent-blue"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.image className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
