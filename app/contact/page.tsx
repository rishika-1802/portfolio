'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { Github, Linkedin, Mail, FileText, ArrowUpRight } from 'lucide-react'

export default function ContactPage() {
  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank')
  }

  return (
    <div className="bg-dark-base pt-24 pb-16 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
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
            badge="CONTACT"
            title="LET'S CONNECT"
            subtitle="Open to internships, research collaborations, and engineering roles in artificial intelligence."
          />
        </AnimatedSection>

        {/* Minimal Connect Box */}
        <AnimatedSection delay={0.05}>
          <div className="ui-card p-8 md:p-12 bg-dark-card border-dark-border hover:border-violet-primary/45 transition-all relative overflow-hidden flex flex-col items-center text-center">
            {/* Subtle violet ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-primary/10 rounded-full blur-[130px] pointer-events-none" />

            <h3 className="font-display text-2xl md:text-4xl font-bold text-light-primary mb-4 relative z-10">
              I&apos;m open to opportunities in:
            </h3>

            {/* Specialties list */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 relative z-10 text-xs font-mono">
              {['AI Engineering', 'Machine Learning', 'Data Science', 'Computer Vision', 'Research'].map((field) => (
                <span key={field} className="px-3 py-1 rounded-md bg-dark-elevated border border-dark-border text-light-secondary">
                  {field}
                </span>
              ))}
            </div>

            {/* Contact Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <a
                href="https://www.linkedin.com/in/rishika-b-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-violet-primary text-white text-xs font-mono tracking-wider uppercase font-semibold hover:bg-violet-primary/95 hover:shadow-violet-glow transition-all"
              >
                <Linkedin size={14} />
                <span>LINKEDIN</span>
                <ArrowUpRight size={11} />
              </a>

              <a
                href="https://github.com/rishika-1802"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-dark-elevated border border-dark-border text-light-primary text-xs font-mono tracking-wider uppercase hover:border-violet-primary/40 transition-all"
              >
                <Github size={14} />
                <span>GITHUB</span>
                <ArrowUpRight size={11} />
              </a>

              <a
                href="mailto:rishikabs1802@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-dark-elevated border border-dark-border text-light-primary text-xs font-mono tracking-wider uppercase hover:border-violet-primary/40 transition-all"
              >
                <Mail size={14} />
                <span>EMAIL</span>
              </a>

              <a
                href="/resume.pdf"
                download="Rishika_B_S_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-violet-primary/10 border border-violet-primary/30 text-violet-highlight text-xs font-mono tracking-wider uppercase hover:bg-violet-primary/20 transition-all font-medium"
              >
                <FileText size={14} />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
