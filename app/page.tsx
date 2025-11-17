import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Kits } from "@/components/kits"
import { KitsCarousel } from "@/components/kits-carousel"
import { Projects } from "@/components/projects"
import { ComparisonTable } from "@/components/comparison-table"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WorkshopHero } from "@/components/workshop-hero"
import { WorkshopIntro } from "@/components/workshop-intro"
import { WorkshopHighlights } from "@/components/workshop-highlights"
import { WorkshopContact } from "@/components/workshop-contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Kits />
      <KitsCarousel />
      <Projects />
      <ComparisonTable />
      <Testimonials />
      <WorkshopHero />
      <WorkshopIntro />
      <WorkshopHighlights />
      <WorkshopContact />
      <CTA />
      <Footer />
    </main>
  )
}
