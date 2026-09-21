"use client"

import { Bot, Send, Sparkles, X, MessageSquare, ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

interface Message {
  id: number
  text: string
  isBot: boolean
}

const PRESET_ANSWERS: { keywords: string[]; answer: string }[] = [
 {
    keywords: ["service", "activite", "expert", "metier", "faites", "font"],
    answer: "Manding Construction intervient dans 5 domaines d'expertises majeurs au Mali :\n\n• **Construction Métallique** : hangars, charpentes, réservoirs de stockage en acier.\n• **BTP & Génie Civil** : bâtiments administratifs, résidentiels, travaux routiers.\n• **Adduction d'Eau** : forages, châteaux d'eau, réseaux hydrauliques.\n• **Menuiserie Aluminium** : portes, fenêtres, vitrages et murs-rideaux.\n• **Prestation de Services** : maintenance industrielle et assistance technique."
  },
  {
    keywords: ["metal", "structure", "charpente", "hangar", "acier", "chaudronnerie", "soudure"],
    answer: "Nous sommes leaders en **Construction Métallique**. Nous concevons, fabriquons et assemblons des hangars industriels, des charpentes complexes et des réservoirs de stockage de grande capacité. Retrouvez nos réalisations sur notre page dédiée : [Structures Métalliques](/structuresmetal)."
  },
  {
    keywords: ["btp", "batiment", "route", "genie", "civil", "infrastructure", "beton", "maison", "construction"],
    answer: "Notre pôle **BTP & Génie Civil** gère la construction de bâtiments de tous types (commerciaux, industriels, résidentiels), d'infrastructures routières et d'ouvrages hydrauliques. Pour plus de détails : [BTP & Génie Civil](/btp)."
  },
  {
    keywords: ["eau", "forage", "chateau", "hydraulique", "pompage", "aep"],
    answer: "Nous concevons et réalisons des installations d'**Adduction d'Eau Potable (AEP)**, des forages de précision et des châteaux d'eau (en béton armé ou métalliques) pour alimenter villes, villages et chantiers industriels. Plus de détails : [Adduction d'Eau](/adduction-eau)."
  },
  {
    keywords: ["alu", "aluminium", "vitre", "vitrage", "fenetre", "porte", "facade"],
    answer: "Notre atelier de **Menuiserie Aluminium** fabrique des solutions modernes : menuiserie vitrée, portes coulissantes, cloisons intérieures pour bureaux et façades vitrées. Plus d'informations : [Menuiserie Aluminium](/menuiserie-aluminium)."
  },
  {
    keywords: ["maintenance", "industriel", "prestation", "technique", "somagep", "edm"],
    answer: "Nous assurons des **Prestations de Services** industriels incluant la maintenance préventive/corrective, le montage d'usines et des solutions d'ingénierie sur site pour les grands comptes industriels et miniers. En savoir plus : [Prestations de Services](/prestation-service)."
  },
  {
    keywords: ["devis", "prix", "tarif", "combien", "coute", "cout", "estimation"],
    answer: "Tous nos devis et études préliminaires sont gratuits et personnalisés. Vous pouvez :\n\n1. Contacter notre équipe commerciale directement sur WhatsApp au [+223 66 85 54 22](https://wa.me/22366855422).\n2. Remplir le formulaire dans la section [Contact](#contact) sur notre site."
  },
  {
    keywords: ["contact", "telephone", "whatsapp", "tel", "numero", "adresse", "situer", "ou", "siege", "bureau", "mail", "email", "mali", "bamako", "localisation", "itma"],
    answer: "Vous pouvez contacter Manding Construction par :\n\n• **Téléphones joignables** : [+223 66 85 54 22](https://wa.me/22366855422) (WhatsApp/Mobile) ou +223 44 54 40 06\n• **Email officiel** : [mandingconstructionmali@gmail.com](mailto:mandingconstructionmali@gmail.com)\n• **Localisation physique** : Bamako, Mali, quartier **Baco Djicoroni ACI, en face de l'université ITMA**.\n• **Formulaire en ligne** : Section [Contact](#contact) de notre page d'accueil."
  },
  {
    keywords: ["bonjour", "salut", "hello", "bonsoir", "hey", "hi", "cv", "ca va", "comment va tu"],
    answer: "Bonjour ! Comment puis-je vous renseigner sur Manding Construction aujourd'hui ? Vous pouvez me questionner sur nos expertises (BTP, métal, forage, aluminium) ou sur la demande de devis."
  },
  {
    keywords: ["merci", "parfait", "super", "ok", "merci beaucoup", "thanks"],
    answer: "Avec grand plaisir ! N'hésitez pas si vous avez d'autres questions. Manding Construction vous souhaite une excellente journée !"
  },

  // ==========================================
  // II. ACCUEIL, INFOS GÉNÉRALES & LOCALISATION
  // ==========================================
  {
    keywords: ["au revoir", "bye", "a plus", "quitter", "ciao", "a bientot"],
    answer: "Au revoir ! Merci d'avoir échangé avec Manding Construction. Nous restons à votre entière disposition sur WhatsApp au [+223 66 85 54 22](https://wa.me/22366855422) ou par appel au +223 44 54 40 06. Excellente journée !"
  },
  {
    keywords: ["qui", "etes", "vous", "presentation", "histoire", "manding", "societe", "entreprise", "propos"],
    answer: "Manding Construction est une entreprise de référence au Mali, spécialisée dans le BTP, la charpente métallique, l'adduction d'eau et la menuiserie aluminium. Nous accompagnons nos clients du secteur public, privé et industriel de l'étude à la livraison de leurs projets."
  },
  {
    keywords: ["horaire", "heure", "ouvert", "ferme", "ouverture", "fermeture", "samedi", "dimanche"],
    answer: "Nos bureaux à Bamako sont ouverts du **Lundi au Vendredi de 08h00 à 17h00**, et le **Samedi de 09h00 à 13h00**. Nos équipes de chantier s'adaptent quant à elles aux contraintes de chaque projet."
  },
  {
    keywords: ["zone", "deplacez", "region", "intervenez", "mali", "kayes", "sikasso", "segou", "mopti", "interieur", "pays"],
    answer: "Oui ! Bien que notre siège soit à Bamako, Manding Construction intervient sur **l'ensemble du territoire malien** (Sikasso, Kayes, Ségou, etc.), ainsi que dans la sous-région pour des projets spécifiques."
  },
  {
    keywords: ["bambara", "bamanankan", "langue", "parler", "francais"],
    answer: "Nous communiquons principalement en français et en bamanan (bambara). N'hésitez pas à nous écrire ou nous appeler sur WhatsApp au [+223 66 85 54 22](https://wa.me/22366855422) dans la langue qui vous convient le mieux !"
  },
  {
    keywords: ["site", "web", "internet", "lien", "url", "mandingconstruction"],
    answer: "Vous êtes actuellement sur notre site officiel. Pour toute demande d'information, vous pouvez naviguer sur nos pages de services ou nous contacter directement via notre formulaire en bas de page."
  },
  {
    keywords: ["directeur", "responsable", "dg", "fondateur", "gerant", "patron", "boss"],
    answer: "Pour échanger directement avec la direction générale ou un responsable de pôle, vous pouvez adresser un email officiel à [mandingconstructionmali@gmail.com](mailto:mandingconstructionmali@gmail.com) ou appeler notre secrétariat au +223 44 54 40 06."
  },
  {
    keywords: ["catalogue", "brochure", "portfolio", "pdf", "presentation-pdf"],
    answer: "Notre catalogue de réalisations et notre plaquette de présentation sont disponibles sur demande. Laissez-nous vos coordonnées ou écrivez-nous sur WhatsApp au [+223 66 85 54 22](https://wa.me/22366855422) pour les recevoir en format PDF."
  },

  // ==========================================
  // III. CONSTRUCTION MÉTALLIQUE & CHAUDRONNERIE
  // ==========================================
  {
    keywords: ["hangar", "entrepot", "stockage", "depot", "industriel"],
    answer: "Nous concevons et montons des hangars métalliques sur mesure (pour stockage, usines, garages). Nos structures sont calculées pour résister aux intempéries et optimiser l'espace au sol. Contactez-nous pour une étude gratuite : [Structures Métalliques](/structuresmetal)."
  },
  {
    keywords: ["charpente", "toit-metal", "couverture", "bac", "toles"],
    answer: "Manding Construction réalise la fabrication et la pose de charpentes métalliques robustes pour tous types de bâtiments (villas, complexes industriels, marchés). Plus d'infos : [Structures Métalliques](/structuresmetal)."
  },
  {
    keywords: ["cuve", "reservoir", "citerne", "bac-stockage", "hydrocarbure", "carburant", "gasoil"],
    answer: "Nous fabriquons des réservoirs et cuves de stockage métalliques de grande capacité (eau, hydrocarbures, produits chimiques) respectant les normes de sécurité internationales en vigueur."
  },
  {
    keywords: ["soudure", "soudeur", "tuyauterie", "chaudronnerie", "acier", "fer"],
    answer: "Nos soudeurs certifiés maîtrisent les techniques avancées de soudure et de chaudronnerie lourde pour des structures industrielles, des passerelles et des systèmes de tuyauterie complexes."
  },
  {
    keywords: ["pylone", "antenne", "support-metal", "poteau-metal"],
    answer: "Nous fabriquons et installons des pylônes métalliques pour télécommunications, éclairage public ou supports de lignes électriques, avec traitement anticorrosion (galvanisation ou peinture spéciale)."
  },
  {
    keywords: ["escalier", "garde-corps", "rampe", "mezzanine", "plateforme"],
    answer: "Pour vos bureaux ou usines, nous réalisons des structures secondaires en acier : escaliers métalliques (droits ou colimaçons), garde-corps de sécurité et mezzanines industrielles robustes."
  },
  {
    keywords: ["antirouille", "peinture-metal", "galvanisation", "corrosion", "duree-metal"],
    answer: "Toutes nos réalisations métalliques subissent un traitement anticorrosion rigoureux (sablage, primaire antirouille haute performance et peinture de finition) pour garantir une longévité maximale sous le climat sahélien."
  },
  {
    keywords: ["cloture", "portail", "grille", "securite-metal", "rideau-metallique"],
    answer: "Nous fabriquons des portails industriels (coulissants ou battants), des grilles de protection et des clôtures métalliques sécurisées pour protéger vos sites et résidences."
  },
  {
    keywords: ["pont-bascule", "rampe-chargement", "quai"],
    answer: "Pour les plateformes logistiques et les sites miniers, nous concevons des rampes de chargement métalliques et installons des châssis métalliques pour ponts-bascules."
  },

  // ==========================================
  // IV. BTP & GÉNIE CIVIL
  // ==========================================
  {
    keywords: ["r+", "immeuble", "etage", "hauteur", "appartement", "dalle", "poteau"],
    answer: "Nos ingénieurs en génie civil conçoivent et construisent des immeubles résidentiels et administratifs R+1, R+2, R+3 et plus, en assurant une étude de sol préalable et des calculs de structure en béton armé rigoureux. Visitez : [BTP & Génie Civil](/btp)."
  },
  {
    keywords: ["villa", "maison", "residentiel", "chambre", "salon", "cle-en-main"],
    answer: "Nous réalisons la construction de votre villa de rêve clé en main : terrassement, gros œuvre, second œuvre (carrelage, peinture) et finitions. Confiez-nous vos plans pour un devis gratuit : [+223 66 85 54 22](https://wa.me/22366855422)."
  },
  {
    keywords: ["fondation", "beton-arme", "semelle", "poteau-beton", "ferraillage"],
    answer: "Les fondations sont la clé de la durabilité d'un ouvrage. Manding Construction réalise des fondations adaptées à la nature de votre sol (fouilles, semelles isolées ou filantes, radiers)."
  },
  {
    keywords: ["goudron", "pavage", "pave", "route", "voie", "voirie", "goudronnage", "bitume"],
    answer: "Nous intervenons dans les travaux de voirie et réseaux divers (VRD) : pose de pavés autobloquants pour cours et parkings, aménagement de voies d'accès et goudronnage."
  },
  {
    keywords: ["renovation", "rehabiliter", "refection", "reparation-batiment", "peindre-batiment"],
    answer: "Donnez une seconde vie à vos bâtiments ! Nous réalisons des travaux de rénovation complète ou partielle (reprise de peinture, étanchéité, modification de cloisons, plomberie et électricité)."
  },
  {
    keywords: ["cloture-maconnerie", "mur", "brique", "parpaing", "cloturer"],
    answer: "Nous construisons des murs de clôture solides en parpaings de ciment (briques) avec poteaux en béton armé pour sécuriser vos terrains nus ou vos propriétés."
  },
  {
    keywords: ["plan", "architecte", "conception-3d", "dessiner", "plan-maison"],
    answer: "Vous n'avez pas encore de plans ? Notre bureau d'études partenaire dessine vos plans architecturaux en 2D et 3D, tout en optimisant la disposition des pièces selon votre budget."
  },
  {
    keywords: ["permis-de-construire", "autorisation", "demarche-administrative"],
    answer: "Nous pouvons vous guider et vous accompagner dans les démarches administratives pour l'obtention de votre permis de construire au Mali avant le démarrage effectif de votre chantier."
  },
  {
    keywords: ["etancheite", "fuite-toit", "infiltration", "dalle-humide", "humidite"],
    answer: "Nous appliquons des solutions professionnelles d'étanchéité sur les dalles en béton et les toitures pour stopper définitivement les infiltrations d'eau de pluie durant l'hivernage."
  },
  {
    keywords: ["terrassement", "remblai", "deblai", "niveler", "creuser", "terrain-nu"],
    answer: "Avant toute construction, nous préparons votre terrain : décapage, nivellement, remblaiement et compactage du sol pour garantir une assise parfaite à vos futures fondations."
  },

  // ==========================================
  // V. ADDUCTION D'EAU & FORAGES
  // ==========================================
  {
    keywords: ["pompage-solaire", "solaire-eau", "panneau-solaire", "soleil-pompe"],
    answer: "Économisez sur vos factures d'énergie ! Nous installons des systèmes d'adduction d'eau alimentés par énergie solaire photovoltaïque pour un pompage autonome et écologique."
  },
  {
    keywords: ["profondeur", "combien-metre", "nappe", "recherche-eau"],
    answer: "La profondeur d'un forage dépend de l'étude géophysique de votre sol. Nos machines professionnelles permettent de descendre jusqu'à la nappe phréatique pour garantir un débit d'eau optimal et durable."
  },
  {
    keywords: ["chateau-metal", "chateau-acier", "pylone-eau"],
    answer: "Nous fabriquons des châteaux d'eau sur pylônes métalliques de toutes hauteurs et capacités (de 5 m³ à plus de 100 m³), avec cuve en acier galvanisé ou en plastique renforcé."
  },
  {
    keywords: ["chateau-beton", "chateau-maconnerie", "grand-reservoir"],
    answer: "Pour les communes ou les grands chantiers, nous construisons des châteaux d'eau en béton armé coulés sur place, garantissant une solidité à toute épreuve sur plusieurs décennies."
  },
  {
    keywords: ["pompe-immergee", "moteur-eau", "panne-pompe", "remplacement-pompe"],
    answer: "Nous fournissons, installons et remplaçons des pompes immergées de grandes marques (solaires ou électriques) adaptées à la profondeur de votre forage et à vos besoins en débit."
  },
  {
    keywords: ["irrigation", "goutte-a-goutte", "arrosage", "champ", "agricole", "agriculture", "potager"],
    answer: "Nous concevons des réseaux d'irrigation complets pour vos champs et fermes agricoles au Mali (système de goutte-à-goutte, aspersion, raccordement depuis un forage solaire)."
  },
  {
    keywords: ["analyse-eau", "eau-propre", "potable", "traiter-eau", "chlore", "filtre"],
    answer: "La sécurité avant tout ! Suite à un forage, nous vous recommandons une analyse physico-chimique et bactériologique de l'eau. Nous installons également des systèmes de filtration et de traitement d'eau si nécessaire."
  },
  {
    keywords: ["reseau-distribution", "tuyau-eau", "pehd", "pvc-eau", "robinet-public", "borne-fontaine"],
    answer: "Nous réalisons la pose de canalisations (PEHD, PVC) et l'installation de bornes-fontaines publiques ou de réseaux de distribution d'eau potable complets pour les quartiers et villages."
  },

  // ==========================================
  // VI. MENUISERIE ALUMINIUM & VITRAGE
  // ==========================================
  {
    keywords: ["porte-alu", "porte-coulissante", "vitree", "entree-alu"],
    answer: "Nous fabriquons sur mesure des portes en aluminium modernes : portes battantes, coulissantes, vitrées ou pleines, idéales pour les entrées de magasins, bureaux et résidences."
  },
  {
    keywords: ["baie-vitree", "grand-vitrage", "mur-rideau", "facade-vitree"],
    answer: "Apportez de la lumière à vos projets ! Manding Construction est spécialisée dans la pose de murs-rideaux et de baies vitrées de grandes dimensions pour une architecture moderne."
  },
  {
    keywords: ["cloison-bureau", "separation-alu", "cloisonner", "vitrage-bureau"],
    answer: "Optimisez l'espace de votre entreprise. Nous installons des cloisons amovibles en aluminium et en verre pour séparer vos bureaux tout en conservant luminosité et isolation acoustique."
  },
  {
    keywords: ["moustiquaire", "grille-anti-moustique", "fenetre-moustiquaire"],
    answer: "Toutes nos fenêtres en aluminium peuvent être équipées de moustiquaires intégrées (coulissantes ou fixes) pour vous protéger efficacement."
  },
  {
    keywords: ["double-vitrage", "vitre-teinte", "verre-trempe", "securit"],
    answer: "Pour plus de sécurité et d'isolation, nous proposons du verre trempé (Sécurit), du verre teinté (anti-regards/soleil) ainsi que des options de double vitrage thermique."
  },
  {
    keywords: ["veranda", "pergola-alu", "abri-soleil-alu"],
    answer: "Nous créons des espaces de détente extérieurs modernes avec des structures de vérandas ou des pergolas en aluminium sur mesure, esthétiques et résistantes à la chaleur."
  },

  // ==========================================
  // VII. SERVICES INDUSTRIELS & MAINTENANCE
  // ==========================================
  {
    keywords: ["arret-usine", "maintenance-corrective", "panne-machine", "depannage-usine"],
    answer: "Nos équipes techniques interviennent rapidement lors de vos arrêts d'usine programmés ou d'urgence pour effectuer les réparations mécaniques et de chaudronnerie requises."
  },
  {
    keywords: ["contrat-maintenance", "entretien-annuel", "maintenance-preventive"],
    answer: "Anticipez les pannes ! Nous proposons des contrats de maintenance préventive personnalisés pour l'inspection régulière de vos structures métalliques, cuves et installations hydrauliques."
  },
  {
    keywords: ["montage-usine", "installation-machine", "deplacement-ligne"],
    answer: "Manding Construction vous accompagne dans le montage mécanique d'usines neuves ou le déplacement de lignes de production industrielles existantes au Mali."
  },
  {
    keywords: ["mine", "site-minier", "or", "securite-industrielle"],
    answer: "Nous intervenons sur les sites miniers du Mali pour des travaux de construction métallique lourde, de tuyauterie industrielle et de génie civil, dans le strict respect des normes HSE."
  },
  {
    keywords: ["sablage", "peinture-haute-resistance", "protection-cuve"],
    answer: "Nous réalisons le sablage abrasif et l'application de revêtements de protection spéciaux à haute résistance chimique et thermique pour cuves et tuyauteries industrielles."
  },
  {
    keywords: ["expertise-technique", "audit-structure", "fissure-mur", "danger-batiment"],
    answer: "Un doute sur la solidité d'un bâtiment ou d'une charpente ? Nos ingénieurs réalisent un audit technique de vos structures pour évaluer les risques et proposer des solutions de confortement."
  },

  // ==========================================
  // VIII. RÉALISATIONS, RH, PAIEMENT & AUTRES
  // ==========================================
  {
    keywords: ["realisation", "projet", "photo", "chantier", "fait", "construit", "reference", "travaux", "galerie"],
    answer: "Manding Construction a réalisé de nombreux projets d'envergure au Mali (hangars industriels, bâtiments R+, châteaux d'eau). Vous pouvez découvrir nos chantiers et nos réalisations directement sur notre page dédiée : [Nos Réalisations](/realisations)."
  },
  {
    keywords: ["recrutement", "emploi", "stage", "embauche", "postuler", "travail", "candidature", "cv", "recrutez"],
    answer: "Manding Construction est régulièrement à la recherche de nouveaux talents (ingénieurs, techniciens, conducteurs de travaux, soudeurs). \n\nPour postuler ou envoyer une candidature spontanée, merci d'envoyer votre CV et lettre de motivation par email à : [mandingconstructionmali@gmail.com](mailto:mandingconstructionmali@gmail.com) en précisant l'objet de votre demande."
  },
  {
    keywords: ["partenaire", "partenariat", "collaboration", "collaborer", "fournisseur", "fournir", "materiau", "sous-traitance"],
    answer: "Nous sommes ouverts aux collaborations stratégiques et aux partenariats de confiance. Si vous êtes fournisseur de matériaux ou prestataire, veuillez nous envoyer votre catalogue ou proposition par email à [mandingconstructionmali@gmail.com](mailto:mandingconstructionmali@gmail.com) ou passer directement à nos bureaux à Baco Djicoroni."
  },
  {
    keywords: ["delai", "duree", "temps", "rapide", "longtemps", "quand", "livraison"],
    answer: "La durée de réalisation dépend entièrement de l'envergure et de la complexité de votre projet. Après étude de vos plans ou de votre cahier des charges, nous vous fournissons un planning précis des travaux. Nous mettons un point d'honneur à respecter rigoureusement les délais convenus."
  },
  {
    keywords: ["mode-paiement", "payer", "virement", "cheque", "especes", "orange-money", "bnda"],
    answer: "Nous acceptons les règlements par virement bancaire (sur notre compte de société), par chèque certifié, ou en espèces directement à notre caisse contre reçu officiel."
  },
  {
    keywords: ["avance", "acompte", "tranche", "echeance", "facilites-paiement"],
    answer: "Généralement, nos modalités de paiement pour les travaux s'effectuent par acomptes échelonnés selon l'avancement du chantier (ex: acompte au démarrage, puis selon les étapes clés validées ensemble)."
  },
  {
    keywords: ["facture", "proforma", "officiel", "tva", "impot"],
    answer: "Manding Construction est une entreprise légalement enregistrée au Mali. Nous fournissons des factures proforma détaillées et des factures définitives conformes aux exigences fiscales en vigueur."
  },
  {
    keywords: ["assurance", "garantie", "decennale", "garanti", "casse", "probleme"],
    answer: "La qualité est notre engagement ! Tous nos chantiers de construction bénéficient de garanties de bonne fin d'exécution, et nos ouvrages de génie civil sont couverts conformément aux réglementations."
  },
  {
    keywords: ["visite-terrain", "visiter", "deplacement-devis", "mesure-chantier"],
    answer: "Pour les projets complexes ou nécessitant des prises de mesures précises (comme la menuiserie ou la rénovation), un de nos techniciens se déplace sur votre site à Bamako ou en région pour réaliser l'évaluation physique."
  }
   
]

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel de Manding Construction. Je peux vous renseigner sur nos services de BTP, construction métallique, adduction d'eau, menuiserie aluminium, ou vous aider à obtenir un devis. Que puis-je faire pour vous ?",
      isBot: true
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isTyping, isOpen])

  const analyzeMessage = (text: string): string => {
    const cleanText = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Supprime les accents

    for (const item of PRESET_ANSWERS) {
      if (item.keywords.some(keyword => cleanText.includes(keyword))) {
        return item.answer
      }
    }

    return "Je ne suis pas sûr de bien comprendre votre demande. Je peux vous renseigner sur nos domaines d'expertise (BTP, charpentes métalliques, forages, aluminium) ou vous mettre en contact avec notre service commercial au +223 66 85 54 22. Que souhaitez-vous savoir ?"
  }

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return

    const userMsg: Message = {
      id: Date.now(),
      text: textToSend,
      isBot: false
    }

    setMessages(prev => [...prev, userMsg])
    setInputValue("")
    setIsTyping(true)

    // Simuler le délai de frappe du bot
    setTimeout(() => {
      const responseText = analyzeMessage(textToSend)
      const botMsg: Message = {
        id: Date.now() + 1,
        text: responseText,
        isBot: true
      }
      setIsTyping(false)
      setMessages(prev => [...prev, botMsg])
    }, 900)
  }

  const handleQuickQuestion = (question: string) => {
    handleSend(question)
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-5 z-50 bg-[#4ade80] hover:bg-[#3bb86a] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center animate-pulse"
        aria-label="Assistant IA Manding"
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-40 right-5 z-50 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-[#0b0f19] text-white p-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4ade80]/10 flex items-center justify-center text-[#4ade80] border border-[#4ade80]/20">
                <Sparkles size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm leading-none flex items-center gap-1.5">
                  Manding AI
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </span>
                <span className="text-[10px] text-gray-400 mt-1 font-medium">Assistant virtuel en ligne</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-4 overflow-y-auto bg-gray-50/50 space-y-4">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed shadow-sm ${
                    msg.isBot
                      ? "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                      : "bg-[#4ade80] text-white rounded-tr-none font-medium"
                  }`}
                >
                  <p className="whitespace-pre-line">
                    {/* Rend simple markup pour les liens [text](/path) */}
                    {msg.text.split(/(\[.*?\]\(.*?\))/g).map((part, i) => {
                      const match = part.match(/\[(.*?)\]\((.*?)\)/)
                      if (match) {
                        const linkText = match[1]
                        const linkUrl = match[2]
                        
                        // Si lien externe ou WhatsApp
                        if (linkUrl.startsWith("http") || linkUrl.startsWith("https")) {
                          return (
                            <a
                              key={i}
                              href={linkUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-0.5"
                            >
                              {linkText}
                              <ArrowUpRight size={12} />
                            </a>
                          )
                        }
                        
                        // Lien interne Next.js
                        return (
                          <Link
                            key={i}
                            href={linkUrl}
                            onClick={() => setIsOpen(false)}
                            className="underline font-bold text-emerald-600 hover:text-emerald-700"
                          >
                            {linkText}
                          </Link>
                        )
                      }
                      return part
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-3.5 shadow-sm flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick-Reply Chips */}
          <div className="px-4 py-2 bg-gray-50/50 border-t border-gray-100 flex flex-wrap gap-2">
            {[
              "Nos expertises ?",
              "Demander un devis ?",
              "Numéro de contact ?"
            ].map((q, i) => (
              <button
                key={i}
                onClick={() => handleQuickQuestion(q)}
                className="text-xs bg-white text-gray-700 border border-gray-200 rounded-full px-3 py-1.5 hover:border-[#4ade80] hover:text-emerald-600 transition-colors font-medium shadow-sm"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box Form */}
          <form
            onSubmit={e => {
              e.preventDefault()
              handleSend(inputValue)
            }}
            className="p-3 bg-white border-t border-gray-100 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Posez votre question..."
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] text-gray-800"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="bg-[#4ade80] hover:bg-[#3bb86a] disabled:opacity-50 disabled:hover:bg-[#4ade80] text-white p-2.5 rounded-xl transition-all shadow-md flex items-center justify-center shrink-0"
            >
              <Send size={18} />
            </button>
          </form>

        </div>
      )}
    </>
  )
}
