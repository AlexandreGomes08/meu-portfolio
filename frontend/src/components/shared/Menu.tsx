"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
	const caminho = usePathname()
	return (
		<nav className="flex flex-col text-base items-end sm:items-normal sm:flex-row gap-8 sm:gap-7 pb-4 sm:pb-0">
			<MenuItem href="/" selecionado={caminho === "/"}>
				Home
			</MenuItem>
			<MenuItem href="/sobre" selecionado={caminho.startsWith("/sobre")}>
				About
			</MenuItem>
			<MenuItem href="/projeto/1" selecionado={caminho.startsWith("/projeto")}>
				Projects
			</MenuItem>
			<MenuItem href="/contato" selecionado={false} novaAba={true}>
				Contact
			</MenuItem>
		</nav>
	)
}

function MenuItem(props: {
	href: string
	children: React.ReactNode
	selecionado: boolean
	novaAba?: boolean
}) {
	return (
		<Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
			<span
				className={`flex items-center gap-2 text-base hover-gradient-text
                ${props.selecionado ? "font-bold text-zinc-100" : "text-zinc-300"}`}
			>
				{props.children}
			</span>
		</Link>
	)
}
