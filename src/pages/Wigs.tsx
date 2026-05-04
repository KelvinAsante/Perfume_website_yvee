import React from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const wigs = [
  {
    name: "Bone Straight 24\"",
    price: "GH₵ 1200",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f10a5146?w=800&q=80",
  },
  {
    name: "Deep Wave 20\"",
    price: "GH₵ 950",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
  },
  {
    name: "Blonde Bob 12\"",
    price: "GH₵ 600",
    image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=800&q=80",
  },
  {
    name: "Kinky Curly 18\"",
    price: "GH₵ 850",
    image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=800&q=80",
  },
  {
    name: "Pixie Cut",
    price: "GH₵ 450",
    image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&q=80",
  },
  {
    name: "Water Wave 22\"",
    price: "GH₵ 1100",
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=800&q=80",
  },
];

const Wigs: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-28 pb-16">
        <header className="mb-8">
          <div className="inline-block mb-4">
              <span className="text-primary font-body text-sm tracking-widest uppercase border border-primary/30 px-4 py-2 rounded-full">
                Luxury Hair
              </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Premium Collection</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">Discover our luxury collection of stylish wigs designed to elevate your look and complement your favorite fragrances.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wigs.map((product, i) => (
            <ProductCard
              key={product.name}
              name={product.name}
              category="Wig"
              price={product.price}
              image={product.image}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wigs;
