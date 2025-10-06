"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { AspectRatio } from "@/components/ui/aspect-ratio"

type Slide = {
  kit: "DIY Kit" | "Sensor Kit" | "Advance Kit"
  src: string
  alt: string
}

const slides: Slide[] = [
  // DIY Kit
  {
    kit: "DIY Kit",
    src: "/DIY Kit/1.jpeg",
    alt: "DIY Kit LED blinking circuit on a breadboard",
  },
  {
    kit: "DIY Kit",
    src: "/DIY Kit/2.jpeg",
    alt: "DIY Kit power rails and wires neatly organized",
  },
  {
    kit: "DIY Kit",
    src: "/DIY Kit/3.jpeg",
    alt: "DIY Kit button press controlling a buzzer",
  },
  {
    kit: "DIY Kit",
    src: "/DIY Kit/4.jpeg",
    alt: "DIY Kit power rails and wires neatly organized",
  },

  // Sensor Kit
  {
    kit: "Sensor Kit",
    src: "/Sensor Kit/1.jpeg",
    alt: "Sensor Kit temperature sensor with LCD display",
  },
  {
    kit: "Sensor Kit",
    src: "/Sensor Kit/2.jpeg",
    alt: "Sensor Kit light sensor tracking ambient light",
  },
  {
    kit: "Sensor Kit",
    src: "/Sensor Kit/3.jpeg",
    alt: "Sensor Kit motion detector triggering an alarm",
  },
  {
    kit: "Sensor Kit",
    src: "/Sensor Kit/4.jpeg",
    alt: "Sensor Kit motion detector triggering an alarm",
  },
  {
    kit: "Sensor Kit",
    src: "/Sensor Kit/5.jpeg",
    alt: "Sensor Kit motion detector triggering an alarm",
  },
  {
    kit: "Sensor Kit",
    src: "/Sensor Kit/6.jpeg",
    alt: "Sensor Kit motion detector triggering an alarm",
  },
  {
    kit: "Sensor Kit",
    src: "/Sensor Kit/7.jpeg",
    alt: "Sensor Kit motion detector triggering an alarm",
  },

  // Advanced Kit
  {
    kit: "Advance Kit",
    src: "/Advance Kit/1.jpeg",
    alt: "Advanced Kit IoT dashboard readings on a screen",
  },
  {
    kit: "Advance Kit",
    src: "/Advance Kit/2.jpeg",
    alt: "Advanced Kit small robotics chassis with wheels",
  },
  {
    kit: "Advance Kit",
    src: "/Advance Kit/3.jpeg",
    alt: "Advanced Kit smart home automation node on a desk",
  },
  {
    kit: "Advance Kit",
    src: "/Advance Kit/4.jpeg",
    alt: "Advanced Kit smart home automation node on a desk",
  },
  {
    kit: "Advance Kit",
    src: "/Advance Kit/5.jpeg",
    alt: "Advanced Kit smart home automation node on a desk",
  },
  {
    kit: "Advance Kit",
    src: "/Advance Kit/6.jpeg",
    alt: "Advanced Kit smart home automation node on a desk",
  },
  {
    kit: "Advance Kit",
    src: "/Advance Kit/7.jpeg",
    alt: "Advanced Kit smart home automation node on a desk",
  },
]

export function KitsCarousel() {
  return (
    <section id="kits-gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-pretty">Kits Photo Carousel</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Explore real builds you can create with Gizmobox. Swipe or use the arrows to view examples from each kit.
          </p>
        </div>

        <div className="relative">
          <Carousel opts={{ loop: true, align: "start" }} className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-3">
              {slides.map((slide, idx) => (
                <CarouselItem key={`${slide.kit}-${idx}`} className="pl-3 md:basis-1/2 lg:basis-1/3">
                  <div className="group rounded-lg border border-border bg-card overflow-hidden glow-cyan transition-shadow hover:glow-green">
                    <AspectRatio ratio={16 / 9} className="relative bg-muted/20">
                      <img
                        src={slide.src || "/placeholder.svg"}
                        alt={slide.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent" />
                      <div className="absolute left-3 top-3 flex items-center gap-2">
                        <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                          {slide.kit}
                        </Badge>
                      </div>
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="bg-card/70 hover:bg-card border-border" />
            <CarouselNext className="bg-card/70 hover:bg-card border-border" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
