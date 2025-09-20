import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Circuit board background pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo with glow effect */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center glow-cyan animate-pulse">
            <Zap className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="text-primary text-glow-cyan">GIZMO</span>
          <span className="text-secondary text-glow-green">BOX</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Like Doraemon's Pocket, But for Engineers
        </p>

        {/* Description */}
        <p className="text-lg text-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Master electronics from basics to advanced IoT with our progressive learning kits. Perfect for engineering
          students ready to turn ideas into reality.
        </p>

        {/* CTA Button */}
        <Button size="lg" className="text-lg px-8 py-6 glow-cyan hover:glow-green transition-all duration-300 group">
          Let's Build Circuits Together
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary text-glow-cyan">2000+</div>
            <div className="text-muted-foreground">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary text-glow-green">3</div>
            <div className="text-muted-foreground">Progressive Kits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary text-glow-cyan">100+</div>
            <div className="text-muted-foreground">Components</div>
          </div>
        </div>
      </div>
    </section>
  )
}
