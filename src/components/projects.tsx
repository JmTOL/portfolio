import { projects } from "~/lib/data"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background relative">
      <div className="absolute inset-0 bg-solihiya-pattern opacity-25"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 baybayin-border pb-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-baybayin text-foreground">
              My Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Here are some of the projects I've worked on recently.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden capiz-glow border-primary/20 bg-gradient-to-br from-card to-card/80"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-weave-pattern opacity-25"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 relative z-10"
                  width={500}
                  height={300}
                />
                <div
                  className={`absolute top-0 left-0 w-20 h-20 -translate-x-10 -translate-y-10 rotate-45 ${
                    index % 4 === 0
                      ? "bg-primary/40"
                      : index % 4 === 1
                        ? "bg-secondary/40"
                        : index % 4 === 2
                          ? "bg-accent/40"
                          : "bg-primary/30"
                  } opacity-20`}
                ></div>
              </div>
              <CardHeader className="border-b border-primary/10">
                <CardTitle className="text-foreground">{project.title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/20 text-foreground border-none">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p>{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-primary/10 mt-4 pt-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full border-primary hover:bg-primary/20 text-foreground"
                >
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button asChild size="sm" className="rounded-full bg-secondary hover:bg-secondary/90 text-white">
                  <Link href={project.demoUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
