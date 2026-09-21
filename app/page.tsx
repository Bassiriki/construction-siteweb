import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { DirectorMessage } from "@/components/director-message"
import { Hero } from "@/components/hero"
import { Partners } from "@/components/partners"
import { Services } from "@/components/services"
import { TeamPresentation } from "@/components/team-presentation"
import { VehicleFleet } from "@/components/vehicle-fleet"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accueil",
  description: "Bienvenue chez Manding Construction, leader en BTP, structures métalliques et installations solaires au Mali.",
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <DirectorMessage />
      <TeamPresentation />
      <VehicleFleet />
      <Partners />
      <Contact />
    </>
  )
}
