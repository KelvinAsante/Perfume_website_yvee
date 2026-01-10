import { Heart, MessageCircle, Phone, Music2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                <span className="text-gradient-gold font-display text-xl font-bold">YN</span>
              </div>
              <span className="font-display text-2xl font-semibold tracking-wide text-foreground">
                YVEE NOIR
              </span>
            </div>
            <p className="font-body text-muted-foreground mb-4 max-w-md">
              Your No.1 store for long-lasting perfumes. Discover our exclusive collection 
              of body sprays, perfume oils, and luxury fragrances.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/233547498244"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="tel:+233551870049"
                className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@yveenoir1?_r=1&_d=egle98fl6h95b1&sec_uid=MS4wLjABAAAA6fKHPAhi1g0rckm9lTMPnqD-_RGwRHGI_yWl5HUuzebiGLC4rmbq-y7ch_yr1KHT&share_author_id=6966003456490488837&sharer_language=en&source=h5_m&u_code=dik066bebcc3b4&ug_btm=b8727,b0&sec_user_id=MS4wLjABAAAA6fKHPAhi1g0rckm9lTMPnqD-_RGwRHGI_yWl5HUuzebiGLC4rmbq-y7ch_yr1KHT&utm_source=whatsapp&social_share_type=5&utm_campaign=client_share&utm_medium=ios&tt_from=whatsapp&user_id=6966003456490488837&enable_checksum=1&share_link_id=DB0680D1-E0CB-46F3-A6C4-B8645B434EB5&share_app_id=1233"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-magenta hover:text-magenta transition-colors"
              >
                <Music2 className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="font-body text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="font-body text-muted-foreground hover:text-primary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="font-body text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="font-body text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              <li className="font-body text-muted-foreground">Body Spray</li>
              <li className="font-body text-muted-foreground">Perfume Oil</li>
              <li className="font-body text-muted-foreground">Body Mist</li>
              <li className="font-body text-muted-foreground">Touch Oil</li>
              <li className="font-body text-muted-foreground">Perfume</li>
              <li className="font-body text-muted-foreground">Pocket Perfume</li>
              <li className="font-body text-muted-foreground">Linen Sprays</li>
              <li className="font-body text-muted-foreground">Fragrance Diffusers</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-muted-foreground text-sm">
            © 2025 Yvee Noir. All rights reserved.
          </p>
          <p className="font-body text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-magenta" /> by Kelvin Asante
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
