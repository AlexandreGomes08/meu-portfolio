"use client"

import enTranslations from "@/locales/en.json"
import ptTranslations from "@/locales/pt.json"
import React, { createContext, useCallback, useContext, useState } from "react"

type Language = "en" | "pt"

interface LanguageContextType {
	language: Language
	setLanguage: (lang: Language) => void
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	translate: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

type TranslationValue = string | TranslationData | TranslationValue[]

type TranslationData = {
	[key: string]: TranslationValue
}

const translationsMap: Record<Language, TranslationData> = {
	en: enTranslations as unknown as TranslationData,
	pt: ptTranslations as unknown as TranslationData,
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
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(key: string): any => {
			const keys = key.split(".")
			let value: TranslationValue | undefined = translationsMap[language]

			for (const k of keys) {
				if (typeof value === "object" && value !== null && !Array.isArray(value)) {
					value = (value as TranslationData)[k]
				} else {
					return key
				}
			}

			return value !== undefined ? value : key
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
