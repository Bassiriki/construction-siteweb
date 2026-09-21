import { Metadata } from "next"
import StructureMetalContent from "./content"

import { getImages } from "@/lib/get-images"

export const metadata: Metadata = {
  title: "Structures Métalliques",
  description: "Conception et fabrication de hangars, charpentes et ouvrages métalliques sur mesure.",
}

export default function StructureMetalPage() {
  const images = getImages("construction-metalique-images")
  return <StructureMetalContent images={images} />
}
