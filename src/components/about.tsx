import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { socials } from "~/data/navigation";

export default function About() {
  return (
    <section className="flex my-auto border-t border-gray-100 py-12">
      <div className="mx-auto flex flex-col items-center gap-2 md:flex-row">
        <div className="flex justify-center md:justify-center md:pr-4">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border border-gray-200">
            <Image
              src="/profile.png"
              alt="Developer profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="text-center md:w-3/4 md:text-left">
          <h2 className="mb-2 font-serif text-2xl font-bold text-primary">
            Hi, I&apos;m Vitalijus 👋
          </h2>
          <p className="mb-4 text-secondary">
            I&apos;m a full-stack developer building indie products and writing
            about my experiences in tech and business.
          </p>
          <div className="flex justify-center gap-4 md:justify-start">
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
    </section>
  );
}
