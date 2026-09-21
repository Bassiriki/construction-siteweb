"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import type React from "react"
import { useEffect, useRef, useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate slight delay for effect
    await new Promise(resolve => setTimeout(resolve, 800))

    const subject = `Nouveau message de ${formData.name}`
    const body = `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\n\nMessage:\n${formData.message}`
    window.location.href = `mailto:mandingconstructionmali@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section ref={sectionRef} id="contact" className="py-12 bg-white relative overflow-hidden">
      {/* Background Decoration - More premium */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 animate-reveal-up">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2 block">Un projet ?</span>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">Parlons-en <br /> <span className="text-primary">ensemble</span></h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className={`max-w-5xl mx-auto bg-white rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row border border-gray-100 transition-all duration-1000 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>

          {/* Left Panel: Info & Vibe */}
          <div className="lg:w-2/5 bg-slate-900 p-6 md:p-8 text-white flex flex-col justify-between relative overflow-hidden group">

            {/* Dynamic Background Image */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] ease-linear group-hover:scale-110"
              style={{ backgroundImage: "url('/contact-bg.png')" }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-primary/30 mix-blend-overlay"></div>
            </div>

            {/* Content Container - Ensure z-index is above background */}
            <div className="relative z-10 space-y-6">
              <div className="animate-reveal-right [animation-delay:200ms]">
                <h3 className="text-xl font-black mb-3 leading-tight text-white drop-shadow-md">Coordonnées de <br /> contact</h3>
                <p className="text-gray-200 font-medium leading-relaxed max-w-xs text-xs drop-shadow-sm">
                  Notre équipe d'experts est disponible pour vous accompagner.
                </p>
              </div>

              <div className="space-y-8 animate-reveal-right [animation-delay:400ms]">
                <div className="flex items-start gap-6 p-6 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary/60 hover:border-primary/50 transition-all duration-500 group/item shadow-lg">
                  <div className="w-14 h-14 rounded-2xl bg-white text-primary flex items-center justify-center shrink-0 shadow-lg group-hover/item:rotate-12 transition-transform">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-white/90 mb-2 uppercase tracking-widest text-xs">Téléphone</h4>
                    <p className="text-white font-bold hover:text-white/80 transition-colors">+223 66 85 54 22</p>
                    <p className="text-white font-bold hover:text-white/80 transition-colors">+223 44 54 40 06</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary/60 hover:border-primary/50 transition-all duration-500 group/item shadow-lg">
                  <div className="w-14 h-14 rounded-2xl bg-white text-primary flex items-center justify-center shrink-0 shadow-lg group-hover/item:rotate-12 transition-transform">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-white/90 mb-2 uppercase tracking-widest text-xs">Email</h4>
                    <p className="text-white font-bold break-all hover:text-white/80 transition-colors">mandingconstructionmali@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary/60 hover:border-primary/50 transition-all duration-500 group/item shadow-lg">
                  <div className="w-14 h-14 rounded-2xl bg-white text-primary flex items-center justify-center shrink-0 shadow-lg group-hover/item:rotate-12 transition-transform">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-white/90 mb-2 uppercase tracking-widest text-xs">Localisation</h4>
                    <p className="text-white font-bold hover:text-white/80 transition-colors leading-relaxed">Bamako, Mali <br /> Baco Djicoroni ACI</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4">
              <div className="flex gap-2">
                <div className="w-8 h-1 bg-white rounded-full shadow-sm"></div>
                <div className="w-2 h-1 bg-white/50 rounded-full shadow-sm"></div>
                <div className="w-2 h-1 bg-white/50 rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>          {/* Right Panel: Form */}
          <div className="lg:w-3/5 p-6 md:p-8 bg-white shrink-0">
            <h2 className="text-xl font-black text-slate-900 mb-6 tracking-tight">Envoyez-nous un message</h2>

            <form onSubmit={handleSubmit} className="space-y-8 animate-reveal-left [animation-delay:600ms]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-14 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-500 font-medium px-6"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="phone" className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Votre numéro"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-14 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-500 font-medium px-6"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="email" className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">
                  Adresse Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="exemple@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-14 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-500 font-medium px-6"
                  required
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[150px] rounded-[2rem] bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-500 font-medium px-6 py-4 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="group relative w-full h-12 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-[10px] rounded-lg shadow-md transition-all duration-500 flex items-center justify-center gap-2 overflow-hidden"
                size="lg"
                disabled={isSubmitting}
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                {isSubmitting ? (
                  <span className="flex items-center gap-2 relative z-10">
                    Envoi en cours...
                  </span>
                ) : (
                  <>
                    <span className="relative z-10">Envoyer le message</span>
                    <Send className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
