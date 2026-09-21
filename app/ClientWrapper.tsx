"use client"

import { WhatsAppButton } from "./WhatsAppButton"
import { AIChat } from "@/components/ai-chat"

export default function ClientWrapper() {
    return (
        <>
            <WhatsAppButton />
            <AIChat />
        </>
    )
}

