import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { articles } from "./articles"

export const metadata = {
  title: "Research | Moses Handoyo",
}

export default function Research() {
  return (
    <div className="min-h-screen">
      <section className="py-8 md:py-24 flex items-center justify-center">
        <div className="max-w-4xl w-full sm:px-6 flex flex-col items-start space-y-8">
          <div className="space-y-4 w-full">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">03 — Papers & Articles</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter">Research</h1>
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Papers and articles I&apos;ve worked on, from sustainable software engineering to applied machine learning.
            </p>
          </div>

          <div className="mt-6 sm:mt-10 w-full">
            {articles.map((article) => (
              <div key={article.slug} data-aos="fade-up">
                <div className="w-full h-px bg-border" />
                <Link
                  href={`/Research/${article.slug}`}
                  className="group -mx-3 my-4 flex flex-col gap-4 rounded-xl px-3 py-6 transition-colors hover:bg-foreground/[0.03] lg:flex-row lg:gap-8"
                >
                  <div className="lg:w-2/5 flex flex-col items-start">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {article.kind} · {article.year}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {article.authors.map((author, index) => (
                        <span key={author.name}>
                          <span className={author.me ? "font-semibold text-foreground" : ""}>{author.name}</span>
                          {index < article.authors.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight leading-snug group-hover:underline decoration-muted-foreground/40 underline-offset-4">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{article.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {article.keywords.slice(0, 4).map((keyword) => (
                        <span key={keyword} className="px-2.5 py-1 font-mono text-xs border border-border bg-card text-muted-foreground rounded-full">
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium">
                      Read article
                      <ArrowUpRight size={14} className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
