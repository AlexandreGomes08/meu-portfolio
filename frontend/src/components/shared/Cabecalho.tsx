"use client"
import { fontSatoshi } from "@/app/fonts"
import { useLanguage } from "@/contexts/LanguageContext"
import { CodeXml, Languages, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import Container from "./Container"
import Menu from "./Menu"

export default function Cabecalho() {
	const [menuAberto, setMenuAberto] = useState(false)
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const { language, setLanguage } = useLanguage()

	useEffect(() => {
		setMounted(true)
	}, [])

	const toggleLanguage = () => {
		setLanguage(language === "en" ? "pt" : "en")
	}

	return (
		<header className="fixed top-0 left-0 right-0 z-50 w-full flex items-center h-14 sm:h-16 transition-all duration-300 bg-background/75 backdrop-blur-md border-b border-border-theme shadow-lg">
			<Container className="flex-1 flex justify-between items-center">
				<div className="flex items-center">
					<Link href="/" className="group flex items-center gap-2 outline-none">
						<svg width="0" height="0" className="absolute">
							<defs>
								<linearGradient
									id="logo-gradient"
									x1="0%"
									y1="0%"
									x2="100%"
									y2="100%"
								>
									<stop offset="0%" stopColor="#A855F7" /> {/* Purple-500 */}
									<stop offset="100%" stopColor="#3B82F6" /> {/* Blue-500 */}
								</linearGradient>
							</defs>
						</svg>

						<CodeXml
							className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300"
							style={{ stroke: "url(#logo-gradient)" }}
						/>

						<span
							className={`${fontSatoshi.className} text-foreground/90 text-xl sm:text-2xl tracking-tighter transition-colors duration-300 group-hover:text-foreground`}
						>
							Alexandre.dev
						</span>
					</Link>
				</div>
				<div className="sm:hidden">
					<button
						onClick={() => setMenuAberto(!menuAberto)}
						className="flex items-center text-foreground"
					>
						{menuAberto ? <FiX size={28} /> : <FiMenu size={28} />}
					</button>
				</div>
				<div className="hidden sm:flex items-center gap-10">
					<Menu />
					<div className="flex items-center gap-4 text-muted">
						<div className="h-6 w-[1px] bg-border-theme"></div>

						<button
							onClick={toggleLanguage}
							className="hover:text-foreground transition-colors flex items-center gap-1 font-medium text-sm"
							aria-label="Toggle Language"
						>
							<Languages size={18} />
							<span>{language.toUpperCase()}</span>
						</button>

						<button
							onClick={() => mounted && setTheme(theme === "dark" ? "light" : "dark")}
							className="hover:text-foreground transition-colors"
							aria-label="Toggle Theme"
							disabled={!mounted}
						>
							{mounted ? (
								theme === "dark" ? (
									<Sun size={20} />
								) : (
									<Moon size={20} />
								)
							) : (
								<Sun size={20} />
							)}
						</button>
					</div>
				</div>
				{menuAberto && (
					<div className="absolute top-14 sm:top-16 right-0 left-auto w-[82%] h-[calc(100vh-3.5rem)] bg-background/95 backdrop-blur-xl border-l border-border-theme shadow-2xl text-foreground flex flex-col items-end text-base gap-5 p-5 sm:hidden z-50 transition-all">
						<Menu />
						<div className="w-full h-[1px] bg-border-theme"></div>

						<div className="flex items-center gap-6 pt-4">
							<button
								onClick={toggleLanguage}
								className="flex items-center gap-2 text-muted hover:text-foreground"
							>
								<Languages size={20} />
								<span>{language === "en" ? "English" : "Português"}</span>
							</button>

							{mounted && (
								<button
									onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
									className="flex items-center gap-2 text-muted hover:text-foreground"
								>
									{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
									<span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
								</button>
							)}
						</div>
					</div>
				)}
			</Container>
		</header>
	)
}
