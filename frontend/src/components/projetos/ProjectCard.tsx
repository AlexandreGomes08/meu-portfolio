"use client"

import { fontSatoshi } from "@/app/fonts"
import { Apple, Calendar, ExternalLink, Github, Layers, Play } from "lucide-react"
import Link from "next/link"

export interface Project {
	id: number
	title: string
	category: string
	period: string
	shortDescription: string
	technicalBlock: {
		problem: string
		solution: string
		result: string
	}
	techStack: string[]
	links: {
		live?: string
		github?: string
		details?: string
		playstore?: string
		appstore?: string
		dashboard?: string
	}
	visual: string
	image?: string
}

interface ProjectCardProps {
	project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-10 items-center bg-[#0f0f12]/80 backdrop-blur-md border border-white/[0.04] rounded-[32px] p-6 sm:py-12 sm:px-10">
			<div className="flex-1 w-full max-w-[520px] space-y-6 text-left">
				<div className="space-y-4 mb-12">
					<div>
						<span className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-purple-500/10 mb-3 inline-block">
							{project.category}
						</span>
						<h3
							className={`${fontSatoshi.className} text-xl sm:text-3xl font-semibold text-white/90 leading-tight`}
						>
							{project.title}
						</h3>
					</div>
					<div className="flex items-center gap-2">
						<div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] uppercase tracking-wider bg-white/[0.02] px-3 py-1 rounded-full border border-white/[0.05]">
							<Calendar size={12} />
							<span>{project.period}</span>
						</div>
					</div>

					<p
						className={`${fontSatoshi.className} text-zinc-400 text-sm sm:text-base leading-relaxed line-clamp-2`}
					>
						{project.shortDescription}
					</p>
				</div>

				<div className="flex flex-wrap gap-1.5 pt-3">
					{project.techStack.map((tech) => (
						<span
							key={tech}
							className="px-2 py-0.5 rounded-full text-[10px] font-medium border border-zinc-700/50 bg-zinc-800/30 text-zinc-400 flex items-center gap-1"
						>
							<span className="w-1 h-1 rounded-full bg-purple-500/50" />
							{tech}
						</span>
					))}
				</div>

				<div className="flex flex-wrap gap-3 pt-3">
					{project.links.playstore && (
						<Link
							href={project.links.playstore}
							className="flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 font-semibold text-xs hover:text-white transition-all"
							target="_blank"
						>
							<Play size={14} />
							Play Store
						</Link>
					)}

					{project.links.appstore && (
						<Link
							href={project.links.appstore}
							className="flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 font-semibold text-xs hover:text-white transition-all"
							target="_blank"
						>
							<Apple size={14} />
							App Store
						</Link>
					)}

					{project.links.dashboard && (
						<Link
							href={project.links.dashboard}
							className="flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 font-semibold text-xs hover:text-white transition-all"
							target="_blank"
						>
							<ExternalLink size={14} />
							Dashboard
						</Link>
					)}
					{project.links.github && (
						<Link
							href={project.links.github}
							target="_blank"
							className="flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 font-semibold text-xs hover:text-white transition-all"
						>
							<Github size={14} />
							GitHub
						</Link>
					)}
				</div>
			</div>

			<div className="flex-1 w-full max-w-[420px] lg:ml-auto">
				<div className="relative group">
					<div className="absolute inset-0 bg-purple-600/5 rounded-2xl blur-[40px] group-hover:bg-purple-600/10 transition-all duration-700" />

					<div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800/50 bg-neutral-900/50 backdrop-blur-md p-1 shadow-xl">
						<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/5" />

						{/* <div className="w-full h-full bg-zinc-900/80 flex flex-col items-center justify-center text-zinc-700 border border-zinc-800/50 rounded-[inherit]">
							<Layers size={40} className="mb-2 opacity-10" />
							<p className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-20">
								Preview
							</p>
						</div> */}
						{project.image ? (
							<img
								src={project.image}
								alt={`${project.title} preview`}
								className="w-full h-full object-cover rounded-[inherit] transition-transform duration-700 group-hover:scale-[1.03]"
							/>
						) : (
							<div className="w-full h-full bg-zinc-900/80 flex items-center justify-center">
								<Layers size={40} className="opacity-10" />
							</div>
						)}

						<div className="absolute inset-0 pointer-events-none rounded-2xl border border-white/5" />
					</div>
				</div>
			</div>
		</div>
	)
}
