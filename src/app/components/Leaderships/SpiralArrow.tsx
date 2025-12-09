export function SpiralArrow() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Spiral circles */}
      <circle cx="200" cy="200" r="180" stroke="#E5E7EB" strokeWidth="1" />
      <circle cx="200" cy="200" r="150" stroke="#E5E7EB" strokeWidth="1" />
      <circle cx="200" cy="200" r="120" stroke="#E5E7EB" strokeWidth="1" />
      <circle cx="200" cy="200" r="90" stroke="#E5E7EB" strokeWidth="1" />
      <circle cx="200" cy="200" r="60" stroke="#E5E7EB" strokeWidth="1" />
      <circle cx="200" cy="200" r="30" stroke="#E5E7EB" strokeWidth="1" />
      
     
      <path
        d="M100 250C140 250 160 200 180 150C200 100 220 50 300 50"
        stroke="black"
        strokeWidth="2"
        fill="none"
      />
     
      <path
        d="M290 40L300 50L290 60"
        stroke="black"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

