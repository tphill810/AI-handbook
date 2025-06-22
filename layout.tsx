import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Ultimate AI Prompting Guide - Master ChatGPT & AI Tools",
    template: "%s | AI Prompting Guide",
  },
  description:
    "Transform your AI interactions from basic to extraordinary with 200+ proven prompts, 8 comprehensive chapters, and industry applications. Get instant access for just $4.99!",
  keywords: [
    "AI prompts",
    "ChatGPT prompts",
    "AI tools",
    "prompt engineering",
    "AI guide",
    "ChatGPT guide",
    "AI productivity",
    "prompt templates",
    "artificial intelligence",
    "machine learning prompts",
  ],
  authors: [{ name: "AI Prompting Guide Team" }],
  creator: "AI Prompting Guide",
  publisher: "AI Prompting Guide",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Ultimate AI Prompting Guide - Master ChatGPT & AI Tools",
    description: "Transform your AI interactions with 200+ proven prompts. Get the complete guide for just $4.99!",
    siteName: "AI Prompting Guide",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ultimate AI Prompting Guide - Master ChatGPT & AI Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate AI Prompting Guide - Master ChatGPT & AI Tools",
    description: "Transform your AI interactions with 200+ proven prompts. Get the complete guide for just $4.99!",
    creator: "@yourhandle",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body className={inter.className}>
        {children}
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}
