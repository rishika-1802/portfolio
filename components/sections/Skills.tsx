'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import Tag from '@/components/ui/Tag'
import { skillCategories } from '@/lib/data/skills'
import { Cpu, Eye, Database, Layers, Wrench, Code2, Sparkles, Server } from 'lucide-react'

const categoryIcons: Record<string, React.ElementType> = {
  languages: Code2,
  genai: Sparkles,
  ml: Cpu,
  cv: Eye,
  data: Database,
  backend: Server,
  frameworks: Layers,
  tools: Wrench,
}

export default function Skills() {
  return (
    <section id="capabilities" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <AnimatedSection>
        <SectionHeader
          badge="TECHNICAL STACK"
          title="CAPABILITIES"
          subtitle="Core engineering languages, machine learning frameworks, data tools, and development platforms."
        />
      </AnimatedSection>

      {/* Capabilities Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, i) => {
          const Icon = categoryIcons[cat.id] || Cpu
          return (
            <AnimatedSection key={cat.id} delay={i * 0.08}>
              <div className="ui-card p-6 h-full bg-dark-card border-dark-border hover:border-violet-primary/50 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-violet-primary/10 border border-violet-primary/30 flex items-center justify-center group-hover:bg-violet-primary/20 transition-colors">
                    <Icon size={18} className="text-violet-highlight" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-light-primary tracking-wider uppercase group-hover:text-violet-highlight transition-colors">
                    {cat.label}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Tag key={skill} label={skill} size="sm" variant="default" />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
}
