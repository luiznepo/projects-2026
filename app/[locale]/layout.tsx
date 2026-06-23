import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, getContent } from '@/lib/i18n'
import { Sidebar } from '@/components/ui/Sidebar'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) return {}
  const content = getContent(locale)
  return {
    title: content.meta.title,
    description: content.meta.description,
  }
}

export async function generateStaticParams() {
  return [{ locale: 'pt' }, { locale: 'es' }, { locale: 'en' }]
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const content = getContent(locale)

  return (
    <>
      <Sidebar locale={locale} content={content} />
      <main className="lg:pl-[285px] pt-[60px] lg:pt-0">{children}</main>
    </>
  )
}
