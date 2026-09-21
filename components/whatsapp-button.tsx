"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <Link
            href="https://wa.me/22366855422"
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            aria-label="Contactez-nous sur WhatsApp"
        >
            <MessageCircle className="h-8 w-8" />
            <span className="absolute right-full mr-3 bg-white text-black px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                Discutez avec nous
            </span>
        </Link>
    )
}
