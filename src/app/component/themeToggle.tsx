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
      className={`flex items-center justify-center rounded p-2 transition-colors text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 ${className}`}
    >
      {/* Icons swap purely via CSS so server and client markup always match */}
      <Sun size={20} className="hidden dark:block" />
      <Moon size={20} className="block dark:hidden" />
    </button>
  )
}

export default ThemeToggle
