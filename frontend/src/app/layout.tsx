import AOSInit from "@/components/AOSInit"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
	title: "Alexandre Gomes - Portfolio",
	description: "Portfólio de projetos de desenvolvimento",
	icons: {
		icon: "/logo.png",
	},
}

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
})



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
			<body className="antialiased bg-neutral-950 text-gray-200">
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<AOSInit />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
