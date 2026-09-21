"use client";

import { cn } from "@/lib/utils";
import {
  Building2,
  ChevronDown,
  Droplets,
  Grid3X3,
  MapPin,
  Menu,
  Phone,
  Sun,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Accueil", href: "/#hero" },
  { label: "A Propos", href: "/#apropos" },
  { label: "Services", href: "/#services" },
  { label: "Projets", href: "/#projets" },
  { label: "Contact", href: "/#contact" },
];

const services = [
  { icon: Building2, title: "Construction Metallique", href: "/structuresmetal", desc: "Structures acier sur mesure" },
  { icon: Sun,       title: "BTP",                    href: "/btp",             desc: "Batiment & travaux publics" },
  { icon: Droplets,  title: "Adduction d'eau",         href: "/adduction-eau",   desc: "Forages & reseaux hydrauliques" },
  { icon: Wrench,    title: "Prestation de Service",   href: "/prestation-service", desc: "Maintenance & expertise" },
  { icon: Zap,       title: "Menuiserie aluminium",    href: "/menuiserie-aluminium", desc: "Portes, fenetres & facades" },
];

export function Header() {
  const [isMenuOpen,     setIsMenuOpen]     = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeItem,     setActiveItem]     = useState("Accueil");
  const [scrolled,       setScrolled]       = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  /* close services dropdown on outside click */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node))
        setIsServicesOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  /* subtle shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* -------------------------------------------
          NAVBAR — white, fixed, clean editorial
      -------------------------------------------- */}
      <header
        className="fixed left-0 right-0 z-50 w-full bg-white"
        style={{
          top: 28,
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.07)" : "none",
          transition: "box-shadow .3s",
        }}
      >
        <div
          className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 flex items-center h-[64px] lg:h-[76px] w-full"
        >
          {/* -- Logo (circle) -- */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div
              className="relative overflow-hidden flex-shrink-0"
              style={{
                width: 44, height: 44,
                borderRadius: "50%",
                transition: "box-shadow .3s",
              }}
           >
              <Image
                src="/logo.png"
                alt="Manding Construction"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span style={{ fontWeight: 900, fontSize: "0.95rem", color: "#111", letterSpacing: "-0.01em" }}>MANDING</span>
              <span style={{ fontWeight: 700, fontSize: "0.6rem", color: "#4ade80", letterSpacing: "0.22em", textTransform: "uppercase" }}>CONSTRUCTION</span>
            </div>
          </Link>

          {/* -- Desktop nav — pushed to the RIGHT -- */}
          <nav className="hidden lg:flex items-center gap-1 ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={cn(
                  "relative px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200",
                  activeItem === item.label
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                )}
                style={{ textTransform: "uppercase", letterSpacing: "0.06em" }}
              >
                {item.label}
                {activeItem === item.label && (
                  <span
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#4ade80] rounded-full"
                  />
                )}
              </Link>
            ))}

            {/* Domaines dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200",
                  isServicesOpen ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                )}
                style={{ textTransform: "uppercase", letterSpacing: "0.06em" }}
                suppressHydrationWarning
              >
                Domaines
                <ChevronDown
                  className={cn("h-3 w-3 text-[#4ade80] transition-transform duration-300", isServicesOpen && "rotate-180")}
                />
              </button>

              {/* Dropdown */}
              <div
                onMouseLeave={() => setIsServicesOpen(false)}
                className={cn(
                  "absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.12)] p-2 transition-all duration-200 origin-top-right",
                  isServicesOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#4ade80] to-transparent" />
                <div className="p-1 space-y-0.5 mt-1">
                  {services.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={i}
                        href={s.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-all duration-200 group/item"
                      >
                        <div className="h-8 w-8 rounded-lg bg-[#4ade80]/10 border border-[#4ade80]/20 flex items-center justify-center shrink-0 group-hover/item:bg-[#4ade80]/20 transition-all duration-200">
                          <Icon className="h-3.5 w-3.5 text-[#16a34a]" />
                        </div>
                        <div>
                          <div className="text-[12px] font-bold text-gray-800 group-hover/item:text-[#16a34a] transition-colors">{s.title}</div>
                          <div className="text-[10px] text-gray-400">{s.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Phone CTA */}
            <a
              href="tel:+22366855422"
              className="ml-4 flex items-center gap-2 text-gray-900 font-black text-[12px] px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "#4ade80",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                borderRadius: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#22c55e")}
              onMouseLeave={e => (e.currentTarget.style.background = "#4ade80")}
            >
              <Phone className="h-3.5 w-3.5" />
              Appeler
            </a>
          </nav>

          {/* -- Mobile burger -- */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden ml-auto p-3 sm:p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-200"
            suppressHydrationWarning
          >
            <Menu className="h-6 w-6 sm:h-7 sm:w-7 text-gray-700" />
          </button>
        </div>
      </header>

      {/* -- Mobile drawer -- */}
      <div
        className={cn(
          "fixed inset-0 z-[200] transition-all duration-500",
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          onClick={() => setIsMenuOpen(false)}
          className={cn(
            "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[85vw] max-w-sm bg-white border-l border-gray-100 shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-gray-100">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
              <div
                className="relative overflow-hidden"
                style={{ width: 40, height: 40, borderRadius: "50%", border: "2px solid #4ade80" }}
              >
                <Image src="/logo.png" alt="Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-gray-900 text-sm">MANDING</span>
                <span className="text-[#4ade80] text-[9px] font-bold tracking-widest uppercase">CONSTRUCTION</span>
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-0.5">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-3 mb-3">Navigation</p>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => { setIsMenuOpen(false); setActiveItem(item.label); }}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl font-semibold text-[14px] uppercase tracking-wide transition-all",
                  activeItem === item.label
                    ? "bg-[#4ade80]/10 text-gray-900"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                )}
              >
                {activeItem === item.label && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shrink-0" />
                )}
                {item.label}
              </Link>
            ))}

            <div className="mt-6 pt-5 border-t border-gray-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-3 mb-3">Nos Domaines</p>
              <div className="space-y-1">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={i}
                      href={s.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-all group"
                    >
                      <div className="h-8 w-8 rounded-lg bg-[#4ade80]/10 border border-[#4ade80]/20 flex items-center justify-center shrink-0">
                        <Icon className="h-3.5 w-3.5 text-[#16a34a]" />
                      </div>
                      <div>
                        <div className="text-[12px] font-bold text-gray-800">{s.title}</div>
                        <div className="text-[10px] text-gray-400">{s.desc}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Drawer footer */}
          <div className="p-4 border-t border-gray-100 space-y-2">
            <a
              href="tel:+22366855422"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-gray-900 font-black py-3.5 rounded-xl transition-all duration-300 text-sm uppercase tracking-wide"
              style={{ background: "#4ade80" }}
            >
              <Phone className="h-4 w-4" />
              Appeler maintenant
            </a>
            <a
              href="https://www.google.com/maps?q=12.6392,-8.0029&z=15"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl transition-all duration-300 text-sm"
            >
              <MapPin className="h-4 w-4 text-[#16a34a]" />
              Nous localiser
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

