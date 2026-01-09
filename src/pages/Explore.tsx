import React from "react";
import product80 from "@/assets/exploremore/80gh.jpeg";
import product65 from "@/assets/exploremore/65cedis.jpeg";
import product60gh from "@/assets/exploremore/60gh.jpeg";
import product60 from "@/assets/exploremore/60.jpeg";
import product60cedis from "@/assets/exploremore/60 cedis.jpeg";
import product480 from "@/assets/exploremore/480cedis.jpeg";
import product250gh from "@/assets/exploremore/250gh.jpeg";
import product250cedis from "@/assets/exploremore/250cedis.jpeg";
import product250big from "@/assets/exploremore/250 big big size.jpeg";
import product220gh from "@/assets/exploremore/220gh.jpeg";
import product220 from "@/assets/exploremore/220.jpeg";
import product220_cedis from "@/assets/exploremore/220 cedis.jpeg";
import product210 from "@/assets/exploremore/210 cedis.jpeg";
import product200 from "@/assets/exploremore/200 100ml.jpeg";
import product170 from "@/assets/exploremore/170cedis.jpeg";
import product170a from "@/assets/exploremore/170.jpeg";
import product150gh from "@/assets/exploremore/150gh.jpeg";
import product150cedis from "@/assets/exploremore/150cedis.jpeg";
import product150 from "@/assets/exploremore/150.jpeg";
import product130 from "@/assets/exploremore/130cedis.jpeg";
import product120 from "@/assets/exploremore/120cedis.jpeg";
import product120ml from "@/assets/exploremore/120 50ml.jpeg";
import product100 from "@/assets/exploremore/100 cedis.jpeg";
import product220cedis from "@/assets/exploremore/220cedis.jpeg";

const images = [
  product480,
  product250big,
  product250gh,
  product250cedis,
  product220gh,
  product220,
  product220_cedis,
  product220cedis,
  product210,
  product200,
  product170,
  product170a,
  product150gh,
  product150cedis,
  product150,
  product130,
  product120,
  product120ml,
  product100,
  product80,
  product65,
  product60gh,
  product60,
  product60cedis,
];

const productNames = [
  "9pm",
  "Now",
  "Brown Orchid",
  "Now Women",
  "Suave",
  "Aventos",
  "Oud",
  "Oud",
  "Aventos",
  "Matelot",
  "Dark Brown Orchid",
  "OUD",
  "Intensio",
  "Aventus Cp",
  "Barakkat",
  "Proud Of You",
  "24K",
  "Matelot",
  "White Proud Pour Femme",
  "OUD For Glory",
  "Yara Pink",
  "Berries",
  "Black Asad",
  "Berries",
];

function extractPriceFromPath(path: string) {
  const m = path.match(/(\d{2,4})/);
  if (m) return `GH₵ ${m[1]}`;
  return "Price unavailable";
}

const Explore: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Explore Our Perfumes</h1>
          <p className="text-muted-foreground mt-2">A larger collection of our perfume designs — tap any item to view or add to cart.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <article key={i} className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-[0_6px_30px_rgba(0,0,0,0.06)] transition">
              <div className="aspect-square overflow-hidden">
                <img src={src} alt={productNames[i] ?? `perfume-${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-foreground">{productNames[i] ?? `Perfume ${i + 1}`}</div>
                  <div className="text-primary font-display font-bold">{extractPriceFromPath(String(src))}</div>
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 py-2 rounded-md bg-magenta text-white font-medium">Buy Now</button>
                  <button className="w-10 h-10 rounded-md bg-glass text-foreground flex items-center justify-center">❤</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
