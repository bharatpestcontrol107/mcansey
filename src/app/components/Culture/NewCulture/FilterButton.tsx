'use client'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FilterButtonProps {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}

export function FilterButton({ active, onClick, children }: FilterButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className={cn(
        "rounded-full transition-colors",
        active ? "bg-blue-600 text-white hover:text-white hover:bg-blue-700" : "hover:bg-gray-100 border border-blue-600 text-blue-600"
      )}
    >
      {children}
    </Button>
  )
}

