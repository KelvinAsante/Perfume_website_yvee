import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const WelcomePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasVisited", "true");
  };

  const handleExplorePerfumes = () => {
    handleClose();
    window.location.href = "/explore";
  };

  const handleExploreWigs = () => {
    handleClose();
    window.location.href = "/wigs";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-500">
      <div 
        className="relative w-full max-w-lg bg-background rounded-3xl p-8 md:p-10 shadow-2xl border border-white/10 animate-in zoom-in-95 duration-500 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-magenta/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-6 bg-background">
            <span className="text-gradient-gold font-display text-2xl font-bold">YN</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Welcome to <span className="text-gradient-gold">YVEE NOIR</span> ✨
          </h2>
          
          <p className="font-body text-muted-foreground text-base md:text-lg mb-10 max-w-sm mx-auto">
            Discover premium perfumes and stylish wigs designed to elevate your confidence and complete your look.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button 
              variant="magenta" 
              size="xl" 
              onClick={handleExplorePerfumes}
              className="flex-1"
            >
              Explore Our Perfumes
            </Button>
            <Button 
              variant="glass" 
              size="xl" 
              onClick={handleExploreWigs}
              className="flex-1"
            >
              Explore Our Wigs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
