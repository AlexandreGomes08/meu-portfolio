import { fontJetBrainsMono, fontSatoshi } from "@/app/fonts"
import { Project } from "./ProjectCard"
import ProjectCarousel from "./ProjectCarousel"

const MOCK_PROJECTS: Project[] = [
	{
		id: 1,
		title: "APPI",
		category: "Mobile • Web • Dashboard",
		period: "Nov 2024 - Jun 2025",
		shortDescription:
			"A cross-platform app built with React Native, featuring a Next.js admin dashboard and a Nest.js API with PostgreSQL.",
		technicalBlock: {
			problem:
				"Complex data presentation was slowing down decision-making for operations managers.",
			solution:
				"Implemented an intuitive React-based dashboard with optimized state management and custom charting.",
			result: "40% reduction in time-to-insight and 2.5x faster page loads compared to legacy system.",
		},
		techStack: [
			"React Native",
			"Next.js",
			"TypeScript",
			"TailwindCSS",
			"Nest.js",
			"PostgreSQL",
		],
		links: {
			playstore: "https://play.google.com/store/apps/details?id=com.uxsoftware.appi",
			appstore: "https://apps.apple.com/us/app/appi/id6636485164",
			dashboard: "https://appiprovedor.vercel.app/login",
		},
		image: "/projetos/appi.png",
		visual: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
	},
	{
		id: 2,
		title: "Plataforma Solar",
		category: "Web • Dashboard",
		period: "Oct 2025 - Feb 2026",
		shortDescription:
			"A multi-tenant solar energy dashboard for creating quotes, managing projects, and connecting clients, integrators, and designers.",
		technicalBlock: {
			problem:
				"Users struggled to track assets across multiple chains with accuracy and low latency.",
			solution:
				"Developed a cross-platform app using React Native with a robust Node.js backend for price aggregation.",
			result: "Active user base grew by 150% in 3 months; 99.9% uptime for price streaming.",
		},
		techStack: ["Next.js", "Ant Design", "TypeScript", "TailwindCSS", "Nest.js", "PostgreSQL"],
		links: {
			dashboard: "https://portal.tellarsolucoes.com.br/cadastro",
			github: "#",
		},
		image: "/projetos/solar2.webp",
		visual: "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)",
	},
	{
		id: 3,
		title: "Meu Site Ágil",
		category: "Web • Dashboard",
		period: "Jun 2025 - Dec 2026",
		shortDescription:
			"Landing page for internet service providers with a panel for editing information, developed in Reactjs with tailwindcss styling.",
		technicalBlock: {
			problem:
				"Scaling the monolithic API was becoming impossible due to bottlenecked database connections.",
			solution:
				"Migrated to a NestJS-based microservices architecture with Kafka for event-driven processing.",
			result: "Scalability increased by 10x; server costs reduced by 35% through resource optimization.",
		},
		techStack: ["React", "Next.js", "TypeScript", "Nest.js", "PostgreSQL"],
		links: {
			dashboard: "https://www.meusiteagil.com.br/",
			github: "#",
		},
		image: "/projetos/msa.png",
		visual: "linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)",
	},
]

export default function Home() {
	return (
		<section
			id="projects"
			className="py-12 relative overflow-hidden scroll-mt-8 sm:scroll-mt-10"
		>
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
			<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10" />

			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center mb-10 space-y-3 text-center">
					<div className="flex items-center gap-2 text-zinc-500">
						<h1
							className={`${fontJetBrainsMono.className} text-sm font-medium text-zinc-500 tracking-[0.2em] uppercase`}
						>
							Projects
						</h1>
					</div>
					<h2
						className={`${fontSatoshi.className} text-2xl sm:text-4xl font-semibold text-white/90 tracking-tight`}
					>
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
