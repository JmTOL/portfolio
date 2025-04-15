import { employmentHistory, skills } from "~/lib/data"
import { Badge } from "~/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-batik-pattern opacity-10"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 baybayin-border pb-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-baybayin text-foreground">
              About Me
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              I'm a passionate developer with over 7 years of experience building web applications.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground inline-block">
            Employment History
            <div className="h-1 w-full bg-secondary mt-2 bamboo-divider"></div>
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {employmentHistory.map((job) => (
              <Card key={job.id} className="h-full parol-card border-primary/20 bg-gradient-to-br from-card to-card/80">
                <CardHeader className="border-b border-primary/10">
                  <CardTitle className="text-foreground">{job.title}</CardTitle>
                  <CardDescription>
                    {job.company} | {job.location}
                    <br />
                    {job.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-primary/20 border-primary/30 text-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground inline-block">
            Skills
            <div className="h-1 w-full bg-secondary mt-2 bamboo-divider"></div>
          </h3>
          <div className="grid gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <div className="h-2 w-2 bg-secondary rounded-full"></div>
                  {skillGroup.category}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {skillGroup.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="relative overflow-hidden rounded-lg border border-primary/20 bg-card p-4 transition-all hover:bg-primary/10 group"
                    >
                      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent"></div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{tech}</span>
                        <div className="h-2 w-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></div>
                      </div>
                      <div className="mt-4 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          style={{
                            width: `${
                              tech.includes("React") || tech.includes("TypeScript") || tech.includes("Next.js")
                                ? "95%"
                                : tech.includes("Node") || tech.includes("JavaScript") || tech.includes("Tailwind")
                                  ? "90%"
                                  : tech.includes("MongoDB") || tech.includes("PostgreSQL") || tech.includes("Express")
                                    ? "85%"
                                    : tech.includes("AWS") || tech.includes("Docker") || tech.includes("Git")
                                      ? "80%"
                                      : "75%"
                            }`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
