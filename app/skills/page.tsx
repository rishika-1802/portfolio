'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { skillCategories } from '@/lib/data/skills'
import { Code2, Cpu, Eye, Database, Layers, Wrench, ArrowUpRight, Sparkles, Server } from 'lucide-react'

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

// Maps skills/technologies to specific project objects (title + slug)
const skillProjectsMap: Record<string, { title: string; slug: string }[]> = {
  Python: [
    { title: 'Gradiora', slug: 'gradiora' },
    { title: 'Terrain AI', slug: 'terrain-risk-assessment' },
    { title: 'Movie Recommendation', slug: 'movie-recommendation' },
    { title: 'Disease Prediction', slug: 'disease-prediction' },
    { title: 'Emotion Detection', slug: 'emotion-detection' },
    { title: 'AI README Generator', slug: 'ai-readme-generator' },
    { title: 'Smart Parking', slug: 'smart-parking' },
  ],
  SQL: [
    { title: 'Movie Recommendation', slug: 'movie-recommendation' },
    { title: 'Disease Prediction', slug: 'disease-prediction' },
  ],
  PyTorch: [
    { title: 'Terrain AI', slug: 'terrain-risk-assessment' },
    { title: 'Emotion Detection', slug: 'emotion-detection' },
  ],
  TensorFlow: [{ title: 'Emotion Detection', slug: 'emotion-detection' }],
  'Scikit-learn': [
    { title: 'Gradiora', slug: 'gradiora' },
    { title: 'Movie Recommendation', slug: 'movie-recommendation' },
    { title: 'Disease Prediction', slug: 'disease-prediction' },
    { title: 'Smart Parking', slug: 'smart-parking' },
  ],
  OpenCV: [
    { title: 'Terrain AI', slug: 'terrain-risk-assessment' },
    { title: 'Emotion Detection', slug: 'emotion-detection' },
  ],
  'Ultralytics YOLO': [{ title: 'Terrain AI', slug: 'terrain-risk-assessment' }],
  YOLO: [{ title: 'Terrain AI', slug: 'terrain-risk-assessment' }],
  Flask: [
    { title: 'Gradiora', slug: 'gradiora' },
    { title: 'Movie Recommendation', slug: 'movie-recommendation' },
    { title: 'Disease Prediction', slug: 'disease-prediction' },
    { title: 'AI README Generator', slug: 'ai-readme-generator' },
  ],
  ThingSpeak: [{ title: 'Smart Parking', slug: 'smart-parking' }],
  Arduino: [
    { title: 'Smart Parking', slug: 'smart-parking' },
    { title: 'Water Level Monitoring', slug: 'water-level-monitoring' },
  ],
  SHAP: [{ title: 'Gradiora', slug: 'gradiora' }],
  Ollama: [{ title: 'AI README Generator', slug: 'ai-readme-generator' }],
}

export default function CapabilitiesPage() {
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
            badge="CAPABILITIES"
            title="CAPABILITIES"
            subtitle="Core algorithmic disciplines, tools, frameworks, and programming models."
          />
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = categoryIcons[cat.id] || Cpu
            return (
              <AnimatedSection key={cat.id} delay={i * 0.08}>
                <div className="ui-card p-6 h-full bg-dark-card border-dark-border hover:border-violet-primary/50 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-violet-primary/10 border border-violet-primary/30 flex items-center justify-center group-hover:bg-violet-primary/20 transition-colors">
                        <Icon size={18} className="text-violet-highlight" />
                      </div>
                      <h3 className="font-display text-sm font-bold text-light-primary tracking-wider uppercase group-hover:text-violet-highlight transition-colors">
                        {cat.label}
                      </h3>
                    </div>

                    {/* Skill Items & Associated Projects */}
                    <div className="space-y-4">
                      {cat.skills.map((skill) => {
                        const associatedProjects = skillProjectsMap[skill] || []
                        return (
                          <div key={skill} className="border-b border-dark-border/60 pb-3 last:border-0 last:pb-0">
                            <div className="text-xs font-semibold text-light-primary mb-1">
                              {skill}
                            </div>
                            {associatedProjects.length > 0 ? (
                              <div className="flex flex-wrap gap-1.5 mt-1.5">
                                {associatedProjects.map((p) => (
                                  <Link
                                    key={p.slug}
                                    href={`/projects/${p.slug}`}
                                    className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-dark-elevated border border-dark-border/80 hover:border-violet-primary/40 text-[0.6rem] font-mono text-light-secondary hover:text-light-primary transition-all"
                                  >
                                    <span>{p.title}</span>
                                    <ArrowUpRight size={8} />
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <span className="text-[0.6rem] font-mono text-light-muted">
                                Core Knowledge Stack
                              </span>
                            )}
                          </div>
                        )
                      })}
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
