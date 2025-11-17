import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from 'lucide-react'

const features = [
  "Basic Components (Resistors, LEDs, Buttons)",
  "Breadboard",
  "Sensors (PIR, LDR, Thermistor)",
  "Timer Circuits (555 Timer, CD4017)",
  "Microphone & Speaker",
  "Microcontroller (GLYPHC3 ESP32)",
  "IoT Connectivity (WiFi)",
  "Relay Module",
  "IR Sensor",
  "7-Segment Display",
  "Soldering Kit",
  "PCB Design (Zero-PCB)",
  "Professional Connectors & Wires",
]

export function ComparisonTable() {
  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What's <span className="text-primary text-glow-cyan">Included</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The Gizmobox Complete Kit includes everything you need for any project
          </p>
        </div>

        <Card className="overflow-hidden border-primary/20 glow-cyan">
          <div className="p-8">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/20 transition-colors border border-border/30">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <Badge variant="secondary" className="bg-primary/20 text-primary px-6 py-2 text-base">
            Everything in One Kit
          </Badge>
        </div>
      </div>
    </section>
  )
}
