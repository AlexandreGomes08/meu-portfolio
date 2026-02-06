"use client"

import { fontJetBrainsMono, fontSatoshi } from "@/app/fonts"
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
		role: "Senior Full Stack Developer",
		company: "Tech Solutions Inc.",
		period: "Jan 2023 - Present",
		type: "Remote",
		description: [
			"Led the development of a high-performance analytics dashboard using Next.js and Go.",
			"Optimized database queries decreasing page load time by 40%.",
			"Mentored junior developers and implemented code review standards.",
			"Architected a scalable microservices infrastructure using Docker and Kubernetes.",
		],
		techStack: ["Next.js", "Go", "PostgreSQL", "Docker", "Kubernetes"],
	},
	{
		id: 2,
		role: "Full Stack Developer",
		company: "Digital Innovations",
		period: "Jun 2021 - Dec 2022",
		type: "Hybrid",
		description: [
			"Developed and maintained complex web applications using React and Node.js.",
			"Integrated third-party APIs for payment processing and data synchronization.",
			"Improved SEO performance and accessibility across all client projects.",
			"Collaborated with UI/UX designers to implement pixel-perfect interfaces.",
		],
		techStack: ["React", "Node.js", "MongoDB", "TailwindCSS", "AWS"],
	},
	{
		id: 3,
		role: "Junior Web Developer",
		company: "StartUp Hub",
		period: "Jan 2020 - May 2021",
		type: "On-site",
		description: [
			"Assisted in the development of responsive websites using HTML, CSS, and JavaScript.",
			"Implemented frontend components according to design specifications.",
			"Participated in agile ceremonies and contributed to daily standups.",
			"Built reusable UI components that accelerated development speed by 15%.",
		],
		techStack: ["JavaScript", "React", "SASS", "Firebase", "Git"],
	},
]

export default function Experiencia() {
	return (
		<section id="experience" className="py-20 relative overflow-hidden">
			<div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] -z-10 translate-y-[-50%]" />
			<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />

			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center mb-16 space-y-4 text-center">
					<h1
						className={`${fontJetBrainsMono.className} text-sm font-medium text-zinc-500 tracking-[0.2em] uppercase`}
					>
						Career Path
					</h1>
					<h2
						className={`${fontSatoshi.className} text-2xl sm:text-4xl font-semibold text-white/90 tracking-tight`}
					>
						Professional{" "}
						<span className="text-zinc-500 font-light italic">Experience</span>
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
