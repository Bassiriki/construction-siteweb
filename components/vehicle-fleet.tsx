"use client"

import Image from "next/image"

export function VehicleFleet() {
    return (
        <section className="py-20 bg-[#1e3a3a] relative overflow-hidden">
            {/* Pattern de fond subtil - comme topbar */}
            <div className="absolute inset-0 opacity-5 bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcKZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjQiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIi8+PC9nPjwvc3ZnPg==)] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 mx-auto">{/* Supprimé max-w pour pleine largeur */}

                    {/* Image Section - Image complète visible */}
                    <div className="w-full lg:w-8/12">{/* Augmenté de 7/12 à 8/12 */}
                        <div className="relative aspect-[16/5] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/vehicle-fleet.jpg"
                                alt="Nos véhicules d'activité"
                                fill
                                className="object-contain bg-gray-800"
                                sizes="(max-width: 768px) 100vw, 60vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Texte Section */}
                    <div className="w-full lg:w-4/12 text-white space-y-6">{/* Réduit de 5/12 à 4/12 */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Nos Véhicules d'Activité
                        </h2>

                        {/* Phrases de choc */}
                        <div className="space-y-4">
                            <p className="text-lg md:text-xl font-semibold text-white/90 leading-relaxed">
                                ✓ Une flotte moderne et performante
                            </p>
                            <p className="text-lg md:text-xl font-semibold text-white/90 leading-relaxed">
                                ✓ Disponible 24h/24 pour vos chantiers
                            </p>
                            <p className="text-lg md:text-xl font-semibold text-white/90 leading-relaxed">
                                ✓ Maintenance rigoureuse, zéro compromis
                            </p>
                            <p className="text-lg md:text-xl font-semibold text-white/90 leading-relaxed">
                                ✓ La puissance au service de vos projets
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
