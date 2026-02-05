import { fonteKalam } from "@/app/fonts"

import Image from "next/image"
import { FaDocker, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiNestjs } from "react-icons/si"

export default async function Resumo() {

	return (
		<section className="relative py-16 px-4 sm:px-6 overflow-hidden">
			<div className="relative z-10 max-w-[1400px] mx-auto">
				<div 
					className="bg-[#0f0f12]/80 backdrop-blur-sm border border-white/5 rounded-[28px] overflow-hidden p-8 sm:p-12 lg:p-16 shadow-2xl"
				>
					<div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
						<div data-aos="fade-up" className="flex-1 flex justify-center lg:justify-start">
							<div className="relative group">
								<div className="absolute inset-0 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
								<Image
									src="/Programming-pana.png"
									alt="About Me Illustration"
									width={450}
									height={0}
									className="relative z-10 w-full max-w-[320px] sm:max-w-[450px] drop-shadow-2xl"
								/>
							</div>
						</div>

						<div data-aos="fade-up" className="flex-1">
							<div className="max-w-xl flex flex-col space-y-6">
								<div className="flex gap-4 flex-wrap">
									<IoLogoJavascript size={28} className="text-zinc-500 hover:text-yellow-400 transition-colors" />
									<FaReact size={28} className="text-zinc-500 hover:text-blue-400 transition-colors" />
									<RiNextjsFill size={28} className="text-zinc-500 hover:text-white transition-colors" />
									<RiTailwindCssFill size={28} className="text-zinc-500 hover:text-sky-400 transition-colors" />
									<SiNestjs size={28} className="text-zinc-500 hover:text-red-500 transition-colors" />
									<FaDocker size={28} className="text-zinc-500 hover:text-blue-500 transition-colors" />
								</div>

								<h1 className={`${fonteKalam.className} text-xl font-bold text-purple-400 tracking-wide uppercase`}>
									About me
								</h1>

								<h2 className="text-zinc-100 text-2xl sm:text-3xl font-semibold leading-tight">
									I’m a passionate software developer looking for my first international opportunity.
								</h2>

								<div className="space-y-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
									<p>
										Beyond coding, I&apos;m a coffee enthusiast, a cat lover, and a self-taught
										artist who enjoys spending my free time doodling.
									</p>
									<p>
										I am currently seeking opportunities to bring my skills and enthusiasm to a tech company in the
										United States or Europe and am excited about the prospect of relocating
										to pursue new challenges.
									</p>
								</div>

								<button className="animated-button flex items-center justify-center gap-2 text-white font-medium w-fit min-w-[180px] h-[56px] rounded-full border border-zinc-700/50 bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-800 hover:border-zinc-500 transition-all px-8">
									<Image src="/ReadCvLogo.png" alt="Resume Icon" width={22} height={0} />
									My resume
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
