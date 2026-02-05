"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
	const caminho = usePathname()
	return (
		<nav className="flex flex-col text-base items-end sm:items-normal sm:flex-row gap-6 sm:gap-6 pb-4 sm:pb-0">
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
		<Link href={props.href} target={props.novaAba ? "_blank" : "_self"} className="group outline-none">
			<span
				className={`relative flex items-center gap-2 text-base transition-colors duration-300
                ${props.selecionado ? "font-bold text-zinc-100" : "text-zinc-300 group-hover:text-zinc-100 group-focus-visible:text-zinc-100"}
				after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1.5px] 
				after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 
				after:origin-left after:scale-x-0 after:opacity-0 
				after:transition-all after:duration-300 after:ease-out
				group-hover:after:scale-x-100 group-hover:after:opacity-100
				group-focus-visible:after:scale-x-100 group-focus-visible:after:opacity-100
				motion-reduce:after:transition-none`}
			>
				{props.children}
			</span>
		</Link>
	)
}
