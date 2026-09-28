import { Folder, User, GraduationCap, FolderGit2, BookOpen } from "lucide-react"

// Single source of truth for the sidebar links and their keyboard shortcuts
export const navItems = [
  { href: "/Explore", label: "Explore", icon: User, shortcut: "W" },
  { href: "/Experience", label: "Works", icon: Folder, shortcut: "A" },
  { href: "/Projects", label: "Projects", icon: FolderGit2, shortcut: "D" },
  { href: "/Research", label: "Research", icon: BookOpen, shortcut: "R" },
  { href: "/Education", label: "Education", icon: GraduationCap, shortcut: "S" },
]
