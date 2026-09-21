"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function MiningSlogan() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative py-20 bg-gradient-to-br from-[#1a3d3a] via-[#0f2a27] to-[#1a3d3a] overflow-hidden">
            {/* Decorative stripes - inspired by the design */}
            <div className="absolute top-0 right-0 w-64 h-full opacity-10">
                <div className="absolute top-20 right-10 w-2 h-40 bg-[#4ade80] rotate-45"></div>
                <div className="absolute top-40 right-20 w-2 h-32 bg-[#4ade80] rotate-45"></div>
                <div className="absolute bottom-20 right-5 w-2 h-48 bg-[#4ade80] rotate-45"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-full opacity-10">
                <div className="absolute bottom-20 left-10 w-2 h-40 bg-[#4ade80] -rotate-45"></div>
                <div className="absolute bottom-40 left-20 w-2 h-32 bg-[#4ade80] -rotate-45"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left side - Image */}
                    <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <div className="relative h-[400px] w-full bg-white p-8">
                                <Image
                                    src="/cat-770b.png"
                                    alt="CAT 770B Mining Truck"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                        <div className="space-y-6">
                            <div className="inline-block">
                                <span className="text-[#4ade80] font-bold text-sm uppercase tracking-wider bg-[#4ade80]/10 px-4 py-2 rounded-full">
                                    Expertise Minière
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                Assemblage de benne de véhicule de mine{" "}
                                <span className="text-[#4ade80]">CAT 77</span>
                            </h2>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                Rassemblage de benne de véhicule de mine CAT 77 dans les sites miniers.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
