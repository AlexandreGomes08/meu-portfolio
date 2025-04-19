import { FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"

export default function Home() {
	return (
		<div className="w-[380px] h-[340px] rounded-3xl bg-gradient-to-r from-neutral-700 to-neutral-800 shadow-2xl">
			<div className="bg-gradient-to-r from-sky-700 to-cyan-300 m-5 flex items-center h-[45%] rounded-t-2xl shadow-2xl"></div>
			<div className="items-center flex justify-between px-5 mt-[-10px]">
				<p className="text-zinc-400 text-xs">Dez 2024 - Atual</p>
				<div className="flex flex-row gap-2">
					<IoLogoJavascript size={30} color="#e4e4e7" />
					<FaReact size={30} color="#e4e4e7" />
				</div>
			</div>
			<div className="flex flex-col px-5">
				<h1 className="text-zinc-100 text-base py-2">APPI</h1>
				<h2 className="text-zinc-400 text-sm">Aplicativos para Provedores de Internet</h2>
			</div>
		</div>
	)
}
