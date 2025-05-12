"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
}

export function SectionReveal({ children, className = "" }: SectionRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className={`section-reveal ${isRevealed ? "revealed" : ""} ${className}`}>
      {children}
    </div>
  )
}
