import { Hero } from "~/components/hero"
import { Projects } from "~/components/projects"
import { Contact } from "~/components/contact"
import { Navbar } from "~/components/navbar"
import { Footer } from "~/components/footer"
import { Skills } from "~/components/skills"
import { Employment } from "~/components/employment"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Employment />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
