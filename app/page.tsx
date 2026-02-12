'use client';

import { Navigation } from '@/modules/navigation/components/Navigation';
import { Timeline } from '@/modules/timeline/components/Timeline';
import { Character } from '@/modules/character/components/Character';
import { ThreeScene } from '@/modules/scenes/components/ThreeScene';
import { ThemeToggle } from '@/modules/ui/components/ThemeToggle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/modules/navigation/hooks/useNavigation';
import { useResponsive } from '@/modules/ui/hooks/useResponsive';

export default function Home() {
  const { currentSection } = useNavigation();
  const { isMobile, isTablet } = useResponsive();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-20 right-4 z-40">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold">
                Interactive
                <br />
                <span className="text-[var(--color-primary)]">Portfolio</span>
              </h1>
              <p className="text-xl text-[var(--color-muted-foreground)]">
                A modular, scalable portfolio built with Next.js, Three.js, GSAP, and Lottie animations.
              </p>
              <div className="flex gap-4">
                <Button size="lg">View Projects</Button>
                <Button size="lg" variant="outline">Contact Me</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Character width={isMobile ? 250 : 350} height={isMobile ? 250 : 350} />
            </div>
          </div>
        </section>

        {/* 3D Scene Section */}
        <section id="scene" className="min-h-screen flex items-center justify-center px-4 py-20 bg-[var(--color-muted)]/50">
          <div className="max-w-6xl w-full">
            <h2 className="text-4xl font-bold text-center mb-12">Interactive 3D Scene</h2>
            <Card>
              <CardContent className="p-0">
                <ThreeScene />
              </CardContent>
            </Card>
            <p className="text-center mt-6 text-[var(--color-muted-foreground)]">
              Built with Three.js and WebGL for smooth 3D animations
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl w-full">
            <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Project {i}</CardTitle>
                    <CardDescription>A description of project {i}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-[var(--color-muted)] rounded-md mb-4"></div>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="min-h-screen flex items-center justify-center bg-[var(--color-muted)]/50">
          <div className="w-full">
            <Timeline />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold text-center mb-12">About</h2>
            <Card>
              <CardHeader>
                <CardTitle>Modular Architecture</CardTitle>
                <CardDescription>Built with clean separation of concerns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">📁 Module Structure</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-[var(--color-muted-foreground)]">
                    <li>Timeline module with GSAP animations</li>
                    <li>Character module with Lottie support</li>
                    <li>Scenes module with Three.js integration</li>
                    <li>Navigation module with smooth scrolling</li>
                    <li>UI module with theme management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">🎯 Key Features</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-[var(--color-muted-foreground)]">
                    <li>Strict separation of concerns with custom hooks</li>
                    <li>Fully responsive design</li>
                    <li>Dark/Light/System theme support</li>
                    <li>TypeScript for type safety</li>
                    <li>Tailwind CSS with shadcn/ui components</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 bg-[var(--color-muted)]/50">
          <div className="max-w-2xl w-full">
            <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Let&apos;s work together</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-center text-[var(--color-muted-foreground)]">
                  This is a demonstration of a modular, scalable portfolio architecture.
                  All components follow strict separation of concerns with business logic
                  contained in reusable custom hooks.
                </p>
                <Button className="w-full" size="lg">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-[var(--color-muted-foreground)]">
          <p>Built with Next.js, Three.js, GSAP, Lottie, Tailwind CSS, and shadcn/ui</p>
          <p className="mt-2">© 2024 Interactive Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
