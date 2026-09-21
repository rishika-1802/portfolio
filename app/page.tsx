import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Tag from '@/components/ui/Tag'
import { projects } from '@/lib/data/projects'
import { ArrowRight, Brain, Briefcase, Search, ShieldAlert } from 'lucide-react'

export default function Home() {
  // Get top 3 projects for homepage
  const topProjects = projects.filter((p) => [1, 2, 3].includes(p.id))

  return (
    <div className="bg-dark-base pt-16">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Homepage Bento Preview */}
      <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: About Preview */}
          <AnimatedSection delay={0.05}>
            <Link href="/about" className="group block">
              <div className="ui-card p-6 bg-dark-card border-dark-border hover:border-violet-primary/50 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-primary/10 border border-violet-primary/30 flex items-center justify-center">
                    <Brain size={16} className="text-violet-highlight" />
                  </div>
                  <span className="text-[0.65rem] font-mono text-light-muted">01 · SECTION</span>
                </div>
                <h3 className="font-display text-lg font-bold text-light-primary mb-1 group-hover:text-violet-highlight transition-colors">
                  ABOUT
                </h3>
                <p className="text-xs text-light-secondary leading-relaxed font-sans mb-4">
                  Education, technical background, and personal engineering philosophy.
                </p>
                <div className="text-xs font-mono text-violet-highlight font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>A little about me</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Card 2: Experience Preview */}
          <AnimatedSection delay={0.1}>
            <Link href="/experience" className="group block">
              <div className="ui-card p-6 bg-dark-card border-dark-border hover:border-violet-primary/50 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-primary/10 border border-violet-primary/30 flex items-center justify-center">
                    <Briefcase size={16} className="text-violet-highlight" />
                  </div>
                  <span className="text-[0.65rem] font-mono text-light-muted">02 · SECTION</span>
                </div>
                <h3 className="font-display text-lg font-bold text-light-primary mb-1 group-hover:text-violet-highlight transition-colors">
                  EXPERIENCE
                </h3>
                <p className="text-xs text-light-secondary leading-relaxed font-sans mb-4">
                  Applied AI internships, core responsibilities, and industry exposure.
                </p>
                <div className="text-xs font-mono text-violet-highlight font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Engineering journey</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Card 3: Research Preview */}
          <AnimatedSection delay={0.15}>
            <Link href="/research" className="group block">
              <div className="ui-card p-6 bg-dark-card border-dark-border hover:border-violet-primary/50 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-primary/10 border border-violet-primary/30 flex items-center justify-center">
                    <Search size={16} className="text-violet-highlight" />
                  </div>
                  <span className="text-[0.65rem] font-mono text-light-muted">03 · SECTION</span>
                </div>
                <h3 className="font-display text-lg font-bold text-light-primary mb-1 group-hover:text-violet-highlight transition-colors">
                  RESEARCH
                </h3>
                <p className="text-xs text-light-secondary leading-relaxed font-sans mb-4">
                  Curiosity-driven AI research questions and computational experiments.
                </p>
                <div className="text-xs font-mono text-violet-highlight font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>What I&apos;m exploring</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Selected Systems (Top 3 Projects Only) */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="mb-12">
            <div className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-primary animate-pulse" />
              <span>SELECTED SYSTEMS</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-light-primary">
              FEATURED WORK
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Flagship: Gradiora */}
          {topProjects.find((p) => p.slug === 'gradiora') && (
            <AnimatedSection delay={0.1} className="lg:col-span-12">
              <Link href="/projects/gradiora" className="group block">
                <div className="ui-card p-8 md:p-10 bg-dark-card border-dark-border hover:border-violet-primary/60 transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-primary/10 rounded-full blur-[120px] pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[0.65rem] font-mono text-violet-highlight bg-violet-primary/10 border border-violet-primary/30 px-2.5 py-1 rounded">
                          01 · FLAGSHIP SYSTEM
                        </span>
                        <span className="text-[0.65rem] font-mono text-light-muted">
                          EXPLAINABLE AI / SAAS
                        </span>
                      </div>

                      <h3 className="font-display text-3xl md:text-5xl font-bold text-light-primary mb-3 group-hover:text-violet-highlight transition-colors">
                        GRADIORA
                      </h3>

                      <p className="text-light-secondary text-sm md:text-base leading-relaxed mb-6 font-sans">
                        A production-oriented institutional SaaS platform that identifies student risk across academic, emotional, and financial dimensions using explainable AI and structured intervention workflows.
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {['Python', 'Scikit-learn', 'SHAP', 'Flask', 'SQLite'].map((t) => (
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

          {/* Terrain AI and Movie Recommendation Grid */}
          {topProjects.filter((p) => p.slug !== 'gradiora').map((project, i) => (
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

                    <p className="text-xs text-light-secondary leading-relaxed mb-6 font-sans line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Tag key={tech} label={tech} size="xs" variant="default" />
                      ))}
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

        {/* View All Projects Button */}
        <AnimatedSection delay={0.3} className="text-center mt-12">
          <Link
            id="view-all-projects-btn"
            href="/projects"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border border-violet-primary/30 bg-violet-primary/10 text-violet-highlight text-xs font-mono tracking-widest uppercase hover:bg-violet-primary hover:text-white hover:shadow-violet-glow transition-all duration-300"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  )
}
