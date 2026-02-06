"use client"

import { fonteKalam, fontSatoshi } from "@/app/fonts"
import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Cabecalho from "../shared/Cabecalho"

const TypingEffect = ({ text, delay = 0 }: { text: string; delay?: number }) => {
	const [displayedText, setDisplayedText] = useState("")

	useEffect(() => {
		const timeout = setTimeout(() => {
			let i = 0
			const timer = setInterval(() => {
				if (i < text.length) {
					setDisplayedText(text.substring(0, i + 1))
					i++
				} else {
					clearInterval(timer)
				}
			}, 100)
			return () => clearInterval(timer)
		}, delay * 1000)

		return () => clearTimeout(timeout)
	}, [text, delay])

	return <span>{displayedText}</span>
}

export default function Principal() {
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		const handleScroll = () => {
			const scrollThreshold = 100
			if (window.scrollY > scrollThreshold) {
				setIsVisible(false)
			} else {
				setIsVisible(true)
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div
			id="home"
			className="relative min-h-screen flex flex-col overflow-hidden scroll-mt-14 sm:scroll-mt-16"
		>
			<div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
				<div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
			</div>

			<Cabecalho />

			<main className="flex-1 flex items-center justify-center relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12 lg:gap-8">
					<div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className={`${fonteKalam.className} text-4xl sm:text-5xl lg:text-6xl font-bold animate-hero-gradient pb-2`}
						>
							Hi, I&apos;m Alexandre Gomes
						</motion.h1>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5, duration: 0.5 }}
							className="text-xl sm:text-2xl text-zinc-300 font-mono h-8 sm:h-auto"
						>
							&gt; <TypingEffect text="Full Stack Developer" delay={0.5} />
							<span className="animate-pulse">_</span>
						</motion.div>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.5, duration: 0.5 }}
							className={`${fontSatoshi.className} text-zinc-400 text-base sm:text-lg max-w-lg leading-relaxed`}
						>
							Over 4 years of experience building innovative web and mobile
							applications using React, Next.js, and Node.js.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 2, duration: 0.5 }}
							className="flex items-center gap-4 pt-4"
						>
							<SocialButton
								href="https://github.com/AlexandreGomes08"
								icon={<Github size={20} />}
								label="GitHub"
							/>
							<SocialButton
								href="https://www.linkedin.com/in/alexandregomesdev/"
								icon={<Linkedin size={20} />}
								label="LinkedIn"
							/>
							<SocialButton
								href="https://wa.me/5588999109162"
								icon={<MessageCircle size={20} />}
								label="WhatsApp"
							/>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.7 }}
						className="relative flex items-center justify-center group"
					>
						<div className="absolute inset-0 -m-12 bg-blue-600/20 rounded-full blur-[80px] animate-pulse pointer-events-none group-hover:bg-blue-500/30 transition-colors duration-700" />

						<div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-85 lg:h-85 rounded-full overflow-hidden shadow-2xl transition-transform duration-500 ">
							<Image
								src="/minha-foto0.jpg"
								alt="Alexandre Gomes"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</motion.div>
				</div>
			</main>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: isVisible ? 0.4 : 0 }}
				transition={{ duration: 0.5 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20 pointer-events-none"
			>
				<motion.div
					animate={{ y: [0, 6, 0] }}
					transition={{
						duration: 2.5,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					<ChevronDown size={28} className="text-zinc-400" />
				</motion.div>
			</motion.div>
		</div>
	)
}

function SocialButton({
	href,
	icon,
	label,
}: {
	href: string
	icon: React.ReactNode
	label: string
}) {
	return (
		<Link
			href={href}
			target="_blank"
			className="group flex items-center justify-center p-3 sm:px-5 sm:py-3 gap-2 rounded-full border border-zinc-800 bg-neutral-900/50 backdrop-blur-sm text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-neutral-800 transition-all duration-300"
			aria-label={label}
		>
			{icon}
			<span className="hidden sm:inline font-medium text-sm">{label}</span>
		</Link>
	)
}
