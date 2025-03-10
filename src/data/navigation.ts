import { Github, Twitter, Linkedin } from "lucide-react"
import { env } from "~/env";

export const navigation = [
    { name: "All Posts", href: "/blog" }
]

export const socials = [
    { name: "GitHub", href: "https://github.com/Vitals9367", image: Github },
    { name: "Twitter", href: "https://x.com/alsauskas_v", image: Twitter },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/vitalijusalsauskas/", image: Linkedin },
]

export const footer = `© ${new Date().getFullYear()} Vitalijus Blog. All rights reserved.`;

export const categories = [
    { name: "All", href: "/categories" },
    { name: "Tech", href: "/categories/tech" },
    { name: "Design", href: "/categories/design" },
    { name: "Indie Hacking", href: "/categories/indie-hacking" },
]

export const baseMetadata = {
    title: {
      template: "%s | Vitalijus",
      default: "Vitalijus - A Solo Developer's Blog",
    },
    description: "A solo developer's journey through indie hacking, tech, and life.",
    keywords: ["indie hacking", "web development", "programming", "productivity", "tech"],
    authors: [{ name: "Vitalijus Alšauskas" }],
    creator: "Vitalijus Alšauskas",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: env.NEXT_PUBLIC_BASE_URL,
      siteName: "Vitalijus",
      title: "Vitalijus - A Solo Developer's Blog",
      description: "A solo developer's journey through indie hacking, tech, and life.",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Vitalijus Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Vitalijus - A Solo Developer's Blog",
      description: "A solo developer's journey through indie hacking, tech, and life.",
      creator: "@vitalijusalsauskas",
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  }

export const logo = "Vitalijus Alšauskas";