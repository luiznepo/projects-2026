'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SiteContent } from '@/content/types'

interface HeroProps {
  content: SiteContent['hero']
}

export function Hero({ content }: HeroProps) {
  return (
    <section
      id="home"
      className="bg-white overflow-hidden flex flex-col lg:flex-row lg:min-h-[960px]"
    >
      {/* Text content */}
      <div className="flex-1 flex lg:items-center pl-[60px] lg:pl-[120px] pr-8 z-10 relative pt-10 pb-8 lg:pt-0 lg:pb-0">
        {/* Decorative gradient blob */}
        <div
          className="absolute top-[60px] left-[80px] w-[246px] h-[177px] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,177,71,0.15) 0%, rgba(255,108,99,0.1) 50%, rgba(184,106,223,0.1) 100%)',
            filter: 'blur(40px)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-10 lg:gap-16 max-w-[545px]"
        >
          <div className="flex flex-col gap-8 lg:gap-12">
            {/* Name + role */}
            <div className="flex flex-col gap-0">
              <h1
                style={{
                  fontFamily: 'var(--font-poppins), "Poppins", sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(36px, 7vw, 102px)',
                  lineHeight: 1.05,
                  color: '#141313',
                  letterSpacing: '-0.02em',
                }}
              >
                {content.name.includes('\n')
                  ? content.name.split('\n').map((line, i) => (
                      <span key={i} style={{ display: 'block', whiteSpace: 'nowrap' }}>{line}</span>
                    ))
                  : content.name}
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(18px, 4vw, 32px)',
                  lineHeight: '1.4',
                  color: '#141313',
                  marginTop: '16px',
                }}
              >
                {content.role}
              </p>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#works"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center self-start"
              style={{
                fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '24px',
                color: '#ffffff',
                backgroundColor: '#141313',
                borderRadius: '8px',
                padding: '18px 40px',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
              }}
            >
              {content.cta}
            </motion.a>
          </div>

        </motion.div>
      </div>

      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative flex-shrink-0 h-[380px] w-full lg:h-auto lg:w-[55%] lg:max-w-[864px] lg:min-h-[960px]"
      >
        {/* Gradient overlays — desktop only */}
        <div
          className="hidden lg:block absolute bottom-0 right-0 w-[390px] h-[272px] pointer-events-none z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(255,177,71,0.6) 0%, rgba(255,108,99,0.4) 100%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="hidden lg:block absolute top-0 left-0 w-[446px] h-[320px] pointer-events-none z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(184,106,223,0.4) 0%, rgba(255,108,99,0.3) 100%)',
            filter: 'blur(60px)',
          }}
        />

        <Image
          src="/images/hero-photo.png"
          alt="Luiz Felipe"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 1024px) 100vw, 864px"
        />

        {/* Star decorations — desktop only */}
        <div className="hidden lg:block absolute top-[136px] right-[220px] z-20">
          <div className="w-7 h-7 bg-white" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
        </div>
        <div className="hidden lg:block absolute bottom-[663px] left-[61px] z-20">
          <div className="w-[22px] h-[22px] bg-white" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
        </div>
      </motion.div>
    </section>
  )
}
