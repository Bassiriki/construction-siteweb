"use client"

import { Award, Users } from "lucide-react"
import Image from "next/image"

export function TeamPresentation() {
    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-3">
                        Notre Capital Humain
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        Une Équipe <span className="text-primary">d'Excellence</span>
                    </h2>
                </div>

                {/* Main Content - Two Columns */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-10 items-center">{/* Changed to 3 columns for larger image */}

                        {/* Left: Content - Simplified */}
                        <div className="space-y-6 lg:col-span-1 lg:order-1">{/* Text takes 1/3 of space */}
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Notre force réside dans notre équipe d'ingénieurs expérimentés et de techniciens qualifiés.
                            </p>

                            {/* Key Points - Simple Cards */}
                            <div className="space-y-4">
                                {[
                                    {
                                        icon: Users,
                                        title: "Équipe Qualifiée"
                                    },
                                    {
                                        icon: Award,
                                        title: "Excellence Garantie"
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Right: Image - Larger */}
                        <div className="relative lg:col-span-2 lg:order-2">{/* Image takes 2/3 of space */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/personnel.jpg"
                                    alt="L'équipe Manding Construction"
                                    width={1400}
                                    height={1000}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Decorative accent */}
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10 blur-2xl"></div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
