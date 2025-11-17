import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap } from 'lucide-react'

const kit = {
  title: "Gizmobox Complete Kit",
  tagline: "Everything you need from beginner to pro",
  description: "The ultimate all-in-one electronics kit combining basic components, advanced sensors, microcontroller, IoT connectivity, and professional soldering tools. Build anything from simple LED circuits to IoT home automation projects.",
  components: [
    "Breadboard",
    "Resistors & LEDs",
    "Buttons & Switches",
    "Potentiometer",
    "555 Timer",
    "CD4017",
    "PIR Sensor",
    "LDR (Light Sensor)",
    "Thermistor",
    "Microphone & Speaker",
    "GLYPHC3 ESP32",
    "Relay Module",
    "IR Sensor",
    "7-Segment Display",
    "Soldering Kit",
    "Zero-PCB",
    "Connectors & Wires",
  ],
}

export function Kits() {
  return (
    <section id="kits" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-primary text-glow-cyan">All-in-One</span> Electronics Kit
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master electronics from basics to advanced IoT projects with one comprehensive kit
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-2xl p-8 border-2 glow-cyan hover:glow-green transition-all duration-300 group relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 circuit-pattern opacity-5"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  All Levels
                </Badge>
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/20 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-2">{kit.title}</h3>

              {/* Tagline */}
              <p className="text-lg font-semibold text-primary mb-6">{kit.tagline}</p>

              {/* Description */}
              <p className="text-muted-foreground mb-8 leading-relaxed">{kit.description}</p>

              {/* Components */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Complete Package Includes:</h4>
                <div className="flex flex-wrap gap-2">
                  {kit.components.map((component, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {component}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button className="w-full glow-cyan hover:glow-green transition-all duration-300 group/btn">
                Get Your Kit Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
