import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Music2, MapPin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-magenta/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-body text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Reach <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about our products? Want to place an order? 
            Contact us through any of these channels!
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {/* WhatsApp */}
          <a
            href="https://wa.me/233547498244"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_40px_hsla(142,70%,45%,0.2)] text-center animate-fade-up"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">WhatsApp</h3>
            <p className="font-body text-primary text-lg">0547498244</p>
            <p className="font-body text-muted-foreground text-sm mt-2">Quick responses!</p>
          </a>
          
          {/* Phone */}
          <a
            href="tel:+233551870049"
            className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsla(45,80%,55%,0.2)] text-center animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Call Us</h3>
            <p className="font-body text-primary text-lg">0551870049</p>
            <p className="font-body text-muted-foreground text-sm mt-2">Mon-Sat: 9am - 7pm</p>
          </a>
          
          {/* TikTok */}
          <a
            href="https://tiktok.com/@yveenoir"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-magenta/50 transition-all duration-300 hover:shadow-[0_0_40px_hsla(320,70%,55%,0.2)] text-center animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="w-16 h-16 rounded-full bg-magenta/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Music2 className="h-8 w-8 text-magenta" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">TikTok</h3>
            <p className="font-body text-primary text-lg">@yveenoir</p>
            <p className="font-body text-muted-foreground text-sm mt-2">Follow for updates!</p>
          </a>
        </div>
        
        {/* CTA Box */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-magenta/20 via-secondary/20 to-magenta/20 rounded-3xl p-8 md:p-12 border border-white/10 text-center animate-fade-up">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Smell Amazing?
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Send us a message on WhatsApp and get personalized fragrance recommendations!
            </p>
            <a
              href="https://wa.me/233547498244?text=Hello%20Yvee%20Noir!%20I'm%20interested%20in%20your%20perfumes."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gold" size="xl">
                <MessageCircle className="h-5 w-5 mr-2" />
                Order on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
