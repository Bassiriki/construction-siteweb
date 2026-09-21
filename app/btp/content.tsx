"use client"

import { ServicePageTemplate } from "@/components/service-page-template"

interface BtpContentProps {
  images?: string[]
}

export default function BtpContent({ images = [] }: BtpContentProps) {
  return (
    <ServicePageTemplate
      heroImage={images[0] ?? "/i7.jpg"}
      heroTitle="Bâtiment & Travaux Publics"
      heroSubtitle="Gestion globale de projets de construction répondant aux normes internationales les plus élevées. Nous bâtissons l'avenir avec rigueur et durabilité."
      breadcrumb="BTP"
      introTitle="Notre expertise en BTP"
      introText={[
        "Manding Construction réalise des projets d'envergure dans les domaines du bâtiment et des travaux publics : immeubles, villas, écoles, hôpitaux et infrastructures publiques.",
        "Avec plus de 30 ans d'expérience sur le continent africain, nous maîtrisons chaque phase du projet — de la conception à la livraison — avec un engagement total pour la qualité et les délais.",
        "Notre équipe pluridisciplinaire assure le suivi technique et la conformité aux normes de construction les plus strictes pour chaque chantier.",
      ]}
      introImage={images[1] ?? images[0] ?? "/i7.jpg"}
      features={[
        { title: "Construction de bâtiments", desc: "Réalisation d'immeubles, villas et complexes industriels. Des fondations solides pour des projets ambitieux." },
        { title: "Établissements scolaires", desc: "Écoles et universités modernes et fonctionnelles, conçues pour offrir un environnement d'apprentissage optimal." },
        { title: "Infrastructures de santé", desc: "Hôpitaux et centres de santé aux normes internationales, équipés pour garantir sécurité et qualité des soins." },
        { title: "Travaux publics", desc: "Voiries, réseaux divers, assainissement et aménagements urbains pour transformer et moderniser nos cités." },
        { title: "Bâtiments privés", desc: "Résidences individuelles et villas sur mesure répondant aux exigences les plus élevées de confort et d'esthétique." },
        { title: "Génie civil", desc: "Ouvrages d'art, ponts et structures en béton armé réalisés selon les normes en vigueur." },
      ]}
      galleryTitle="Galerie — BTP & Travaux Publics"
      images={images}
    />
  )
}
