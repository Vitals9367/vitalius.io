import "~/styles/globals.css";

import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import Navbar from "~/components/navbar"
import Footer from "~/components/footer"
import { TRPCReactProvider } from "~/trpc/react"
import { baseMetadata } from "~/data/navigation"
import { PostHogProvider } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans bg-background text-primary`}>
        <PostHogProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              <TRPCReactProvider>{children}</TRPCReactProvider>
            </main>
            <Footer />
          </div>
        </PostHogProvider>
      </body>
    </html>
  )
}
