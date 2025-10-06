import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

const features = [
  { name: "Basic Components", diy: true, sensor: true, advanced: true },
  { name: "Breadboard", diy: true, sensor: true, advanced: true },
  { name: "LED & Resistors", diy: true, sensor: true, advanced: true },
  { name: "Sensors (PIR, LDR)", diy: false, sensor: true, advanced: true },
  { name: "Timer Circuits", diy: false, sensor: true, advanced: true },
  { name: "Development Board", diy: false, sensor: false, advanced: true },
  { name: "IoT Connectivity", diy: false, sensor: false, advanced: true },
  { name: "Soldering Kit", diy: false, sensor: false, advanced: true },
  { name: "PCB Design", diy: false, sensor: false, advanced: true },
]

export function ComparisonTable() {
  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kit <span className="text-primary text-glow-cyan">Comparison</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Compare features across all three kits to find your perfect match
          </p>
        </div>

        <Card className="overflow-hidden border-primary/20 glow-cyan">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-semibold">Features</th>
                  <th className="text-center p-6">
                    <div className="space-y-2">
                      <Badge className="bg-primary/20 text-primary">DIY Kit</Badge>
                      <div className="text-sm text-muted-foreground">Beginner</div>
                    </div>
                  </th>
                  <th className="text-center p-6">
                    <div className="space-y-2">
                      <Badge className="bg-secondary/20 text-secondary">Sensor Kit</Badge>
                      <div className="text-sm text-muted-foreground">Intermediate</div>
                    </div>
                  </th>
                  <th className="text-center p-6">
                    <div className="space-y-2">
                      <Badge className="bg-primary/20 text-primary">Advanced Kit</Badge>
                      <div className="text-sm text-muted-foreground">Pro</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                    <td className="p-6 font-medium">{feature.name}</td>
                    <td className="p-6 text-center">
                      {feature.diy ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {feature.sensor ? (
                        <Check className="w-5 h-5 text-secondary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {feature.advanced ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  )
}
