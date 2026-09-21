"use client"

import { Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export interface ServiceFeature {
  title: string
  desc: string
}

export interface ServicePageTemplateProps {
  heroImage: string
  heroTitle: string
  heroSubtitle: string
  breadcrumb: string
  introTitle: string
  introText: string[]
  introImage?: string
  features: ServiceFeature[]
  galleryTitle?: string
  images: string[]
}

function Lightbox({ images, index, onClose }: { images: string[]; index: number; onClose: () => void }) {
  const [current, setCurrent] = useState(index)
  const prev = () => setCurrent((c) => (c > 0 ? c - 1 : images.length - 1))
  const next = () => setCurrent((c) => (c < images.length - 1 ? c + 1 : 0))
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-md" onClick={onClose}>
      <button className="absolute top-5 right-5 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10" onClick={onClose}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </button>
      <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-[#4ade80]/80 rounded-full p-4 transition-all z-10" onClick={(e) => { e.stopPropagation(); prev() }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6" /></svg>
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-[#4ade80]/80 rounded-full p-4 transition-all z-10" onClick={(e) => { e.stopPropagation(); next() }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6" /></svg>
      </button>
      <div className="relative max-w-5xl w-full px-20 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <img src={images[current]} alt={`Photo ${current + 1}`} className="max-h-[88vh] max-w-full object-contain rounded-xl shadow-2xl" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full text-white text-sm font-semibold">
          {current + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}

export function ServicePageTemplate({ heroImage, heroTitle, heroSubtitle, breadcrumb, introTitle, introText, introImage, features, galleryTitle = "Galerie de nos réalisations", images }: ServicePageTemplateProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative h-[320px] sm:h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={heroTitle} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 w-full">
          <div className="flex items-center gap-2 text-white/50 text-xs font-medium uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white/80">{breadcrumb}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-2xl">{heroTitle}</h1>
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">{heroSubtitle}</p>
          <a href="tel:+22366855422" className="mt-8 inline-flex items-center gap-2 bg-[#4ade80] text-gray-900 font-black text-sm uppercase tracking-wide px-6 py-3 transition-all hover:bg-[#22c55e]">
            <Phone className="h-4 w-4" />
            Nous contacter
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background: "#f2f4f7" }} className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 leading-snug">{introTitle}</h2>
              <div className="space-y-4 text-gray-600 text-[0.96rem] leading-relaxed">
                {introText.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            {introImage && (
              <div className="relative h-[280px] sm:h-[340px] overflow-hidden cursor-pointer group" onClick={() => { const idx = images.indexOf(introImage); setLightboxIndex(idx >= 0 ? idx : 0) }}>
                <Image src={introImage} alt={introTitle} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/80 rounded-full p-2 shadow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6" /></svg></div>
                  <div className="bg-white/80 rounded-full p-2 shadow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6" /></svg></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {features.map((f, i) => (
              <div key={i} className="bg-[#f8f9fa] p-7 border-l-[3px] border-[#4ade80] hover:shadow-md transition-shadow duration-300">
                <h3 className="font-bold text-gray-900 text-[1rem] mb-2">{f.title}</h3>
                <p className="text-gray-500 text-[0.875rem] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {images.length > 0 && (
        <section style={{ background: "#f2f4f7" }} className="py-14 lg:py-20">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-8">{galleryTitle}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {images.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden cursor-pointer group" onClick={() => setLightboxIndex(i)}>
                  <Image src={img} alt={`Réalisation ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#0a1128] py-12">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-xl sm:text-2xl leading-tight">Un projet ? Parlons-en.</p>
            <p className="text-white/50 text-sm mt-1">Nous répondons dans les 24h.</p>
          </div>
          <a href="tel:+22366855422" className="flex items-center gap-2 bg-[#4ade80] text-gray-900 font-black text-sm uppercase tracking-wide px-8 py-4 shrink-0 transition-all hover:bg-[#22c55e]">
            <Phone className="h-4 w-4" />
            +223 66 85 54 22
          </a>
        </div>
      </section>

      {lightboxIndex !== null && <Lightbox images={images} index={lightboxIndex} onClose={() => setLightboxIndex(null)} />}
    </div>
  )
}
