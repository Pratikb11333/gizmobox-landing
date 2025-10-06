import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Kits } from "@/components/kits"
import { Projects } from "@/components/projects"
import { ComparisonTable } from "@/components/comparison-table"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { KitsCarousel } from "@/components/kits-carousel"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Kits />
      <Projects />
      <ComparisonTable />
       <KitsCarousel />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
