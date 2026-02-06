"use client"

import { fontJetBrainsMono, fontSatoshi } from "@/app/fonts"
import { Github, Linkedin, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Contato() {
	return (
		<section
			id="contact"
			className="relative py-20 px-4 sm:px-6 overflow-hidden scroll-mt-4 sm:scroll-mt-6"
		>
			<div className="relative z-10 max-w-[1200px] mx-auto">
				<div
					data-aos="fade-up"
					className="bg-[#0f0f12]/80 backdrop-blur-md border border-white/[0.04] rounded-[32px] overflow-hidden px-8 py-16 sm:px-12 sm:py-20 shadow-2xl flex flex-col items-center text-center"
				>
					<div className="max-w-[760px] flex flex-col items-center space-y-10">
						<div className="space-y-5">
							<h1
								className={`${fontJetBrainsMono.className} text-sm font-medium text-zinc-500 tracking-[0.2em] uppercase`}
							>
								CONTACT
							</h1>

							<h2
								className={`${fontSatoshi.className} text-zinc-100 text-2xl sm:text-4xl font-semibold leading-tight tracking-tight`}
							>
								Let’s build something together.
							</h2>
						</div>

						<div
							className={`${fontSatoshi.className} space-y-5 text-zinc-400 text-base sm:text-lg leading-[1.55] max-w-2xl font-light`}
						>
							<p>
								I’m currently open to full-time roles, freelance projects, and
								collaborations.
								<br />
								Feel free to reach out — I usually reply within 24 hours.
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
								href="https://wa.me/5588999109162"
								icon={<MessageCircle size={20} />}
								label="WhatsApp"
							/>
						</div>

						<div className="pt-8 opacity-40">
							<div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-zinc-500 to-transparent mx-auto mb-4"></div>
							<p
								className={`${fontSatoshi.className} text-xs text-zinc-500 uppercase tracking-widest`}
							>
								Available for new opportunities
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
			className="group flex items-center justify-center p-3 sm:px-6 sm:py-3.5 gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-zinc-400 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300"
			aria-label={label}
		>
			{icon}
			<span className="font-medium text-sm sm:text-base">{label}</span>
		</Link>
	)
}
