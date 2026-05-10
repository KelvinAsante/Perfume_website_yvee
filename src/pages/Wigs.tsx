import React, { useRef, useEffect } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

// --- Images ---
import wig700 from "@/assets/wigs-image/700.jpeg";
import wig1 from "@/assets/wigs-image/WhatsApp Image 2026-05-05 at 11.31.53 PM (1).jpeg";
import wig2 from "@/assets/wigs-image/WhatsApp Image 2026-05-05 at 11.31.53 PM (2).jpeg";
import wig3 from "@/assets/wigs-image/WhatsApp Image 2026-05-05 at 11.31.53 PM (3).jpeg";
import wig4 from "@/assets/wigs-image/WhatsApp Image 2026-05-05 at 11.31.53 PM (4).jpeg";
import wig5 from "@/assets/wigs-image/WhatsApp Image 2026-05-05 at 11.31.53 PM.jpeg";
import wig6 from "@/assets/wigs-image/WhatsApp Image 2026-05-05 at 11.31.59 PM.jpeg";
import wig7 from "@/assets/wigs-image/WhatsApp Image 2026-05-05 at 11.32.11 PM.jpeg";
import wig8 from "@/assets/wigs-image/WhatsApp Image 2026-05-05 at 11.32.15 PM.jpeg";
import wig9 from "@/assets/wigs-image/WhatsApp Image 2026-05-05 at 11.32.16 PM.jpeg";
import wig10 from "@/assets/wigs-image/WhatsApp Image 2026-05-05 at 11.32.19 PM.jpeg";

// --- Videos ---
import vid1 from "@/assets/wigs-image/BouncyHair_1500.mp4";
import vid2 from "@/assets/wigs-image/WhatsApp Video 2026-05-05 at 11.31.52 PM.mp4";
import vid3 from "@/assets/wigs-image/WhatsApp Video 2026-05-05 at 11.31.55 PM.mp4";
import vid4 from "@/assets/wigs-image/WhatsApp Video 2026-05-05 at 11.31.58 PM.mp4";
import vid5 from "@/assets/wigs-image/WhatsApp Video 2026-05-05 at 11.32.05 PM.mp4";
import vid6 from "@/assets/wigs-image/WhatsApp Video 2026-05-05 at 11.32.07 PM.mp4";
import vid7 from "@/assets/wigs-image/WhatsApp Video 2026-05-05 at 11.32.11 PM.mp4";
import vid8 from "@/assets/wigs-image/WhatsApp Video 2026-05-05 at 11.32.13 PM.mp4";
import vid9 from "@/assets/wigs-image/WhatsApp Video 2026-05-05 at 11.32.15 PM.mp4";
import vid10 from "@/assets/wigs-image/WhatsApp Video 2026-05-05 at 11.32.18 PM.mp4";

const wigProducts = [
  { name: "100%human hair", price: "GH₵ 700", image: wig700 },
  { name: "12 inches 100%human hair", price: "GH₵ 400", image: wig5 },
  { name: "Bob wig 450 cedis 10 inches 100%human hair", price: "GH₵ 450", image: wig6 },
  { name: "Wet curls 10inches 100% human hair", price: "GH₵ 450", image: wig1 },
  { name: "wet curls 100% human hair", price: "GH₵ 600", image: wig2 },
  { name: "12 inches 100%human hair", price: "GH₵ 500", image: wig3 },
  { name: "300 cedis 100%human hair", price: "GH₵ 300", image: wig4 },
  { name: "4by4 closure 16 inches 100% human hai", price: "GH₵ 800", image: wig7 },
  { name: "Bob wig 4by4 closure 100% human hair 12 inches", price: "GH₵ 550", image: wig8 },
  { name: "bouncy hair 100% human hair 14inches", price: "GH₵ 700", image: wig9 },
  { name: "Human hair 100% Bouncy hair 16 inches", price: "GH₵ 800", image: wig10 },
];

const videos = [vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8, vid9, vid10];

const AutoPlayVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      autoPlay
      loop
      playsInline
      className="w-full h-full object-cover rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_60px_hsla(290,60%,50%,0.2)]"
    />
  );
};

const Wigs: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-28 pb-16">
        {/* Page Header */}
        <header className="mb-12 text-center">
          <span className="inline-block text-primary font-body text-sm tracking-widest uppercase border border-primary/30 px-4 py-2 rounded-full mb-4">
            Luxury Hair Collection
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Our Premium <span className="text-gradient-gold">Wigs</span>
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-lg">
            Explore our stunning collection of 100% human hair wigs — crafted for comfort, style, and a flawless natural finish.
          </p>
        </header>

        {/* Video Showcase Section */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-primary inline-block" />
            See Them In Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((src, i) => (
              <div key={i} className="aspect-[9/16] rounded-2xl overflow-hidden bg-card">
                <AutoPlayVideo src={src} />
              </div>
            ))}
          </div>
        </section>

        {/* Products Grid Section */}
        <section>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-primary inline-block" />
            Shop Our Wigs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wigProducts.map((product, i) => (
              <ProductCard
                key={i}
                name={product.name}
                category="Wigs"
                price={product.price}
                image={product.image}
                delay={0}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Wigs;
