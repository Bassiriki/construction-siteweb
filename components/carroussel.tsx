"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function ServicesSection() {
  const PRIMARY = "#3DB39E";
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const cards = [
    {
      number: "01",
      title: "CONSTRUCTION MÉTALLIQUE",
      description: "Structures robustes et durables pour l'industrie.",
      image: "/f1.jpeg",
    },
    {
      number: "02",
      title: "BTP",
      description: "Grands ouvrages et génie civil de précision.",
      image: "/f2.jpeg",
    },
    {
      number: "03",
      title: "ADDUCTION D’EAU",
      description: "Solutions hydrauliques pour un accès vital.",
      image: "/h1.jpg",
    },
    {
      number: "04",
      title: "PRESTATIONS DE SERVICE",
      description: "Maintenance et services techniques sur-mesure.",
      image: "/i2.jpg",
    },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);

    // Autoplay custom implementation
    const intervalId = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 4000);

    return () => {
      clearInterval(intervalId);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      {/* TITRE */}
      <div className="container mx-auto px-4 mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Nos domaines<br />
            <span style={{ color: PRIMARY }}>d’expertise</span>
          </h2>
          <div className="w-24 h-1.5 mt-6" style={{ backgroundColor: PRIMARY }}></div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#3DB39E] hover:text-white hover:border-[#3DB39E] transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#3DB39E] hover:text-white hover:border-[#3DB39E] transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="container mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {cards.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6 min-w-0">
                <div className="relative group h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* IMAGE DYNAMIQUE */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                      object-cover 
                      transition-all duration-[1500ms] ease-out 
                      group-hover:scale-110
                    "
                  />

                  {/* OVERLAY GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* CONTENU */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    {/* Top: Number */}
                    <div className="flex justify-between items-start">
                      <span className="text-6xl font-bold text-white/10 group-hover:text-[#3DB39E]/20 transition-colors duration-500">
                        {item.number}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <ChevronRight className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Bottom: Title & Desc */}
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white text-2xl font-bold leading-tight mb-3 group-hover:text-[#3DB39E] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.description}
                      </p>
                      <div className="h-1 w-0 bg-[#3DB39E] mt-4 group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
