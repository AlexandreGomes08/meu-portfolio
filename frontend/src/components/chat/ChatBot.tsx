"use client"

import { fontSatoshi } from "@/app/fonts"
import {
	ChatMessage,
	getChatId,
	loadChatHistory,
	saveChatHistory,
	sendMessage,
} from "@/services/chatService"
import { AnimatePresence, motion } from "framer-motion"
import { Bot, Send, User, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface ChatBotProps {
	isOpen: boolean
	onClose: () => void
}

const WELCOME_MESSAGE: ChatMessage = {
	role: "assistant",
	content:
		"Olá! Sou o assistente do Alexandre. Posso te ajudar com projetos, experiência ou tecnologias?",
	timestamp: Date.now(),
}

export default function ChatBot({ isOpen, onClose }: ChatBotProps) {
	const [messages, setMessages] = useState<ChatMessage[]>([])
	const [inputValue, setInputValue] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [chatId, setChatId] = useState("")
	const messagesEndRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const id = getChatId()
		setChatId(id)

		const history = loadChatHistory(id)
		if (history.length === 0) {
			setMessages([WELCOME_MESSAGE])
		} else {
			setMessages(history)
		}
	}, [])

	useEffect(() => {
		if (chatId && messages.length > 0) {
			saveChatHistory(chatId, messages)
		}
	}, [messages, chatId])

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}, [messages, isLoading])

	const handleSend = async () => {
		if (!inputValue.trim() || isLoading) return

		const userMessage: ChatMessage = {
			role: "user",
			content: inputValue.trim(),
			timestamp: Date.now(),
		}

		setMessages((prev) => [...prev, userMessage])
		setInputValue("")
		setIsLoading(true)

		try {
			const response = await sendMessage(chatId, userMessage.content)

			const assistantMessage: ChatMessage = {
				role: "assistant",
				content: response,
				timestamp: Date.now(),
			}

			setMessages((prev) => [...prev, assistantMessage])
		} catch (error) {
			const errorMessage: ChatMessage = {
				role: "assistant",
				content:
					"Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.",
				timestamp: Date.now(),
			}
			setMessages((prev) => [...prev, errorMessage])
		} finally {
			setIsLoading(false)
		}
	}

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault()
			handleSend()
		}
	}

	if (!isOpen) return null

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 20, scale: 0.95 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				exit={{ opacity: 0, y: 20, scale: 0.95 }}
				transition={{ duration: 0.2 }}
				className="fixed bottom-20 right-6 z-50 w-[90vw] sm:w-96 h-[500px] bg-card/95 backdrop-blur-xl border border-border-theme rounded-2xl shadow-2xl flex flex-col overflow-hidden"
			>
				<div className="flex items-center justify-between p-4 border-b border-border-theme">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
							<Bot size={20} className="text-white" />
						</div>
						<div>
							<h3
								className={`${fontSatoshi.className} text-foreground font-semibold text-sm`}
							>
								Assistente IA
							</h3>
							<p className="text-muted text-xs">Online</p>
						</div>
					</div>
					<button
						onClick={onClose}
						className="text-muted hover:text-foreground transition-colors p-1 rounded-lg hover:bg-muted/10"
						aria-label="Close chat"
					>
						<X size={20} />
					</button>
				</div>

				<div className="flex-1 overflow-y-auto p-4 space-y-4">
					{messages.map((message, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2 }}
							className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
						>
							{message.role === "assistant" && (
								<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shrink-0">
									<Bot size={16} className="text-white" />
								</div>
							)}
							<div
								className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
									message.role === "user"
										? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
										: "bg-muted/10 text-foreground border border-border-theme"
								}`}
							>
								<p
									className={`${fontSatoshi.className} text-sm leading-relaxed whitespace-pre-wrap`}
								>
									{message.content}
								</p>
							</div>
							{message.role === "user" && (
								<div className="w-8 h-8 rounded-full bg-muted/20 flex items-center justify-center shrink-0">
									<User size={16} className="text-foreground" />
								</div>
							)}
						</motion.div>
					))}

					{isLoading && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="flex gap-2 justify-start"
						>
							<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shrink-0">
								<Bot size={16} className="text-white" />
							</div>
							<div className="bg-muted/10 border border-border-theme rounded-2xl px-4 py-2.5">
								<div className="flex gap-1">
									<span
										className="w-2 h-2 bg-muted/50 rounded-full animate-bounce"
										style={{ animationDelay: "0ms" }}
									/>
									<span
										className="w-2 h-2 bg-muted/50 rounded-full animate-bounce"
										style={{ animationDelay: "150ms" }}
									/>
									<span
										className="w-2 h-2 bg-muted/50 rounded-full animate-bounce"
										style={{ animationDelay: "300ms" }}
									/>
								</div>
							</div>
						</motion.div>
					)}

					<div ref={messagesEndRef} />
				</div>

				<div className="p-4 border-t border-border-theme">
					<div className="flex gap-2">
						<input
							type="text"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							onKeyPress={handleKeyPress}
							placeholder="Pergunte sobre projetos, stack, experiência..."
							disabled={isLoading}
							className={`${fontSatoshi.className} flex-1 bg-muted/5 border border-border-theme rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed`}
						/>
						<button
							onClick={handleSend}
							disabled={!inputValue.trim() || isLoading}
							className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2.5 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-500/50"
							aria-label="Send message"
						>
							<Send size={18} />
						</button>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	)
}
