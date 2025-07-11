import { Badge } from "../../../ui/Badge"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="container py-80 mx-auto">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-5xl font-bold tracking-tighter mb-8 text-center">About Me</h2>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-muted-foreground text-2xl">
              {"I'm a passionate full-stack developer. I love turning complex problems into simple, beautiful, and intuitive solutions."}
            </p>
            <p className="text-muted-foreground text-2xl">
              {"When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring."}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Problem Solver</Badge>
              <Badge variant="secondary">Team Player</Badge>
              <Badge variant="secondary">Continuous Learner</Badge>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Profile"
              width={500}
              height={500}
              className="rounded-full border-4 border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
