import { notFound } from 'next/navigation'
import { isValidLocale, getContent } from '@/lib/i18n'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Works } from '@/components/sections/Works'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  const content = getContent(locale)

  return (
    <>
      <Hero content={content.hero} />
      <About content={content.about} experience={content.experience} />
      <Skills content={content.skills} />
      <Works content={content.works} />
    </>
  )
}
