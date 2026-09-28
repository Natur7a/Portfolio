import Details from "./Details";

export default function Portfolio() {
  return (
    <div className="min-h-screen" data-aos="fade-up">
        <section className="py-8 md:py-24 flex items-center justify-center">
            <div className="max-w-4xl w-full sm:px-6 flex flex-col items-start space-y-8">
                <div className="space-y-4 w-full">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">04 — Academics</p>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter">Education</h1>
                    <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                        &ldquo;Education is learning what you didn&apos;t even know you didn&apos;t know.&rdquo; -Daniel J. Boorstin
                    </p>
                </div>
                <Details />
            </div>
        </section>
    </div>
  )
}