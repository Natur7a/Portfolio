import Details from "./Details";

export const metadata = {
  title: "Projects | Moses Handoyo",
}

export default function Projects() {
  return (
    <div className="min-h-screen">
      <section className="py-8 md:py-24 flex items-center justify-center">
        <div className="max-w-4xl w-full sm:px-6 flex flex-col items-start space-y-8">
          <div className="space-y-4 w-full">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">02 — Selected Work</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter">Projects</h1>
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Independent builds that showcase my skills beyond production work.
            </p>
          </div>
          <Details />
        </div>
      </section>
    </div>
  )
}
