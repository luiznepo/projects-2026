import { ptContent } from '@/content/pt'
import { esContent } from '@/content/es'
import { enContent } from '@/content/en'

export const locales = ['pt', 'es', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'pt'

const contents = { pt: ptContent, es: esContent, en: enContent }

export function getContent(locale: Locale) {
  return contents[locale] ?? contents[defaultLocale]
}

export function isValidLocale(value: unknown): value is Locale {
  return locales.includes(value as Locale)
}
