import type React from "react"
interface PixelatedHeadingProps {
  children: React.ReactNode
  className?: string
}

export function PixelatedHeading({ children, className = "" }: PixelatedHeadingProps) {
  return (
    <div className="grid-bg w-full py-8 flex items-center justify-center">
      <h1 className={`font-mono tracking-wide ${className}`}>{children}</h1>
    </div>
  )
}
