import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-perfume.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-rich/50 via-background to-background z-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-magenta/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-block mb-4">
              <span className="text-primary font-body text-sm tracking-widest uppercase border border-primary/30 px-4 py-2 rounded-full">
                Premium Fragrances
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">Your No.1 Store For</span>
              <br />
              <span className="text-gradient-gold">Long Lasting</span>
              <br />
              <span className="text-foreground">Perfumes</span>
            </h1>
            
            <p className="font-body text-muted-foreground text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Discover an exquisite collection of body sprays, perfume oils, and luxury fragrances 
              that leave a lasting impression wherever you go.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="magenta"
                size="xl"
                onClick={() => {
                  const el = document.getElementById("products");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Explore Collection
              </Button>
              <Button
                variant="glass"
                size="xl"
                onClick={() => {
                  const el = document.getElementById("view-all");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                View More
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative flex justify-center animate-fade-in">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-magenta/30 to-secondary/30 blur-3xl scale-110 rounded-full" />
              
              <img
                src={heroImage}
                alt="Yvee Noir Luxury Perfume"
                className="relative z-10 w-full max-w-lg rounded-3xl shadow-2xl animate-float"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-glass backdrop-blur-xl rounded-2xl p-4 border border-white/20 animate-fade-up z-20">
                <div className="text-center">
                  <p className="text-primary font-display text-2xl font-bold">100%</p>
                  <p className="text-foreground/80 font-body text-sm">Authentic</p>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-glass backdrop-blur-xl rounded-2xl p-4 border border-white/20 animate-fade-up z-20" style={{ animationDelay: "0.2s" }}>
                <div className="text-center">
                  <p className="text-primary font-display text-2xl font-bold">24+</p>
                  <p className="text-foreground/80 font-body text-sm">Hours Lasting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
