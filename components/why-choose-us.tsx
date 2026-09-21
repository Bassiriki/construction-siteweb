"use client"

import { Trophy, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function WhyChooseUs() {
  return (
    <section className="bg-[#0b0f19] text-white py-20 lg:py-32 relative overflow-hidden">
      {/* Background light shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column (Text & Badge) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold mb-6 leading-[1.15] text-white tracking-tight">
              Bâtissez avec <span className="text-[#4ade80] block sm:inline">Manding</span>
            </h2>

            {/* Subtitle / Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              Discutez avec nous ou contactez-nous directement sur WhatsApp au{" "}
              <a 
                href="https://wa.me/22366855422" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4ade80] font-semibold underline underline-offset-4 hover:text-emerald-300 transition-colors"
              >
                +223 66 85 54 22
              </a>
              . Manding Construction vous aide à choisir la bonne solution, à planifier vos travaux de structure métallique, BTP ou adduction d'eau, et à démarrer vos projets en toute sérénité.
            </p>
          </div>

          {/* Right Column (Visual Design container) */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end w-full">
            {/* The Main Light Blue Container with Custom Rounded Corners */}
            <div className="relative w-full max-w-[550px] aspect-[1.15] sm:aspect-[1.2] bg-[#cbe3f9] rounded-tl-3xl rounded-tr-[100px] rounded-br-3xl rounded-bl-[100px] shadow-2xl flex items-stretch overflow-visible">
              
              {/* Image Metal1 JPEG - covers the right portion of the card */}
              <div className="absolute right-0 top-0 bottom-0 w-[60%] h-full rounded-tr-[100px] rounded-br-3xl overflow-hidden z-0">
                <Image 
                  src="/metal1.jpeg" 
                  alt="Construction Métallique Manding" 
                  fill 
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                {/* Elegant overlay gradient to blend the image into the light blue card color */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#cbe3f9] via-[#cbe3f9]/50 to-transparent pointer-events-none" />
              </div>

              {/* Chat Overlay Widget */}
              <div className="relative z-10 flex flex-col justify-end p-6 sm:p-8 w-full">
                
                {/* Main Welcome Message Box */}
                <div className="bg-white/95 backdrop-blur-sm text-gray-900 p-5 rounded-2xl shadow-lg border border-white/20 w-[240px] sm:w-[280px] mb-6 flex flex-col gap-2 animate-bounce-short">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#4ade80]/15 rounded-xl flex items-center justify-center text-[#4ade80]">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <span className="font-bold text-gray-900 tracking-tight text-sm">Manding Bot</span>
                  </div>
                  <div className="mt-1">
                    <p className="text-gray-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      Comment puis-je vous aider aujourd'hui ?
                    </p>
                  </div>
                </div>
                {/* Cascading Options List */}
                <div className="flex flex-col gap-3.5 max-w-[320px] sm:max-w-[360px] relative">
                  {/* Option 1 */}
                  <a 
                    href="https://wa.me/22366855422?text=Bonjour,%20je%20souhaite%20un%20devis%20de%20construction%20m%C3%A9tallique"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 bg-white text-gray-900 rounded-xl p-3.5 pl-4 shadow-md border border-gray-100 hover:border-[#4ade80]/40 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 transform sm:-translate-x-6 z-20"
                  >
                    <div className="w-7 h-7 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#4ade80] group-hover:text-white transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                    </div>
                    <span className="text-[12px] sm:text-xs font-semibold text-gray-800 tracking-tight group-hover:text-[#4ade80] transition-colors leading-snug">
                      Devis structure métallique
                    </span>
                  </a>

                  {/* Option 2 */}
                  <a 
                    href="https://wa.me/22366855422?text=Bonjour,%20j%27ai%20un%20projet%20de%20BTP%20%2F%20G%C3%A9nie%20civil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 bg-white text-gray-900 rounded-xl p-3.5 pl-4 shadow-md border border-gray-100 hover:border-[#4ade80]/40 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 transform sm:-translate-x-12 z-20"
                  >
                    <div className="w-7 h-7 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#4ade80] group-hover:text-white transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                    </div>
                    <span className="text-[12px] sm:text-xs font-semibold text-gray-800 tracking-tight group-hover:text-[#4ade80] transition-colors leading-snug">
                      Projet de BTP / Génie civil
                    </span>
                  </a>

                  {/* Option 3 */}
                  <a 
                    href="https://wa.me/22366855422?text=Bonjour,%20j%27ai%20besoin%20d%27une%20adduction%20d%27eau%20%2F%20forage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 bg-white text-gray-900 rounded-xl p-3.5 pl-4 shadow-md border border-gray-100 hover:border-[#4ade80]/40 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 transform sm:-translate-x-8 z-20"
                  >
                    <div className="w-7 h-7 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#4ade80] group-hover:text-white transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                    </div>
                    <span className="text-[12px] sm:text-xs font-semibold text-gray-800 tracking-tight group-hover:text-[#4ade80] transition-colors leading-snug">
                      Besoin d'adduction d'eau / Forage
                    </span>
                  </a>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}