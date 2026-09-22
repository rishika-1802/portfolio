'use client'

import Link from 'next/link'

export default function Footer() {
  const handleResumeClick = () => {
    window.open('/portfolio/resume.pdf', '_blank')
  }

  return (
    <footer className="w-full border-t border-dark-border bg-dark-subtle py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-light-muted">
        <div>
          <span className="font-bold text-light-primary">RISHIKA B S</span> · AI &amp; DATA SCIENCE ENGINEER
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a href="https://github.com/rishika-1802" target="_blank" rel="noopener noreferrer" className="hover:text-violet-highlight transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/rishika-b-s/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-highlight transition-colors">LinkedIn</a>
          <a href="mailto:rishikabs1802@gmail.com" className="hover:text-violet-highlight transition-colors">Email</a>
          <a href="/portfolio/resume.pdf" download="Rishika_B_S_Resume.pdf" className="hover:text-violet-highlight transition-colors">Resume</a>
        </div>
        <div>
          © 2026 Rishika B S
        </div>
      </div>
    </footer>
  )
}
