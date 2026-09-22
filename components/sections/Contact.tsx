'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { Github, Linkedin, Mail, FileText, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const handleResumeClick = () => {
    window.open('/portfolio/resume.pdf', '_blank')
  }

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* Contact CTA Box */}
      <AnimatedSection>
        <div className="ui-card p-8 md:p-14 bg-dark-card border-dark-border hover:border-violet-primary/50 transition-all relative overflow-hidden text-center flex flex-col items-center">
          {/* Subtle Violet Radial Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-primary/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[0.7rem] font-mono tracking-widest uppercase rounded-full bg-violet-primary/10 border border-violet-primary/30 text-violet-highlight mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-primary animate-pulse" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-light-primary mb-6 leading-tight">
              LET&apos;S BUILD SOMETHING <br />
              <span className="text-gradient-purple">INTELLIGENT.</span>
            </h2>

            {/* Specialization Pills */}
            <div className="flex flex-wrap justify-center items-center gap-2 mb-8 text-xs font-mono text-light-secondary">
              <span className="px-3 py-1 rounded bg-dark-elevated border border-dark-border">AI Engineering</span>
              <span className="text-violet-primary">•</span>
              <span className="px-3 py-1 rounded bg-dark-elevated border border-dark-border">Machine Learning</span>
              <span className="text-violet-primary">•</span>
              <span className="px-3 py-1 rounded bg-dark-elevated border border-dark-border">Data Science</span>
              <span className="text-violet-primary">•</span>
              <span className="px-3 py-1 rounded bg-dark-elevated border border-dark-border">Computer Vision</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/rishika-b-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-violet-primary text-white text-xs font-mono tracking-wider uppercase font-semibold hover:bg-violet-primary/90 hover:shadow-violet-glow transition-all"
              >
                <Linkedin size={14} />
                <span>LINKEDIN</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href="https://github.com/rishika-1802"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-dark-elevated border border-dark-border text-light-primary text-xs font-mono tracking-wider uppercase hover:border-violet-primary/40 transition-all"
              >
                <Github size={14} />
                <span>GITHUB</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href="mailto:rishikabs1802@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-dark-elevated border border-dark-border text-light-primary text-xs font-mono tracking-wider uppercase hover:border-violet-primary/40 transition-all"
              >
                <Mail size={14} />
                <span>EMAIL</span>
              </a>

              <a
                href="/portfolio/resume.pdf"
                download="Rishika_B_S_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-violet-primary/10 border border-violet-primary/30 text-violet-highlight text-xs font-mono tracking-wider uppercase hover:bg-violet-primary/20 transition-all font-medium"
              >
                <FileText size={14} />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Minimal Dark Footer */}
      <footer className="mt-20 pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-light-muted">
        <div>
          <span className="font-bold text-light-primary">RISHIKA B S</span> · AI &amp; DATA SCIENCE ENGINEER
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/rishika-1802" target="_blank" rel="noopener noreferrer" className="hover:text-violet-highlight transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/rishika-b-s/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-highlight transition-colors">LinkedIn</a>
          <a href="mailto:rishikabs1802@gmail.com" className="hover:text-violet-highlight transition-colors">Email</a>
          <a href="/portfolio/resume.pdf" download="Rishika_B_S_Resume.pdf" className="hover:text-violet-highlight transition-colors">Resume</a>
        </div>
        <div>
          © 2026 Rishika B S
        </div>
      </footer>
    </section>
  )
}
