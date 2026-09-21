'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { education } from '@/lib/data/education'
import { GraduationCap, Code, Compass, ShieldAlert, Cpu } from 'lucide-react'

export default function AboutPage() {
  const edu = education[0]

  return (
    <div className="bg-dark-base pt-24 pb-16 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-light-secondary hover:text-violet-highlight transition-colors"
          >
            ← BACK TO HOME
          </a>
        </div>

        <AnimatedSection>
          <SectionHeader
            badge="PROFILE"
            title="ABOUT ME"
            subtitle="Final-year AI & Data Science engineering student interested in building intelligent systems, machine learning solutions, and real-world AI applications."
          />
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-10">
          {/* Card 1: Intro / Profile (7 cols) */}
          <AnimatedSection delay={0.05} className="md:col-span-7">
            <div className="ui-card p-6 md:p-8 bg-dark-card border-dark-border hover:border-violet-primary/40 h-full flex flex-col justify-between">
              <div>
                <div className="text-[0.65rem] font-mono text-violet-highlight uppercase mb-3">INTRODUCTION</div>
                <h3 className="font-display text-xl font-bold text-light-primary mb-4">
                  Engineering Intelligent Interfaces
                </h3>
                <p className="text-light-secondary text-xs md:text-sm leading-relaxed mb-4 font-sans">
                  Hello, I&apos;m Rishika. I specialize in designing and engineering end-to-end machine learning systems. I prioritize technical interpretability, privacy-by-design, and responsible auditing in institutional AI deployments.
                </p>
                <p className="text-light-secondary text-xs md:text-sm leading-relaxed font-sans">
                  Through my academic path and applied internship projects, I work with computer vision segmentation pipelines, explainability modules (SHAP), and lightweight backend microservices.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-dark-border/40 text-[0.65rem] font-mono text-light-muted">
                ANNA UNIVERSITY REGIONAL CAMPUS · B.TECH AI &amp; DATA SCIENCE (GPA: 8.53)
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2: Education (5 cols) */}
          <AnimatedSection delay={0.1} className="md:col-span-5">
            <div className="ui-card p-6 bg-dark-card border-dark-border hover:border-violet-primary/40 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-[0.65rem] font-mono text-violet-highlight uppercase">
                    <GraduationCap size={14} />
                    <span>EDUCATION</span>
                  </div>
                  <span className="text-[0.6rem] font-mono bg-violet-primary/10 border border-violet-primary/30 px-2 py-0.5 rounded text-violet-highlight">
                    {edu.status}
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-light-primary mb-1">
                  {edu.degree} in {edu.field}
                </h4>
                <div className="text-xs text-light-secondary font-mono mb-4">{edu.institution}</div>
                <p className="text-xs text-light-secondary leading-relaxed font-sans mb-4">
                  {edu.description}
                </p>
              </div>
              <div className="text-[0.65rem] font-mono text-light-muted pt-4 border-t border-dark-border/40">
                PERIOD: {edu.period}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Philosophy, Interest and What I Build Details (Bento Row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 3: What I Build */}
          <AnimatedSection delay={0.15}>
            <div className="ui-card p-6 bg-dark-card border-dark-border hover:border-violet-primary/40 h-full flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded bg-violet-primary/10 border border-violet-primary/30 flex items-center justify-center mb-4">
                  <Code size={16} className="text-violet-highlight" />
                </div>
                <h3 className="font-display text-sm font-bold text-light-primary mb-2">
                  WHAT I BUILD
                </h3>
                <p className="text-xs text-light-secondary leading-relaxed font-sans">
                  SaaS products, automated document pipelines, object recognition algorithms, and explainable models designed for human decision-support.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 4: Technical Philosophy */}
          <AnimatedSection delay={0.2}>
            <div className="ui-card p-6 bg-dark-card border-dark-border hover:border-violet-primary/40 h-full flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded bg-violet-primary/10 border border-violet-primary/30 flex items-center justify-center mb-4">
                  <ShieldAlert size={16} className="text-violet-highlight" />
                </div>
                <h3 className="font-display text-sm font-bold text-light-primary mb-2">
                  TECHNICAL PHILOSOPHY
                </h3>
                <p className="text-xs text-light-secondary leading-relaxed font-sans">
                  AI must be transparent. I emphasize interpretability (SHAP factor analysis) and rigorous fairness audits in predictive systems.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 5: Current Interests */}
          <AnimatedSection delay={0.25}>
            <div className="ui-card p-6 bg-dark-card border-dark-border hover:border-violet-primary/40 h-full flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded bg-violet-primary/10 border border-violet-primary/30 flex items-center justify-center mb-4">
                  <Cpu size={16} className="text-violet-highlight" />
                </div>
                <h3 className="font-display text-sm font-bold text-light-primary mb-2">
                  CURRENT INTERESTS
                </h3>
                <p className="text-xs text-light-secondary leading-relaxed font-sans">
                  Self-hosted LLMs, spatial risk map estimation, drone navigation decision layers, and MLOps metrics.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
