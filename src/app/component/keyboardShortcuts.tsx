"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { navItems } from "./navConfig"

export function KeyboardShortcuts() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Leave browser/OS shortcuts and typing in form fields alone
      if (event.metaKey || event.ctrlKey || event.altKey) return
      const target = event.target as HTMLElement | null
      if (target && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))) return

      const item = navItems.find((nav) => nav.shortcut.toLowerCase() === event.key.toLowerCase())
      if (item) router.push(item.href)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [router])

  return null
}

export default KeyboardShortcuts
