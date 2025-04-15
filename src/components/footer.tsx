import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { contactInfo } from "~/lib/data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/20 py-6 md:py-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-weave-pattern opacity-10"></div>
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row relative">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {currentYear} Alex Johnson. All rights reserved.
        </p>
        <div className="h-1 w-20 bg-secondary mx-auto md:hidden bamboo-divider"></div>
        <div className="flex items-center gap-4">
          <Link
            href={contactInfo.socialMedia.github}
            target="_blank"
            className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
          >
            <Github className="h-4 w-4 text-foreground" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={contactInfo.socialMedia.linkedin}
            target="_blank"
            className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
          >
            <Linkedin className="h-4 w-4 text-foreground" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href={contactInfo.socialMedia.twitter}
            target="_blank"
            className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
          >
            <Twitter className="h-4 w-4 text-foreground" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href={`mailto:${contactInfo.email}`}
            className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
          >
            <Mail className="h-4 w-4 text-foreground" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
