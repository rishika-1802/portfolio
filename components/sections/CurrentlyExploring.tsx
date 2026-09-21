'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { Sparkles, Eye, Server, Compass } from 'lucide-react'

const exploringTopics = [
  {
    icon: Sparkles,
    title: 'GENERATIVE AI',
    description: 'Local LLM inference via Ollama, structured prompt engineering, and developer documentation tooling.',
    badge: 'LLM & PROMPTS',
  },
  {
    icon: Eye,
    title: 'COMPUTER VISION',
    description: 'YOLO segmentation pipelines, aerial imagery terrain analysis, and real-time OpenCV processing.',
    badge: 'CV & SEGMENTATION',
  },
  {
    icon: Server,
    title: 'MLOps',
    description: 'Reproducible data pipelines, model bias monitoring, evaluation workflows, and lightweight Flask/FastAPI serving.',
    badge: 'PIPELINES & DEPLOYMENT',
  },
  {
    icon: Compass,
    title: 'AI RESEARCH',
    description: 'SHAP-based model interpretability, fairness metrics across demographic groups, and privacy-preserving AI.',
    badge: 'EXPLAINABILITY & FAIRNESS',
  },
]

export default function CurrentlyExploring() {
  return (
    <section id="exploring" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <AnimatedSection>
        <SectionHeader
          badge="ACTIVE FOCUS"
          title="CURRENTLY EXPLORING"
          subtitle="Areas of emerging technical interest, experimental engineering, and continuous learning."
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {exploringTopics.map((topic, i) => (
          <AnimatedSection key={topic.title} delay={i * 0.08}>
            <div className="ui-card p-6 h-full flex flex-col justify-between bg-dark-card border-dark-border hover:border-violet-primary/50 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-violet-primary/10 border border-violet-primary/30 flex items-center justify-center group-hover:bg-violet-primary/20 transition-colors">
                    <topic.icon size={20} className="text-violet-highlight" />
                  </div>
                  <span className="text-[0.6rem] font-mono text-light-muted">0{i + 1}</span>
                </div>

                <div className="text-[0.65rem] font-mono text-violet-highlight tracking-widest uppercase mb-1">
                  {topic.badge}
                </div>

                <h3 className="font-display text-base font-bold text-light-primary mb-2 group-hover:text-violet-highlight transition-colors">
                  {topic.title}
                </h3>

                <p className="text-xs text-light-secondary leading-relaxed font-sans">
                  {topic.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dark-border/40 flex items-center justify-between text-[0.65rem] font-mono text-light-muted group-hover:text-violet-highlight transition-colors">
                <span>LEARN MORE</span>
                <span>→</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
