import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/hooks/use-store";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setOpenCart, setOpenWishlist } = useStore();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      window.location.href = `/${hash}`;
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", hash);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
              <span className="text-gradient-gold font-display text-xl font-bold">YN</span>
            </div>
            <span className="font-display text-2xl font-semibold tracking-wide text-foreground">
              YVEE NOIR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="text-foreground/80 hover:text-primary transition-colors font-body">
              Home
            </a>
            <a href="#products" onClick={(e) => handleNavClick(e, "#products")} className="text-foreground/80 hover:text-primary transition-colors font-body">
              Products
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="text-foreground/80 hover:text-primary transition-colors font-body">
              About
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="text-foreground/80 hover:text-primary transition-colors font-body">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="glass" size="icon" onClick={() => setOpenCart(true)}>
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="glass" size="icon" onClick={() => setOpenWishlist(true)}>
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="gold" size="lg" onClick={(e) => {
              if (location.pathname !== "/explore") {
                window.location.href = "/explore";
              }
            }}>
              Shop Now
            </Button>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="glass" size="icon" onClick={() => setOpenCart(true)}>
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="glass" size="icon" onClick={() => setOpenWishlist(true)}>
              <Heart className="h-5 w-5" />
            </Button>
            {/* Mobile Menu Button */}
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-up">
            <div className="flex flex-col gap-4">
              <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="text-foreground/80 hover:text-primary transition-colors font-body py-2">
                Home
              </a>
              <a href="#products" onClick={(e) => handleNavClick(e, "#products")} className="text-foreground/80 hover:text-primary transition-colors font-body py-2">
                Products
              </a>
              <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="text-foreground/80 hover:text-primary transition-colors font-body py-2">
                About
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="text-foreground/80 hover:text-primary transition-colors font-body py-2">
                Contact
              </a>
              <Button variant="gold" className="mt-2" onClick={() => {
                if (location.pathname !== "/explore") {
                  window.location.href = "/explore";
                } else {
                  setIsMenuOpen(false);
                }
              }}>
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
