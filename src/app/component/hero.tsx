import { Button } from "../../../ui/Button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-24 flex items-center justify-center" data-aos="fade-right">
      <div className="flex flex-col items-start text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-4xl text-left">
            {"Hi, I'm"} <span className="text-primary">Moses Handoyo</span>
          </h1>
          <h2 className="mt-5 text-4xl font-bold tracking-tighter sm:text-5xl md:text-5xl lg:text-4xl text-left">
            {"I'm a Software Engineer"}
          </h2>
          <p className="mx-auto text-lg text-muted-foreground md:text-l text-left">
            First Year Computer Science Student at BINUS University. Passionate about Full-stack Development and Machine Learning.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="border" asChild>
            <Link href="/projects">View My Work</Link>
          </Button>
        </div>
        <div className="mt-4 border rounded-md p-4 w-max">
          <h2 className="text-2xl font-semibold text-left mb-2">
            Work Experience
          </h2>
          <div className="flex flex-col gap-1 text-left">
            <p className="text-lg text-muted-foreground">Associate Member Programmer</p>
            <p className="text-sm text-muted-foreground">Binus IT Division</p>
          </div>
        </div>
      </div>
    </section>
  )
}
