"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Cpu, CircuitBoard } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null)

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path
                  d="M 10 10 L 90 10 L 90 90 L 10 90 Z"
                  stroke="rgb(5, 150, 105)"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                />
                <circle cx="10" cy="10" r="2" fill="rgb(59, 130, 246)" opacity="0.5" />
                <circle cx="90" cy="10" r="2" fill="rgb(16, 185, 129)" opacity="0.5" />
                <circle cx="90" cy="90" r="2" fill="rgb(245, 158, 11)" opacity="0.5" />
                <circle cx="10" cy="90" r="2" fill="rgb(239, 68, 68)" opacity="0.5" />
              </pattern>
              <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(5, 150, 105)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(245, 158, 11)" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        <div className="absolute inset-0 opacity-40">
          <div
            className={`absolute top-20 left-4 sm:left-10 w-3 h-3 bg-emerald-400 rounded-full circuit-pulse cursor-pointer transition-all duration-300 ${hoveredComponent === "led1" ? "scale-150 shadow-lg shadow-emerald-400/50" : ""}`}
            onMouseEnter={() => setHoveredComponent("led1")}
            onMouseLeave={() => setHoveredComponent(null)}
          >
            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></div>
          </div>
          <div
            className={`absolute top-40 right-4 sm:right-20 w-4 h-4 bg-blue-400 rounded-full circuit-pulse cursor-pointer transition-all duration-300 ${hoveredComponent === "led2" ? "scale-150 shadow-lg shadow-blue-400/50" : ""}`}
            style={{ animationDelay: "0.5s" }}
            onMouseEnter={() => setHoveredComponent("led2")}
            onMouseLeave={() => setHoveredComponent(null)}
          >
            <div
              className="absolute inset-0 bg-blue-400 rounded-full animate-ping"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
          <div
            className={`absolute bottom-32 left-1/4 w-3 h-3 bg-amber-400 rounded-full circuit-pulse cursor-pointer transition-all duration-300 ${hoveredComponent === "led3" ? "scale-150 shadow-lg shadow-amber-400/50" : ""}`}
            style={{ animationDelay: "1s" }}
            onMouseEnter={() => setHoveredComponent("led3")}
            onMouseLeave={() => setHoveredComponent(null)}
          >
            <div
              className="absolute inset-0 bg-amber-400 rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <div
            className={`absolute bottom-20 right-1/3 w-4 h-4 bg-red-400 rounded-full circuit-pulse cursor-pointer transition-all duration-300 ${hoveredComponent === "led4" ? "scale-150 shadow-lg shadow-red-400/50" : ""}`}
            style={{ animationDelay: "1.5s" }}
            onMouseEnter={() => setHoveredComponent("led4")}
            onMouseLeave={() => setHoveredComponent(null)}
          >
            <div
              className="absolute inset-0 bg-red-400 rounded-full animate-ping"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="traceGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(5, 150, 105)" stopOpacity="0.8" />
                <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="rgb(245, 158, 11)" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="traceGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.8" />
                <stop offset="50%" stopColor="rgb(16, 185, 129)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path
              d="M 50 200 Q 200 100 400 300 T 600 200"
              stroke="url(#traceGradient1)"
              strokeWidth="3"
              fill="none"
              className="circuit-pulse hidden sm:block"
            />
            <path
              d="M 100 400 Q 300 300 500 500 T 700 400"
              stroke="url(#traceGradient2)"
              strokeWidth="3"
              fill="none"
              className="circuit-pulse hidden sm:block"
              style={{ animationDelay: "0.7s" }}
            />
            <path
              d="M 0 300 Q 150 200 300 350 T 500 250"
              stroke="url(#traceGradient1)"
              strokeWidth="2"
              fill="none"
              className="circuit-pulse hidden md:block"
              style={{ animationDelay: "1.2s" }}
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 float-animation">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Perfect for Engineering Students</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-500 to-amber-400 animate-gradient-x">
                GizmoBox
              </span>
              <br />
              <span className="text-foreground">Your </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-400 to-amber-400 animate-gradient-x">
                Pocket Lab
              </span>
              <br />
              <span className="text-foreground">for Electronics</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed">
              This DIY KIT is specially designed for first year engineering students and younger learners who are just
              starting their journey in electronics. Build foundational projects without the complexity of integrated
              circuits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 group relative overflow-hidden"
                onClick={scrollToFeatures}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Zap className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-200" />
                Explore GizmoBox
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group bg-transparent"
              >
                <CircuitBoard className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-500" />
                View Demo
              </Button>
            </div>
          </div>

          {/* Right side - Enhanced floating components visualization */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative float-animation">
                <img
                  src="/futuristic-electronics-kit-with-glowing-leds--resi.jpg"
                  alt="GizmoBox DIY Electronics Kit"
                  className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                />

                {/* Enhanced glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-blue-500/30 to-amber-400/30 rounded-2xl blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-600/20 rounded-2xl blur-2xl -z-10 electric-glow"></div>
              </div>

              <div
                className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg shadow-lg float-animation flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: "0.5s" }}
                onMouseEnter={() => setHoveredComponent("resistor")}
                onMouseLeave={() => setHoveredComponent(null)}
              >
                <div className="w-6 h-2 bg-amber-300 rounded-full"></div>
              </div>

              <div
                className="absolute -top-2 -right-6 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg float-animation flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: "1s" }}
                onMouseEnter={() => setHoveredComponent("led")}
                onMouseLeave={() => setHoveredComponent(null)}
              >
                <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
              </div>

              <div
                className="absolute -bottom-4 -left-6 w-14 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-md shadow-lg float-animation flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: "1.5s" }}
                onMouseEnter={() => setHoveredComponent("breadboard")}
                onMouseLeave={() => setHoveredComponent(null)}
              >
                <Cpu className="w-6 h-6 text-white" />
              </div>

              <div
                className="absolute -bottom-2 -right-4 w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-lg float-animation flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: "2s" }}
                onMouseEnter={() => setHoveredComponent("capacitor")}
                onMouseLeave={() => setHoveredComponent(null)}
              >
                <div className="w-4 h-6 bg-gray-300 rounded-sm"></div>
              </div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(5, 150, 105)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M 50 50 Q 150 100 250 150"
                  stroke="url(#particleGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="circuit-pulse"
                  strokeDasharray="5,5"
                />
                <path
                  d="M 300 100 Q 200 200 100 300"
                  stroke="url(#particleGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="circuit-pulse"
                  strokeDasharray="5,5"
                  style={{ animationDelay: "0.8s" }}
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-sm text-muted-foreground">Discover More</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
