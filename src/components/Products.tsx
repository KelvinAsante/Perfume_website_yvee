import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import productBodySpray from "@/assets/product-body-spray.jpg";
import productPerfumeOil from "@/assets/product-perfume-oil.jpg";
import productBodyMist from "@/assets/product-body-mist.jpg";
import productPerfume from "@/assets/product-perfume.jpg";
import productPocketPerfume from "@/assets/product-pocket-perfume.jpg";
import productDiffuser from "@/assets/product-diffuser.jpg";

// Wig images
import wig700 from "@/assets/wigs-image/700.jpeg";
import wig5 from "@/assets/wigs-image/WhatsApp Image 2026-05-05 at 11.31.53 PM.jpeg";
import wig6 from "@/assets/wigs-image/WhatsApp Image 2026-05-05 at 11.31.59 PM.jpeg";
import wig7 from "@/assets/wigs-image/WhatsApp Image 2026-05-05 at 11.32.11 PM.jpeg";

const products = [
  {
    name: "Signature Body Spray",
    category: "Body Spray",
    price: "GH₵ 85",
    image: productBodySpray,
  },
  {
    name: "Luxury Perfume Oil",
    category: "Perfume Oil",
    price: "GH₵ 120",
    image: productPerfumeOil,
  },
  {
    name: "Fresh Body Mist",
    category: "Body Mist",
    price: "GH₵ 65",
    image: productBodyMist,
  },
  {
    name: "Elegance Parfum",
    category: "Perfume",
    price: "GH₵ 180",
    image: productPerfume,
  },
  {
    name: "Travel Pocket Perfume",
    category: "Pocket Perfume",
    price: "GH₵ 45",
    image: productPocketPerfume,
  },
  {
    name: "Home Fragrance Diffuser",
    category: "Diffuser",
    price: "GH₵ 95",
    image: productDiffuser,
  },
];

const featuredWigs = [
  { name: "Bone straight", category: "Wigs", price: "GH₵ 1000", image: wig700 },
  { name: "12 inches 100%human hair", category: "Wigs", price: "GH₵ 400", image: wig5 },
  { name: "Bob wig 10 inches 100%human hair", category: "Wigs", price: "GH₵ 450", image: wig6 },
  { name: "4by4 closure 16 inches 100% human hair", category: "Wigs", price: "GH₵ 800", image: wig7 },
];

const Products = () => {
  return (
    <section id="products" className="py-24 relative">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-body text-sm tracking-widest uppercase">
            Our Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Discover Our <span className="text-gradient-gold">Products</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            From body sprays to perfume oils, we offer a wide range of long-lasting fragrances 
            crafted to make you feel confident and irresistible.
          </p>
        </div>
        
        {/* Perfumes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              {...product}
              delay={index * 100}
            />
          ))}
        </div>
        
        {/* View All Perfumes */}
        <div id="view-all" className="text-center mt-12">
          <Link to="/explore" className="inline-block">
            <button className="font-body text-primary hover:text-primary/80 transition-colors underline underline-offset-4">
              View All Perfumes →
            </button>
          </Link>
        </div>

        {/* Wigs Section */}
        <div className="text-center mt-24 mb-16 animate-fade-up">
          <span className="text-primary font-body text-sm tracking-widest uppercase">
            Luxury Hair
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Premium <span className="text-gradient-gold">Wigs</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our stunning collection of 100% human hair wigs — crafted for comfort, 
            style, and a flawless natural finish.
          </p>
        </div>

        {/* Wigs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredWigs.map((wig, index) => (
            <ProductCard
              key={wig.name}
              {...wig}
              delay={index * 100}
            />
          ))}
        </div>

        {/* View All Wigs */}
        <div className="text-center mt-12">
          <Link to="/wigs" className="inline-block">
            <button className="font-body text-primary hover:text-primary/80 transition-colors underline underline-offset-4">
              View All Wigs →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;

