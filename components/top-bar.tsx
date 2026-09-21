"use client"

import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#0a1510] text-white border-b border-white/5 z-[60]">
      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20 h-7 flex items-center justify-between">

        {/* Left: contacts */}
        <div className="flex items-center gap-5">
          <a
            href="tel:+22366855422"
            className="flex items-center gap-1.5 text-white hover:text-white/80 transition-colors duration-200"
          >
            <Phone className="h-2.5 w-2.5 text-[#4ade80]" />
            <span className="text-[10px] font-medium">+223 66 85 54 22</span>
          </a>
          <div className="w-px h-3 bg-white/10 hidden sm:block" />
          <a
            href="mailto:mandingconstructionmali@gmail.com"
            className="hidden sm:flex items-center gap-1.5 text-white hover:text-white/80 transition-colors duration-200"
          >
            <Mail className="h-2.5 w-2.5 text-[#4ade80]" />
            <span className="text-[10px] font-medium">mandingconstructionmali@gmail.com</span>
          </a>
        </div>

        {/* Right: socials + lang */}
        <div className="flex items-center gap-4">
          {/* Social icons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  hover:text-white  transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="w-px h-3 bg-white/10 hidden sm:block" />

          {/* Status pill */}
          <div className="flex items-center gap-1.5">
           <span className="text-[10px] font-semibold text-white">Disponible 7j/7</span>
          </div>
        </div>
      </div>
    </div>
  )
}
