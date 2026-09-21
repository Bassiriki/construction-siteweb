"use client"

import { ServicePageTemplate } from "@/components/service-page-template"

interface StructureMetalContentProps {
  images?: string[]
}

export default function StructureMetalContent({ images = [] }: StructureMetalContentProps) {
  return (
    <ServicePageTemplate
      heroImage={images[0] ?? "/metal1.jpeg"}
      heroTitle="Construction Métallique"
      heroSubtitle="Ingénierie, conception et fabrication de structures acier sur mesure pour vos projets industriels et commerciaux."
      breadcrumb="Construction Métallique"
      introTitle="Notre expertise en structures métalliques"
      introText={[
        "Manding Construction conçoit et fabrique des structures métalliques de haute précision adaptées aux exigences les plus rigoureuses : charpentes métalliques, hangars industriels, portiques et ouvrages sur mesure.",
        "Chaque lot est étudié en bureau d'études et réalisé avec des matériaux certifiés pour garantir la conformité aux spécifications contractuelles de nos clients.",
        "Notre savoir-faire couvre la chaudronnerie, la menuiserie métallique et la charpente monumentale — la colonne vertébrale de vos projets industriels.",
      ]}
      introImage={images[1] ?? images[0] ?? "/metal1.jpeg"}
      features={[
        { title: "Chaudronnerie de précision", desc: "Solutions expertes pour vos cuves, réservoirs et structures sur mesure. La référence en étanchéité et robustesse." },
        { title: "Charpente métallique", desc: "Structures d'envergure : entrepôts, auvents, pylônes et bâtiments industriels. Solidité et durabilité garanties." },
        { title: "Menuiserie métallique", desc: "Portes, fenêtres, portails et rideaux métalliques. Alliance parfaite entre sécurité, esthétique et fonctionnalité." },
        { title: "Assemblage & Soudure", desc: "Tous types de soudure haute précision (MIG, TIG, Arc) pour vos structures et équipements industriels." },
      ]}
      galleryTitle="Galerie — Construction Métallique"
      images={images}
    />
  )
}
