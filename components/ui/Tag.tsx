interface TagProps {
  label: string
  variant?: 'default' | 'violet' | 'outline'
  size?: 'sm' | 'xs'
}

export default function Tag({ label, variant = 'default', size = 'sm' }: TagProps) {
  const base =
    'inline-flex items-center rounded-md font-mono tracking-wider uppercase transition-colors duration-200 border'

  const variants = {
    default:
      'text-light-secondary bg-dark-elevated/70 border-dark-border hover:border-violet-primary/40 hover:text-violet-highlight',
    violet:
      'text-violet-highlight bg-violet-primary/10 border-violet-primary/30 hover:bg-violet-primary/20',
    outline:
      'text-light-muted bg-transparent border-dark-border hover:border-light-secondary/40',
  }

  const sizes = {
    sm: 'px-2.5 py-1 text-[0.65rem]',
    xs: 'px-2 py-0.5 text-[0.6rem]',
  }

  return (
    <span className={`${base} ${variants[variant]} ${sizes[size]}`}>{label}</span>
  )
}
