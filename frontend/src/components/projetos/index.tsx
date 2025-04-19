import { fonteKalam } from "@/app/layout"
import CardProjeto from "./cardProjeto"

export default function Home() {
	return (
		<div data-aos="fade-up">
			<div className="flex flex-col items-center justify-center h-full sm:h-[600px]">
				<h1 className={`${fonteKalam.className} text-xl font-bold animate-gradient-text`}>
					Projects
				</h1>
				<h2 className="text-zinc-100 text-xl py-3">
					Take a look at my highlighted projects
				</h2>
				<div className="flex flex-row gap-7 justify-center pt-5">
					<CardProjeto />
					<CardProjeto />
					<CardProjeto />
				</div>
			</div>
		</div>
	)
}
