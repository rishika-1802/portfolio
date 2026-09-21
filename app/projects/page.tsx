'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import Tag from '@/components/ui/Tag'
import { projects } from '@/lib/data/projects'
import { ArrowRight, ShieldAlert } from 'lucide-react'

const filterCategories = [
  { label: 'ALL', value: 'ALL' },
  { label: 'AI / ML', value: 'AI / ML' },
  { label: 'COMPUTER VISION', value: 'COMPUTER VISION' },
  { label: 'GENERATIVE AI', value: 'GENERATIVE AI' },
  { label: 'DATA SCIENCE', value: 'DATA SCIENCE' },
  { label: 'IOT', value: 'IOT' },
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('ALL')

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.categoryTags.includes(activeFilter))

  const gradioraProject = projects.find((p) => p.slug === 'gradiora')
  const otherProjects = filteredProjects.filter((p) => p.slug !== 'gradiora')

  return (
    <div className="bg-dark-base pt-24 pb-16 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
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
            badge="PORTFOLIO ARCHIVE"
            title="SELECTED SYSTEMS"
            subtitle="Full repository listing of explainable decision systems, computer vision segmentation models, and IoT sensors."
          />
        </AnimatedSection>

        {/* Filter Category Tabs */}
        <AnimatedSection delay={0.05}>
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {filterCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-3.5 py-1.5 text-[0.65rem] font-mono tracking-widest uppercase rounded-lg border transition-all ${
                  activeFilter === cat.value
                    ? 'bg-violet-primary text-white border-violet-primary shadow-violet-sm font-semibold'
                    : 'bg-dark-card text-light-secondary border-dark-border hover:border-violet-primary/40 hover:text-light-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Flagship: Gradiora (Full-width when category filter matches) */}
          {gradioraProject && (activeFilter === 'ALL' || gradioraProject.categoryTags.includes(activeFilter)) && (
            <AnimatedSection delay={0.1} className="lg:col-span-12">
              <Link href={`/projects/${gradioraProject.slug}`} className="group block">
                <div className="ui-card p-8 md:p-10 bg-dark-card border-dark-border hover:border-violet-primary/60 transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-primary/10 rounded-full blur-[120px] pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[0.65rem] font-mono text-violet-highlight bg-violet-primary/10 border border-violet-primary/30 px-2.5 py-1 rounded">
                          01 · FLAGSHIP SYSTEM
                        </span>
                        <span className="text-[0.65rem] font-mono text-light-muted">
                          {gradioraProject.category}
                        </span>
                      </div>

                      <h3 className="font-display text-3xl md:text-5xl font-bold text-light-primary mb-3 group-hover:text-violet-highlight transition-colors">
                        {gradioraProject.title}
                      </h3>
                      <div className="text-sm font-mono text-violet-highlight/95 mb-4">
                        {gradioraProject.subtitle}
                      </div>

                      <p className="text-light-secondary text-sm md:text-base leading-relaxed mb-6 font-sans">
                        {gradioraProject.shortDescription}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="p-3 rounded-lg bg-dark-elevated border border-dark-border text-xs">
                          <div className="text-[0.6rem] font-mono text-light-muted uppercase mb-1">EXPLAINABILITY</div>
                          <div className="font-semibold text-light-primary">SHAP Factor Analysis</div>
                        </div>
                        <div className="p-3 rounded-lg bg-dark-elevated border border-dark-border text-xs">
                          <div className="text-[0.6rem] font-mono text-light-muted uppercase mb-1">GOVERNANCE</div>
                          <div className="font-semibold text-light-primary">Bias &amp; FPR Auditing</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {gradioraProject.technologies.map((t) => (
                          <Tag key={t} label={t} size="xs" variant="violet" />
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-violet-highlight font-semibold group-hover:translate-x-1 transition-transform">
                        <span>VIEW CASE STUDY</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <div className="bg-dark-elevated border border-dark-border p-5 rounded-xl space-y-4">
                        <div className="flex items-center justify-between border-b border-dark-border pb-3">
                          <div className="flex items-center gap-2">
                            <ShieldAlert size={16} className="text-violet-highlight" />
                            <span className="text-xs font-mono text-light-primary font-semibold">RISK AGGREGATION</span>
                          </div>
                          <span className="text-[0.65rem] font-mono text-green-400">ACTIVE</span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs p-2 rounded bg-dark-card border border-dark-border">
                            <span className="text-light-secondary">Academic Risk Model</span>
                            <span className="font-mono text-violet-highlight font-bold">0.14 Low</span>
                          </div>
                          <div className="flex items-center justify-between text-xs p-2 rounded bg-dark-card border border-dark-border">
                            <span className="text-light-secondary">Emotional Risk Model</span>
                            <span className="font-mono text-amber-400 font-bold">0.42 Moderate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          )}

          {/* Secondary projects as asymmetric Bento Grid cards */}
          {otherProjects.map((project, i) => (
            <AnimatedSection key={project.id} delay={0.15 + i * 0.05} className="lg:col-span-6">
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <div className="ui-card p-7 h-full flex flex-col justify-between bg-dark-card border-dark-border hover:border-violet-primary/50 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[0.65rem] font-mono text-violet-highlight">
                        0{project.id}
                      </span>
                      <span className="text-[0.65rem] font-mono text-light-muted">
                        {project.domain}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-light-primary mb-2 group-hover:text-violet-highlight transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-light-muted mb-3">
                      {project.subtitle}
                    </div>

                    <p className="text-xs text-light-secondary leading-relaxed mb-6 font-sans line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Tag key={tech} label={tech} size="xs" variant="default" />
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[0.6rem] font-mono text-light-muted self-center">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="pt-4 border-t border-dark-border/60 flex items-center justify-between text-xs font-mono text-light-secondary group-hover:text-violet-highlight transition-colors">
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
