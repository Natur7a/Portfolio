import { Button } from "../../../ui/Button"
import { Folder, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="py-8 md:py-24 flex items-center justify-center">
      <div className="max-w-4xl w-full sm:px-6 flex flex-col items-start text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-left">
            {"Hi, I'm"} <span className="text-primary">Moses Handoyo</span>
          </h1>
          <h2 className="mt-5 text-3xl font-bold tracking-tighter sm:text-5xl md:text-5xl lg:text-4xl text-left">
            {"I'm a Junior Software Engineer"}
          </h2>
          <p className="mx-auto text-lg text-muted-foreground md:text-l text-left">
            1.5 years of production experience building and maintaining .NET and C# web applications that support daily school operations at BINUS. Cut a critical data process from over 30 minutes to under 10 seconds through query optimization and efficient data structures.
          </p>
          <p className="mx-auto text-lg text-muted-foreground md:text-l text-left">
            Computer Science student at BINUS University (GPA 3.75), experienced in Agile delivery, SQL, and full-stack development with JavaScript, React, and Next.js. Based in Jakarta, Indonesia and open to remote roles.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full sm:w-auto sm:flex-row">
          <Button size="lg" className="border" asChild>
            <Link href="/Experience">
              <Folder className="mr-2 h-4 w-4" />
              View My Work
            </Link>
          </Button>
          <Button size="lg" className="border" asChild>
            <Link href="/Moses Handoyo CV.pdf" target="_blank" rel="noopener">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>
          <div className="w-full border rounded-md p-4 sm:p-6 bg-gray-100 dark:bg-gray-900/30">
          <h2 className="text-2xl font-semibold mb-6 text-left">Work Experience</h2>
          <div className="flex items-center gap-4 sm:gap-6">
            <Image
              src="/it_div.jpeg"
              alt="Binus IT Division Logo"
              width={100}
              height={100}
              className="object-cover rounded w-16 h-16 sm:w-[100px] sm:h-[100px]"
            />
            <div className="space-y-1 text-left">
              <p className="text-lg font-bold">Junior Software Engineer</p>
              <p className="text-sm text-muted-foreground">
                Bina Nusantara IT Division (Binus School Team)
              </p>
              <p className="text-sm text-muted-foreground">
                March 2026 - Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
