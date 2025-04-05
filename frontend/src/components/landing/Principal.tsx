import Cabecalho from "../shared/Cabecalho"
import Image from "next/image"
import Container from "../shared/Container"
import { fonteKalam } from "@/app/layout"

export default function Principal() {
	return (
		<div className="flex flex-col h-[600px] bg-neutral-900">
			<Cabecalho />
			<div className="w-full h-full flex items-center pb-2 sm:pb-0">
				<Container className="flex-1 h-full flex sm:flex-row flex-col justify-between items-center">
					<div className="sm:order-2 mt-8 sm:mt-0">
						<Image
							className="rounded-full bg-gradient-to-r from-cyan-300 to-sky-700 p-1 sm:p-1.5 w-[200px] sm:w-[320px] "
							src="/minha-foto.jpeg"
							alt="Logo"
							width={320}
							height={0}
						/>
					</div>
					<div className=" max-w-2xl flex flex-col text-center sm:text-left sm:order-1 ">
						<h1
							className={`${fonteKalam.className} text-3xl sm:text-[40px] font-bold py-4 
    						bg-gradient-to-r from-cyan-300 to-sky-700 text-transparent bg-clip-text`}
						>
							Hi, I’m Alexandre Gomes
						</h1>
						<h2 className="text-zinc-200 text-[24px] py-2">
							Full-stack developer and innovation enthusiast
						</h2>
						<h3 className="text-zinc-500 text-[16px] py-2">
							Over 4 years of experience in the tech industry. I specialize in
							building innovative web and mobile applications using technologies such
							as React, React Native, and Node.js.
						</h3>
					</div>
				</Container>
			</div>
		</div>
	)
}
