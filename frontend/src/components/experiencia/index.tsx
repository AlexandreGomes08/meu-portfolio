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
						className={`${fontJetBrainsMono.className} text-sm font-medium text-muted-foreground tracking-[0.2em] uppercase`}
					>
						{translate("experience.title")}
					</h1>
					<h2
						className={`${fontSatoshi.className} text-2xl sm:text-4xl font-semibold text-foreground/90 tracking-tight`}
					>
						{translate("experience.heading")}
					</h2>
				</div>

				<div className="relative max-w-5xl mx-auto">
					<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-border-theme -translate-x-1/2" />

					<div className="space-y-12">
						{(translate("experience.items") || []).map(
							(exp: Experience, index: number) => (
								<div
									key={exp.id}
									className={`relative flex flex-col md:flex-row items-center ${
										index % 2 === 0 ? "md:flex-row-reverse" : ""
									}`}
									data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
								>
									<div className="absolute left-4 md:left-1/2 w-3 h-3 bg-purple-500 rounded-full border-4 border-background -translate-x-1/2 z-10" />

									<div className="w-full md:w-[45%] ml-10 md:ml-0">
										<div className="group bg-card/80 backdrop-blur-md border border-border-theme rounded-[24px] p-6 sm:p-8 hover:border-muted transition-all duration-500 shadow-2xl">
											<div className="flex flex-col justify-between gap-3 mb-6">
												<div>
													<h3
														className={`${fontSatoshi.className} text-xl font-bold text-foreground/90 mb-1 group-hover:text-purple-400 transition-colors`}
													>
														{exp.role}
													</h3>
													<p className="text-muted font-medium text-sm">
														{exp.company}
													</p>
												</div>

												<div className="flex flex-col items-start gap-2">
													<div className="flex items-center gap-2 text-muted-foreground font-mono text-[10px] uppercase tracking-wider bg-foreground/[0.02] px-3 py-1 rounded-full border border-border-theme">
														<Calendar size={12} />
														<span>{exp.period}</span>
													</div>
													<div className="flex items-center gap-2 text-muted-foreground font-mono text-[10px] uppercase tracking-wider bg-foreground/[0.02] px-3 py-1 rounded-full border border-border-theme">
														<MapPin size={12} />
														<span>{exp.type}</span>
													</div>
												</div>
											</div>

											<ul className="space-y-3 mb-8">
												{exp.description.map((item, i) => (
													<li
														key={i}
														className="flex gap-3 text-muted text-sm leading-relaxed"
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
														className="px-2.5 py-1 rounded-md text-[10px] font-mono border border-border-theme bg-card text-muted"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							),
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
