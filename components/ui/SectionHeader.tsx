interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {badge && (
        <div className="section-badge">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-primary animate-pulse" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-light-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-light-secondary text-sm md:text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
