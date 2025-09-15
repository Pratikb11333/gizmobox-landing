import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">Why We Created GizmoBox</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We believe electronics should be fun, practical, and hands-on. GizmoBox was born from the need to make
            electronics education accessible and engaging for the next generation of engineers and innovators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">For Students</h3>
              <p className="text-muted-foreground text-pretty">
                Designed specifically for first-year engineering students and young learners starting their electronics
                journey.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Focused Learning</h3>
              <p className="text-muted-foreground text-pretty">
                Carefully selected components that build foundational knowledge without overwhelming complexity.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Hands-On Innovation</h3>
              <p className="text-muted-foreground text-pretty">
                Learn by doing with practical projects that spark creativity and understanding.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <img
            src="/diverse-group-of-young-engineering-students-buildi.jpg"
            alt="Students learning electronics"
            className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
