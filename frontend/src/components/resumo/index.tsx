import { fonteKalam } from "@/app/fonts"

import Image from "next/image"
import { FaDocker, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiNestjs } from "react-icons/si"

export default async function BotaoChat() {

	return (
		<div className="py-10 px-6 ">
			<div className="flex sm:flex-row flex-col sm:justify-between items-center px-0 sm:px-26 w-full h-200 sm:h-[500px] bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-2xl shadow-2xl">
				<div data-aos="fade-up">
					<Image
						src="/Programming-pana.png"
						alt="Logo"
						width={420}
						height={0}
						className="p-2 sm:p-1.5 py-8 sm:py-0 w-[300px] sm:w-[420px]"
					/>
				</div>
				<div data-aos="fade-up">
					<div className="px-6 h-[360px] max-w-xl flex flex-col">
						<div className="flex gap-x-3 flex-wrap pb-6">
							<IoLogoJavascript size={30} color="#e4e4e7" />
							<FaReact size={30} color="#e4e4e7" />
							<RiNextjsFill size={30} color="#e4e4e7" />
							<RiTailwindCssFill size={30} color="#e4e4e7" />
							<SiNestjs size={30} color="#e4e4e7" />
							<FaDocker size={30} color="#e4e4e7" />
						</div>
						{/* <Curriculo tecnologias={tecnologias.destaques} /> */}
						<h1
							className={`${fonteKalam.className} text-xl font-bold animate-gradient-text`}
						>
							About me
						</h1>
						<h2 className="text-zinc-100 text-xl py-2">
							I’m a passionate software developer looking for my first international
							oppotunity
						</h2>
						<h3 className="text-zinc-400 text-sm py-2">
							Beyond coding, I&apos;m a coffee enthusiast, a cat lover, and a self-taught
							artist who enjoys spending my free time doodling. I am currently seeking
							opportunities to bring my skills and enthusiasm to a tech company in the
							United States or Europe and am excited about the prospect of relocating
							to pursue new challenges.
						</h3>
						<button className="animated-button flex items-center justify-center gap-1 text-white text-base w-[167px] h-[56px] rounded-lg px-4 py-2 mt-5 transition-transform duration-200">
							<Image src="/ReadCvLogo.png" alt="Logo" width={20} height={0} />
							My resume
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
