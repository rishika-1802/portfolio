import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { projects } from '@/lib/data/projects'
import Tag from '@/components/ui/Tag'
import {
  ArrowLeft,
  Github,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  FileCode,
  Layers,
  CheckCircle2,
} from 'lucide-react'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Technical Case Study`,
    description: project.shortDescription,
  }
}

export default function ProjectPage({ params }: PageProps) {
  const currentIndex = projects.findIndex((p) => p.slug === params.slug)
  if (currentIndex === -1) notFound()

  const project = projects[currentIndex]
  const hasGithub = !project.github.startsWith('[')
  const hasDemo = !project.demo.startsWith('[')

  // Calculate Next and Previous projects for custom navigation
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="min-h-screen bg-dark-base text-light-primary selection:bg-violet-primary/30 pt-20">
      {/* Background Violet Glow */}
      <div
        className="fixed top-0 left-0 right-0 h-[500px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse at top center, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-12">
        {/* Breadcrumb Navigation (Section 18) */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-light-muted mb-4 uppercase">
          <Link href="/projects" className="hover:text-violet-highlight transition-colors">
            PROJECTS
          </Link>
          <span className="text-[0.6rem] text-light-muted">/</span>
          <span className="text-violet-highlight font-semibold">{project.slug}</span>
        </div>

        {/* Back Context Navigation (Section 19) */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-dark-border">
          <Link
            href="/projects"
            id="back-to-projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-light-secondary hover:text-violet-highlight transition-colors"
          >
            <ArrowLeft size={14} />
            <span>BACK TO PROJECTS</span>
          </Link>
          <div className="text-xs font-mono text-violet-highlight bg-violet-primary/10 border border-violet-primary/30 px-3 py-1 rounded">
            CASE STUDY · {project.year}
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-2.5 py-1 rounded bg-violet-primary/10 border border-violet-primary/30 text-[0.65rem] font-mono text-violet-highlight font-medium">
              {project.category}
            </span>
            <span className="text-xs font-mono text-light-muted">·</span>
            <span className="text-xs font-mono text-light-muted">{project.status}</span>
            <span className="text-xs font-mono text-light-muted">·</span>
            <span className="text-xs font-mono text-light-muted">{project.type}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-light-primary mb-3">
            {project.title}
          </h1>
          <p className="text-lg text-light-secondary mb-8 max-w-3xl leading-relaxed font-sans">
            {project.subtitle}
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-dark-border border border-dark-border rounded-xl overflow-hidden">
            {project.stats.map((stat) => (
              <div key={stat.label} className="p-4 bg-dark-card">
                <div className="text-[0.6rem] font-mono text-light-muted uppercase mb-1">{stat.label}</div>
                <div className="text-sm font-mono font-bold text-violet-highlight">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Main Body (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="ui-card p-6 bg-dark-card border-dark-border">
              <div className="text-xs font-mono text-violet-highlight uppercase mb-3 flex items-center gap-2">
                <FileCode size={14} />
                <span>SYSTEM OVERVIEW</span>
              </div>
              <p className="text-light-secondary leading-relaxed text-sm md:text-base font-sans">
                {project.longDescription}
              </p>
            </div>

            {/* Problem */}
            <div className="ui-card p-6 bg-dark-card border-dark-border">
              <div className="text-xs font-mono text-violet-highlight uppercase mb-3">THE PROBLEM</div>
              <p className="text-light-secondary leading-relaxed text-sm font-sans">
                {project.problem}
              </p>
            </div>

            {/* Approach */}
            <div className="ui-card p-6 bg-dark-card border-dark-border">
              <div className="text-xs font-mono text-violet-highlight uppercase mb-3">ENGINEERING APPROACH</div>
              <p className="text-light-secondary leading-relaxed text-sm font-sans">
                {project.approach}
              </p>
            </div>

            {/* Architecture Pipeline */}
            <div className="ui-card p-6 bg-dark-card border-dark-border">
              <div className="text-xs font-mono text-violet-highlight uppercase mb-4 flex items-center gap-2">
                <Layers size={14} />
                <span>SYSTEM ARCHITECTURE PIPELINE</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {project.architecture.map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 text-xs font-mono rounded bg-dark-elevated border border-dark-border text-light-primary">
                      {step}
                    </span>
                    {i < project.architecture.length - 1 && (
                      <ChevronRight size={12} className="text-violet-primary flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="ui-card p-6 bg-dark-card border-dark-border">
              <div className="text-xs font-mono text-violet-highlight uppercase mb-4 flex items-center gap-2">
                <CheckCircle2 size={14} />
                <span>KEY FEATURES &amp; CAPABILITIES</span>
              </div>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-light-secondary font-sans">
                    <span className="text-violet-highlight font-mono font-bold">{String(i + 1).padStart(2, '0')}.</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Learnings */}
            <div className="ui-card p-6 bg-dark-card border-dark-border">
              <div className="text-xs font-mono text-violet-highlight uppercase mb-3">CHALLENGES &amp; LEARNINGS</div>
              <p className="text-light-secondary text-xs md:text-sm leading-relaxed mb-4 font-sans">
                {project.challenges}
              </p>
              <div className="p-4 rounded-lg bg-violet-primary/10 border border-violet-primary/30 text-xs text-light-primary italic">
                &ldquo;{project.whatILearned}&rdquo;
              </div>
            </div>

            {/* Future Work */}
            <div className="ui-card p-6 bg-dark-card border-dark-border">
              <div className="text-xs font-mono text-violet-highlight uppercase mb-3">FUTURE WORK &amp; ROADMAP</div>
              <p className="text-light-secondary text-xs md:text-sm leading-relaxed font-sans">
                {project.futureWork}
              </p>
            </div>
          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Links Box */}
            <div className="ui-card p-6 bg-dark-card border-dark-border">
              <div className="text-xs font-mono text-violet-highlight uppercase mb-4">SYSTEM REPOSITORIES</div>
              <div className="space-y-3">
                {hasGithub ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-dark-elevated border border-dark-border hover:border-violet-primary/50 text-xs font-mono text-light-primary transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Github size={14} className="text-violet-highlight" />
                      <span>SOURCE CODE</span>
                    </div>
                    <ExternalLink size={12} className="text-light-muted" />
                  </a>
                ) : (
                  <div className="p-3 rounded-lg bg-dark-elevated border border-dark-border text-xs font-mono text-light-muted flex items-center justify-between">
                    <span>SOURCE CODE</span>
                    <span className="text-[0.6rem] text-violet-highlight">UPON REQUEST</span>
                  </div>
                )}

                {hasDemo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-violet-primary text-white text-xs font-mono transition-all hover:bg-violet-primary/90"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>

            {/* Tech Stack Box */}
            <div className="ui-card p-6 bg-dark-card border-dark-border">
              <div className="text-xs font-mono text-violet-highlight uppercase mb-4">TECH STACK</div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Tag key={tech} label={tech} variant="violet" size="sm" />
                ))}
              </div>
            </div>

            {/* Domain Box */}
            <div className="ui-card p-6 bg-dark-card border-dark-border">
              <div className="text-xs font-mono text-light-muted uppercase mb-1">PRIMARY DOMAIN</div>
              <div className="text-sm font-mono font-bold text-violet-highlight">{project.domain}</div>
            </div>
          </div>
        </div>

        {/* Project Navigation System (Section 11) */}
        <div className="border-t border-dark-border pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Previous Project */}
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex items-center gap-3 p-4 rounded-xl border border-dark-border bg-dark-card hover:border-violet-primary/40 text-left min-w-[200px] w-full sm:w-auto transition-all group"
          >
            <ChevronLeft size={16} className="text-light-muted group-hover:text-violet-highlight" />
            <div>
              <div className="text-[0.6rem] font-mono text-light-muted uppercase tracking-wider">PREVIOUS SYSTEM</div>
              <div className="text-xs font-bold text-light-primary group-hover:text-violet-highlight transition-colors">
                {prevProject.title}
              </div>
            </div>
          </Link>

          {/* All Projects link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-dark-elevated border border-dark-border text-xs font-mono text-light-secondary hover:text-violet-highlight transition-all"
          >
            <span>[ ALL PROJECTS ]</span>
          </Link>

          {/* Next Project */}
          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center justify-between p-4 rounded-xl border border-dark-border bg-dark-card hover:border-violet-primary/40 text-right min-w-[200px] w-full sm:w-auto transition-all group"
          >
            <div className="text-left sm:text-right">
              <div className="text-[0.6rem] font-mono text-light-muted uppercase tracking-wider">NEXT SYSTEM</div>
              <div className="text-xs font-bold text-light-primary group-hover:text-violet-highlight transition-colors">
                {nextProject.title}
              </div>
            </div>
            <ChevronRight size={16} className="text-light-muted group-hover:text-violet-highlight ml-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}
