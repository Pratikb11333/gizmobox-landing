"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "First Year Engineering Student",
    university: "MIT",
    rating: 5,
    text: "I built my first LED circuit in minutes! GizmoBox made electronics so approachable. Perfect kit for beginners like me.",
    avatar: "/young-asian-female-engineering-student-smiling.jpg",
  },
  {
    id: 2,
    name: "Prof. Michael Rodriguez",
    role: "Electronics Professor",
    university: "Stanford University",
    rating: 5,
    text: "I recommend GizmoBox to all my first-year students. The component selection is perfect for foundational learning.",
    avatar: "/middle-aged-hispanic-male-professor-with-glasses.jpg",
  },
  {
    id: 3,
    name: "Alex Thompson",
    role: "High School Student",
    university: "Lincoln High School",
    rating: 5,
    text: "Amazing kit! I went from knowing nothing about electronics to building my own RGB controller. Highly recommended!",
    avatar: "/teenage-male-student-with-curly-hair-smiling.jpg",
  },
  {
    id: 4,
    name: "Dr. Emily Watson",
    role: "STEM Education Coordinator",
    university: "UC Berkeley",
    rating: 5,
    text: "GizmoBox strikes the perfect balance between simplicity and educational value. Our students love the hands-on approach.",
    avatar: "/professional-woman-with-short-blonde-hair-in-lab-c.jpg",
  },
  {
    id: 5,
    name: "James Park",
    role: "Engineering Student",
    university: "Georgia Tech",
    rating: 5,
    text: "The breadboard and component quality is excellent. I've built over 10 different circuits with this kit!",
    avatar: "/young-korean-male-student-with-glasses-working-on-.jpg",
  },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const testimonial = testimonials[currentTestimonial]

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Reviews & Testimonials
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Loved by Students & Educators
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
            See what students and teachers are saying about their GizmoBox experience.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-muted/30">
            <CardContent className="p-6 sm:p-8 md:p-12 text-center">
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-primary/30 mx-auto mb-4 sm:mb-6" />

              <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground mb-6 sm:mb-8 text-balance leading-relaxed font-medium">
                "{testimonial.text}"
              </blockquote>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shadow-lg"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-foreground text-base sm:text-lg">{testimonial.name}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.university}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center justify-center space-x-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex items-center justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-secondary mb-2">50+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Partner Schools</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">4.9/5</div>
            <div className="text-sm sm:text-base text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
