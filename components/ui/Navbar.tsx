'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText } from 'lucide-react'

const navLinks = [
  { label: 'ABOUT', href: '/about' },
  { label: 'EXPERIENCE', href: '/experience' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'RESEARCH', href: '/research' },
  { label: 'CAPABILITIES', href: '/skills' },
  { label: 'CONTACT', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleResumeClick = () => {
    window.open('/portfolio/resume.pdf', '_blank')
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-base/90 backdrop-blur-md border-b border-dark-border py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Brand Name */}
          <Link
            href="/"
            className="font-display text-sm font-bold tracking-wider text-light-primary hover:text-violet-highlight transition-colors flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-violet-primary animate-pulse" />
            <span>RISHIKA B S</span>
          </Link>

          {/* Right: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              // Path matches link.href or it's sub-path (e.g. /projects/gradiora matches /projects)
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[0.7rem] font-mono tracking-wider relative py-1 transition-colors ${
                    isActive ? 'text-light-primary font-semibold' : 'text-light-secondary hover:text-light-primary'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-primary rounded-full"
                    />
                  )}
                </Link>
              )
            })}

            {/* RESUME link */}
            <a
              href="/portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Rishika_B_S_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.7rem] font-mono tracking-wider uppercase rounded-md bg-violet-primary/10 border border-violet-primary/30 text-violet-highlight hover:bg-violet-primary/20 hover:border-violet-primary/50 transition-all"
            >
              <FileText size={12} />
              <span>RESUME →</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md border border-dark-border bg-dark-card"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation"
            aria-expanded={menuOpen}
          >
            <span className={`w-4 h-0.5 bg-light-primary transition-transform ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`w-4 h-0.5 bg-light-primary transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-4 h-0.5 bg-light-primary transition-transform ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <div
            className="fixed top-16 left-0 right-0 z-40 bg-dark-card border-b border-dark-border p-6 lg:hidden shadow-xl"
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`text-xs font-mono tracking-wider text-left py-1 ${pathname === '/' ? 'text-violet-highlight' : 'text-light-secondary'}`}
              >
                HOME
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xs font-mono tracking-wider text-left py-1 ${pathname.startsWith(link.href) ? 'text-violet-highlight' : 'text-light-secondary'}`}
                >
                  {link.label}
                </Link>
              ))}
              {/* Achievements Link explicitly on mobile navigation drawer */}
              <Link
                href="/achievements"
                onClick={() => setMenuOpen(false)}
                className={`text-xs font-mono tracking-wider text-left py-1 ${pathname === '/achievements' ? 'text-violet-highlight' : 'text-light-secondary'}`}
              >
                ACHIEVEMENTS
              </Link>
              <a
                href="/portfolio/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Rishika_B_S_Resume.pdf"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-md bg-violet-primary text-white font-medium mt-2"
              >
                <FileText size={14} />
                <span>DOWNLOAD RESUME</span>
              </a>
            </nav>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
