import { Button } from "./ui/Button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="container py-24 md:py-32 mx-auto max-w-4xl flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-primary">Moses Handoyo</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Full-Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="../Moses Handoyo (1).pdf" target="_blank" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" asChild>
                <a
                href="https://github.com/Natur7a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
                <a
                href="https://www.linkedin.com/in/moses-handoyo-156046229"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">Linkedin</span>
                </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:moses.handoyo99@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
