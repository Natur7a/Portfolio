"use client"

import { Sun, Moon } from "lucide-react"

export function ThemeToggle({ className = "" }: { className?: string }) {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark")
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light")
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      className={`flex items-center justify-center rounded-full border border-border p-2 transition-colors text-muted-foreground hover:text-foreground hover:bg-foreground/5 ${className}`}
    >
      {/* Icons swap purely via CSS so server and client markup always match */}
      <Sun size={16} className="hidden dark:block" />
      <Moon size={16} className="block dark:hidden" />
    </button>
  )
}

export default ThemeToggle
