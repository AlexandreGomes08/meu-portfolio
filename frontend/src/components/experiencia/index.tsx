"use client"

import { fontJetBrainsMono, fontSatoshi } from "@/app/fonts"
import { useLanguage } from "@/contexts/LanguageContext"
import { Calendar, MapPin } from "lucide-react"

interface Experience {
	id: number
	role: string
	company: string
	period: string
	type: string
	description: string[]
	techStack: string[]
}

const EXPERIENCES: Experience[] = [
	{
		id: 1,
		role: "Full Stack Developer",
		company: "UX Software",
		period: "Sep 2025 - Present",
		type: "Sobral - CE",
		description: [
			"Development of responsive landing pages and interfaces using React.js.",
			"Development and maintenance of cross-platform mobile apps with React Native.",
			"Integration with REST APIs and database-driven systems.",
			"App store publications and maintenance (App Store and Google Play).",
			"Backend integrations and bug fixes using NestJS.",
			"Version control and collaboration using Git and GitHub.",
			"System deployments via Vercel and Coolify.",
			"Client support and participation in weekly alignment meetings.",
		],
		techStack: [
			"React Native",
			"TypeScript",
			"NextJS",
			"PostgreSQL",
			"NestJS",
			"REST APIs",
			"Git",
			"Docker",
			"Vercel",
			"Coolify",
		],
	},

	{
		id: 2,
		role: "Mobile Developer Intern",
		company: "UX Software",
		period: "Nov 2024 - Sep 2025",
		type: "Sobral - CE",
		description: [
			"Development of custom mobile applications for internet service providers.",
			"Software maintenance, bug fixing, and technical support.",
			"Integration with ISP systems through REST APIs.",
			"Version control using Git and GitHub.",
			"Expo SDK updates and app compatibility maintenance.",
			"Support in production issue troubleshooting and client assistance.",
		],
		techStack: ["React Native", "Expo", "TypeScript", "REST APIs", "Git"],
	},

	{
		id: 3,
		role: "Data Analysis Scholar",
		company: "FUNCAP",
		period: "Jun 2024 - Jan 2025",
		type: "Remote",
		description: [
			"Development of Python scripts for web scraping and data analysis.",
			"Automation of data extraction workflows using Selenium.",
			"Data processing, cleaning, and structuring for backend consumption.",
			"Support for systems handling large data volumes.",
			"Application of data handling practices relevant to APIs and integrations.",
		],
		techStack: ["Python", "Selenium", "Pandas", "Data Processing", "Web Scraping"],
	},
]

export default function Experiencia() {
	const { translate } = useLanguage()

	return (
		<section
			id="experience"
			className="py-10 relative overflow-hidden scroll-mt-10 sm:scroll-mt-12"
		>
			<div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] -z-10 translate-y-[-50%]" />
			<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />

			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center mb-16 space-y-4 text-center">
					<h1
						className={`${fontJetBrainsMono.className} text-sm font-medium text-zinc-500 tracking-[0.2em] uppercase`}
					>
						{translate("experience.title")}
					</h1>
					<h2
						className={`${fontSatoshi.className} text-2xl sm:text-4xl font-semibold text-white/90 tracking-tight`}
					>
						{translate("experience.heading")}
					</h2>
				</div>

				<div className="relative max-w-5xl mx-auto">
					<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

					<div className="space-y-12">
						{EXPERIENCES.map((exp, index) => (
							<div
								key={exp.id}
								className={`relative flex flex-col md:flex-row items-center ${
									index % 2 === 0 ? "md:flex-row-reverse" : ""
								}`}
								data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
							>
								<div className="absolute left-4 md:left-1/2 w-3 h-3 bg-purple-500 rounded-full border-4 border-neutral-900 -translate-x-1/2 z-10" />

								<div className="w-full md:w-[45%] ml-10 md:ml-0">
									<div className="group bg-[#0f0f12]/80 backdrop-blur-md border border-white/[0.04] rounded-[24px] p-6 sm:p-8 hover:border-white/[0.1] transition-all duration-500 shadow-2xl">
										<div className="flex flex-col justify-between gap-3 mb-6">
											<div>
												<h3
													className={`${fontSatoshi.className} text-xl font-bold text-white/90 mb-1 group-hover:text-purple-400 transition-colors`}
												>
													{exp.role}
												</h3>
												<p className="text-zinc-400 font-medium text-sm">
													{exp.company}
												</p>
											</div>

											<div className="flex flex-col items-start gap-2">
												<div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] uppercase tracking-wider bg-white/[0.02] px-3 py-1 rounded-full border border-white/[0.05]">
													<Calendar size={12} />
													<span>{exp.period}</span>
												</div>
												<div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] uppercase tracking-wider bg-white/[0.02] px-3 py-1 rounded-full border border-white/[0.05]">
													<MapPin size={12} />
													<span>{exp.type}</span>
												</div>
											</div>
										</div>

										<ul className="space-y-3 mb-8">
											{exp.description.map((item, i) => (
												<li
													key={i}
													className="flex gap-3 text-zinc-400 text-sm leading-relaxed"
												>
													<span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/40 shrink-0" />
													{item}
												</li>
											))}
										</ul>

										<div className="flex flex-wrap gap-2">
											{exp.techStack.map((tech) => (
												<span
													key={tech}
													className="px-2.5 py-1 rounded-md text-[10px] font-mono border border-zinc-800 bg-neutral-900/50 text-zinc-400"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
