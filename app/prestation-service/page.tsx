import { Metadata } from "next"
import PrestationServiceContent from "./content"

import { getImages } from "@/lib/get-images"

export const metadata: Metadata = {
  title: "Prestations de Services",
  description: "Services de maintenance, assemblage et soudure pour vos équipements industriels et infrastructures.",
}

export default function PrestationServicePage() {
  const images = getImages("prestation-service-images")
  return <PrestationServiceContent images={images} />
}
