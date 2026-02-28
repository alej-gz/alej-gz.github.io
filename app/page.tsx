import { CoursesSection } from "@/components/courses-section"
import { PhotosSection } from "@/components/photos-section"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SpecializationSection } from "@/components/specialization-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { MotivationSection } from "@/components/motivation-section"
import { BlogSection } from "@/components/blog-section"
import { ReferencesSection } from "@/components/references-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/floating-particles"
import { AudioPlayer } from "@/components/audio-player"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <FloatingParticles />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SpecializationSection />
      <ProjectsSection />
      <SkillsSection />
      <CoursesSection />
      <PhotosSection />
      <ExperienceSection />
      <MotivationSection />
      <BlogSection />
      <ReferencesSection />
      <ContactSection />
      <Footer />
      <AudioPlayer />
      <ThemeToggle />
    </main>
  )
}
