import Experiencia from "@/components/experiencia"
import DustParticles from "@/components/landing/DustParticles"
import Principal from "@/components/landing/Principal"
import Projetos from "@/components/projetos"
import Resumo from "@/components/resumo"

export default function Home() {
	return (
		<div className="bg-neutral-900 min-h-screen flex flex-col">
			<div className="relative bg-[#0a0a0a] overflow-hidden">
				<div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
					<DustParticles />
					<div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
					<div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
				</div>
				
				<div className="relative z-10 w-full">
					<Principal />
					<Resumo />
					<Projetos />
					<Experiencia />
				</div>
			</div>			
		</div>
	)
}
