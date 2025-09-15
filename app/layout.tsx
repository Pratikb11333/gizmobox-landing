import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "GizmoBox - Your Pocket Lab for Electronics",
  description:
    "DIY electronics kit specially designed for first year engineering students and younger learners. Build foundational projects without complexity.",
  keywords: ["DIY electronics", "engineering students", "electronics kit", "learning", "STEM education"],
  authors: [{ name: "GizmoBox" }],
  openGraph: {
    title: "GizmoBox - Your Pocket Lab for Electronics",
    description: "DIY electronics kit for engineering students and young learners",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
