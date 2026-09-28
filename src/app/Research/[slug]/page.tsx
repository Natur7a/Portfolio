import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react"
import { articles, getArticle, type Block } from "../articles"
import RichText from "../RichText"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return { title: `${article.title} | Moses Handoyo`, description: article.summary }
}

const eyebrow = "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
const prose = "text-[15px] sm:text-base leading-7 text-muted-foreground"

function renderBlock(block: Block, key: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={key} id={block.id} className="scroll-mt-20 mt-16 mb-6 flex items-baseline gap-3 border-t border-border pt-10 text-2xl sm:text-3xl font-bold tracking-tight">
          <span className="font-mono text-sm font-normal text-muted-foreground">{block.number}.</span>
          {block.text}
        </h2>
      )
    case "h3":
      return (
        <h3 key={key} className="mt-10 mb-4 flex items-baseline gap-2 text-lg sm:text-xl font-semibold tracking-tight">
          <span className="font-mono text-sm font-normal text-muted-foreground">{block.number}.</span>
          {block.text}
        </h3>
      )
    case "h4":
      return (
        <h4 key={key} className="mt-8 mb-3 flex items-baseline gap-2 font-semibold">
          <span className="font-mono text-xs font-normal text-muted-foreground">{block.number})</span>
          {block.text}
        </h4>
      )
    case "p":
      return (
        <p key={key} className={`mb-5 ${prose}`}>
          {block.lead && <span className="font-semibold text-foreground">{block.lead} </span>}
          <RichText>{block.text}</RichText>
        </p>
      )
    case "list":
      return (
        <ul key={key} className={`mb-5 list-disc pl-5 space-y-3 marker:text-muted-foreground/50 ${prose}`}>
          {block.items.map((item, index) => (
            <li key={index}>
              {item.lead && <span className="font-semibold text-foreground">{item.lead} </span>}
              <RichText>{item.text}</RichText>
            </li>
          ))}
        </ul>
      )
    case "equation":
      return (
        <div key={key} className="my-6 flex items-center justify-between gap-4 overflow-x-auto rounded-xl border border-border bg-card px-4 py-4 sm:px-6">
          <div className="font-serif text-base sm:text-lg text-foreground whitespace-nowrap">{block.content}</div>
          <span className="font-mono text-xs text-muted-foreground">({block.number})</span>
        </div>
      )
    case "table":
      return (
        <figure key={key} className="my-8">
          <figcaption className="mb-3 text-sm text-muted-foreground">
            <span className="mr-2 font-mono text-xs uppercase tracking-wider text-foreground">Table {block.number}</span>
            {block.caption}
          </figcaption>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-card">
                <tr className="border-b border-border">
                  {block.head.map((cell, index) => (
                    <th
                      key={index}
                      className={`px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground whitespace-nowrap ${index === 0 ? "text-left" : "text-right"}`}
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) =>
                  Array.isArray(row) ? (
                    <tr key={rowIndex} className="border-b border-border last:border-0">
                      {row.map((cell, index) => (
                        <td
                          key={index}
                          className={`px-4 py-2.5 ${index === 0 ? "text-left text-foreground" : "text-right font-mono tabular-nums text-muted-foreground whitespace-nowrap"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ) : (
                    <tr key={rowIndex} className="border-b border-border bg-card/60">
                      <td colSpan={block.head.length} className="px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-foreground">
                        {row.group}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </figure>
      )
    case "figure":
      return (
        <figure key={key} className="my-10">
          {/* Figures are white-background plots, so they sit on a white card in both themes */}
          <div className={`overflow-hidden rounded-xl border border-border bg-white p-3 sm:p-4 ${block.narrow ? "mx-auto max-w-md" : ""}`}>
            <Image src={block.src} alt={block.alt} width={block.width} height={block.height} className="h-auto w-full" sizes="(min-width: 1024px) 768px, 100vw" />
          </div>
          <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
            <span className="mr-2 font-mono text-xs uppercase tracking-wider text-foreground">Fig. {block.number}</span>
            {block.caption}
          </figcaption>
        </figure>
      )
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const sections = article.body.filter((block): block is Extract<Block, { type: "h2" }> => block.type === "h2")

  return (
    <div className="min-h-screen">
      <article className="py-8 md:py-24 flex items-center justify-center">
        <div className="max-w-3xl w-full sm:px-6">
          {/* Header */}
          <Link href="/Research" className="group inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground">
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            All research
          </Link>

          <p className={`${eyebrow} mt-10`}>{article.kind} · {article.year}</p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1]">{article.title}</h1>

          <p className="mt-6 text-sm sm:text-base leading-relaxed">
            {article.authors.map((author, index) => (
              <span key={author.name}>
                <span className={author.me ? "font-semibold text-foreground underline decoration-muted-foreground/40 underline-offset-4" : "text-muted-foreground"}>
                  {author.name}
                </span>
                {index < article.authors.length - 1 && <span className="text-muted-foreground">, </span>}
              </span>
            ))}
          </p>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{article.affiliation}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {article.keywords.map((keyword) => (
              <span key={keyword} className="px-2.5 py-1 font-mono text-xs border border-border bg-card text-muted-foreground rounded-full">
                {keyword}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {article.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                <Github size={14} />
                {link.label}
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>

          {/* Key numbers */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 rounded-xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden">
            {article.highlights.map((highlight, index) => (
              <div
                key={highlight.label}
                className={`px-4 py-4 sm:px-5 border-border ${index % 2 === 1 ? "border-l" : ""} ${index >= 2 ? "border-t md:border-t-0" : ""} ${index === 2 ? "md:border-l" : ""}`}
              >
                <p className="text-lg sm:text-2xl font-semibold tracking-tight whitespace-nowrap">{highlight.value}</p>
                <p className="mt-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground">{highlight.label}</p>
              </div>
            ))}
          </div>

          {/* Role */}
          <div className="mt-6 rounded-xl border border-border p-5">
            <p className={eyebrow}>My role</p>
            <p className="mt-2 text-sm sm:text-base leading-relaxed">{article.contribution}</p>
          </div>

          {/* Abstract */}
          <section className="mt-12">
            <h2 className={`${eyebrow} mb-4`}>Abstract</h2>
            {article.abstract.map((paragraph, index) => (
              <p key={index} className="mb-4 text-base sm:text-lg leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            ))}
          </section>

          {/* Contents */}
          <nav className="mt-10 rounded-xl border border-border bg-card/60 p-5" aria-label="Contents">
            <p className={`${eyebrow} mb-3`}>Contents</p>
            <ol className="grid gap-1.5 sm:grid-cols-2 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="group flex items-baseline gap-3 text-muted-foreground hover:text-foreground">
                    <span className="w-6 font-mono text-xs">{section.number}.</span>
                    <span className="group-hover:underline underline-offset-4">{section.text}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#references" className="group flex items-baseline gap-3 text-muted-foreground hover:text-foreground">
                  <span className="w-6 font-mono text-xs">—</span>
                  <span className="group-hover:underline underline-offset-4">References</span>
                </a>
              </li>
            </ol>
          </nav>

          {/* Body */}
          <div>{article.body.map(renderBlock)}</div>

          {/* Back matter */}
          <section className="mt-16 border-t border-border pt-10 space-y-8">
            <div>
              <h2 className={`${eyebrow} mb-3`}>Data availability</h2>
              <p className={prose}>
                <RichText>{article.dataAvailability}</RichText>
              </p>
            </div>
            <div>
              <h2 className={`${eyebrow} mb-3`}>Author contributions</h2>
              <p className={prose}>{article.authorContributions}</p>
            </div>
          </section>

          <section id="references" className="scroll-mt-20 mt-16 border-t border-border pt-10">
            <h2 className="mb-6 text-2xl sm:text-3xl font-bold tracking-tight">References</h2>
            <ol className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              {article.references.map((reference, index) => (
                <li key={index} id={`ref-${index + 1}`} className="scroll-mt-20 flex gap-3 rounded-lg target:bg-foreground/5 target:text-foreground">
                  <span className="w-8 shrink-0 font-mono text-xs pt-0.5 text-right">[{index + 1}]</span>
                  <span className="min-w-0">
                    <RichText>{reference}</RichText>
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </article>
    </div>
  )
}
