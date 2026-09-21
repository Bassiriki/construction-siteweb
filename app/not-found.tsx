import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900">
            <h2 className="text-4xl font-bold mb-4 text-[#3DB39E]">Page Non Trouvée (404)</h2>
            <p className="text-lg text-gray-600 mb-8">Désolé, la page que vous recherchez n'existe pas.</p>
            <Link
                href="/"
                className="px-6 py-3 bg-[#3DB39E] text-white rounded-full font-semibold hover:bg-[#329685] transition-colors"
            >
                Retour à l'accueil
            </Link>
        </div>
    )
}
