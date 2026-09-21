"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const partners = [
    { name: "SOMAGEP-SA", logo: "/somagep.jpeg" },
    { name: "EDM-SA", logo: "/edm.jpeg" },
    { name: "OMS", logo: "/onu.jpeg" },
    { name: "USAID", logo: "/usaid.png" },
    { name: "ONUFEMMES", logo: "/onu.jpeg" },
    { name: "PNUD", logo: "/pnud.jpeg" },
    { name: "Ministère de la Sécurité", logo: "/ministere.jpeg" },
    { name: "Forex Afrique", logo: "/frorex.jpg" },
    { name: "SEEBA-SA", logo: "/partners/seeba.svg" },
    { name: "Ambassade du Canada", logo: "/canada.jpeg" },
    { name: "Ambassade des USA", logo: "/usa.jpeg" },
]

export function Partners() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    useEffect(() => {
        checkScroll()
        window.addEventListener('resize', checkScroll)
        return () => window.removeEventListener('resize', checkScroll)
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current
            const scrollAmount = clientWidth / 2
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
            setTimeout(checkScroll, 300)
        }
    }

    // Auto scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
                } else {
                    scrollRef.current.scrollBy({ left: 1, behavior: 'auto' })
                    // Note: 'auto' for tiny increments is smoother for "continuous" feel, 
                    // but 'smooth' with big jumps is better for carousel.
                    // Let's stick to no auto-scroll interferes with arrows, or a slow drift.
                    // User asked for "dynamic" and "arrows". 
                    // Let's use standard Carousel logic without auto-drift to ensure arrows work reliably,
                    // or a very slow auto-slide that pauses on hover.
                }
            }
        }, 30)

        // Remove auto-scroll for now to prioritize arrow functionality requested by user
        // as "visible arrows" implies manual control is key.
        clearInterval(interval)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="py-12 bg-white relative overflow-hidden">

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-2 block">
                        Réseau de Confiance
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                        Ils nous font confiance
                    </h2>
                    <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-4"></div>
                </div>

                <div className="relative group max-w-6xl mx-auto">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-12 h-12 bg-white border-2 border-primary/10 shadow-xl rounded-full flex items-center justify-center text-primary transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white hover:border-primary opacity-100`}
                        aria-label="Previous partners"
                    >
                        <ChevronLeft className="w-6 h-6 stroke-[3]" />
                    </button>

                    {/* Carousel Container */}
                    <div
                        ref={scrollRef}
                        onScroll={checkScroll}
                        className="flex overflow-x-auto gap-6 py-8 px-4 scrollbar-hide items-center snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="snap-center w-[130px] md:w-[160px] flex-shrink-0 group/card flex flex-col items-center justify-center transition-all duration-300"
                            >
                                <div className="relative w-full aspect-[3/2] flex items-center justify-center bg-white rounded-xl border border-slate-100 p-4 shadow-sm group-hover/card:shadow-lg group-hover/card:border-primary/20 transition-all duration-300 group-hover/card:-translate-y-1">
                                    <div className="relative w-full h-full transition-all duration-500 transform group-hover/card:scale-110">
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <span className="mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover/card:text-primary transition-colors duration-300 opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 text-center">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-12 h-12 bg-white border-2 border-primary/10 shadow-xl rounded-full flex items-center justify-center text-primary transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white hover:border-primary opacity-100`}
                        aria-label="Next partners"
                    >
                        <ChevronRight className="w-6 h-6 stroke-[3]" />
                    </button>

                    {/* Shadow Gradients for visual scrolling hints (optional but nice) */}
                    <div className={`absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none transition-opacity duration-300 ${!canScrollLeft ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className={`absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none transition-opacity duration-300 ${!canScrollRight ? 'opacity-0' : 'opacity-100'}`}></div>
                </div>
            </div>
        </section>
    )
}
