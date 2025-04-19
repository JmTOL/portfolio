import { skills } from "~/lib/data"

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-batik-pattern opacity-25"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 baybayin-border pb-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-baybayin text-foreground">
              Skills
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              My technical expertise and professional capabilities
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-card rounded-lg border border-primary/20 overflow-hidden">
              <div className="border-b border-primary/10 bg-card/80 p-4">
                <h3 className="text-lg font-bold text-foreground">{skillGroup.category}</h3>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-sm rounded-full bg-primary/10 text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
