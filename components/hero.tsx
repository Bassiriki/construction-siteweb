"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ──────────────────────────────────────────────────
   Mosaique : header.jpg decoupee en grille 4x3
   GREEN_CELLS = indices qui affichent un carre vert.
─────────────────────────────────────────────────── */
const COLS = 4;
const ROWS = 3;
const TOTAL = COLS * ROWS;
const GREEN_CELLS = new Set([8]);

export function Hero() {
  const [mounted, setMounted] = useState(false);

  // Typewriter state
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const phrases = [
    "Manding Construction",
    "Manding Métallurgie",
    "Manding BTP",
    "Manding Adduction d'eau",
    "Manding Menuiserie"
  ];

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];

      setText(current => {
        if (!isDeleting && current === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2500); // pause at full text
          return current;
        } else if (isDeleting && current === "") {
          setIsDeleting(false);
          setLoopNum(prev => prev + 1);
          return current;
        }
        
        return isDeleting
          ? currentPhrase.substring(0, current.length - 1)
          : currentPhrase.substring(0, current.length + 1);
      });
    };

    const timer = setTimeout(handleTyping, isDeleting ? 30 : 90);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, mounted]);

  const renderTypedText = () => {
    if (text.length <= 8) {
      return <span style={{ color: "#06210b" }}>{text}</span>;
    }
    return (
      <>
        <span style={{ color: "#06210b" }}>{text.substring(0, 8)}</span>
        <span style={{ color: "#ffffff" }}>{text.substring(8)}</span>
      </>
    );
  };

  const scrollDown = () =>
    document.getElementById("apropos")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "calc(100vh - 72px)",
        background: "linear-gradient(to right, #5f9e5d 0%, #95fe94 50%, #59a15d 100%)"
      }}
    >
      <div
        className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 gap-10 lg:gap-0"
        style={{ minHeight: "calc(100vh - 72px)", alignItems: "center" }}
      >

        {/* ═══ LEFT : Photo mosaic ═══ */}
        <div
          className="relative flex-shrink-0 flex items-center w-full max-w-[420px] lg:max-w-none lg:w-[48%] mx-auto lg:mx-0"
          style={{ paddingTop: "clamp(20px, 5vw, 40px)", paddingBottom: "clamp(20px, 5vw, 80px)" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${COLS}, 1fr)`,
              gridTemplateRows: `repeat(${ROWS}, 1fr)`,
              width: "100%",
              aspectRatio: `${COLS} / ${ROWS}`,
              gap: 4,
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(20px)",
              transition: "opacity .6s ease, transform .6s ease",
            }}
          >
            {Array.from({ length: TOTAL }).map((_, i) => {
              const isGreen = GREEN_CELLS.has(i);
              const col = i % COLS;
              const row = Math.floor(i / COLS);
              const bpX = col * (100 / (COLS - 1));
              const bpY = row * (100 / (ROWS - 1));
              return (
                <div
                  key={i}
                  style={{
                    background: isGreen
                      ? "#ffffff"
                      : `url('/header.jpg') no-repeat ${bpX}% ${bpY}% / ${COLS * 100}% ${ROWS * 100}%`,
                    outline: "1px solid rgba(0,0,0,0.08)",
                    opacity: mounted ? 1 : 0,
                    transition: `opacity .35s ${i * 35}ms ease`,
                  }}
                />
              );
            })}
          </div>

          {/* Floating accent square – right of grid */}
          <div
            className="absolute hidden lg:block"
            style={{
              width: 52, height: 52,
              background: "#ffffff",
              right: -28, bottom: 88,
              outline: "3px solid #06210b",
            }}
          />

          {/* Floating accent square – top right of grid */}
          <div
            className="absolute hidden lg:block z-10"
            style={{
              width: 52, height: 52,
              background: "#ffffff",
              right: -28, top: 12,
              outline: "3px solid #06210b",
            }}
          />

          {/* Scroll arrow square – bottom-left */}
          <button
            onClick={scrollDown}
            aria-label="Defiler"
            className="absolute hidden lg:flex items-center justify-center"
            style={{
              width: 56, height: 56,
              border: "2px solid #06210b",
              left: 0, bottom: 0,
              background: "#fff",
              transition: "background .25s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#06210b")}
            onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
          >
            <ChevronDown style={{ width: 20, height: 20, color: "#06210b" }} strokeWidth={2.5} />
          </button>
        </div>

        {/* ═══ RIGHT : Editorial text ═══ */}
        <div
          className="flex-1 flex flex-col justify-center w-full text-center lg:text-left"
          style={{
            paddingLeft: "clamp(0px, 5vw, 80px)",
            paddingTop: "clamp(20px, 4vw, 40px)",
            paddingBottom: "clamp(40px, 8vw, 80px)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateX(24px)",
            transition: "opacity .7s .15s ease, transform .7s .15s ease",
          }}
        >
          {/* Massive headline - Typewriter */}
          <div style={{ marginBottom: "clamp(24px, 4vw, 40px)", minHeight: "2.5em" }}>
            <style>
              {`
                @keyframes blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }
                .cursor-blink {
                  display: inline-block;
                  width: 0.1em;
                  height: 1em;
                  background-color: #06210b;
                  animation: blink 1s step-end infinite;
                  vertical-align: text-bottom;
                  margin-left: 4px;
                }
              `}
            </style>
            <h1
              style={{
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                color: "#06210b",
                display: "inline-block",
              }}
            >
              {mounted && renderTypedText()}
              <span className="cursor-blink" />
            </h1>
          </div>

          {/* Two-column subtext */}
          <div
            className="mx-auto lg:mx-0 text-left"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "clamp(16px, 3vw, 32px)",
              maxWidth: 560,
              marginBottom: "clamp(28px, 4vw, 44px)",
            }}
          >
            <p style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", fontWeight: 700, color: "#06210b", lineHeight: 1.45 }}>
              Partenaire de confiance pour vos grands chantiers au Mali et en Afrique de l'Ouest.
            </p>
            <div>
              <p style={{ fontSize: "0.82rem", color: "#0d3612", lineHeight: 1.6, marginBottom: 10, fontWeight: 500 }}>
                Structures metalliques, BTP, adduction d'eau et menuiserie aluminium — nous livrons l'excellence avec rigueur depuis plus de 10 ans.
              </p>
              <button
                onClick={scrollDown}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 4,
                  fontSize: "0.78rem", fontWeight: 700, color: "#06210b",
                  borderBottom: "1.5px solid #06210b", paddingBottom: 2,
                  background: "none", cursor: "pointer",
                  transition: "color .2s, border-color .2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                  (e.currentTarget as HTMLElement).style.borderBottomColor = "#ffffff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = "#06210b";
                  (e.currentTarget as HTMLElement).style.borderBottomColor = "#06210b";
                }}
              >
                En savoir plus
                <ArrowRight style={{ width: 12, height: 12 }} />
              </button>
            </div>
          </div>

          {/* Single CTA — like "EXPLORE COLLECTION" in reference */}
          <div className="flex justify-center lg:justify-start">
            <Link
              href="/#services"
              style={{
                display: "inline-flex", alignItems: "center",
                background: "#06210b", color: "#fff",
                fontWeight: 800, fontSize: "0.72rem",
                letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "16px 32px", width: "fit-content",
                transition: "background .25s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#0c3b15")}
              onMouseLeave={e => (e.currentTarget.style.background = "#06210b")}
            >
              Explorer nos services
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile scroll */}
      <div className="flex justify-center py-6 lg:hidden">
        <button
          onClick={scrollDown}
          aria-label="Defiler"
          style={{ width: 48, height: 48, border: "2px solid #06210b", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <ChevronDown style={{ width: 18, height: 18 }} />
        </button>
      </div>
    </section>
  );
}
