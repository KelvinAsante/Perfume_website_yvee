import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-perfume.jpg";
import wigImage from "@/assets/hero-wig.jpeg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const slides = [
  {
    id: "perfume",
    preTitle: "Premium Fragrances",
    title1: "Your No.1 Store For",
    title2: "Long Lasting",
    title3: "Perfumes",
    desc: "Discover an exquisite collection of body sprays, perfume oils, and luxury fragrances that leave a lasting impression wherever you go.",
    img: heroImage,
    badge1Val: "100%",
    badge1Text: "Authentic",
    badge2Val: "24+",
    badge2Text: "Hours Lasting",
  },
  {
    id: "wig",
    preTitle: "Luxury Hair",
    title1: "Elevate Your Look With",
    title2: "Premium Quality",
    title3: "Human Hair Wigs",
    desc: "Explore our versatile collection of stunning 100% human hair wigs, crafted for maximum comfort and a flawless natural finish.",
    img: wigImage,
    badge1Val: "100%",
    badge1Text: "Human Hair",
    badge2Val: "Premium",
    badge2Text: "Quality",
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-rich/50 via-background to-background z-0 transition-colors duration-1000" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-magenta/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-4 z-10">
        <div key={slide.id} className="grid lg:grid-cols-2 gap-12 items-center animate-in fade-in zoom-in-95 duration-700">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4">
              <span className="text-primary font-body text-sm tracking-widest uppercase border border-primary/30 px-4 py-2 rounded-full">
                {slide.preTitle}
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">{slide.title1}</span>
              <br />
              <span className="text-gradient-gold">{slide.title2}</span>
              <br />
              <span className="text-foreground">{slide.title3}</span>
            </h1>
            
            <p className="font-body text-muted-foreground text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              {slide.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-50">
              <Link to="/explore" className="w-full sm:w-auto block">
                <Button variant="magenta" size="xl" className="w-full">
                  Explore Our Perfumes
                </Button>
              </Link>
              <Link to="/wigs" className="w-full sm:w-auto block">
                <Button variant="glass" size="xl" className="w-full">
                  Explore Our Wigs
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative flex justify-center mt-10 lg:mt-0">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-magenta/30 to-secondary/30 blur-3xl scale-110 rounded-full" />
              
              <img
                src={slide.img}
                alt={slide.title3}
                className="relative z-10 w-full max-w-xs md:max-w-md lg:max-w-lg rounded-3xl object-cover aspect-[3/4] shadow-2xl animate-float border border-white/10"
              />
              
              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 bg-glass backdrop-blur-xl rounded-2xl p-4 border border-white/20 z-20">
                <div className="text-center">
                  <p className="text-primary font-display text-2xl font-bold">{slide.badge1Val}</p>
                  <p className="text-foreground/80 font-body text-sm">{slide.badge1Text}</p>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-glass backdrop-blur-xl rounded-2xl p-4 border border-white/20 z-20" style={{ animationDelay: "0.2s" }}>
                <div className="text-center">
                  <p className="text-primary font-display text-2xl font-bold">{slide.badge2Val}</p>
                  <p className="text-foreground/80 font-body text-sm">{slide.badge2Text}</p>
                </div>
              </div>
            </div>
            
            {/* Slideshow Indicators */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
               {slides.map((_, idx) => (
                 <button 
                   key={idx}
                   onClick={() => setCurrent(idx)}
                   className={`w-12 h-1 rounded-full transition-all duration-300 ${current === idx ? 'bg-primary' : 'bg-primary/30'}`}
                   aria-label={`Go to slide ${idx + 1}`}
                 />
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
