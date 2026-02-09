"use client"

import { fontJetBrainsMono, fontSatoshi } from "@/app/fonts"
import { useLanguage } from "@/contexts/LanguageContext"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Contato() {
	const { translate } = useLanguage()

	return (
		<section
			id="contact"
			className="relative py-20 px-4 sm:px-6 overflow-hidden scroll-mt-4 sm:scroll-mt-6"
		>
			<div className="relative z-10 max-w-[1200px] mx-auto">
				<div
					data-aos="fade-up"
					className="bg-card/80 backdrop-blur-md border border-border-theme rounded-[32px] overflow-hidden px-8 py-16 sm:px-12 sm:py-20 shadow-2xl flex flex-col items-center text-center"
				>
					<div className="max-w-[760px] flex flex-col items-center space-y-10">
						<div className="space-y-5">
							<h1
								className={`${fontJetBrainsMono.className} text-sm font-medium text-muted-foreground tracking-[0.2em] uppercase`}
							>
								{translate("contact.title")}
							</h1>

							<h2
								className={`${fontSatoshi.className} text-foreground text-2xl sm:text-4xl font-semibold leading-tight tracking-tight`}
							>
								{translate("contact.heading")}
							</h2>
						</div>

						<div
							className={`${fontSatoshi.className} space-y-5 text-muted text-base sm:text-lg leading-[1.55] max-w-2xl font-light`}
						>
							<p>
								{translate("contact.description")}
								<br />
								{translate("contact.descriptionSuffix")}
							</p>
						</div>

						<div className="flex flex-wrap items-center justify-center gap-4 pt-4">
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
								href="mailto:gomesalexandre227@gmail.com"
								icon={<Mail size={20} />}
								label="Email"
							/>
						</div>

						<div className="pt-8 opacity-40">
							<div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-muted to-transparent mx-auto mb-4"></div>
							<p
								className={`${fontSatoshi.className} text-xs text-muted uppercase tracking-widest`}
							>
								{translate("contact.availability")}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
		</section>
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
			className="group flex items-center justify-center p-3 sm:px-6 sm:py-3.5 gap-3 rounded-full border border-border-theme bg-card/60 backdrop-blur-md text-muted hover:text-foreground hover:border-muted hover:bg-card transition-all duration-300"
			aria-label={label}
		>
			{icon}
			<span className="font-medium text-sm sm:text-base">{label}</span>
		</Link>
	)
}
