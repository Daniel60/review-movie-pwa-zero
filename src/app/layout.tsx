import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie Review',
  description: 'Review your favorited and hated movies for your future knowledge',
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs14", "next14", "pwa", "next-pwa", "movie", "review", "movie review", "tailwind"],
  authors: [
    {
      name: "Daniel",
      url: "...linkedin..."
    },
    {
      name: "Philipp",
      url: "...linkedin..."
    }
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-512x512.png" },
    { rel: "icon", url: "icons/icon-512x512.png" }
  ]
}

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
  viewportFit: "cover",
  userScalable: false //Does this prop replace "shrink-to-fit=no"? Something to look for...
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
