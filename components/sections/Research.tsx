'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { researchInterests, researchDirection, experiments } from '@/lib/data/research'
import {
  Eye,
  Navigation,
  Cpu,
  Layers,
  Brain,
  Shield,
  CheckCircle2,
  Clock,
  Circle,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Eye,
  Navigation,
  Cpu,
  Layers,
  Brain,
  Shield,
}

export default function Research() {
  return (
    <section id="research" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <AnimatedSection>
        <SectionHeader
          badge="EXPLORATION"
          title="THINGS I'M CURIOUS ABOUT"
          subtitle="Research interests, computational models, and experimental explorations."
        />
      </AnimatedSection>

      {/* Research Statement Card */}
      <AnimatedSection delay={0.1}>
        <div className="ui-card p-8 md:p-10 mb-12 bg-dark-card border-dark-border hover:border-violet-primary/40 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-violet-primary to-transparent" />
          <div className="text-[0.65rem] font-mono text-violet-highlight uppercase tracking-widest mb-3">
            RESEARCH DIRECTION
          </div>
          <p className="font-display text-lg md:text-xl text-light-primary leading-relaxed font-medium max-w-4xl">
            &ldquo;{researchDirection}&rdquo;
          </p>
        </div>
      </AnimatedSection>

      {/* Interests Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {researchInterests.map((interest, i) => {
          const Icon = iconMap[interest.icon] || Brain
          return (
            <AnimatedSection key={interest.id} delay={0.1 + i * 0.05}>
              <div className="ui-card p-6 h-full bg-dark-card border-dark-border hover:border-violet-primary/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-violet-primary/10 border border-violet-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-primary/20 transition-colors">
                    <Icon size={18} className="text-violet-highlight" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-light-primary mb-1.5 group-hover:text-violet-highlight transition-colors">
                      {interest.title}
                    </h3>
                    <p className="text-xs text-light-secondary leading-relaxed font-sans">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )
        })}
      </div>

      {/* Experiments Table */}
      <AnimatedSection delay={0.3}>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-mono text-violet-highlight tracking-widest uppercase">
            MODEL EXPERIMENTS &amp; EVALUATION TRACKER
          </span>
          <span className="text-[0.65rem] font-mono text-light-muted">UPDATED 2026</span>
        </div>

        <div className="ui-card border-dark-border overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-dark-elevated border-b border-dark-border text-[0.65rem] font-mono uppercase text-light-muted">
            <span>Model / Architecture</span>
            <span>Domain</span>
            <span>Dataset</span>
            <span>Status</span>
          </div>

          {/* Rows */}
          {experiments.map((exp, idx) => (
            <div
              key={idx}
              className="grid grid-cols-4 gap-4 px-6 py-4 text-xs border-b border-dark-border/60 last:border-0 hover:bg-dark-elevated/40 transition-colors"
            >
              <span className="font-mono font-medium text-light-primary">{exp.model}</span>
              <span className="text-light-secondary">{exp.domain}</span>
              <span className="font-mono text-light-muted">{exp.dataset}</span>
              <div className="flex items-center gap-1.5 font-mono text-violet-highlight">
                <CheckCircle2 size={13} className="text-violet-primary" />
                <span>{exp.status}</span>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
