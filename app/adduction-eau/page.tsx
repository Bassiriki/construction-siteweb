import { Metadata } from "next"
import InfrastructureHydrauliqueContent from "./content"

import { getImages } from "@/lib/get-images"

export const metadata: Metadata = {
  title: "Infrastructures Hydrauliques",
  description: "Expertise en adduction d'eau, forages et systèmes d'irrigation pour l'agriculture et l'industrie.",
}

export default function InfrastructureHydrauliquePage() {
  const images = getImages("adduction-eau-images")
  return <InfrastructureHydrauliqueContent images={images} />
}
