import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Kits } from "@/components/kits"
import { Projects } from "@/components/projects"
import { ComparisonTable } from "@/components/comparison-table"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Kits />
      <Projects />
      <ComparisonTable />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
