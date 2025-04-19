"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Container from "./Container"
import Menu from "./Menu"
import { FiMenu, FiX } from "react-icons/fi"

export default function Cabecalho() {
	const [menuAberto, setMenuAberto] = useState(false)
	return (
		<header className="bg-neutral-900 w-full flex items-center h-16 sm:h-20 shadow-2xl sm:fixed z-20">
			<Container className="flex-1 flex justify-between items-center">
				<div className="flex items-center gap-10 w-[46px] sm:w-[60px]">
					<Link href="/" className="">
						<Image src="/logo.png" alt="Logo" width={60} height={0} />
					</Link>
				</div>
				<div className="sm:hidden">
					<button
						onClick={() => setMenuAberto(!menuAberto)}
						className="flex items-center"
					>
						{menuAberto ? (
							<FiX size={30} color="#e4e4e7" />
						) : (
							<FiMenu size={30} color="#e4e4e7" />
						)}
					</button>
				</div>
				<div className="hidden sm:flex items-center gap-10">
					<Menu />
					<div className="flex gap-4">
						<Link href="https://github.com/AlexandreGomes08" target="_blank">
							<Image src="/git.svg" alt="Git" width={30} height={0} />
						</Link>
						<Link href="/" target="_blank">
							<Image src="/whatsapp.png" alt="Whatsapp" width={30} height={0} />
						</Link>
						<Link href="https://www.linkedin.com/in/alexandregomesdev/" target="_blank">
							<Image src="/linkedin.svg" alt="Linkedin" width={30} height={0} />
						</Link>
					</div>
				</div>
				{menuAberto && (
					<div className="absolute top-16 right-0 left-auto w-[82%] h-full bg-neutral-900 shadow-2xl text-zinc-100 flex flex-col items-end  text-base gap-5 p-5 sm:hidden z-50">
						<Menu />
						<div className="w-full h-[1px] bg-gray-500"></div>

						<div className="flex gap-4 pt-4">
							<Link href="https://github.com/AlexandreGomes08" target="_blank">
								<Image src="/git.svg" alt="Git" width={30} height={0} />
							</Link>
							<Link href="/" target="_blank">
								<Image src="/whatsapp.png" alt="Whatsapp" width={30} height={0} />
							</Link>
							<Link
								href="https://www.linkedin.com/in/alexandregomesdev/"
								target="_blank"
							>
								<Image src="/linkedin.svg" alt="Linkedin" width={30} height={0} />
							</Link>
						</div>
					</div>
				)}
			</Container>
		</header>
	)
}
