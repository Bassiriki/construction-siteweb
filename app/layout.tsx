import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import type React from "react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { TopBar } from "@/components/top-bar"
import { Analytics } from "@vercel/analytics/next"
import ClientWrapper from "./ClientWrapper"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mandingconstruction.com"),
  title: {
    default: "Manding Construction - Expert en BTP et Structures Métalliques",
    template: "%s | Manding Construction",
  },
  description:
    "Manding Construction : Leader en construction métallique, BTP, énergie solaire et hydraulique au Mali. Une expertise reconnue pour vos grands projets.",
  keywords: [
    "construction Mali",
    "BTP Bamako",
    "structure métallique",
    "prestation de service",
    "adduction d'eau",
    "Manding Construction",
  ],
  authors: [{ name: "Manding Construction" }],
  creator: "Manding Construction",
  openGraph: {
    title: "Manding Construction - Expert en BTP et Structures Métalliques",
    description:
      "Votre partenaire de confiance pour les projets de construction, BTP et énergie au Mali.",
    url: "https://mandingconstruction.com",
    siteName: "Manding Construction",
    images: [
      {
        url: "/i5.jpg",
        width: 1200,
        height: 630,
        alt: "Manding Construction - Projets BTP",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  manifest: "/site.webmanifest",
  icons: {
    icon: "/new-logo.png",
    shortcut: "/favicon.ico",
    apple: "/new-logo.png",
  },
  alternates: {
    canonical: "https://mandingconstruction.com",
  },
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
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ConstructionBusiness",
      "@id": "https://mandingconstruction.com/#organization",
      name: "Manding Construction",
      url: "https://mandingconstruction.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mandingconstruction.com/new-logo.png",
      },
      image: "https://mandingconstruction.com/i5.jpg",
      description:
        "Manding Construction, votre partenaire de confiance pour vos projets de construction.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bamako",
        addressLocality: "Bamako",
        addressCountry: "ML",
      },
      telephone: "+223 66 85 54 22",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+223 66 85 54 22",
        contactType: "customer service",
        areaServed: "ML",
        availableLanguage: "French",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://mandingconstruction.com/#website",
      url: "https://mandingconstruction.com",
      name: "Manding Construction",
      publisher: {
        "@id": "https://mandingconstruction.com/#organization",
      },
    },
    {
      "@type": "SiteNavigationElement",
      name: [
        "Structures Métalliques",
        "BTP",
        "Adduction d'Eau",
        "Prestation de Service",
        "Menuiserie Aluminium",

      ],
      url: [
        "https://mandingconstruction.com/structuresmetal",
        "https://mandingconstruction.com/btp",
        "https://mandingconstruction.com/adduction-eau",
        "https://mandingconstruction.com/prestation-service",
        "https://mandingconstruction.com/menuiserie-aluminium",
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={openSans.variable}>
      <body className="font-sans antialiased bg-white flex flex-col min-h-screen" suppressHydrationWarning>
        <TopBar />
        <Header />

        <main className="flex-grow pt-[100px]">
          {children}
        </main>

        <Footer />

        {/* 🔥 Composants client (WhatsApp Button, etc.) */}
        <ClientWrapper />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Analytics />
      </body>
    </html>
  )
}