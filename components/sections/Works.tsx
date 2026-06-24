'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SiteContent } from '@/content/types'
import { Project } from '@/content/types'

interface WorksProps {
  content: SiteContent['works']
}

const IBM = 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif'

function ProjectMedia({ project }: { project: Project }) {
  if (project.embedUrl) {
    return (
      <div className="w-full lg:flex-1 flex items-center justify-center min-w-0">
        <iframe
          src={project.embedUrl}
          height="316"
          width="100%"
          style={{ maxWidth: '600px', border: 'none', borderRadius: '8px' }}
          allowFullScreen
          allow="clipboard-write"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    )
  }

  return (
    <div className="w-full lg:flex-1 flex items-center justify-center min-w-0">
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: '100%',
          maxWidth: '600px',
          height: 'auto',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  )
}

function ProjectCard({
  project,
  index,
  projectCta,
}: {
  project: Project
  index: number
  projectCta: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex items-center justify-center w-full"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] items-center lg:items-start w-full">
        {/* Text column */}
        <div className="w-full lg:flex-1 flex flex-col gap-[20px] lg:gap-[24px] items-center lg:items-start justify-center min-w-0 text-center lg:text-left">
          {/* Client + title */}
          <div className="flex flex-col gap-[12px] lg:gap-[16px] w-full">
            <p
              style={{
                fontFamily: IBM,
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: '18px',
                lineHeight: '24px',
                color: '#141313',
              }}
            >
              {project.client}
            </p>
            <h3
              style={{
                fontFamily: IBM,
                fontWeight: 700,
                fontSize: 'clamp(24px, 4vw, 40px)',
                lineHeight: '1.2',
                color: '#141313',
                textTransform: 'uppercase',
              }}
            >
              {project.title}
            </h3>
          </div>

          {/* Media — mobile only (between title and description) */}
          <div className="w-full lg:hidden">
            <ProjectMedia project={project} />
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: IBM,
              fontWeight: 400,
              fontSize: '17px',
              lineHeight: '24px',
              color: '#141313',
            }}
          >
            {project.description}
          </p>

          {/* CTA button */}
          <motion.a
            href={project.ctaLink ?? '#'}
            target={project.ctaLink?.startsWith('http') ? '_blank' : undefined}
            rel={project.ctaLink?.startsWith('http') ? 'noopener noreferrer' : undefined}
            whileHover={{ opacity: 0.85 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#141313',
              borderRadius: '8px',
              height: '56px',
              padding: '18px 40px',
              fontFamily: IBM,
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '24px',
              color: '#ffffff',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
            }}
          >
            {projectCta}
          </motion.a>
        </div>

        {/* Media — desktop only (right column) */}
        <div className="hidden lg:flex w-full lg:flex-1 items-center justify-center min-w-0">
          <ProjectMedia project={project} />
        </div>
      </div>
    </motion.div>
  )
}

export function Works({ content }: WorksProps) {
  const [showExtra, setShowExtra] = useState(false)

  const allProjects = content.projects
  const extraProjects = content.extraProjects ?? []

  return (
    <section
      id="works"
      className="bg-white px-6 lg:px-[120px] py-[40px] lg:py-[56px]"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-[16px] mb-[40px] lg:mb-[56px] text-center lg:text-left"
      >
        <p
          style={{
            fontFamily: IBM,
            fontWeight: 600,
            fontStyle: 'italic',
            fontSize: '18px',
            lineHeight: '24px',
            color: '#141313',
          }}
        >
          {content.label}
        </p>
        <h2
          style={{
            fontFamily: IBM,
            fontWeight: 700,
            fontSize: 'clamp(28px, 5vw, 48px)',
            lineHeight: '1.2',
            color: '#141313',
            textTransform: 'uppercase',
          }}
        >
          {content.title}
        </h2>
      </motion.div>

      {/* Projects */}
      <div className="flex flex-col gap-[60px] lg:gap-[80px] items-center w-full">
        {allProjects.map((project, i) => (
          <div key={i} className="w-full flex flex-col gap-[60px] lg:gap-[80px]">
            <ProjectCard project={project} index={i} projectCta={content.projectCta} />
            {/* Divider — between main projects */}
            {i < allProjects.length - 1 && (
              <div className="w-full h-px bg-[#141313]" />
            )}
          </div>
        ))}

        {/* Extra projects (toggle) */}
        <AnimatePresence>
          {showExtra && extraProjects.length > 0 && (
            <motion.div
              key="extra-projects"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col gap-[60px] lg:gap-[80px] overflow-hidden"
            >
              {/* Divider before extra projects */}
              <div className="w-full h-px bg-[#141313]" />

              {extraProjects.map((project, i) => (
                <div key={i} className="w-full flex flex-col gap-[60px] lg:gap-[80px]">
                  <ProjectCard
                    project={project}
                    index={i}
                    projectCta={content.projectCta}
                  />
                  {i < extraProjects.length - 1 && (
                    <div className="w-full h-px bg-[#141313]" />
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            onClick={() => setShowExtra((prev) => !prev)}
            whileHover={{ opacity: 0.85 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f3f3f3',
              borderRadius: '8px',
              height: '56px',
              padding: '18px 40px',
              fontFamily: IBM,
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '24px',
              color: '#141313',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {showExtra ? content.lessBtn : content.moreBtn}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
