import { Navigation } from "../app/component/navigation"
import { HeroSection } from "../app/component/hero"
import { AboutSection } from "../app/component/about"
import { SkillsSection } from "../app/component/skills"
import { ContactSection } from "../app/component/contact"
import { Footer } from "../app/component/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
