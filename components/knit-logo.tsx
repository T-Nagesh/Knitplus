interface KnitLogoProps {
  className?: string
}

export function KnitLogo({ className = "" }: KnitLogoProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="font-mono text-xl font-medium tracking-wider text-knit-white">
        KNIT<span className="text-knit-blue">+</span>
      </div>
      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-knit-green"></div>
    </div>
  )
}
