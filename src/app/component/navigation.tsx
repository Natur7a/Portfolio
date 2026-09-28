"use client"

import { Github, Linkedin, Instagram, Menu, X, ArrowUpRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import ThemeToggle from "./themeToggle"
import { navItems } from "./navConfig"

export function Navigation() {
  const pathName = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Allow Escape to close the mobile drawer
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  const socialLinks = [
    { href: "https://github.com/Natur7a", label: "GitHub", icon: Github },
    { href: "https://www.linkedin.com/in/moses-handoyo", label: "LinkedIn", icon: Linkedin },
    { href: "https://www.instagram.com/_moses.h_/", label: "Instagram", icon: Instagram },
  ]

  const sectionLabel = "font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3 px-3"

  return (
    <>
      {/* Mobile top bar */}
      <header className="fixed top-0 inset-x-0 h-14 z-40 flex items-center justify-between px-4 bg-background/80 backdrop-blur-md border-b border-border md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="flex items-center justify-center rounded-full p-2 transition-colors text-muted-foreground hover:text-foreground hover:bg-foreground/5"
        >
          <Menu size={20} />
        </button>
        <Link href="/Explore" className="flex items-center gap-2">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={28}
            height={28}
            className="rounded-full object-cover aspect-square ring-1 ring-border"
          />
          <span className="font-semibold tracking-tight">Moses Handoyo</span>
        </Link>
        <ThemeToggle />
      </header>

      {/* Backdrop behind the mobile drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

<aside className={`fixed top-0 left-0 h-screen w-64 max-w-[85vw] overflow-y-auto bg-card border-r border-border p-5 flex flex-col justify-between z-50 transition-transform duration-300 ease-out md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
  <div>
        {/* Profile Info */}
        <div className="flex items-center mb-10 gap-3 px-1">
          <div className="relative flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={44}
              height={44}
              className="rounded-full object-cover aspect-square ring-1 ring-border"
            />
            {/* Available indicator */}
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-card" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-semibold tracking-tight">Moses Handoyo</h2>
            <p className="text-xs text-muted-foreground">Junior Software Engineer</p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="self-start rounded-full p-1 transition-colors text-muted-foreground hover:text-foreground hover:bg-foreground/5 md:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <div className="mb-8">
          <p className={sectionLabel}>About Me</p>
          <nav className="text-sm">
            <ul className="flex flex-col space-y-1">
              {navItems.map((item) => {
                // Nested routes (e.g. a single article) keep their section highlighted
                const isActive = pathName === item.href || pathName.startsWith(`${item.href}/`)
                const baseClasses =
                  "w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg transition-colors"
                const activeClasses =
                  "bg-foreground text-background font-semibold shadow-sm"
                const inactiveClasses = "text-muted-foreground font-medium hover:text-foreground hover:bg-foreground/5"

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`${baseClasses} ${
                        isActive ? activeClasses : inactiveClasses
                      }`}
                    >
                      <item.icon size={18} />
                      <span className="flex-1 text-left">{item.label}</span>
                      {/* Keyboard shortcuts only make sense on desktop */}
                      <kbd
                        className={`hidden md:inline-flex h-5 min-w-5 items-center justify-center rounded border px-1 font-mono text-[10px] ${
                          isActive
                            ? "border-background/30 text-background/70"
                            : "border-border text-muted-foreground"
                        }`}
                      >
                        {item.shortcut}
                      </kbd>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <div className="mb-6">
          <p className={sectionLabel}>Contacts</p>
          <nav className="text-sm">
            <ul className="flex flex-col space-y-1">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-muted-foreground hover:text-foreground font-medium hover:bg-foreground/5"
                  >
                    <item.icon size={18} />
                    <span className="flex-1 text-left">{item.label}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Theme switcher */}
      <div className="flex items-center justify-between border-t border-border pt-4 px-1">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Theme</p>
        <ThemeToggle />
      </div>
    </aside>
    </>
  )
}

export default Navigation
