'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import Tag from '@/components/ui/Tag'
import { experiences } from '@/lib/data/experience'
import { Briefcase, ArrowUpRight, Link2 } from 'lucide-react'

// Define explicit project relations for experience links
const relatedProjectsMap: Record<number, { title: string; slug: string }[]> = {
  1: [
    { title: 'Terrain Risk Assessment', slug: 'terrain-risk-assessment' },
    { title: 'Emotion Detection using CNN', slug: 'emotion-detection' },
  ],
  2: [
    { title: 'Movie Recommendation System', slug: 'movie-recommendation' },
    { title: 'Disease Prediction System', slug: 'disease-prediction' },
  ],
}

export default function ExperiencePage() {
  return (
    <div className="bg-dark-base pt-24 pb-16 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-light-secondary hover:text-violet-highlight transition-colors"
          >
            ← BACK TO HOME
          </Link>
        </div>

        <AnimatedSection>
          <SectionHeader
            badge="EXPERIENCE"
            title="ENGINEERING JOURNEY"
            subtitle="Applied AI internships, predictive modeling work, and data science training."
          />
        </AnimatedSection>

        {/* Experience Timeline Horizontal List */}
        <div className="space-y-6">
          {experiences.map((exp, i) => {
            const projectsLinked = relatedProjectsMap[exp.id] || []

            return (
              <AnimatedSection key={exp.id} delay={i * 0.08}>
                <div className="ui-card p-6 md:p-8 bg-dark-card border-dark-border hover:border-violet-primary/50 transition-all group">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left side Metadata */}
                    <div className="lg:w-48 flex-shrink-0 flex items-center lg:flex-col lg:items-start gap-3">
                      <span className="px-2.5 py-1 rounded bg-violet-primary/10 border border-violet-primary/30 text-[0.7rem] font-mono font-semibold text-violet-highlight">
                        2026
                      </span>
                      <span className="text-[0.65rem] font-mono text-light-muted">
                        {exp.duration}
                      </span>
                      <span className="text-[0.65rem] font-mono text-light-muted">
                        {exp.type}
                      </span>
                    </div>

                    {/* Right side details */}
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <h3 className="font-display text-lg md:text-xl font-bold text-light-primary group-hover:text-violet-highlight transition-colors">
                          {exp.role}
                        </h3>
                        <span className="text-light-muted font-sans">•</span>
                        <span className="text-sm font-semibold text-light-secondary">{exp.company}</span>
                      </div>

                      <p className="text-xs md:text-sm text-light-secondary leading-relaxed mb-4 font-sans">
                        {exp.description}
                      </p>

                      {/* Responsibilities list */}
                      <div className="space-y-1.5 mb-5">
                        {exp.responsibilities.map((r, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-light-secondary font-sans">
                            <span className="text-violet-primary mt-0.5">•</span>
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {exp.technologies.map((t) => (
                          <Tag key={t} label={t} size="xs" variant="default" />
                        ))}
                      </div>

                      {/* Clickable Related Projects */}
                      {projectsLinked.length > 0 && (
                        <div className="pt-4 border-t border-dark-border/40">
                          <div className="text-[0.65rem] font-mono text-light-muted mb-2 uppercase flex items-center gap-1.5">
                            <Link2 size={12} className="text-violet-primary" />
                            <span>RELATED SYSTEMS &amp; PROJECT FILES</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {projectsLinked.map((proj) => (
                              <Link
                                key={proj.slug}
                                href={`/projects/${proj.slug}`}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-dark-elevated border border-dark-border hover:border-violet-primary/50 text-[0.65rem] font-mono text-light-primary transition-all group/link"
                              >
                                <span>{proj.title}</span>
                                <ArrowUpRight size={10} className="text-light-muted group-hover/link:text-violet-highlight transition-colors" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </div>
  )
}
