import { employmentHistory } from "~/lib/data"
import { Badge } from "~/components/ui/badge"
import { Card, CardContent } from "~/components/ui/card"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export function Employment() {
  return (
    <section
      id="employment"
      className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-background to-card/20"
    >
      <div className="absolute inset-0 bg-weave-pattern opacity-25"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 baybayin-border pb-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-baybayin text-foreground">
              Employment History
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              My professional journey and work experience
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          {employmentHistory.map((job, index) => (
            <Card key={job.id} className="border-primary/20 bg-card overflow-hidden relative">
              {/* Decorative line connecting timeline items */}
              {index < employmentHistory.length - 1 && (
                <div className="absolute left-8 top-[5.5rem] bottom-0 w-0.5 bg-primary/20 z-0"></div>
              )}

              <CardContent className="p-0">
                <div className="grid md:grid-cols-[1fr_3fr] gap-6">
                  {/* Left column - Company and date */}
                  <div className="bg-card/80 p-6 border-r border-b md:border-b-0 border-primary/10 relative">
                    <div className="absolute top-0 left-0 h-1 w-full bg-primary"></div>
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <Link href={job.url} target="_blank" className="hover:underline">
                        <h3 className="font-bold text-lg">{job.company}</h3>
                      </Link>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Right column - Role and description */}
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3">{job.title}</h4>
                    {job.description.map((desc) => (
                      <p key={desc} className="text-muted-foreground mb-4">{desc}</p>
                    ))}
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} className="bg-secondary/20 text-foreground border-none">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
