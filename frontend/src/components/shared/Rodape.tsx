"use client"

import { fontJetBrainsMono, fontSatoshi } from "@/app/fonts"
import { useLanguage } from "@/contexts/LanguageContext"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Container from "./Container"

export default function Rodape() {
	const { translate } = useLanguage()

	return (
		<footer className="relative py-12 border-t border-border-theme bg-background">
			<Container className="flex flex-col md:flex-row items-center justify-between gap-6">
				<div className="flex flex-col items-center md:items-start gap-2">
					<p className={`${fontSatoshi.className} text-muted text-sm font-light`}>
						© 2026 <span className="text-foreground font-medium">Alexandre Gomes</span>.
						{translate("footer.rights")}
					</p>
					<div className="flex items-center gap-2 opacity-30">
						<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
						<p
							className={`${fontJetBrainsMono.className} text-[10px] text-muted uppercase tracking-widest`}
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
						href="mailto:gomesalexandre227@gmail.com"
						icon={<Mail size={18} />}
						label="Email"
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
			className="text-muted hover:text-foreground transition-all duration-300 transform hover:-translate-y-0.5"
			aria-label={label}
		>
			{icon}
		</Link>
	)
}
