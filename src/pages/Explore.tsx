import React, { useState } from "react";
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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [method, setMethod] = useState<"momo" | "bank">("momo");

  const openBuyModal = (index: number) => {
    setSelectedIndex(index);
    setMethod("momo");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedIndex(null);
  };

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
                  <button onClick={() => openBuyModal(i)} className="flex-1 py-2 rounded-md bg-magenta text-white font-medium">Buy Now</button>
                  <button className="w-10 h-10 rounded-md bg-glass text-foreground flex items-center justify-center">❤</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        {modalOpen && selectedIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={closeModal} />
            <div className="relative z-10 w-full max-w-md bg-background rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Choose Payment Method</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <input id="momo" name="method" type="radio" checked={method === "momo"} onChange={() => setMethod("momo")} />
                  <label htmlFor="momo" className="font-medium">Mobile Money</label>
                </div>
                <div className="flex items-center gap-3">
                  <input id="bank" name="method" type="radio" checked={method === "bank"} onChange={() => setMethod("bank")} />
                  <label htmlFor="bank" className="font-medium">Bank Account</label>
                </div>

                {method === "momo" ? (
                  <div className="bg-card p-4 rounded-md">
                    <div className="font-medium">Mobile Money Number</div>
                    <div className="text-foreground/80 mb-2">0551870049</div>
                    <div className="text-sm text-muted-foreground mb-3">Note: Send the exact amount and include your name and product.</div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          navigator.clipboard?.writeText("0551870049");
                        }}
                        className="px-3 py-2 rounded-md bg-secondary text-secondary-foreground"
                      >
                        Copy Number
                      </button>
                      <a
                        href={(() => {
                          try {
                            const name = productNames[selectedIndex] ?? `Perfume ${selectedIndex + 1}`;
                            const imageUrl = new URL(String(images[selectedIndex]), window.location.origin).href;
                            const text = `I have paid via Mobile Money to 0551870049 for ${name}. Here is the product image: ${imageUrl}. Please confirm and send your account number.`;
                            return `https://wa.me/233547498244?text=${encodeURIComponent(text)}`;
                          } catch (e) {
                            const name = productNames[selectedIndex] ?? `Perfume ${selectedIndex + 1}`;
                            const text = `I have paid via Mobile Money to 0551870049 for ${name}. Please confirm and send your account number.`;
                            return `https://wa.me/233547498244?text=${encodeURIComponent(text)}`;
                          }
                        })()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-md bg-magenta text-white"
                      >
                        Send Proof on WhatsApp
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="bg-card p-4 rounded-md">
                    <div className="font-medium">Bank Account</div>
                    <div className="text-foreground/80 mb-2">Account Name: YVEE NOIR</div>
                    <div className="text-foreground/80 mb-2">Account Number: 0000000000</div>
                    <div className="text-foreground/80 mb-2">Bank: Your Bank Name</div>
                    <div className="text-sm text-muted-foreground mb-3">After payment, send proof and product image on WhatsApp.</div>
                    <div className="flex gap-2">
                      <a
                        href={(() => {
                          try {
                            const name = productNames[selectedIndex] ?? `Perfume ${selectedIndex + 1}`;
                            const imageUrl = new URL(String(images[selectedIndex]), window.location.origin).href;
                            const text = `I have paid to the bank account for ${name}. Here is the product image: ${imageUrl}. Please confirm and send your account number.`;
                            return `https://wa.me/233547498244?text=${encodeURIComponent(text)}`;
                          } catch (e) {
                            const name = productNames[selectedIndex] ?? `Perfume ${selectedIndex + 1}`;
                            const text = `I have paid to the bank account for ${name}. Please confirm and send your account number.`;
                            return `https://wa.me/233547498244?text=${encodeURIComponent(text)}`;
                          }
                        })()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-md bg-magenta text-white"
                      >
                        Send Proof on WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                <div className="text-right mt-4">
                  <button onClick={closeModal} className="px-4 py-2 rounded-md bg-glass">Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
