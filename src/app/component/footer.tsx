import { Button } from "../component/ui/Button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-8" data-aos="fade-right">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row mx-auto max-w-4xl">
        <p className="text-sm text-muted-foreground">© 2025 Moses Handoyo. All rights reserved.</p>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/Natur7a" target="_blank">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/moses-handoyo-156046229/" target="_blank">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:moses.handoyo99@gmail.com">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
