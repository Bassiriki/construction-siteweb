"use client"

import { Quote } from "lucide-react"
import Image from "next/image"

export function DirectorMessage() {
    return (
        <section id="mot-directeur" className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Section label */}
                <p className="text-sm font-semibold tracking-widest uppercase text-gray-800 mb-10">
                    Le Mot du Directeur Général
                </p>

                <div className="grid lg:grid-cols-[240px_1fr] gap-20 items-start">

                    {/* Photo */}
                    <div className="flex flex-col items-center lg:items-start gap-4">
                        <div className="w-70 h-80 rounded-xl overflow-hidden shadow-md">
                            <Image
                                src="/director-new.jpg"
                                alt="MAMADOU KEITA - Directeur Général"
                                width={176}
                                height={276}
                                className="w-full object-cover"
                                priority
                            />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-base">MAMADOU KEITA</p>
                            <p className="text-sm text-gray-500 mt-0.5">Directeur Général</p>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="pt-5">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-6">
                            Une vision d'avenir pour<br />
                            Manding Construction
                        </h2>

                        <div className="relative border-l-2 border-blue-600 pl-6 space-y-5">
                            <Quote className="absolute -top-1 -left-3.5 w-6 h-6 text-green-600 bg-white" />
                            <p className="text-gray-600 leading-relaxed text-base">
                                C'est avec une immense fierté que je dirige Manding Construction.
                                Depuis plus de 30 ans, notre engagement est resté le même : bâtir des infrastructures
                                solides et durables pour soutenir le développement du Mali.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base">
                                La rigueur, l'innovation et la satisfaction de nos partenaires sont au cœur de notre démarche.
                                Chaque projet est pour nous l'occasion de démontrer notre savoir-faire et notre passion pour l'excellence.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
