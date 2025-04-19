import type { Metadata } from "next"
import { Montserrat, Kalam } from "next/font/google"
import "./globals.css"
import AOSInit from "@/components/AOSInit"

export const metadata: Metadata = {
	title: "Alexandre Gomes - Portfolio",
	description: "Portfólio de projetos de desenvolvimento",
	icons: {
		icon: "/logo.png",
	},
}

const fonte = Montserrat({
	subsets: ["latin"],
})

export const fonteKalam = Kalam({
	weight: "400",
	subsets: ["latin"],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${fonte.className} antialiased`}>
				<AOSInit />
				{children}
			</body>
		</html>
	)
}
