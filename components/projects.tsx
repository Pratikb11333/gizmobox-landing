"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Zap, Volume2, Home, Shield, Calculator, CircuitBoard } from "lucide-react"

const projects = [
  // DIY Kit Projects (Beginner)
  {
    title: "LED Blinker Circuit",
    description: "Learn basics of current flow and resistance with this fundamental electronics project.",
    kit: "DIY Kit",
    kitType: "diy" as const,
    icon: Lightbulb,
  },
  {
    title: "Push Button Buzzer",
    description: "Interactive project using buttons and LEDs to create responsive circuits.",
    kit: "DIY Kit",
    kitType: "diy" as const,
    icon: Zap,
  },
  {
    title: "Light Dimmer with Potentiometer",
    description: "Control brightness of LEDs using variable resistance principles.",
    kit: "DIY Kit",
    kitType: "diy" as const,
    icon: Lightbulb,
  },
  // Sensor Kit Projects (Intermediate)
  {
    title: "PIR Motion Detector",
    description: "Detect movement using PIR sensor and 555 timer for security applications.",
    kit: "Sensor Kit",
    kitType: "sensor" as const,
    icon: Shield,
  },
  {
    title: "Automatic Night Lamp",
    description: "Use LDR to switch LEDs based on ambient light levels automatically.",
    kit: "Sensor Kit",
    kitType: "sensor" as const,
    icon: Lightbulb,
  },
  {
    title: "Mini Temperature Alarm",
    description: "Thermistor-based temperature detection with visual and audio alerts.",
    kit: "Sensor Kit",
    kitType: "sensor" as const,
    icon: Zap,
  },
  {
    title: "Sound-Activated LED",
    description: "Clap to turn LEDs on/off with microphone and speaker integration.",
    kit: "Sensor Kit",
    kitType: "sensor" as const,
    icon: Volume2,
  },
  // Advanced Kit Projects (Pro)
  {
    title: "IoT Home Automation",
    description: "Control appliances with the GLYPHC3 ESP32 board and relay modules.",
    kit: "Advanced Kit",
    kitType: "advanced" as const,
    icon: Home,
  },
  {
    title: "Smart Door Security",
    description: "IR sensor + ESP32 for intrusion detection and smart notifications.",
    kit: "Advanced Kit",
    kitType: "advanced" as const,
    icon: Shield,
  },
  {
    title: "Digital Counter with 7-Segment Display",
    description: "Count events using ESP32 with professional display integration.",
    kit: "Advanced Kit",
    kitType: "advanced" as const,
    icon: Calculator,
  },
  {
    title: "Custom PCB Project",
    description: "Use Zero PCB + soldering kit for a fully assembled professional circuit.",
    kit: "Advanced Kit",
    kitType: "advanced" as const,
    icon: CircuitBoard,
  },
]

const kitColors = {
  diy: "bg-green-500/20 text-green-400 border-green-500/50",
  sensor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/50",
  advanced: "bg-purple-500/20 text-purple-400 border-purple-500/50",
}

export function Projects() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-cyan-400 to-green-400 bg-clip-text text-transparent">
            What Can You Build with Gizmobox?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore hands-on projects you can create using our DIY, Sensor, and Advanced Kits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className={`${kitColors[project.kitType]} font-medium`}>
                        {project.kit}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
