"use client"

import { Code, Folder, User, GraduationCap, Github, Linkedin, Instagram } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const pathName = usePathname()

  const navItems = [
    { href: "/Explore", label: "Explore", icon: User, shortcut: "W" },
    { href: "/Experience", label: "Works", icon: Folder, shortcut: "A" },
    { href: "/Education", label: "Education", icon: GraduationCap, shortcut: "S" },  
  ]

  const socialLinks = [
    { href: "https://github.com/Natur7a", label: "GitHub", icon: Github },
    { href: "https://www.linkedin.com/in/moses-handoyo-156046229", label: "LinkedIn", icon: Linkedin },
    { href: "https://www.instagram.com/_moses.h_/", label: "Instagram", icon: Instagram },
  ]

  return (
<aside className="fixed top-0 left-0 h-screen w-64 bg-[#1a1a1a] border-r border-gray-700 p-6 flex-col justify-between shadow-sm z-50 hidden md:flex">      
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
          <div>
            <h2 className="font-semibold text-gray-100 text-lg">Moses Handoyo</h2>
            <p className="text-sm text-gray-300">Full-stack & ML Learner</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-6">
          <p className="text-gray-100 font-semibold text-lg mb-2">ABOUT ME</p>
          <nav className="text-sm">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathName === item.href
                const baseClasses =
                  "w-full block flex items-center justify-between gap-2 px-3 py-2 rounded transition-colors"
                const activeClasses =
                  "border border-gray-300 bg-gray-100 font-bold text-black cursor-default"
                const inactiveClasses = "text-gray-400 font-semibold hover:bg-gray-50"

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${baseClasses} ${
                        isActive ? activeClasses : inactiveClasses
                      }`}
                    >
                      <item.icon
                        size={22}
                        className={isActive ? "text-black" : "text-gray-400"}
                      />
                      <span className="flex-1 text-left">{item.label}</span>
                      <kbd
                        className={`px-2 py-1 bg-gray-100 border rounded text-xs font-semibold ${
                          isActive
                            ? "text-gray-600 border-gray-200"
                            : "text-gray-400 border-gray-100"
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
          <p className="text-gray-100 font-semibold text-lg mb-2">CONTACTS</p>
          <nav className="text-sm">
            <ul className="flex flex-col space-y-2">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block flex items-center gap-2 px-3 py-2 rounded transition-colors text-gray-500 hover:text-gray-700 font-semibold hover:bg-gray-50"
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
    </aside>
  )
}

export default Navigation