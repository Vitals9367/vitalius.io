import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "vitalius.io",
  DESCRIPTION: "Welcome to vitalius.io, a portfolio and blog where I share my work and ideas.",
  AUTHOR: "Vitalijus Alšauskas",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "vitalijus.alsauskas@gmail.com",
    HREF: "mailto:vitalijus.alsauskas@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Vitals9367",
    HREF: "https://github.com/Vitals9367"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "vitalijusalsauskas",
    HREF: "https://www.linkedin.com/in/vitalijusalsauskas/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "alsauskas_v",
    HREF: "https://x.com/alsauskas_v",
  },
]

