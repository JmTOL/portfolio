"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "~/components/ui/button"
import Image from 'next/image'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl text-primary-dark font-baybayin">
          <Image src="/images/logo.png" height={50} width={50} alt="JMT"></Image>
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary-dark hover:bg-primary/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="#employment" className="text-sm font-medium hover:text-primary transition-colors">
            Employment
          </Link>
          {/* <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link> */}
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-white rounded-full">
            <Link href="/cv.pdf" target="_blank">
              Resume
            </Link>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-primary/20 md:hidden">
            <div className="absolute inset-0 bg-solihiya-pattern opacity-5"></div>
            <nav className="flex flex-col p-4 gap-4 relative">
              <Link
                href="#about"
                className="text-sm font-medium p-2 hover:bg-primary/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium p-2 hover:bg-primary/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#employment"
                className="text-sm font-medium p-2 hover:bg-primary/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Employment
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium p-2 hover:bg-primary/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium p-2 hover:bg-primary/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white rounded-full">
                <Link href="/cv.pdf" target="_blank">
                  Resume
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
