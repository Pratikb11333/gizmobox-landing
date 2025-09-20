import { Card } from "@/components/ui/card"
import { Cpu, Lightbulb, Rocket } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary text-glow-cyan">Gizmobox</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Gizmobox is a hands-on electronics kit developed by Techemonkitz, designed for engineering students to learn
            electronics step by step — from basics to advanced IoT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center border-primary/20 glow-cyan hover:glow-green transition-all duration-300 group">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
              <Lightbulb className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-4">Learn by Doing</h3>
            <p className="text-muted-foreground">
              Hands-on approach to electronics learning with real components and practical projects.
            </p>
          </Card>

          <Card className="p-8 text-center border-primary/20 glow-cyan hover:glow-green transition-all duration-300 group">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
              <Cpu className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-4">Progressive Learning</h3>
            <p className="text-muted-foreground">
              Three carefully designed kits that progress from basic circuits to advanced IoT projects.
            </p>
          </Card>

          <Card className="p-8 text-center border-primary/20 glow-cyan hover:glow-green transition-all duration-300 group">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
              <Rocket className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-4">Real-World Ready</h3>
            <p className="text-muted-foreground">
              Build projects that prepare you for industry challenges and innovative solutions.
            </p>
          </Card>
        </div>

        {/* Circuit animation */}
        <div className="relative h-32 overflow-hidden rounded-lg bg-muted/20 circuit-pattern">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-8">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-secondary rounded-full animate-pulse delay-300"></div>
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
