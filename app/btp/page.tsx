import { Metadata } from "next"
import BtpContent from "./content"

import { getImages } from "@/lib/get-images"

export const metadata: Metadata = {
  title: "BTP-Bâtiment et Travaux Publics",
  description: "Donnez vie à vos projets immobiliers et d'infrastructures avec notre expertise en Construction et Travaux Publics.",
}

export default function BtpPage() {
  const images = getImages("btp-images")
  return <BtpContent images={images} />
}
