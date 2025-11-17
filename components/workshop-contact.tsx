'use client'

import { Button } from '@/components/ui/button'

export function WorkshopContact() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Bring TecheMonkitz to Your College
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in hosting a workshop at your institution? Let's collaborate and bring practical electronics learning to your campus!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">📞 Call / WhatsApp</h3>
              <div className="space-y-2">
                <p className="text-foreground text-lg font-medium">+918529158466</p>
                <p className="text-foreground text-lg font-medium">+918087127986</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">📧 Email</h3>
              <p className="text-foreground text-lg">techemonkitz@gmail.com</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">🌐 Website</h3>
              <p className="text-foreground text-lg">www.techemonkitz.com</p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us today to schedule a workshop at your college or organization.
              </p>
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Get in Touch
                </Button>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
