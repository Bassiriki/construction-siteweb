"use client"

import { ServicePageTemplate } from "@/components/service-page-template"

interface MenuiserieAluminiumContentProps {
  images?: string[]
}

export default function MenuiserieAluminiumContent({ images = [] }: MenuiserieAluminiumContentProps) {
  return (
    <ServicePageTemplate
      heroImage={images[0] ?? "/alu1.jpeg"}
      heroTitle="Menuiserie Aluminium & Vitrage"
      heroSubtitle="Transformez vos espaces avec nos solutions en aluminium : portes, fenêtres, cloisons de bureau et vitrages. Alliant modernité, sécurité et esthétique."
      breadcrumb="Menuiserie Aluminium"
      introTitle="Nos solutions aluminium sur mesure"
      introText={[
        "Manding Construction propose une gamme complète de menuiseries aluminium conçues pour répondre aux exigences des particuliers, entreprises et maîtres d'œuvre.",
        "Chaque réalisation est sur mesure : nous étudions vos contraintes architecturales et vos besoins en isolation thermique et phonique pour vous proposer la solution optimale.",
        "Nos artisans qualifiés assurent la pose avec soin et précision, dans le respect des délais et des finitions les plus exigeantes.",
      ]}
      introImage={images[1] ?? images[0] ?? "/alu1.jpeg"}
      features={[
        { title: "Fenêtres & Baies vitrées", desc: "Fenêtres coulissantes, ouvrantes ou fixes avec isolation thermique et phonique optimale pour votre confort." },
        { title: "Portes & Portails", desc: "Portes d'entrée, intérieures et portails robustes en aluminium. Design moderne et sécurité renforcée." },
        { title: "Cloisons de bureau", desc: "Séparations d'espaces professionnels avec cloisons amovibles, vitrées ou pleines. Modulables et esthétiques." },
        { title: "Façades & Murs rideaux", desc: "Façades vitrées pour bâtiments commerciaux. Apportez lumière et modernité à votre architecture." },
        { title: "Maintenance & Réparation", desc: "Service d'entretien et de réparation de vos menuiseries aluminium existantes. Remplacement de vitrages et accessoires." },
      ]}
      galleryTitle="Galerie — Menuiserie Aluminium"
      images={images}
    />
  )
}
