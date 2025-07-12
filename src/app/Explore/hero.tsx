import { Button } from "../../../ui/Button"
import { Folder, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="py-24 flex items-center justify-center" data-aos="fade-right">
      <div className="max-w-4xl w-full px-6 flex flex-col items-start text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-left">
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
            <Link href="/projects">
              <Folder className="mr-2 h-4 w-4" />
              View My Work
            </Link>
          </Button>
          <Button size="lg" className="border" asChild>
            <Link href="/resume.pdf" target="_blank" rel="noopener">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>
          <div className="w-full border rounded-md p-6 bg-gray-900/30">
          <h2 className="text-2xl font-semibold mb-6 text-left">Work Experience</h2>
          <div className="flex items-center gap-6">
            <Image
              src="/it_div.jpeg"
              alt="Binus IT Division Logo"
              width={100}
              height={100}
              className="object-cover rounded"
            />
            <div className="space-y-1 text-left">
              <p className="text-lg font-bold">Associate Member Programmer</p>
              <p className="text-sm text-muted-foreground">
                Binus IT Division
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
