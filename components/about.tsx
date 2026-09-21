"use client";

import { Droplets, Factory, HardHat, Wrench } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section id="apropos" className="bg-white pt-8 pb-20 lg:pt-10 lg:pb-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* ── Small photos — above the grid, centered ── */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-4">
            {[
              { src: "/metal1.jpeg", label: "Métal" },
              { src: "/i7.jpg",      label: "BTP" },
              { src: "/h1.jpg",      label: "Hydraulique" },
            ].map((p) => (
              <div key={p.label} className="flex flex-col items-center gap-1.5">
                <div className="relative w-[200px] h-[140px] sm:w-[240px] sm:h-[165px] overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.label}
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Top Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
          
          {/* Left Column */}
          <div>
            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">
              A Propos De Nous
            </div>
            <div className="w-12 h-[2px] bg-[#4ade80] mb-8" />
            
            <h2 
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold mb-8 leading-[1.25] text-[#4ade80]"
            >
              Plus de 30 ans de leadership dans le secteur du BTP, offrant des solutions complètes et efficaces
            </h2>
            
            <div className="space-y-6 text-gray-600 text-[0.95rem] leading-relaxed">
              <p>
                Manding Construction crée, conçoit, développe et réalise des solutions à 360° pour les secteurs de la construction métallique, de l'adduction d'eau et des infrastructures.
              </p>
              <p>
                Avec plus de 30 ans d'expérience, nous avons travaillé avec de nombreux clients à travers le monde et avons mené à bien de multiples projets d'envergure sur le continent.
              </p>
              <p>
                Notre engagement en faveur de l'innovation et de la qualité nous a permis de nous imposer comme un partenaire stratégique de confiance sur le marché mondial.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative mt-10 lg:mt-0 w-full lg:w-[90%] lg:ml-auto">
            {/* Image Container */}
            <div className="relative aspect-[4/3] sm:aspect-square w-[85%] max-w-[500px]">
              <Image 
                src="/i7.jpg" 
                alt="Chantier Manding Construction" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 85vw, 40vw"
              />
            </div>
            
            {/* Floating Dark Box */}
            <div 
              className="absolute top-[20%] right-0 p-8 lg:p-10 z-10 w-[75%] sm:w-[320px] bg-[#0a1128]"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                +Plus de 30 ans à la tête du secteur de la construction
              </h3>
            </div>
          </div>
          
        </div>

        {/* ── Bottom Section ── */}
        <div>
          <h3 className="text-[1.05rem] font-bold text-gray-900 mb-8">
            Nos services comprennent
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Construction Métallique",
                desc: "Ingénierie, conception et fabrication de structures métalliques de haute précision.",
                icon: Factory,
                img: "/metal1.jpeg",
              },
              {
                title: "BTP",
                desc: "Gestion globale de projets BTP répondant aux normes internationales les plus élevées.",
                icon: HardHat,
                img: "/i7.jpg",
              },
              {
                title: "Adduction d'eau",
                desc: "Solutions d'adduction d'eau et de forages pour l'ensemble du cycle de vie de l'eau.",
                icon: Droplets,
                img: "/h1.jpg",
              },
              {
                title: "Prestation de Service",
                desc: "Prestations de services et maintenance industrielle pour stimuler l'efficacité opérationnelle.",
                icon: Wrench,
                img: "/f1.jpeg",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i} 
                  className="bg-white border border-gray-100 flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                >
                  {/* Photo */}
                  <div className="relative w-full h-[130px] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* green overlay strip at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#4ade80]" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-5 h-5 text-[#4ade80] shrink-0" strokeWidth={1.5} />
                      <span className="text-[0.8rem] font-bold text-gray-900 uppercase tracking-wide">{item.title}</span>
                    </div>
                    <p className="text-gray-500 text-[0.875rem] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}