import { JetBrains_Mono, Kalam, Space_Grotesk } from "next/font/google"

export const fonteKalam = Kalam({
	weight: "400",
	subsets: ["latin"],
})

export const fontSatoshi = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-satoshi",
})

export const fontJetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-mono",
})
