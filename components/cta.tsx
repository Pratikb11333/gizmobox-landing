import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-secondary rounded-full animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 glow-cyan animate-pulse">
          <Zap className="w-10 h-10 text-primary-foreground" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          Ready to Start Your
          <span className="text-primary text-glow-cyan"> Electronics Journey</span>?
        </h2>

        {/* Description */}
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of engineering students who have transformed their ideas into reality. Choose your kit and
          start building today!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6 glow-cyan hover:glow-green transition-all duration-300 group">
            Get Your Gizmobox Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 bg-transparent"
          >
            View All Kits
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Free shipping across India
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            30-day money back guarantee
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Expert support included
          </div>
        </div>
      </div>
    </section>
  )
}
