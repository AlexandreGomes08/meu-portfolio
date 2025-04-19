import { Tecnologia } from "@core"

export interface TecnologiasTrabalhadasProps {
	tecnologias: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
	return props.tecnologias ? (
		<div className="flex gap-x-3 flex-wrap pb-6">
			{props.tecnologias.map((tecnologia) => (
				<div key={tecnologia.id}>
					<span>{tecnologia.nome}</span>
				</div>
			))}
		</div>
	) : null
}
