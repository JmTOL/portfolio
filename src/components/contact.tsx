"use client";

import { contactInfo } from "~/lib/data"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Alert } from "~/components/ui/alert"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import { useState, type FormEvent } from "react"

export function Contact() {

  const [status, setStatus] = useState<string | null>(null);  
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
          setStatus('pending');
          setError(null);
          const myForm = event.currentTarget;
          const formData = new FormData(myForm);
          const res = await fetch('/__contact-form.html', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams(formData as any).toString()
          });
          if (res.status === 200) {
              setStatus('ok');
          } else {
              setStatus('error');
              setError(`${res.status} ${res.statusText}`);
          }
      } catch (e) {
          setStatus('error');
          setError(`${e}`);
      }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-batik-pattern opacity-15"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 baybayin-border pb-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-baybayin text-foreground">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Card className="border-primary/20 bg-gradient-to-br from-card to-card/80 parol-card">
            <CardHeader className="border-b border-primary/10">
              <CardTitle className="text-foreground">Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-foreground" />
                </div>
                <Link href={`mailto:${contactInfo.email}`} className="hover:text-primary">
                  {contactInfo.email}
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-foreground" />
                </div>
                <Link href={`tel:${contactInfo.phone}`} className="hover:text-primary">
                  {contactInfo.phone}
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-foreground" />
                </div>
                <span>{contactInfo.location}</span>
              </div>

              <div className="pt-4 border-t border-primary/10 mt-4">
                <h4 className="text-sm font-medium mb-3 text-foreground">Connect with me</h4>
                <div className="flex gap-4">
                  <Link
                    href={contactInfo.socialMedia.github}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                  >
                    <Github className="h-5 w-5 text-foreground" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href={contactInfo.socialMedia.linkedin}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-foreground" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href={contactInfo.socialMedia.twitter}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-foreground" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-card/80 parol-card">
            <CardHeader className="border-b border-primary/10">
              <CardTitle className="text-foreground">Send me a message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form name="contact-me" onSubmit={handleFormSubmit} data-netlify="true" className="space-y-4">
                <Input type="hidden" name="form-name" value="contact-me" />
                <Input type="hidden" name="subject" value="Hi" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" className="border-primary/20 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="border-primary/20 focus-visible:ring-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    className="border-primary/20 focus-visible:ring-primary"
                  />
                </div>
                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-full">
                  Send Message
                </Button>
                {status === 'ok' && <Alert type="success">Submitted!</Alert>}
                {status === 'error' && <Alert type="error">{error}</Alert>}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
