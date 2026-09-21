'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Cpu, CheckCircle2, Terminal, FileText, Github } from 'lucide-react'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 md:px-12 lg:px-24 bg-dark-base overflow-hidden"
    >
      {/* Background Soft Atmospheric Violet Glows (Section 06) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft violet glow behind text */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-primary/10 blur-[130px] opacity-70" />
        {/* Soft violet glow behind portrait */}
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full bg-violet-secondary/15 blur-[140px] opacity-80" />
        {/* Minimal grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column — Text & CTAs (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-light-primary leading-[1.05] mb-6">
            Hello, <br />
            <span className="text-gradient-purple">I&apos;m Rishika</span>
          </h1>

          {/* Description */}
          <p className="text-light-secondary text-base sm:text-lg max-w-xl leading-relaxed mb-8 font-sans">
            Building intelligent systems that turn complex data into meaningful, explainable real-world decisions. Specialized in Computer Vision, Generative AI, and production-ready APIs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <button
              onClick={scrollToProjects}
              id="hero-explore-work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-violet-primary text-white text-xs font-mono tracking-wider uppercase font-semibold hover:bg-violet-primary/90 hover:shadow-violet-glow transition-all duration-300 group"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/resume.pdf"
              download="Rishika_B_S_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-violet-primary/10 border border-violet-primary/40 text-violet-highlight text-xs font-mono tracking-wider uppercase font-semibold hover:bg-violet-primary/20 hover:border-violet-primary/60 transition-all duration-300"
            >
              <FileText size={14} />
              <span>DOWNLOAD RESUME</span>
            </a>
            <a
              href="https://github.com/rishika-1802"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg bg-dark-card border border-dark-border text-light-secondary text-xs font-mono tracking-wider uppercase hover:border-violet-primary/40 hover:text-light-primary transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={14} />
              <span>GITHUB</span>
            </a>
          </div>

          {/* Floating Cards (Desktop row below text for small cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-12 w-full">
            {/* Card 1 */}
            <div className="bg-dark-card/80 backdrop-blur-sm border border-dark-border p-3.5 rounded-xl hover:border-violet-primary/40 transition-colors">
              <div className="flex items-center gap-2 text-[0.65rem] font-mono text-light-muted uppercase mb-1">
                <Terminal size={11} className="text-violet-highlight" />
                <span>CURRENT STATUS</span>
              </div>
              <div className="text-xs font-bold text-light-primary">FINAL YEAR</div>
              <div className="text-[0.65rem] text-light-secondary font-mono">AI &amp; DATA SCIENCE</div>
            </div>

            {/* Card 2 */}
            <div className="bg-dark-card/80 backdrop-blur-sm border border-dark-border p-3.5 rounded-xl hover:border-violet-primary/40 transition-colors">
              <div className="flex items-center gap-2 text-[0.65rem] font-mono text-light-muted uppercase mb-1">
                <Cpu size={11} className="text-violet-highlight" />
                <span>FOCUS</span>
              </div>
              <div className="text-xs font-bold text-light-primary">AI / ML &amp; VISION</div>
              <div className="text-[0.65rem] text-light-secondary font-mono">INTELLIGENT SYSTEMS</div>
            </div>

            {/* Card 3 */}
            <div className="bg-dark-card/80 backdrop-blur-sm border border-dark-border p-3.5 rounded-xl hover:border-violet-primary/40 transition-colors">
              <div className="flex items-center gap-2 text-[0.65rem] font-mono text-light-muted uppercase mb-1">
                <CheckCircle2 size={11} className="text-violet-highlight" />
                <span>AVAILABILITY</span>
              </div>
              <div className="text-xs font-bold text-light-primary">OPEN TO ROLES</div>
              <div className="text-[0.65rem] text-light-secondary font-mono">AI / ML OPPORTUNITIES</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column — Modern Portrait Card (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Subtle violet ambient backdrop card */}
          <div className="relative w-full max-w-md">
            {/* Ambient border lighting */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-violet-primary/30 via-violet-secondary/10 to-transparent blur-md opacity-60" />

            {/* Main Portrait Card */}
            <div className="relative bg-dark-card border border-dark-border p-3 rounded-2xl overflow-hidden shadow-2xl">
              {/* Top card bar decoration */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-dark-border/60 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
              </div>

              {/* Portrait Image container */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-dark-elevated">
                <Image
                  src="/portrait.png"
                  alt="Rishika B S"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-transparent to-transparent opacity-40" />
              </div>

              {/* Bottom Card Info Overlay */}
              <div className="p-3 mt-1 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-light-primary">RISHIKA B S</div>
                  <div className="text-[0.65rem] font-mono text-light-secondary">B.Tech - AI&amp; DS</div>
                </div>
                <div className="px-2.5 py-1 rounded bg-violet-primary/10 border border-violet-primary/30 text-[0.6rem] font-mono text-violet-highlight">
                  2023 - 2027
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
