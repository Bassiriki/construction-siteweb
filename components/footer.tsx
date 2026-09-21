import { Facebook, Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-04%20at%2017.02.21-WmLAOu7klWKkjLUtt0NS0aOyWUGRcd.jpeg"
                  alt="Manding Consulting"
                  fill
                  className="object-contain rounded-lg"
                />

              </div>
              <div className="font-bold text-lg text-primary">Manding Construction</div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de construction et d'infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#accueil"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projets"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#apropos"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  À Propos
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Nos Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>  <a href="/structuresmetal" className="text-gray-400 hover:text-primary transition-colors"
              >
                Construction en structure en metal
              </a>
              </li>
              <li>
                <a href="/btp"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  BTP
                </a>
              </li>
              <li >
                <a href="/adduction-eau"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Adduction d'eau
                </a>
              </li>
              <li>
                <a
                  href="/prestation-service"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Prestations de services
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4 text-primary" />
                <div className="flex flex-col">
                  <span>+223 66 85 54 22</span>
                  <span>+223 44 54 40 06</span>
                </div>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4 text-primary" />
                <span>mandingconstructionmali@gmail.com</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Manding Construction. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
