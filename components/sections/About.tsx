'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { education } from '@/lib/data/education'
import { Brain, Eye, Database, Cpu, GraduationCap } from 'lucide-react'

export default function About() {
  const edu = education[0]

  const focusCards = [
    {
      icon: Brain,
      title: 'AI / ML',
      description: 'Predictive modeling, deep learning architectures, and model evaluation.',
    },
    {
      icon: Eye,
      title: 'COMPUTER VISION',
      description: 'Aerial imagery segmentation, YOLO object detection, and OpenCV real-time inference.',
    },
    {
      icon: Database,
      title: 'DATA SCIENCE',
      description: 'Exploratory analysis, feature engineering, statistical processing, and data pipelines.',
    },
    {
      icon: Cpu,
      title: 'INTELLIGENT SYSTEMS',
      description: 'SHAP explainability, multi-dimensional risk scoring, and human-in-the-loop AI.',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <AnimatedSection>
        <SectionHeader
          badge="ABOUT ME"
          title="A LITTLE ABOUT ME"
          subtitle="Final-year engineering student dedicated to building intelligent, explainable AI solutions."
        />
      </AnimatedSection>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Large Introduction Card (7 cols) */}
        <AnimatedSection delay={0.1} className="lg:col-span-7">
          <div className="ui-card p-8 md:p-10 h-full flex flex-col justify-between bg-dark-card border-dark-border hover:border-violet-primary/40 transition-all">
            <div>
              <div className="text-xs font-mono text-violet-highlight uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-primary" />
                <span>INTRODUCTION</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-light-primary leading-tight mb-6">
                Hello, I&apos;m Rishika.
              </h3>
              <p className="text-light-secondary text-base sm:text-lg leading-relaxed mb-6 font-sans">
                Final-year AI &amp; Data Science engineering student interested in building intelligent systems, machine learning solutions, and real-world AI applications.
              </p>
              <p className="text-light-muted text-sm leading-relaxed">
                My work spans computer vision algorithms, explainable AI platforms, and end-to-end full-stack ML workflows. I aim to create AI products that prioritize fairness, interpretability, and engineering precision.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-dark-border/60 flex items-center justify-between">
              <span className="text-xs font-mono text-light-muted">ANNA UNIVERSITY REGIONAL CAMPUS</span>
              <span className="text-xs font-mono text-violet-highlight">B.Tech AI &amp; DS (GPA: 8.53)</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Education Card (5 cols) */}
        <AnimatedSection delay={0.15} className="lg:col-span-5">
          <div className="ui-card p-7 h-full flex flex-col justify-between bg-dark-card border-dark-border hover:border-violet-primary/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-violet-highlight uppercase tracking-wider">
                  <GraduationCap size={16} />
                  <span>EDUCATION</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[0.6rem] font-mono bg-violet-primary/10 text-violet-highlight border border-violet-primary/30">
                  {edu.status}
                </span>
              </div>

              <h4 className="font-display text-xl font-bold text-light-primary mb-1">
                {edu.degree} in {edu.field}
              </h4>
              <div className="text-xs font-mono text-light-secondary mb-4">{edu.institution}</div>

              <div className="p-3.5 rounded-lg bg-dark-elevated border border-dark-border mb-4">
                <div className="text-[0.65rem] font-mono text-light-muted uppercase mb-1">Period</div>
                <div className="text-xs font-mono font-medium text-light-primary">{edu.period}</div>
              </div>

              <p className="text-xs text-light-secondary leading-relaxed font-sans">
                {edu.description}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Focus Area Sub-Cards (4 Columns in Bento) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {focusCards.map((card, i) => (
          <AnimatedSection key={card.title} delay={0.2 + i * 0.05}>
            <div className="ui-card p-6 h-full bg-dark-card border-dark-border hover:border-violet-primary/50 transition-all group">
              <div className="w-9 h-9 rounded-lg bg-violet-primary/10 border border-violet-primary/30 flex items-center justify-center mb-4 group-hover:bg-violet-primary/20 transition-colors">
                <card.icon size={18} className="text-violet-highlight" />
              </div>
              <h4 className="font-display text-sm font-bold text-light-primary mb-2 group-hover:text-violet-highlight transition-colors">
                {card.title}
              </h4>
              <p className="text-xs text-light-secondary leading-relaxed font-sans">
                {card.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
