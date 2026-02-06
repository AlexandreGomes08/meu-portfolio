"use client"

import { fontSatoshi } from "@/app/fonts"
import { Calendar, ExternalLink, Github, Layers } from "lucide-react"
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
	}
	visual: string // Placeholder URL or color gradient
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
						<h3 className={`${fontSatoshi.className} text-xl sm:text-3xl font-semibold text-white/90 leading-tight`}>
							{project.title}
						</h3>
					</div>

					<div className="flex items-center gap-2 text-zinc-500/60 font-mono text-[10px] uppercase tracking-wider">
						<Calendar size={12} />
						<span>{project.period}</span>
					</div>

					<p className={`${fontSatoshi.className} text-zinc-400 text-sm sm:text-base leading-relaxed line-clamp-2`}>
						{project.shortDescription}
					</p>
				</div>


				{/* Technical Block */}
				{/* <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
					<div>
						<h4 className={`${fontSatoshi.className} text-[10px] font-bold text-zinc-500 uppercase tracking-tighter mb-0.5`}>Problem</h4>
						<p className={`${fontSatoshi.className} text-xs text-zinc-400 line-clamp-2 leading-snug`}>{project.technicalBlock.problem}</p>
					</div>
					<div>
						<h4 className={`${fontSatoshi.className} text-[10px] font-bold text-zinc-500 uppercase tracking-tighter mb-0.5`}>Solution</h4>
						<p className={`${fontSatoshi.className} text-xs text-zinc-400 line-clamp-2 leading-snug`}>{project.technicalBlock.solution}</p>
					</div>
					<div>
						<h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter mb-0.5 text-zinc-500">Result</h4>
						<p className="text-xs text-zinc-300 line-clamp-2 leading-snug">{project.technicalBlock.result}</p>
					</div>
				</div> */}

				<div className="flex flex-wrap gap-1.5 pt-3">
					{project.techStack.map((tech) => (
						<span 
							key={tech} 
							className="px-2 py-0.5 rounded-full text-[10px] font-medium border border-zinc-700/50 bg-zinc-800/30 text-zinc-400 flex items-center gap-1"
						>
							<span className="w-1 h-1 rounded-full bg-blue-500/50" />
							{tech}
						</span>
					))}
				</div>

				<div className="flex flex-wrap gap-3 pt-3">
					{project.links.live && (
						<Link 
							href={project.links.live} 
							target="_blank"
							className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white font-semibold text-xs hover:scale-105 transition-transform shadow-lg shadow-blue-500/10"
						>
							<ExternalLink size={14} />
							Demo
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
					<div className="absolute inset-0 bg-blue-600/5 rounded-2xl blur-[40px] group-hover:bg-blue-600/10 transition-all duration-700" />
					
					<div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800/50 bg-neutral-900/50 backdrop-blur-md p-1 shadow-xl">
						<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
						
						<div className="w-full h-full bg-zinc-900/80 flex flex-col items-center justify-center text-zinc-700 border border-zinc-800/50 rounded-[inherit]">
							<Layers size={40} className="mb-2 opacity-10" />
							<p className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-20">Preview</p>
						</div>

						<div className="absolute inset-0 pointer-events-none rounded-2xl border border-white/5" />
					</div>
				</div>
			</div>
		</div>
	)
}
