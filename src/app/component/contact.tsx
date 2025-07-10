import { Button } from "../component/ui/Button"
import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="container py-24 bg-muted/50 mx-auto" data-aos="fade-up">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">
          {"Let's Work Together"}
        </h2>
        <p className="text-muted-foreground mb-8">
          {"I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="mailto:moses.handoyo99@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://www.linkedin.com/in/moses-handoyo-156046229"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
