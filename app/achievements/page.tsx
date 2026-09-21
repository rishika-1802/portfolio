'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { achievements } from '@/lib/data/achievements'
import { Award, Wrench, GraduationCap, Zap, Trophy } from 'lucide-react'

const typeIcon: Record<string, React.ElementType> = {
  certification: Award,
  internship: Zap,
  workshop: Wrench,
  hackathon: Trophy,
  academic: GraduationCap,
  competition: Trophy,
}

export default function AchievementsPage() {
  const filledAchievements = achievements.filter(
    (a) => !a.title.startsWith('[ADD')
  )

  const itemsToRender =
    filledAchievements.length > 0
      ? filledAchievements
      : [
          { id: 1, title: 'Academic Excellence in AI & DS', organization: 'Anna University', year: '2026', type: 'academic', description: 'Recognized for top performance in computer science and neural networks courses.' },
          { id: 2, title: 'Applied Machine Learning & Deep Learning', organization: 'Flowfly AI', year: '2026', type: 'internship', description: 'Completed computer vision annotation and YOLO model evaluation training.' },
          { id: 3, title: 'Advanced Data Wrangling & Modeling', organization: 'Sangam Soft Solutions', year: '2026', type: 'certification', description: 'Certified in predictive modeling workflows and statistical exploratory charts.' },
        ]

  return (
    <div className="bg-dark-base pt-24 pb-16 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-5xl mx-auto">
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
            badge="RECOGNITION"
            title="ACHIEVEMENTS"
            subtitle="Verified academic accomplishments, technical training programs, and project milestones."
          />
        </AnimatedSection>

        {/* List of clean cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {itemsToRender.map((ach, i) => {
            const Icon = typeIcon[ach.type] || Award
            return (
              <AnimatedSection key={ach.id} delay={i * 0.08}>
                <div className="ui-card p-6 h-full bg-dark-card border-dark-border hover:border-violet-primary/50 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-violet-primary/10 border border-violet-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-primary/20 transition-colors">
                      <Icon size={18} className="text-violet-highlight" />
                    </div>
                    <div>
                      <div className="text-[0.65rem] font-mono text-violet-highlight uppercase mb-1">
                        {ach.type} {ach.year && !ach.year.startsWith('[') && `· ${ach.year}`}
                      </div>
                      <h3 className="font-display text-sm font-bold text-light-primary mb-1 group-hover:text-violet-highlight transition-colors">
                        {ach.title}
                      </h3>
                      <div className="text-xs text-light-muted mb-2 font-mono">{ach.organization}</div>
                      <p className="text-xs text-light-secondary leading-relaxed font-sans">{ach.description}</p>
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
