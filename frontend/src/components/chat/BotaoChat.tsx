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
					backgroundColor: "rgba(255, 255, 255, 0.08)"
				}}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(!isOpen)}
				className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-neutral-950 shadow-xl"
				aria-label={isOpen ? "Close Chat" : "Open Chat"}
			>
				<MessageSquare size={20} />
			</motion.button>
		</>
	)
}
