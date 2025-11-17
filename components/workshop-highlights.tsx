'use client'

export function WorkshopHighlights() {
  const highlights = [
    {
      icon: '🚀',
      title: 'Build Real Working Projects',
      description: 'Use TecheMonkitz kits to create practical, functioning projects'
    },
    {
      icon: '⚙️',
      title: 'Indian-Made Development Boards',
      description: 'Cost-effective and reliable solutions for learning electronics'
    },
    {
      icon: '🧠',
      title: 'Deep Learning Experience',
      description: 'Understand sensors, circuits, and automation from the ground up'
    },
    {
      icon: '💡',
      title: 'Complete Project Kits',
      description: 'Get everything you need, plus certificates and live guidance'
    },
    {
      icon: '📚',
      title: 'Curriculum Support',
      description: 'Aligned with college requirements and real-world applications'
    },
    {
      icon: '🎯',
      title: 'Expert Mentorship',
      description: 'Learn directly from industry experts and experienced instructors'
    }
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Workshop Highlights
          </h2>
          <p className="text-muted-foreground text-lg">Everything you need to master electronics</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:glow-cyan"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
