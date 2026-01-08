import { Sparkles, Award, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Only the finest ingredients are used in our long-lasting fragrance formulations.",
  },
  {
    icon: Clock,
    title: "Long Lasting",
    description: "Our perfumes are designed to last 24+ hours, keeping you fresh all day.",
  },
  {
    icon: Award,
    title: "100% Authentic",
    description: "Every product is genuine and sourced from trusted manufacturers.",
  },
  {
    icon: Heart,
    title: "Customer Love",
    description: "Thousands of happy customers trust us for their fragrance needs.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-magenta/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <span className="text-primary font-body text-sm tracking-widest uppercase">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Why Choose <span className="text-gradient-magenta">Yvee Noir?</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-6">
              At Yvee Noir, we believe that everyone deserves to smell amazing. We've curated 
              an exclusive collection of body sprays, perfume oils, body mists, touch oils, 
              and luxury perfumes that cater to every personality and occasion.
            </p>
            <p className="font-body text-muted-foreground text-lg mb-8">
              Our commitment to quality ensures that each fragrance is crafted to deliver 
              exceptional longevity and sillage, making you unforgettable wherever you go.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-glass rounded-xl border border-white/10">
                <p className="font-display text-3xl font-bold text-primary">500+</p>
                <p className="font-body text-muted-foreground text-sm">Happy Clients</p>
              </div>
              <div className="text-center p-4 bg-glass rounded-xl border border-white/10">
                <p className="font-display text-3xl font-bold text-primary">50+</p>
                <p className="font-body text-muted-foreground text-sm">Products</p>
              </div>
              <div className="text-center p-4 bg-glass rounded-xl border border-white/10">
                <p className="font-display text-3xl font-bold text-primary">24hr</p>
                <p className="font-body text-muted-foreground text-sm">Lasting</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsla(45,80%,55%,0.1)] animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-magenta/20 to-secondary/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
