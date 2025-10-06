import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Cpu, Wifi } from "lucide-react"

const kits = [
  {
    id: 1,
    title: "DIY Kit",
    level: "Beginner",
    target: "1st-year students",
    tagline: "Build your first circuits safely",
    description: "Perfect introduction to electronics with basic components and safe learning environment.",
    components: ["Resistors", "LEDs", "Buttons", "Potentiometer", "Breadboard", "Wires", "Battery"],
    icon: Zap,
    color: "primary",
    glowClass: "glow-cyan",
  },
  {
    id: 2,
    title: "Sensor Kit",
    level: "Intermediate",
    target: "2nd-year mini-projects",
    tagline: "Your gateway to sensor-based projects",
    description: "Explore the world of sensors and timers with practical project-based learning.",
    components: ["555 Timer", "PIR Sensor", "LDR", "Thermistor", "Microphone", "Speaker", "Switches"],
    icon: Cpu,
    color: "secondary",
    glowClass: "glow-green",
  },
  {
    id: 3,
    title: "Advanced Kit",
    level: "Pro",
    target: "3rd/4th-year advanced projects",
    tagline: "Turn ideas into real-world IoT projects",
    description: "Master advanced electronics and IoT with professional-grade components and tools.",
    components: [
      "GLYPHC3 ESP32",
      "Relay Module",
      "IR Sensor",
      "7-Segment Display",
      "Soldering Kit",
      "Zero-PCB",
      "Connectors",
    ],
    icon: Wifi,
    color: "primary",
    glowClass: "glow-cyan",
  },
]

export function Kits() {
  return (
    <section id="kits" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-primary text-glow-cyan">Learning Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three progressive kits designed to take you from electronics beginner to IoT expert
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {kits.map((kit, index) => {
            const IconComponent = kit.icon
            return (
              <Card
                key={kit.id}
                className={`p-8 border-2 ${kit.glowClass} hover:glow-green transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 circuit-pattern opacity-5"></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <Badge
                      variant="secondary"
                      className={`${kit.color === "primary" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"}`}
                    >
                      {kit.level}
                    </Badge>
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${kit.color === "primary" ? "bg-primary/20" : "bg-secondary/20"} group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${kit.color === "primary" ? "text-primary" : "text-secondary"}`}
                      />
                    </div>
                  </div>

                  {/* Title and target */}
                  <h3 className="text-2xl font-bold mb-2">{kit.title}</h3>
                  <p className="text-muted-foreground mb-4">{kit.target}</p>

                  {/* Tagline */}
                  <p
                    className={`text-lg font-semibold mb-6 ${kit.color === "primary" ? "text-primary" : "text-secondary"}`}
                  >
                    {kit.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">{kit.description}</p>

                  {/* Components */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Includes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {kit.components.map((component, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {component}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${kit.glowClass} hover:glow-green transition-all duration-300 group/btn`}
                    variant={kit.color === "primary" ? "default" : "secondary"}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
