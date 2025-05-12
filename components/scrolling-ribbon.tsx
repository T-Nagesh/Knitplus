interface RibbonProps {
  position: "top" | "bottom"
}

export function Ribbon({ position }: RibbonProps) {
  const positionClass = position === "top" ? "top-0" : "bottom-0"

  return (
    <div className={`fixed left-0 right-0 z-40 overflow-hidden ${positionClass}`} style={{ height: "24px" }}>
      <div className="ribbon-container opacity-70" style={{ height: "100%" }}>
        <div className="ribbon-pattern"></div>
      </div>
    </div>
  )
}
