import { Button } from "../../../ui/Button"
import { ArrowRight, ArrowUpRight, BookOpen, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { articles } from "../Research/articles"

const latestArticle = articles[0]

const stats = [
  { value: "1.5 yrs", label: "Production experience" },
  { value: "~99%", label: "Faster data process" },
  { value: "3.75", label: "GPA / 4.00" },
]

export function HeroSection() {
  return (
    <section className="py-8 md:py-24 flex items-center justify-center">
      <div className="max-w-4xl w-full sm:px-6 flex flex-col items-start space-y-10">
        <div className="space-y-6">
          {/* Availability */}
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to remote roles · Jakarta, Indonesia
          </span>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-left">
              {"Hi, I'm"}{" "}
              <span className="bg-linear-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                Moses Handoyo
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-left text-muted-foreground">
              {"Junior Software Engineer"}
              <span className="font-mono text-base sm:text-lg font-normal"> — .NET, C#, Full-Stack</span>
            </h2>
          </div>

          <div className="max-w-2xl space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground text-left">
            <p>
              <span className="text-foreground">1.5 years of production experience</span> building and maintaining .NET and C# web applications that support daily school operations at BINUS. Cut a critical data process from over 30 minutes to under 10 seconds through query optimization and efficient data structures.
            </p>
            <p>
              Computer Science student at BINUS University (GPA 3.75), experienced in Agile delivery, SQL, and full-stack development with JavaScript, React, and Next.js.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full sm:w-auto sm:flex-row">
          <Button size="lg" className="group rounded-full px-6" asChild>
            <Link href="/Experience">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-6 border-border bg-transparent hover:bg-foreground/5" asChild>
            <Link href="/Moses Handoyo CV.pdf" target="_blank" rel="noopener">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>

        {/* Highlights */}
        <div className="grid w-full grid-cols-3 divide-x divide-border rounded-xl border border-border bg-card/60 backdrop-blur-sm" data-aos="fade-up">
          {stats.map((stat) => (
            <div key={stat.label} className="px-3 py-4 sm:px-6 sm:py-5 text-left">
              <p className="text-xl sm:text-3xl font-semibold tracking-tight">{stat.value}</p>
              <p className="mt-1 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="w-full space-y-3" data-aos="fade-up" data-aos-delay="100">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground text-left">Currently</p>
          <Link
            href="/Experience"
            className="group flex items-center gap-4 sm:gap-6 w-full rounded-xl border border-border bg-card/60 backdrop-blur-sm p-4 sm:p-5 transition-colors hover:border-foreground/25"
          >
            <Image
              src="/it_div.jpeg"
              alt="Binus IT Division Logo"
              width={100}
              height={100}
              className="object-cover rounded-lg ring-1 ring-border w-14 h-14 sm:w-16 sm:h-16"
            />
            <div className="flex-1 space-y-1 text-left">
              <p className="text-base sm:text-lg font-semibold tracking-tight">Junior Software Engineer</p>
              <p className="text-sm text-muted-foreground">
                Bina Nusantara IT Division (Binus School Team)
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                Mar 2026 — Present
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="w-full space-y-3" data-aos="fade-up" data-aos-delay="150">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground text-left">Latest research</p>
          <Link
            href={`/Research/${latestArticle.slug}`}
            className="group flex items-center gap-4 sm:gap-6 w-full rounded-xl border border-border bg-card/60 backdrop-blur-sm p-4 sm:p-5 transition-colors hover:border-foreground/25"
          >
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
              <BookOpen className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <div className="flex-1 min-w-0 space-y-1 text-left">
              <p className="text-base sm:text-lg font-semibold tracking-tight leading-snug">{latestArticle.title}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {latestArticle.kind} · {latestArticle.year}
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
