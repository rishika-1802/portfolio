'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import Tag from '@/components/ui/Tag'
import { experiences } from '@/lib/data/experience'
import { Briefcase, ArrowUpRight } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <AnimatedSection>
        <SectionHeader
          badge="EXPERIENCE"
          title="ENGINEERING JOURNEY"
          subtitle="Applied AI & Data Science experience in real-world environments."
        />
      </AnimatedSection>

      {/* Horizontal Entries List */}
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <AnimatedSection key={exp.id} delay={i * 0.1}>
            <div className="ui-card p-6 md:p-8 bg-dark-card border-dark-border hover:border-violet-primary/50 transition-all group">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                {/* Left: Year & Marker */}
                <div className="lg:w-48 flex-shrink-0 flex items-center lg:flex-col lg:items-start gap-3">
                  <span className="px-2.5 py-1 rounded bg-violet-primary/10 border border-violet-primary/30 text-[0.7rem] font-mono font-semibold text-violet-highlight">
                    2026
                  </span>
                  <span className="text-xs font-mono text-light-muted">
                    {exp.type}
                  </span>
                </div>

                {/* Middle: Role, Company, Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-xl font-bold text-light-primary group-hover:text-violet-highlight transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-light-muted text-sm">@</span>
                    <span className="text-sm font-semibold text-light-secondary">{exp.company}</span>
                  </div>

                  <p className="text-xs md:text-sm text-light-secondary leading-relaxed mb-4 font-sans">
                    {exp.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-5">
                    {exp.responsibilities.map((r, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-light-muted">
                        <span className="text-violet-primary mt-0.5">•</span>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <Tag key={tech} label={tech} size="xs" variant="default" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
