'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SiteContent } from '@/content/types'

interface AboutProps {
  content: SiteContent['about']
  experience: SiteContent['experience']
}

const IBM = 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif'

export function About({ content, experience }: AboutProps) {
  return (
    <section id="about">
      {/* ── Part 1: Welcome ── */}
      <div
        className="bg-white px-[120px] pt-[60px] pb-0"
        style={{ minHeight: '1008px' }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 mb-12"
        >
          <p style={{ fontFamily: IBM, fontWeight: 600, fontSize: '18px', lineHeight: '24px', color: '#141313' }}>
            {content.label}
          </p>
          <h2 style={{ fontFamily: IBM, fontWeight: 700, fontSize: '48px', lineHeight: '56px', color: '#141313' }}>
            {content.title}
          </h2>
        </motion.div>

        {/* Two columns: photo | content */}
        <div className="flex gap-[60px] xl:gap-[145px] items-start">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-shrink-0"
            style={{ width: '430px' }}
          >
            <div className="relative" style={{ width: '430px', height: '410px' }}>
              <Image
                src="/images/about-photo.png"
                alt="Luiz Felipe"
                fill
                className="object-cover object-top rounded-lg"
                sizes="430px"
              />
            </div>
          </motion.div>

          {/* Right: Stats + contact + quote */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6 flex-1 min-w-0"
          >
            {/* Stats row */}
            <div className="flex gap-8">
              {/* Stat 1 */}
              <div className="flex flex-col gap-5 flex-1 min-w-0">
                <div className="flex flex-col gap-[20px]">
                  <span style={{ fontFamily: IBM, fontWeight: 700, fontSize: '48px', lineHeight: '56px', color: '#141313' }}>
                    {content.stat1Value}
                  </span>
                  <span style={{ fontFamily: IBM, fontWeight: 700, fontSize: '18px', lineHeight: '24px', color: '#141313', whiteSpace: 'pre-line' }}>
                    {content.stat1Label}
                  </span>
                </div>
                <p style={{ fontFamily: IBM, fontWeight: 400, fontSize: '18px', lineHeight: '28px', color: '#141313' }}>
                  {content.stat1Desc}
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col gap-5 flex-1 min-w-0">
                <div className="flex flex-col gap-[20px]">
                  <span style={{ fontFamily: IBM, fontWeight: 700, fontSize: '48px', lineHeight: '56px', color: '#141313' }}>
                    {content.stat2Value}
                  </span>
                  <span style={{ fontFamily: IBM, fontWeight: 700, fontSize: '18px', lineHeight: '24px', color: '#141313', whiteSpace: 'pre-line' }}>
                    {content.stat2Label}
                  </span>
                </div>
                <p style={{ fontFamily: IBM, fontWeight: 400, fontSize: '18px', lineHeight: '28px', color: '#141313' }}>
                  {content.stat2Desc}
                </p>
              </div>
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 items-center py-4">
              {[
                { icon: '📞', text: content.phone },
                { icon: '✉️', text: content.email },
                { icon: '📍', text: content.location },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center text-sm">
                    {icon}
                  </div>
                  <span style={{ fontFamily: IBM, fontWeight: 700, fontSize: '18px', color: '#141313' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Quote card */}
            <div
              className="rounded-lg p-8 flex flex-col gap-2"
              style={{ backgroundColor: '#141313' }}
            >
              <p style={{ fontFamily: IBM, fontWeight: 600, fontSize: '20px', lineHeight: '30px', color: '#ffffff' }}>
                {content.quote}
              </p>
              <p style={{ fontFamily: IBM, fontWeight: 400, fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginTop: '8px' }}>
                — {content.quoteAuthor}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Part 2: Experience (gradient bg) ── */}
      <div
        className="px-[120px] py-[120px]"
        style={{
          background: 'linear-gradient(135deg, rgb(255,177,71) 0%, rgb(255,108,99) 52%, rgb(184,106,223) 100%)',
        }}
      >
        <div className="flex gap-[77px]">
          {/* Left: title + download btn */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 flex-shrink-0"
            style={{ width: '48%', minWidth: '260px' }}
          >
            <div className="flex flex-col gap-4">
              <p style={{ fontFamily: IBM, fontWeight: 600, fontSize: '18px', lineHeight: '24px', color: '#141313' }}>
                {experience.label}
              </p>
              <h2 style={{ fontFamily: IBM, fontWeight: 700, fontSize: '48px', lineHeight: '56px', color: '#141313' }}>
                {experience.title}
              </h2>
            </div>
            <motion.a
              href={experience.resumeUrl}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              download
              className="inline-flex items-center justify-center self-start"
              style={{
                fontFamily: IBM,
                fontWeight: 500,
                fontSize: '18px',
                color: '#141313',
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: '8px',
                padding: '18px 40px',
                textDecoration: 'none',
              }}
            >
              {experience.resumeBtn}
            </motion.a>
          </motion.div>

          {/* Right: timeline */}
          <div className="flex flex-col gap-10 flex-1">
            {experience.items.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex flex-col gap-5">
                  <div>
                    <h3 style={{ fontFamily: IBM, fontWeight: 700, fontSize: '32px', lineHeight: '40px', color: '#141313' }}>
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span style={{ fontFamily: IBM, fontWeight: 700, fontSize: '18px', color: '#141313' }}>
                        {exp.period}
                      </span>
                      <span style={{ fontFamily: IBM, fontWeight: 500, fontSize: '16px', color: 'rgba(20,19,19,0.7)' }}>
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  {i < experience.items.length - 1 && (
                    <div className="h-px bg-[rgba(20,19,19,0.2)]" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
