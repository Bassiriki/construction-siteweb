"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Structure Métallique Industrielle",
    category: "Construction Métallique",
    description: "Hangar industriel avec structure métallique de haute qualité",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.53%20%284%29-HNhHwWCRxfPcpjDXE4tZZP8TGJLoZp.jpeg",
    slug: "structure-metallique",
  },
  {
    title: "Installation Panneaux Solaires",
    category: "Énergie Renouvelable",
    description: "Système solaire photovoltaïque pour bâtiment commercial",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.54-Hhacjb61OnaM0IxSarN7tVZjOhT2m6.jpeg",
    slug: "panneaux-solaires",
  },
  {
    title: "Château d'Eau USAID",
    category: "Infrastructure Hydraulique",
    description: "Construction de château d'eau pour projet USAID",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.53%20%283%29-IqG1Ji2k4GRat6qfBmiZlDILeDFkuf.jpeg",
    slug: "chateau-eau",
  },
  {
    title: "Fondations et Génie Civil",
    category: "Génie Civil",
    description: "Travaux de fondations et infrastructure pour projet majeur",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.51%20%285%29-PSBxuWNShbrGHhf5klDAZc5AAA86B3.jpeg",
    slug: "fondations-batiment",
  },
  {
    title: "Menuiserie Métallique",
    category: "Menuiserie",
    description: "Fabrication sur mesure de portes et fenêtres métalliques",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.52%20%285%29-qM803jNrIF8ktFRd6F10L8l3Qo6O9S.jpeg",
    slug: "menuiserie-metallique",
  },
  {
    title: "Infrastructure d'Aquaculture",
    category: "Agriculture",
    description: "Installation moderne pour l'élevage aquacole",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.52%20%284%29-tRBRTrPnn6leOUGcqtlqXx9r2ZwFyg.jpeg",
    slug: "aquaculture",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
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

  const getGridClass = (index: number) => {
    // First item is the hero (full width on mobile, 3 cols on desktop)
    if (index === 0) return "md:col-span-3 md:row-span-2 h-[400px] md:h-[600px]"
    // Next 3 items are standard 1 col
    if (index >= 1 && index <= 3) return "md:col-span-1 h-[300px]"
    // Item 4 spans 2 cols to create visual interest
    if (index === 4) return "md:col-span-2 h-[300px]"
    // Last item fills the remaining space
    return "md:col-span-1 h-[300px]"
  }

  return (
    <section ref={sectionRef} id="projets" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Nos Réalisations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez quelques-uns de nos projets réalisés avec succès pour nos clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`block w-full ${getGridClass(index)}`}
            >
              <Card
                className={`h-full w-full overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 rounded-xl relative ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs md:text-sm font-medium text-primary mb-2 uppercase tracking-wide">
                    {project.category}
                  </div>
                  <h3 className={`${index === 0 ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'} font-bold text-balance mb-2`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 ${index === 0 ? 'max-w-2xl' : ''}`}>
                    {project.description}
                  </p>
                   
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
