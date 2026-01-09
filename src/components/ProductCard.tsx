import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import React, { useState, useEffect } from "react";
import { useStore } from "@/hooks/use-store";

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  image: string;
  delay?: number;
}

const ProductCard = ({ name, category, price, image, delay = 0 }: ProductCardProps) => {
  const { toast } = useToast();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist, setOpenCart } = useStore();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isInWishlist(name));
  }, [isInWishlist, name]);

  const handleAddToCart = () => {
    addToCart({ name, category, price, image });
    setOpenCart(true);
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  const handleToggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    if (newLiked) {
      addToWishlist({ name, category, price, image });
    } else {
      removeFromWishlist(name);
    }
    toast({
      title: newLiked ? "Added to wishlist" : "Removed from wishlist",
      description: `${name} ${newLiked ? "added to" : "removed from"} your wishlist.`,
    });
  };
  return (
    <div 
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_60px_hsla(290,60%,50%,0.2)]"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick actions */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <Button variant="magenta" className="flex-1" size="sm" onClick={handleAddToCart}>
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button
            variant="glass"
            size="icon"
            className="h-9 w-9"
            onClick={handleToggleLike}
            aria-pressed={liked}
            aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={`h-4 w-4 ${liked ? "text-magenta" : ""}`} />
          </Button>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-glass backdrop-blur-sm text-foreground text-xs font-body px-3 py-1 rounded-full border border-white/20">
            {category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="font-body text-muted-foreground text-sm mb-3">{category}</p>
        <p className="font-display text-2xl font-bold text-primary">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
