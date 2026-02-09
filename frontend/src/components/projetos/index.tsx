"use client"

import { fontJetBrainsMono, fontSatoshi } from "@/app/fonts"
import { useLanguage } from "@/contexts/LanguageContext"
import ProjectCarousel from "./ProjectCarousel"

export default function Home() {
	const { translate } = useLanguage()

	return (
		<section
			id="projects"
			className="py-12 relative overflow-hidden scroll-mt-8 sm:scroll-mt-10"
		>
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10" />
			<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10" />

			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center mb-10 space-y-3 text-center">
					<div className="flex items-center gap-2 text-zinc-500">
						<h1
							className={`${fontJetBrainsMono.className} text-sm font-medium text-zinc-500 tracking-[0.2em] uppercase`}
						>
							{translate("projects.title")}
						</h1>
					</div>
					<h2
						className={`${fontSatoshi.className} text-2xl sm:text-4xl font-semibold text-foreground tracking-tight`}
					>
						{translate("projects.heading")}{" "}
						<span className="text-zinc-500">
							{translate("projects.headingHighlight")}
						</span>{" "}
						{translate("projects.headingSuffix")}
					</h2>
				</div>

				<div data-aos="fade-up">
					<ProjectCarousel projects={translate("projects.items") || []} />
				</div>
			</div>
		</section>
	)
}
