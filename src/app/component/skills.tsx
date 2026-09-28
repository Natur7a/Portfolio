import { Badge } from "../../../ui/Badge"
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card"
import { Globe, Database, Workflow, Code } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C#", "JavaScript", "TypeScript", "SQL", "C", "C++", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks",
    icon: Globe,
    skills: [".NET", "ASP.NET Core", "Razor Pages", "React", "Next.js", "Node.js"],
  },
  {
    title: "Libraries & Tools",
    icon: Database,
    skills: ["LINQ", "Bootstrap", "Tailwind CSS", "shadcn/ui", "Git", "Azure DevOps"],
  },
  {
    title: "Practices",
    icon: Workflow,
    skills: ["Agile", "RESTful APIs", "Microservices", "Performance Optimization", "Code Review"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="container py-24 bg-muted/50 mx-auto">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">Skills & Technologies</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.title}>
                <CardHeader>
                  <IconComponent className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
