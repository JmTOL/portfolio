import { Button } from "~/components/ui/button"
import Link from "next/link"
import { ArrowDown, User, Briefcase, Code } from "lucide-react"
import { contactInfo } from "~/lib/data"
import Image from 'next/image'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div className="absolute inset-0 bg-solihiya-pattern opacity-15"></div>

      {/* Main hero content */}
      <div className="container px-4 md:px-6 flex-1 flex items-center py-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
                <span className="inline-block pb-2 font-baybayin">{contactInfo.name}</span>
              </h1>
              <div className="h-1 w-20 bg-secondary mb-4 bamboo-divider"></div>
              <p className="text-xl text-muted-foreground">Full Stack Developer</p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I build exceptional digital experiences.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Link href="#projects">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-secondary border hover:bg-secondary/90 text-white rounded-full backdrop-blur-sm">
                  View my work
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border border-primary text-foreground hover:bg-primary/20 rounded-full backdrop-blur-sm"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full w-[280px] h-[280px] md:w-[400px] md:h-[400px] border-4 border-primary p-1">
              <div className="absolute inset-0 bg-weave-pattern opacity-15 rounded-full"></div>
              <div className="rounded-full overflow-hidden h-full w-full relative">
                <Image src={`/images/me.jpg`} alt="Jm Tolentino" width="400" height="400" />
                <div className="absolute inset-0 border-8 border-primary/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me section */}
      {<div id="about" className="container px-4 md:px-6 pb-16 md:pb-24">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl font-baybayin text-foreground">About Me</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mt-2 mb-6 bamboo-divider"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-card p-6 rounded-lg border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-colors">
            <div className="absolute top-0 left-0 h-1 w-full bg-primary"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-full bg-primary/20 text-primary">
                <User className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Background</h3>
            </div>
            <p className="text-muted-foreground">
              I'm a passionate developer with over 7 years of experience building web applications.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-colors">
            <div className="absolute top-0 left-0 h-1 w-full bg-secondary"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-full bg-secondary/20 text-secondary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Experience</h3>
            </div>
            <p className="text-muted-foreground">
              I've worked with companies ranging from startups to enterprises, helping them build scalable applications.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-colors">
            <div className="absolute top-0 left-0 h-1 w-full bg-accent"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-full bg-accent/20 text-accent">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Expertise</h3>
            </div>
            <p className="text-muted-foreground">
              My core skills include C#, SQL, React, Next.js, and modern web frameworks.
            </p>
          </div>
        </div>

        {/* Arrow inside the about section */}
        <div className="flex justify-center mt-12">
          <Link href="#skills">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm animate-bounce"
            >
              <ArrowDown className="h-6 w-6 text-primary" />
              <span className="sr-only">View skills</span>
            </Button>
          </Link>
        </div>
      </div>}
    </section>
  )
}
