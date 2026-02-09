"use client"

import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"
import { useState } from "react"
import ChatBot from "./ChatBot"

export default function BotaoChat() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<ChatBot isOpen={isOpen} onClose={() => setIsOpen(false)} />

			<motion.button
				initial={{ opacity: 0, scale: 0.9, y: 10 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 1 }}
				whileHover={{
					scale: 1.05,
					backgroundColor: "var(--card)",
				}}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(!isOpen)}
				className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-card/80 backdrop-blur-md border border-border-theme text-muted hover:text-foreground hover:border-muted hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-background shadow-xl"
				aria-label={isOpen ? "Close Chat" : "Open Chat"}
			>
				<MessageSquare size={20} />
			</motion.button>
		</>
	)
}
