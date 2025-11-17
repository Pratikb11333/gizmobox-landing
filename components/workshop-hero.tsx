'use client'

export function WorkshopHero() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-card to-background overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary rounded-full">
          <p className="text-primary text-sm font-semibold">TecheMonkitz Hands-On Electronics Workshop</p>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Learn. Build. <span className="text-glow-cyan text-primary">Innovate.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Turn Classroom Concepts into Real Projects
        </p>
        
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mb-8" />
        
        <p className="text-base md:text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
          At TecheMonkitz, we believe learning electronics should be practical, exciting, and affordable.
          That's why we created the Hands-On Electronics Workshop — where students don't just study circuits…they build them!
        </p>
      </div>
    </section>
  )
}
