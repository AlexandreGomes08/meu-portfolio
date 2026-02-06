import { fontJetBrainsMono, fontSatoshi } from "@/app/fonts"
import { Project } from "./ProjectCard"
import ProjectCarousel from "./ProjectCarousel"

const MOCK_PROJECTS: Project[] = [
	{
		id: 1,
		title: "Nexus Dashboard",
		category: "Web • Dashboard",
		period: "Jun 2021 - Dec 2022",
		shortDescription: "A high-performance real-time analytics platform for enterprise SaaS, focusing on visual clarity and developer experience.",
		technicalBlock: {
			problem: "Complex data presentation was slowing down decision-making for operations managers.",
			solution: "Implemented an intuitive React-based dashboard with optimized state management and custom charting.",
			result: "40% reduction in time-to-insight and 2.5x faster page loads compared to legacy system."
		},
		techStack: ["React", "Next.js", "TypeScript", "TailwindCSS", "Recharts"],
		links: {
			live: "#",
			github: "#",
			details: "#"
		},
		visual: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
	},
	{
		id: 2,
		title: "Pulse Crypto Hub",
		category: "Mobile • Web3",
		period: "Mar 2024 - Atual",
		shortDescription: "A secure and lightning-fast cryptocurrency portfolio tracker with real-time price alerts and cross-platform synchronization.",
		technicalBlock: {
			problem: "Users struggled to track assets across multiple chains with accuracy and low latency.",
			solution: "Developed a cross-platform app using React Native with a robust Node.js backend for price aggregation.",
			result: "Active user base grew by 150% in 3 months; 99.9% uptime for price streaming."
		},
		techStack: ["React Native", "Node.js", "Redis", "Postgres", "WebSockets"],
		links: {
			live: "#",
			github: "#"
		},
		visual: "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)"
	},
	{
		id: 3,
		title: "Core API Engine",
		category: "API • Architecture",
		period: "Jun 2021 - Dec 2022",
		shortDescription: "A scalable microservices orchestrator designed to handle millions of requests monthly with ultra-low latency.",
		technicalBlock: {
			problem: "Scaling the monolithic API was becoming impossible due to bottlenecked database connections.",
			solution: "Migrated to a NestJS-based microservices architecture with Kafka for event-driven processing.",
			result: "Scalability increased by 10x; server costs reduced by 35% through resource optimization."
		},
		techStack: ["NestJS", "Kafka", "Docker", "Kubernetes", "MongoDB"],
		links: {
			github: "#",
			details: "#"
		},
		visual: "linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)"
	}
]

export default function Home() {
	return (
		<section id="projects" className="py-12 relative overflow-hidden">
			{/* Subtle Background Effects */}
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
			<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10" />

			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center mb-10 space-y-3 text-center">
					<div className="flex items-center gap-2 text-zinc-500">
						<h1 className={`${fontJetBrainsMono.className} text-sm font-medium text-zinc-500 tracking-[0.2em] uppercase`}>
						Projects
					</h1>
					</div>
					<h2 className={`${fontSatoshi.className} text-2xl sm:text-4xl font-semibold text-white/90 tracking-tight`}>
						Building <span className="text-zinc-500">scalable</span> digital solutions
					</h2>
				</div>

				<div data-aos="fade-up">
					<ProjectCarousel projects={MOCK_PROJECTS} />
				</div>
			</div>
		</section>
	)
}
