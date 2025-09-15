"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, CircuitBoard, ToggleLeft, Settings, Grid3X3, Cable, Battery, Palette } from "lucide-react"

const components = [
  {
    id: "resistors",
    name: "Resistors",
    description: "Complete assortment from 1Ω to 1MΩ for all your circuit needs",
    icon: Zap,
    color: "bg-primary/10 text-primary",
    details: "Various resistance values to control current flow and voltage division in circuits.",
  },
  {
    id: "leds",
    name: "LEDs",
    description: "RGB LEDs and small indicator LEDs for visual feedback",
    icon: Palette,
    color: "bg-accent/10 text-accent",
    details: "Light-emitting diodes in multiple colors for creating visual indicators and displays.",
  },
  {
    id: "buttons",
    name: "Push Buttons",
    description: "2 tactile push buttons for user input and control",
    icon: ToggleLeft,
    color: "bg-secondary/10 text-secondary",
    details: "Momentary switches perfect for creating interactive circuits and user interfaces.",
  },
  {
    id: "potentiometer",
    name: "Potentiometer",
    description: "Variable resistor for analog input and control",
    icon: Settings,
    color: "bg-primary/10 text-primary",
    details: "Adjustable resistance component for creating variable voltage dividers and controls.",
  },
  {
    id: "breadboard",
    name: "Breadboard",
    description: "Medium-size solderless breadboard for prototyping",
    icon: Grid3X3,
    color: "bg-accent/10 text-accent",
    details: "Reusable prototyping platform for building and testing circuits without soldering.",
  },
  {
    id: "wires",
    name: "Jumper Wires",
    description: "10 male-to-male + 10 male-to-female connecting wires",
    icon: Cable,
    color: "bg-secondary/10 text-secondary",
    details: "Flexible connection wires for linking components on breadboards and between modules.",
  },
  {
    id: "battery",
    name: "9V Battery",
    description: "Reliable power source for all your projects",
    icon: Battery,
    color: "bg-primary/10 text-primary",
    details: "Standard 9-volt battery providing consistent power for electronic experiments.",
  },
  {
    id: "breadboard-extra",
    name: "Circuit Board",
    description: "Additional prototyping space for complex projects",
    icon: CircuitBoard,
    color: "bg-accent/10 text-accent",
    details: "Extra prototyping board for expanding your circuit building capabilities.",
  },
]

export function FeaturesSection() {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null)

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            What's Inside
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Everything You Need to Get Started
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Each GizmoBox contains carefully selected components that work together to create amazing projects. Hover
            over each component to learn more!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {components.map((component) => {
            const IconComponent = component.icon
            return (
              <Card
                key={component.id}
                className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredComponent(component.id)}
                onMouseLeave={() => setHoveredComponent(null)}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${component.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{component.name}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    {hoveredComponent === component.id ? component.details : component.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-muted/50 rounded-lg p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <CircuitBoard className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-foreground">Complete Starter Kit</h4>
              <p className="text-sm text-muted-foreground">All components work together seamlessly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
