"use client"

import { ServicePageTemplate } from "@/components/service-page-template"

interface InfrastructureHydrauliqueContentProps {
  images?: string[]
}

export default function InfrastructureHydrauliqueContent({ images = [] }: InfrastructureHydrauliqueContentProps) {
  return (
    <ServicePageTemplate
      heroImage={images[0] ?? "/h1.jpg"}
      heroTitle="Adduction d'Eau & Hydraulique"
      heroSubtitle="Conception et réalisation d'infrastructures hydrauliques pour la distribution, le stockage et le traitement de l'eau potable. Nous apportons l'eau là où elle est nécessaire."
      breadcrumb="Adduction d'Eau"
      introTitle="Solutions hydrauliques de bout en bout"
      introText={[
        "Manding Construction intervient dans la conception et la mise en œuvre d'infrastructures hydrauliques modernes pour garantir l'accès à l'eau potable en milieu rural et urbain.",
        "Nous travaillons avec des partenaires certifiés pour garantir la conformité aux normes sanitaires et environnementales les plus strictes à chaque étape du projet.",
        "De la source au robinet, nous maîtrisons chaque étape du cycle de l'eau pour assurer une distribution fiable et durable.",
      ]}
      introImage={images[1] ?? images[0] ?? "/h1.jpg"}
      features={[
        { title: "Châteaux d'eau", desc: "Conception et construction de réservoirs surélevés pour la distribution gravitaire d'eau potable." },
        { title: "Réseaux de distribution", desc: "Pose et raccordement de canalisations, vannes et accessoires pour les réseaux d'alimentation en eau." },
        { title: "Stations de pompage", desc: "Installation et mise en service de pompes et équipements pour l'exhaure et la mise en pression des réseaux." },
        { title: "Forages & Puits", desc: "Réalisation de forages d'eau, équipement de puits et tests de débit pour les projets d'alimentation en eau." },
        { title: "Bornes fontaines", desc: "Installation de points d'eau collectifs en milieu rural pour les communautés sans accès au réseau." },
        { title: "Maintenance continue", desc: "Suivi et entretien régulier de vos installations hydrauliques pour assurer leur pérennité et performance." },
      ]}
      galleryTitle="Galerie — Adduction d'Eau"
      images={images}
    />
  )
}
