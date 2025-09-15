"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Lightbulb, ToggleLeft, Palette, Zap } from "lucide-react"

const projects = [
  {
    id: "blinking-led",
    title: "Blinking LED Circuit",
    description: "Create your first circuit with a blinking LED to understand basic electronics",
    difficulty: "Beginner",
    time: "15 mins",
    icon: Lightbulb,
    color: "bg-accent/10 text-accent",
    components: ["LED", "Resistor", "9V Battery", "Breadboard"],
    image: "/simple-led-circuit-on-breadboard-with-blinking-lig.jpg",
  },
  {
    id: "push-button",
    title: "Push Button Switch",
    description: "Learn about digital inputs by controlling an LED with a push button",
    difficulty: "Beginner",
    time: "20 mins",
    icon: ToggleLeft,
    color: "bg-secondary/10 text-secondary",
    components: ["Push Button", "LED", "Resistor", "Jumper Wires"],
    image: "/push-button-controlling-led-on-breadboard-circuit.jpg",
  },
  {
    id: "rgb-controller",
    title: "RGB LED Controller",
    description: "Mix colors and create amazing light effects with RGB LEDs",
    difficulty: "Intermediate",
    time: "30 mins",
    icon: Palette,
    color: "bg-primary/10 text-primary",
    components: ["RGB LED", "Potentiometer", "Resistors", "Breadboard"],
    image: "/rgb-led-with-color-mixing-controls-on-breadboard-s.jpg",
  },
  {
    id: "resistance-demo",
    title: "Basic Resistance Demo",
    description: "Understand Ohm's law by measuring voltage and current with different resistors",
    difficulty: "Beginner",
    time: "25 mins",
    icon: Zap,
    color: "bg-accent/10 text-accent",
    components: ["Various Resistors", "9V Battery", "Jumper Wires", "LED"],
    image: "/circuit-demonstrating-ohms-law-with-different-resi.jpg",
  },
]

export function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[currentProject]
  const IconComponent = project.icon

  return (
    <section id="projects" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Mini Projects
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Start Building Amazing Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
            Get hands-on experience with these starter projects designed to teach fundamental electronics concepts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Project Display */}
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative bg-gradient-to-br from-muted to-muted/50 p-6 sm:p-8 flex items-center justify-center min-h-[250px] sm:min-h-[300px]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full max-w-xs sm:max-w-sm h-auto rounded-lg shadow-lg"
                />
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${project.color}`}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <CardContent className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge variant="secondary" className="text-xs sm:text-sm">
                    {project.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    {project.time}
                  </Badge>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">{project.title}</h3>

                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 text-pretty leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Components Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.components.map((component) => (
                      <Badge key={component} variant="outline" className="text-xs">
                        {component}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevProject}
                    className="flex items-center space-x-1 sm:space-x-2 bg-transparent text-xs sm:text-sm px-2 sm:px-3"
                  >
                    <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Previous</span>
                    <span className="sm:hidden">Prev</span>
                  </Button>

                  <div className="flex space-x-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          index === currentProject ? "bg-primary" : "bg-muted-foreground/30"
                        }`}
                        onClick={() => setCurrentProject(index)}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextProject}
                    className="flex items-center space-x-1 sm:space-x-2 bg-transparent text-xs sm:text-sm px-2 sm:px-3"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <span className="sm:hidden">Next</span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Project Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
            {projects.map((proj, index) => {
              const ProjIcon = proj.icon
              return (
                <Card
                  key={proj.id}
                  className={`cursor-pointer border-2 transition-all duration-200 ${
                    index === currentProject
                      ? "border-primary shadow-lg"
                      : "border-transparent hover:border-muted-foreground/20"
                  }`}
                  onClick={() => setCurrentProject(index)}
                >
                  <CardContent className="p-3 sm:p-4 text-center">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${proj.color}`}
                    >
                      <ProjIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="font-medium text-xs sm:text-sm text-foreground leading-tight">{proj.title}</h4>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
