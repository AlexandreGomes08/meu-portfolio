import Cabecalho from "../shared/Cabecalho"
import Image from "next/image"
import Container from "../shared/Container"
import { fonteKalam } from "@/app/layout"

export default function Principal() {
	return (
		<div className="flex flex-col h-full sm:h-[600px] bg-neutral-900 ">
			<Cabecalho />
			<div className="w-full h-full flex items-center pb-12 sm:pb-0 sm:pt-10">
				<div className="flex-1 h-full flex sm:flex-row flex-col justify-between items-center max-w-6xl mx-auto px-4">
					<div className="sm:order-2 py-10 sm:py-0">
						<div className="fade-in-up">
							<Image
								className="rounded-full animated-border p-1 sm:p-1.5 w-[280px] sm:w-[340px] "
								src="/minha-foto.jpeg"
								alt="Logo"
								width={340}
								height={0}
							/>
						</div>
					</div>
					<div className="fade-in-up">
						<div className=" max-w-2xl flex flex-col sm:order-1">
							<h1
								className={`${fonteKalam.className} text-4xl sm:text-[40px] font-bold py-4 
    						animate-gradient-text`}
							>
								Hi, I’m Alexandre Gomes
							</h1>
							{/* <p className="text-3xl font-bold animate-gradient-text">
							Texto com gradiente animado
						</p> */}
							<h2 className="text-zinc-100 text-2xl sm:text-xl py-2">
								Full-stack developer and innovation enthusiast
							</h2>
							<h3 className="text-zinc-400 text-base py-2 px-2 sm:px-0">
								Over 4 years of experience in the tech industry. I specialize in
								building innovative web and mobile applications using technologies
								such as React, React Native, and Node.js.
							</h3>
							<div className="flex flex-row gap-3 justify-center sm:justify-start pt-4 sm:pt-0">
								{/* <button className="bg-gradient-to-r from-zinc-600 to-zinc-500 flex items-center justify-center gap-1 text-zinc-100 text-base w-[167px] h-[56px] rounded-lg py-2 mt-5 transition-transform duration-200">
								<Image src="/ReadCvLogo.png" alt="Logo" width={20} height={0} />
								My resume
							</button> */}

								{/* <button className="bg-gradient-to-r from-cyan-500 to-sky-700 flex items-center justify-center gap-1 w-[167px] h-[56px] text-zinc-100 text-base rounded-lg py-2 mt-5 transition-transform duration-200">
								Get in touch
								<Image src="/seta.png" alt="Logo" width={16} height={0} />
							</button> */}
								<div className="relative group mt-5">
									<div className="relative w-67 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
										<div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

										<div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
											<button
												name="text"
												className="flex items-center justify-center input font-semibold text-lg h-full opacity-90 w-full gap-2 rounded-xl bg-black"
											>
												Get in touch
												<Image
													src="/seta.png"
													alt="Logo"
													width={16}
													height={0}
												/>
											</button>
										</div>
										<div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-cyan-300 to-sky-400 blur-[30px]"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
