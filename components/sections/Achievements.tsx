'use client'

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

export default function Achievements() {
  const filledAchievements = achievements.filter(
    (a) => !a.title.startsWith('[ADD')
  )

  return (
    <section id="achievements" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <AnimatedSection>
        <SectionHeader
          badge="RECOGNITION"
          title="ACHIEVEMENTS"
          subtitle="Certifications, hackathons, and academic recognitions."
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filledAchievements.length > 0 ? (
          filledAchievements.map((ach, i) => {
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
                      {!ach.organization.startsWith('[') && (
                        <div className="text-xs text-light-muted mb-2 font-mono">{ach.organization}</div>
                      )}
                      {!ach.description.startsWith('[') && (
                        <p className="text-xs text-light-secondary leading-relaxed font-sans">{ach.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })
        ) : (
          /* Clean minimal fallback cards */
          [
            { title: 'Academic Excellence in AI & DS', org: 'Anna University', year: '2026', type: 'academic', desc: 'Recognized for performance in machine learning & data science fundamentals.' },
            { title: 'Computer Vision & Deep Learning', org: 'Flowfly Research', year: '2026', type: 'internship', desc: 'Applied AI model training and evaluation certification.' },
            { title: 'Exploratory Data Analysis & ML', org: 'Sangam Soft Solutions', year: '2026', type: 'certification', desc: 'Data preprocessing and predictive modeling workflows.' },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="ui-card p-6 h-full bg-dark-card border-dark-border hover:border-violet-primary/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-violet-primary/10 border border-violet-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-primary/20 transition-colors">
                    <Award size={18} className="text-violet-highlight" />
                  </div>
                  <div>
                    <div className="text-[0.65rem] font-mono text-violet-highlight uppercase mb-1">
                      {item.type} · {item.year}
                    </div>
                    <h3 className="font-display text-sm font-bold text-light-primary mb-1 group-hover:text-violet-highlight transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs text-light-muted mb-2 font-mono">{item.org}</div>
                    <p className="text-xs text-light-secondary leading-relaxed font-sans">{item.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))
        )}
      </div>
    </section>
  )
}
