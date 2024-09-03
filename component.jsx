/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4siYXQ4GotD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BriefcaseIcon className="h-6 w-6" />
          <span className="sr-only">Portfolio</span>
        </Link>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="icon" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm John Doe
              </h1>
              <p className="text-muted-foreground md:text-xl">
                I'm a full-stack developer with a passion for creating beautiful and functional web applications.
              </p>
              <div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="500"
              height="500"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-muted-foreground md:text-xl">
                I'm a full-stack developer with over 5 years of experience in the industry. I specialize in building
                modern, responsive web applications using the latest technologies and best practices.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Skills</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>TypeScript</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Experience</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Full-stack Developer, Acme Inc. (2018 - present)</li>
                    <li>Front-end Developer, Widgets Co. (2015 - 2018)</li>
                  </ul>
                </div>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="500"
              height="500"
              alt="About"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="text-muted-foreground md:text-xl">Check out some of the projects I've worked on.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="space-y-2">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt="Project 1"
                    className="rounded-t-xl object-cover"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Project 1</h3>
                    <p className="text-muted-foreground">A modern web application built with React and Node.js.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt="Project 2"
                    className="rounded-t-xl object-cover"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Project 2</h3>
                    <p className="text-muted-foreground">A responsive e-commerce website built with Next.js.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt="Project 3"
                    className="rounded-t-xl object-cover"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Project 3</h3>
                    <p className="text-muted-foreground">A mobile-first web application built with React Native.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="text-muted-foreground md:text-xl">Have a project in mind? Let's chat!</p>
            </div>
            <form className="mx-auto max-w-md space-y-4">
              <Input type="text" placeholder="Name" className="w-full" />
              <Input type="email" placeholder="Email" className="w-full" />
              <Textarea placeholder="Message" className="w-full" />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
