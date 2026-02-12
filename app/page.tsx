'use client';

import { Navigation } from '@/modules/navigation/components/Navigation';
import { Timeline } from '@/modules/timeline/components/Timeline';
import { ThreeScene } from '@/modules/scenes/components/ThreeScene';
import { ThemeToggle } from '@/modules/ui/components/ThemeToggle';
import { NatureHero } from '@/components/NatureHero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/modules/navigation/hooks/useNavigation';
import { useResponsive } from '@/modules/ui/hooks/useResponsive';

export default function Home() {
  const { currentSection } = useNavigation();
  const { isMobile, isTablet } = useResponsive();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Navigation - with transparency for hero */}
      <Navigation />

      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-20 right-4 z-[60]">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main>
        {/* Nature Hero Section */}
        <section id="home" className="relative">
          <NatureHero />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20 bg-[var(--color-background)]">
          <div className="max-w-6xl w-full">
            <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-primary)]">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="hover:shadow-lg transition-all bg-[var(--color-card)] border-[var(--color-border)] hover:border-[var(--color-primary)]">
                  <CardHeader>
                    <CardTitle className="text-[var(--color-foreground)]">Project {i}</CardTitle>
                    <CardDescription className="text-[var(--color-muted-foreground)]">A description of project {i}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-[var(--color-muted)] rounded-md mb-4 flex items-center justify-center">
                      <span className="text-[var(--color-muted-foreground)] text-sm">Preview</span>
                    </div>
                    <Button variant="outline" className="w-full border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)]">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="min-h-screen flex items-center justify-center bg-[var(--color-muted)]/20 py-20">
          <div className="w-full">
            <Timeline />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 bg-[var(--color-background)]">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-primary)]">About</h2>
            <Card className="bg-[var(--color-card)] border-[var(--color-border)]">
              <CardHeader>
                <CardTitle className="text-[var(--color-foreground)]">Modular Architecture</CardTitle>
                <CardDescription className="text-[var(--color-muted-foreground)]">Built with clean separation of concerns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-[var(--color-foreground)]">📁 Module Structure</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-[var(--color-muted-foreground)]">
                    <li>Timeline module with GSAP animations</li>
                    <li>Character module with Lottie support</li>
                    <li>Scenes module with Three.js integration</li>
                    <li>Navigation module with smooth scrolling</li>
                    <li>UI module with theme management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-[var(--color-foreground)]">🎯 Key Features</h3>
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
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 bg-[var(--color-muted)]/20">
          <div className="max-w-2xl w-full">
            <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-primary)]">Get In Touch</h2>
            <Card className="bg-[var(--color-card)] border-[var(--color-border)]">
              <CardHeader>
                <CardTitle className="text-[var(--color-foreground)]">Contact Information</CardTitle>
                <CardDescription className="text-[var(--color-muted-foreground)]">Let&apos;s work together</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-center text-[var(--color-muted-foreground)]">
                  This is a demonstration of a modular, scalable portfolio architecture.
                  All components follow strict separation of concerns with business logic
                  contained in reusable custom hooks.
                </p>
                <Button className="w-full bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-accent)]" size="lg">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] py-8 px-4 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto text-center text-sm text-[var(--color-muted-foreground)]">
          <p>Built with Next.js, Three.js, GSAP, Lottie, Tailwind CSS, and shadcn/ui</p>
          <p className="mt-2">© 2024 Interactive Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
