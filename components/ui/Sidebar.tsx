'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Locale } from '@/lib/i18n'
import { SiteContent } from '@/content/types'

interface SidebarProps {
  locale: Locale
  content: SiteContent
}

const FLAGS: Record<Locale, string> = { pt: '🇧🇷', es: '🇪🇸', en: '🇺🇸' }
const LOCALES: Locale[] = ['pt', 'es', 'en']

export function Sidebar({ locale, content }: SidebarProps) {
  const pathname = usePathname()
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'works']
    const onScroll = () => {
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 160) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'home', label: content.nav.home },
    { id: 'about', label: content.nav.about },
    { id: 'skills', label: content.nav.skills },
    { id: 'works', label: content.nav.works },
  ]

  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
  const isProjectPage = pathname.includes('/projetos/')
  const homeBase = `/${locale}`

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside
        style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}
        className="hidden lg:flex fixed left-0 top-0 h-screen w-[285px] flex-col items-center justify-between py-14 z-50 bg-[#141313]"
        aria-label="Navegação principal"
      >
        {/* Logo + Nav grouped */}
        <div className="flex flex-col items-center gap-10">
          <div
            style={{ fontFamily: 'var(--font-ibm-plex-serif), "IBM Plex Serif", serif' }}
            className="text-white font-bold text-[30px] leading-[39px] tracking-normal select-none"
          >
            LF
          </div>

          {/* Nav */}
          <nav className="flex flex-col items-center gap-5">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={isProjectPage ? `${homeBase}#${id}` : `#${id}`}
              onClick={() => !isProjectPage && setActive(id)}
              className="text-[20px] leading-[30px] text-center transition-all duration-200"
              style={{
                fontWeight: active === id ? 700 : 400,
                color: active === id ? '#FF6C63' : '#ffffff',
              }}
            >
              {label}
            </a>
          ))}
          </nav>
        </div>

        {/* Language buttons */}
        <div className="flex flex-col items-center gap-2">
          {LOCALES.map((l) => (
            <Link
              key={l}
              href={`/${l}${pathWithoutLocale}`}
              className="flex items-center gap-4 px-6 rounded-[14px] transition-all duration-200"
              style={{
                backgroundColor: l === locale ? 'rgb(229,231,235)' : 'rgb(249,250,251)',
                border: '2px solid rgb(229,231,235)',
                height: '44px',
                width: '189px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-inter), "Inter", sans-serif',
                  fontSize: '36px',
                  lineHeight: '40px',
                  color: '#0a0a0a',
                  width: '36px',
                  textAlign: 'center',
                }}
              >
                {FLAGS[l]}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-inter), "Inter", sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '-0.3125px',
                  color: 'rgb(54,65,83)',
                }}
              >
                {content.langButtons[l]}
              </span>
            </Link>
          ))}
        </div>
      </aside>

      {/* ── Mobile header ── */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#141313]">
        <span
          style={{ fontFamily: 'var(--font-ibm-plex-serif), "IBM Plex Serif", serif' }}
          className="text-white font-bold text-2xl"
        >
          LF
        </span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white p-1"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-4 h-0.5 bg-white" />
          </div>
        </button>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-[60px] inset-x-0 z-40 bg-[#141313] px-6 py-8 flex flex-col gap-6"
          >
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={isProjectPage ? `${homeBase}#${id}` : `#${id}`}
                onClick={() => { setMobileOpen(false); if (!isProjectPage) setActive(id) }}
                className="text-lg text-center transition-all duration-200"
                style={{
                  fontWeight: active === id ? 700 : 400,
                  color: active === id ? '#FF6C63' : '#ffffff',
                }}
              >
                {label}
              </a>
            ))}
            <div className="flex flex-col items-center gap-2 pt-4 border-t border-white/10">
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  href={`/${l}${pathWithoutLocale}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl"
                  style={{
                    backgroundColor: l === locale ? 'rgb(229,231,235)' : 'rgb(249,250,251)',
                    border: '1.5px solid rgb(229,231,235)',
                  }}
                >
                  <span className="text-2xl">{FLAGS[l]}</span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '14px', color: 'rgb(54,65,83)' }}>
                    {content.langButtons[l]}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
