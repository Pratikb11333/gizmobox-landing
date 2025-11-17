'use client'

export function WorkshopIntro() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
            Who is this Workshop For?
          </h2>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            This workshop is designed for engineering and diploma students who want to understand electronics by doing, not just reading. Perfect for students from ECE, EEE, CSE, and Mechatronics departments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                  🎓
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Engineering Students</h3>
                <p className="text-muted-foreground">ECE, EEE, and CSE branches</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                  ⚙️
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Diploma Students</h3>
                <p className="text-muted-foreground">Mechatronics and related fields</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-secondary/10 text-secondary">
                  💡
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Practical Learners</h3>
                <p className="text-muted-foreground">Who want to build real projects</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-secondary/10 text-secondary">
                  🚀
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Innovation Enthusiasts</h3>
                <p className="text-muted-foreground">Eager to explore new technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
