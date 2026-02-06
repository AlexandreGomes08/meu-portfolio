"use client"

import { fontJetBrainsMono, fontSatoshi } from "@/app/fonts"
import { Github, Linkedin, MessageCircle } from "lucide-react"
import Link from "next/link"
import Container from "./Container"

export default function Rodape() {
	return (
		<footer className="relative py-12 border-t border-white/5 bg-[#0a0a0a]">
			<Container className="flex flex-col md:flex-row items-center justify-between gap-6">
				<div className="flex flex-col items-center md:items-start gap-2">
					<p className={`${fontSatoshi.className} text-zinc-500 text-sm font-light`}>
						© 2026 <span className="text-zinc-400 font-medium">Alexandre Gomes</span>.
						All rights reserved.
					</p>
					<div className="flex items-center gap-2 opacity-30">
						<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
						<p
							className={`${fontJetBrainsMono.className} text-[10px] text-zinc-500 uppercase tracking-widest`}
						>
							Built with React, Next.js & Tailwind CSS
						</p>
					</div>
				</div>

				<div className="flex items-center gap-5">
					<SocialLink
						href="https://github.com/AlexandreGomes08"
						icon={<Github size={18} />}
						label="GitHub"
					/>
					<SocialLink
						href="https://www.linkedin.com/in/alexandregomesdev/"
						icon={<Linkedin size={18} />}
						label="LinkedIn"
					/>
					<SocialLink
						href="https://wa.me/5511999999999"
						icon={<MessageCircle size={18} />}
						label="WhatsApp"
					/>
				</div>
			</Container>
		</footer>
	)
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
	return (
		<Link
			href={href}
			target="_blank"
			className="text-zinc-500 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
			aria-label={label}
		>
			{icon}
		</Link>
	)
}
