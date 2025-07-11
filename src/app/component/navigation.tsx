"use client"

import { Code, Folder, User, BadgeCheck, Mail } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../../../src/components/ui/navigation-menu"

export function Navigation() {
  const pathName = usePathname()

  const navItems = [
    { href: "/Explore", label: "Explore", icon: User, shortcut: "E" },
    { href: "#projects", label: "Works", icon: Folder, shortcut: "P" },
    { href: "#skills", label: "Projects", icon: BadgeCheck, shortcut: "S" },
    { href: "#contact", label: "Contact", icon: Mail, shortcut: "C" },
  ]

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-300 border-r p-6 flex flex-col justify-between shadow-sm z-50">
      <div>
        {/* Profile Info */}
        <div className="flex items-center mb-10 gap-4">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full object-cover aspect-square"
          />
          <div>
            <h2 className="mt-4 font-semibold text-black">Moses Handoyo</h2>
            <p className="text-sm text-gray-500">Full-stack & ML Learner</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-6">
          <p className="text-black font-semibold text-l mb-2">About Me</p>
          <nav className="space-y-2 text-sm">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col gap-1 w-full">
                {navItems.map((item) => {
                  const isActive = pathName === item.href
                  const classes = `flex flex-row items-center gap-2 px-3 py-2 rounded text-black w-full transition-colors ${
                    isActive
                      ? "bg-gray-200 font-bold cursor-default"
                      : "hover:bg-gray-100"
                  }`

                  const Content = (
                    <>
                      <item.icon size={18} />
                      <span className="flex-1">{item.label}</span>
                      {item.shortcut && (
                        <kbd className="ml-auto px-1 py-0.5 bg-gray-200 rounded text-xs">
                          {item.shortcut}
                        </kbd>
                      )}
                    </>
                  )

                  return (
                    <NavigationMenuItem key={item.href}>
                      {isActive ? (
                        <div className={classes}>{Content}</div>
                      ) : (
                        <Link href={item.href} passHref legacyBehavior>
                          <NavigationMenuLink className={classes}>
                            {Content}
                          </NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center text-sm text-muted-foreground mt-10 text-black">
        <Code className="mr-2 h-4 w-4 text-black" />
        Portfolio
      </div>
    </aside>
  )
}

export default Navigation
