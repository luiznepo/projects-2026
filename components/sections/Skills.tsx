'use client'

import { motion } from 'framer-motion'
import { SiteContent } from '@/content/types'

interface SkillsProps {
  content: SiteContent['skills']
}

const IBM = 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif'

// Separa a descrição em parágrafos por "Termo: texto." e coloca o termo em negrito
function renderDescription(text: string) {
  // Divide em parágrafos a cada ". " seguido de letra maiúscula (início de novo termo)
  const paragraphs = text.split(/\.\s+(?=[A-ZÁÉÍÓÚÀÃÂÊÔÇÑ])/)

  return paragraphs.map((para, i) => {
    const colonIdx = para.indexOf(': ')
    const isLast = i === paragraphs.length - 1
    const cleanPara = para.endsWith('.') ? para.slice(0, -1) : para

    if (colonIdx > 0) {
      const term = cleanPara.slice(0, colonIdx)
      const rest = cleanPara.slice(colonIdx + 2)
      return (
        <p key={i} style={{ marginBottom: isLast ? 0 : '16px' }}>
          <strong>{term}:</strong> {rest}
        </p>
      )
    }
    return (
      <p key={i} style={{ marginBottom: isLast ? 0 : '16px' }}>
        {cleanPara}
      </p>
    )
  })
}

export function Skills({ content }: SkillsProps) {
  return (
    <section
      id="skills"
      className="bg-white px-[120px] pt-[80px] pb-[80px]"
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

      {/* Skills list */}
      <div className="flex flex-col">
        {content.items.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <div className="flex flex-col gap-10">
              <div className="flex gap-[50px] py-10">
                {/* Left: title ~48% */}
                <div className="flex-shrink-0" style={{ width: '48%', minWidth: '220px' }}>
                  <h3 style={{ fontFamily: IBM, fontWeight: 700, fontSize: '32px', lineHeight: '48px', color: '#141313' }}>
                    {skill.icon} {skill.title}
                  </h3>
                </div>
                {/* Right: description + badges */}
                <div className="flex-1 min-w-0 flex flex-col gap-6">
                  <div style={{ fontFamily: IBM, fontWeight: 400, fontSize: '18px', lineHeight: '28px', color: 'rgba(20,19,19,0.8)' }}>
                    {renderDescription(skill.description)}
                  </div>
                  {skill.tools?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map((tool) => (
                        <span
                          key={tool}
                          style={{
                            fontFamily: IBM,
                            fontWeight: 500,
                            fontSize: '13px',
                            color: '#141313',
                            border: '1.5px solid rgba(20,19,19,0.2)',
                            borderRadius: '999px',
                            padding: '4px 14px',
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {i < content.items.length - 1 && (
                <div className="h-px bg-[#141313]" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
