import Tecnologia from "../tecnologia/Tecnologia"
import { Nivel } from "./Nivel"
import { Tipo } from "./Tipo"

export default interface Projeto {
	id: number
	nome: string
	descricao: string
	imagem: string
	tipo: Tipo
	Nivel: Nivel
	repositorio: string
	destaque: boolean
	tecnologias: Tecnologia[]
}
