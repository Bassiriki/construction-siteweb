"use client"

import { ServicePageTemplate } from "@/components/service-page-template"

interface PrestationServiceContentProps {
  images?: string[]
}

export default function PrestationServiceContent({ images = [] }: PrestationServiceContentProps) {
  return (
    <ServicePageTemplate
      heroImage={images[0] ?? "/f1.jpeg"}
      heroTitle="Prestations de Services"
      heroSubtitle="Assemblage, soudure industrielle et maintenance sur site. Nous assurons un accompagnement complet et réactif pour tous vos besoins techniques."
      breadcrumb="Prestation de Service"
      introTitle="Notre expertise technique à votre service"
      introText={[
        "Manding Construction assure des prestations de services industriels de haute précision : assemblage de bennes CAT 77, soudure MIG/MAG/TIG, et fabrication de pièces sur mesure.",
        "Nos équipes interviennent directement sur vos sites miniers et industriels pour assurer la maintenance et l'assemblage de vos équipements dans les meilleures conditions.",
        "Chaque intervention est réalisée par des techniciens certifiés, avec un suivi rigoureux de la qualité et des normes de sécurité en vigueur.",
      ]}
      introImage={images[1] ?? images[0] ?? "/f1.jpeg"}
      features={[
        { title: "Assemblage Bennes CAT 77", desc: "Rassemblage professionnel de bennes de véhicules de mine CAT 770B dans les sites miniers. Précision et expertise." },
        { title: "Soudure MIG/MAG", desc: "Soudure semi-automatique pour vos structures et équipements métalliques lourds. Rendement élevé et qualité garantie." },
        { title: "Soudure TIG", desc: "Soudure de précision pour les métaux fins et les assemblages exigeant une haute finesse de travail." },
        { title: "Soudure à l'arc", desc: "Procédé polyvalent adapté à toutes conditions de chantier, y compris en extérieur et en milieu difficile." },
        { title: "Fabrication sur mesure", desc: "Conception et fabrication de pièces et structures métalliques selon vos plans et spécifications techniques." },
        { title: "Maintenance industrielle", desc: "Entretien préventif et curatif de vos équipements pour optimiser leur durée de vie et votre efficacité opérationnelle." },
      ]}
      galleryTitle="Galerie — Prestations de Services"
      images={images}
    />
  )
}
