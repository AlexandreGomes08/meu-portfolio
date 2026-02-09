"use client"
import { useLanguage } from "@/contexts/LanguageContext"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
	const caminho = usePathname()
	const { translate } = useLanguage()

	return (
		<nav className="flex flex-col text-base items-end sm:items-normal sm:flex-row gap-6 sm:gap-6 pb-4 sm:pb-0">
			<MenuItem href="/#home" selecionado={caminho === "/"}>
				{translate("menu.home")}
			</MenuItem>
			<MenuItem href="/#about" selecionado={false}>
				{translate("menu.about")}
			</MenuItem>
			<MenuItem href="/#projects" selecionado={false}>
				{translate("menu.projects")}
			</MenuItem>
			<MenuItem href="/#experience" selecionado={false}>
				{translate("menu.experience")}
			</MenuItem>
			<MenuItem href="/#contact" selecionado={false}>
				{translate("menu.contact")}
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
		<Link
			href={props.href}
			target={props.novaAba ? "_blank" : "_self"}
			className="group outline-none"
		>
			<span
				className={`relative flex items-center gap-2 text-base transition-all duration-300 text-muted
				group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500
				group-focus-visible:bg-clip-text group-focus-visible:text-transparent group-focus-visible:bg-gradient-to-r group-focus-visible:from-purple-500 group-focus-visible:to-blue-500
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
