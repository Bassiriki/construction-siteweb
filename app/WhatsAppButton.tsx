"use client"

import { ArrowUp, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 items-center">
            
            {/* WhatsApp Button */}
            <Link
                href="https://wa.me/22366855422"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="WhatsApp"
            >
                <MessageCircle size={28} />
            </Link>
        </div>
    )
}
