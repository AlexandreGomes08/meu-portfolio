"use client"

import enTranslations from "@/locales/en.json"
import ptTranslations from "@/locales/pt.json"
import React, { createContext, useCallback, useContext, useState } from "react"

type Language = "en" | "pt"

interface LanguageContextType {
	language: Language
	setLanguage: (lang: Language) => void
	translate: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translationsMap = {
	en: enTranslations,
	pt: ptTranslations,
}

const getInitialLanguage = (): Language => {
	if (typeof document === "undefined") return "en"
	return (document.cookie.match(/language=(en|pt)/)?.[1] as Language) || "en"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguageState] = useState<Language>(getInitialLanguage)

	const setLanguage = (lang: Language) => {
		setLanguageState(lang)
		document.cookie = `language=${lang}; path=/; max-age=31536000`
		localStorage.setItem("language", lang)
	}

	const translate = useCallback(
		(key: string): string => {
			const keys = key.split(".")
			let value: any = translationsMap[language]

			for (const k of keys) {
				value = value?.[k]
				if (!value) return key
			}

			return value
		},
		[language],
	)

	return (
		<LanguageContext.Provider value={{ language, setLanguage, translate }}>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLanguage() {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider")
	}
	return context
}
