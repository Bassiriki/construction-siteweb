import { Metadata } from "next"
import MenuiserieAluminiumContent from "./content"

import { getImages } from "@/lib/get-images"

export const metadata: Metadata = {
  title: "Menuiserie Aluminium",
  description: "Solutions en menuiserie aluminium pour vos projets de construction et rénovation.",
}

export default function MenuiserieAluminiumPage() {
  const images = getImages("aluminium-images")
  return <MenuiserieAluminiumContent images={images} />
}
