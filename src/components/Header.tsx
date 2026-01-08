import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
              <span className="text-gradient-gold font-display text-xl font-bold">YN</span>
            </div>
            <span className="font-display text-2xl font-semibold tracking-wide text-foreground">
              YVEE NOIR
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-colors font-body">
              Home
            </a>
            <a href="#products" className="text-foreground/80 hover:text-primary transition-colors font-body">
              Products
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-body">
              About
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-body">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="glass" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="gold" size="lg">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-up">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-foreground/80 hover:text-primary transition-colors font-body py-2">
                Home
              </a>
              <a href="#products" className="text-foreground/80 hover:text-primary transition-colors font-body py-2">
                Products
              </a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-body py-2">
                About
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-body py-2">
                Contact
              </a>
              <Button variant="gold" className="mt-2">
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
