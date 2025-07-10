"use client"
import { Code, Folder, User, BadgeCheck, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../../../src/components/ui/navigation-menu"

export function Navigation() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-300 border-r p-6 flex flex-col justify-between shadow-sm">
      <div>
        <div className="flex items-center mb-10 gap-4">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full border" 
          />
          <div>
            <h2 className="mt-4 font-semibold text-black">Moses Handoyo</h2>
            <p className="text-sm text-muted-foreground text-gray-500">Full-stack & ML Learner</p>
          </div>
        </div>
          <div className="mb-6">
            <p className="text-black font-semibold bottom-2 text-l mb-2">About Me</p>
            <nav className="space-y-2 text-sm">
              <Link href="#about" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 text-black">
                <User size={18} /> About
              </Link>
              <Link href="#projects" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 text-black">
                <Folder size={18} /> Projects
              </Link>
              <Link href="#skills" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 text-black">
                <BadgeCheck size={18} /> Skills
              </Link>
              <Link href="#contact" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 text-black">
                <Mail size={18} /> Contact
              </Link>
            </nav>
          </div>
      </div>
      <div className="flex items-center justify-center text-sm text-muted-foreground mt-10 text-black">
        <Code className="mr-2 h-4 w-4 text-black" />
        Portfolio
      </div>
    </aside>
  )
}

export default Navigation
