"use client"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    num: "01",
    title: "Construction Métallique",
    image: "/construction-metalique-images/metal-1.jpg",
    href: "/structuresmetal",
    roundedClass: "rounded-bl-[100px] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl",
  },
  {
    num: "02",
    title: "BTP & Génie Civil",
    image: "/btp-images/btp-1.jpg",
    href: "/btp",
    roundedClass: "rounded-2xl",
  },
  {
    num: "03",
    title: "Adduction d'Eau",
    image: "/adduction-eau-images/eau-1.jpg",
    href: "/adduction-eau",
    roundedClass: "rounded-2xl",
  },
  {
    num: "04",
    title: "Menuiserie Aluminium",
    image: "/aluminium-images/alu-1.jpg",
    href: "/menuiserie-aluminium",
    roundedClass: "rounded-2xl",
  },
  {
    num: "05",
    title: "Prestation de Services",
    image: "/prestation-service-images/service-2.jpeg",
    href: "/prestation-service",
    roundedClass: "rounded-br-[100px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6">
            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">
              Nos Services
            </div>
            <div className="w-12 h-[2px] bg-[#4ade80] mb-8" />
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-[1.2] text-gray-950 tracking-tight">
              Les métiers de <span className="text-[#4ade80] relative pb-2 inline-block">
                Manding Construction
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#4ade80] rounded" />
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 text-gray-600 text-sm sm:text-base leading-relaxed lg:pt-10">
            Depuis 1996, nous structurons notre action autour de métiers clés du bâtiment, du génie civil et de l'hydraulique. Forts de cette expertise, nous concevons et réalisons des solutions sur mesure en construction métallique, adduction d'eau, menuiserie aluminium et maintenance industrielle pour accompagner nos partenaires dans la réussite de leurs projets.
          </div>
        </div>

        {/* 5-Column Grid Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.href}
              className={`group relative h-[450px] sm:h-[480px] lg:h-[500px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ${service.roundedClass}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  priority={index < 2}
                />
              </div>

              {/* Dark Wash Overlay (Gradient) */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/50 group-hover:to-black/30 transition-colors duration-300" />

              {/* Card Content (Top Aligned) */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                
                {/* Number & Arrow Inline Row */}
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-1 text-5xl sm:text-6xl font-extrabold tracking-tight text-[#4ade80]">
                    <span>{service.num}</span>
                    <ArrowUpRight className="w-6 h-6 text-[#4ade80] transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

                {/* Service Title */}
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide uppercase leading-snug">
                    {service.title}
                  </h3>
                </div>

              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}