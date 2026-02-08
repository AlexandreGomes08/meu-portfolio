"use client"

import { fontJetBrainsMono, fontSatoshi } from "@/app/fonts"
import { useLanguage } from "@/contexts/LanguageContext"
import { Send } from "lucide-react"
import Link from "next/link"
import { FaDocker, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiNestjs, SiPostgresql, SiSupabase } from "react-icons/si"

export default function Resumo() {
	const { translate } = useLanguage()

	return (
		<section
			id="about"
			className="relative py-10 px-4 sm:px-6 overflow-hidden scroll-mt-10 sm:scroll-mt-12"
		>
			<div className="relative z-10 max-w-[1200px] mx-auto">
				<div className="bg-[#0f0f12]/80 backdrop-blur-md border border-white/[0.04] rounded-[32px] overflow-hidden px-8 py-16 sm:px-12 sm:py-16 shadow-2xl flex flex-col items-center text-center">
					<div
						data-aos="fade-up"
						className="max-w-[760px] flex flex-col items-center space-y-10"
					>
						<div className="flex gap-6 sm:gap-8 flex-wrap justify-center opacity-40 hover:opacity-100 transition-opacity duration-500">
							<SkillIcon icon={<IoLogoJavascript size={24} />} label="JavaScript" />
							<SkillIcon icon={<FaReact size={24} />} label="React" />
							<SkillIcon icon={<RiNextjsFill size={26} />} label="Next.js" />
							<SkillIcon
								icon={<RiTailwindCssFill size={24} />}
								label="Tailwind CSS"
							/>
							<SkillIcon icon={<SiNestjs size={24} />} label="NestJS" />
							<SkillIcon icon={<SiSupabase size={24} />} label="Supabase" />
							<SkillIcon icon={<SiPostgresql size={24} />} label="PostgreSQL" />
							<SkillIcon icon={<FaDocker size={24} />} label="Docker" />
						</div>

						<div className="space-y-5">
							<h1
								className={`${fontJetBrainsMono.className} text-sm font-medium text-zinc-500 tracking-[0.2em] uppercase`}
							>
								{translate("about.title")}
							</h1>

							<h2
								className={`${fontSatoshi.className} text-zinc-100 text-2xl sm:text-4xl font-semibold leading-tight tracking-tight`}
							>
								{translate("about.heading")}
							</h2>
						</div>

						<div
							className={`${fontSatoshi.className} space-y-5 text-zinc-400 text-base sm:text-lg leading-[1.55] max-w-2xl font-light`}
						>
							<p>{translate("about.paragraph1")}</p>
							<p>{translate("about.paragraph2")}</p>
						</div>

						<Link
							href="/#contact"
							className="group relative flex items-center justify-center gap-3 text-zinc-200 font-medium h-[52px] rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] hover:border-white/[0.15] hover:text-white transition-all duration-300 px-8"
						>
							<Send
								size={16}
								className="text-zinc-400 group-hover:text-white transition-colors"
							/>
							<span>{translate("about.contactButton")}</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

function SkillIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
	return (
		<div
			className="text-zinc-500 hover:text-zinc-200 hover:-translate-y-1 transition-all duration-300 ease-out cursor-default"
			title={label}
		>
			{icon}
		</div>
	)
}
