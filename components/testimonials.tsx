import { Card } from "@/components/ui/card"
import { Star, Users, Award, Zap } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-secondary text-glow-green">Makers' Revolution</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Over 2000+ students have built their first project with Gizmobox
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="p-6 text-center border-primary/20 glow-cyan hover:glow-green transition-all duration-300">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary text-glow-cyan mb-2">2000+</div>
            <div className="text-muted-foreground">Students Trained</div>
          </Card>

          <Card className="p-6 text-center border-secondary/20 glow-green hover:glow-cyan transition-all duration-300">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-secondary" />
            </div>
            <div className="text-3xl font-bold text-secondary text-glow-green mb-2">50+</div>
            <div className="text-muted-foreground">College Partners</div>
          </Card>

          <Card className="p-6 text-center border-primary/20 glow-cyan hover:glow-green transition-all duration-300">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary text-glow-cyan mb-2">4.9/5</div>
            <div className="text-muted-foreground">Student Rating</div>
          </Card>

          <Card className="p-6 text-center border-secondary/20 glow-green hover:glow-cyan transition-all duration-300">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-secondary" />
            </div>
            <div className="text-3xl font-bold text-secondary text-glow-green mb-2">1000+</div>
            <div className="text-muted-foreground">Projects Built</div>
          </Card>
        </div>

        {/* Community Quote */}
        <Card className="p-12 text-center border-primary/20 glow-cyan bg-gradient-to-r from-card/50 to-muted/20">
          <blockquote className="text-2xl md:text-3xl font-bold mb-6 text-balance">
            "From basic LEDs to IoT projects, Gizmobox made electronics learning
            <span className="text-primary text-glow-cyan"> fun and practical</span>. It's like having a complete lab in
            a box!"
          </blockquote>
          <div className="text-muted-foreground">- Engineering Students Across India</div>
        </Card>
      </div>
    </section>
  )
}
