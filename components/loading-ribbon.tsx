interface LoadingRibbonProps {
  className?: string
}

export function LoadingRibbon({ className = "" }: LoadingRibbonProps) {
  return (
    <div className={`h-1 w-full ribbon-loading ${className}`} aria-label="Loading" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
}
