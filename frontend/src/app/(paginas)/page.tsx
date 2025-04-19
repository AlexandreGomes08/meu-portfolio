import Principal from "@/components/landing/Principal"
import Projetos from "@/components/projetos"
import Resumo from "@/components/resumo"

export default function Home() {
	return (
		<div className="bg-neutral-900">
			<Principal />
			<Resumo />
			<Projetos />
		</div>
	)
}
