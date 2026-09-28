"use client"

import { Folder, User, GraduationCap, Github, Linkedin, Instagram, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import ThemeToggle from "./themeToggle"

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

  const navItems = [
    { href: "/Explore", label: "Explore", icon: User, shortcut: "W" },
    { href: "/Experience", label: "Works", icon: Folder, shortcut: "A" },
    { href: "/Education", label: "Education", icon: GraduationCap, shortcut: "S" },
  ]

  const socialLinks = [
    { href: "https://github.com/Natur7a", label: "GitHub", icon: Github },
    { href: "https://www.linkedin.com/in/moses-handoyo", label: "LinkedIn", icon: Linkedin },
    { href: "https://www.instagram.com/_moses.h_/", label: "Instagram", icon: Instagram },
  ]

  return (
    <>
      {/* Mobile top bar */}
      <header className="fixed top-0 inset-x-0 h-14 z-40 flex items-center justify-between px-4 bg-gray-50/90 dark:bg-[#1a1a1a]/90 backdrop-blur border-b border-gray-200 dark:border-gray-700 md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="flex items-center justify-center rounded p-2 transition-colors text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          <Menu size={22} />
        </button>
        <Link href="/Explore" className="flex items-center gap-2">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full object-cover aspect-square"
          />
          <span className="font-semibold text-gray-900 dark:text-gray-100">Moses Handoyo</span>
        </Link>
        <ThemeToggle />
      </header>

      {/* Backdrop behind the mobile drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

<aside className={`fixed top-0 left-0 h-screen w-64 max-w-[85vw] overflow-y-auto bg-gray-50 dark:bg-[#1a1a1a] border-r border-gray-200 dark:border-gray-700 p-6 flex flex-col justify-between shadow-sm z-50 transition-transform duration-300 md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
  <div>
        {/* Profile Info */}
        <div className="flex items-center mb-10 gap-4">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full object-cover aspect-square"
          />
          <div className="flex-1">
            <h2 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">Moses Handoyo</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Junior Software Engineer</p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="self-start rounded p-1 transition-colors text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="mb-6">
          <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg mb-2">ABOUT ME</p>
          <nav className="text-sm">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathName === item.href
                const baseClasses =
                  "w-full block flex items-center justify-between gap-2 px-3 py-2 rounded transition-colors"
                const activeClasses =
                  "border border-gray-300 bg-white dark:bg-gray-100 font-bold text-black cursor-default"
                const inactiveClasses = "text-gray-600 dark:text-gray-400 font-semibold hover:bg-gray-200 dark:hover:bg-gray-50"

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`${baseClasses} ${
                        isActive ? activeClasses : inactiveClasses
                      }`}
                    >
                      <item.icon
                        size={22}
                        className={isActive ? "text-black" : "text-gray-600 dark:text-gray-400"}
                      />
                      <span className="flex-1 text-left">{item.label}</span>
                      {/* Keyboard shortcuts only make sense on desktop */}
                      <kbd
                        className={`hidden md:inline-block px-2 py-1 bg-gray-100 border rounded text-xs font-semibold ${
                          isActive
                            ? "text-gray-600 border-gray-200"
                            : "text-gray-400 border-gray-200 dark:border-gray-100"
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
          <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg mb-2">CONTACTS</p>
          <nav className="text-sm">
            <ul className="flex flex-col space-y-2">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block flex items-center gap-2 px-3 py-2 rounded transition-colors text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-700 font-semibold hover:bg-gray-200 dark:hover:bg-gray-50"
                  >
                    <item.icon size={22} />
                    <span className="flex-1 text-left">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Theme switcher */}
      <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">Theme</p>
        <ThemeToggle />
      </div>
    </aside>
    </>
  )
}

export default Navigation
