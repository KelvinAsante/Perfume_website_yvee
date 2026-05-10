import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "@/hooks/use-store";
import { Button } from "@/components/ui/button";

const TARGET_WA_NUMBER_LOCAL = "233547498244"; // +233 54 749 8244

const toInternational = (num: string) => {
  const cleaned = num.replace(/\s|\+|-/g, "");
  if (cleaned.startsWith("0")) return `233${cleaned.slice(1)}`; // Ghana fallback
  return cleaned;
};

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart, setOpenCart, removeFromCart } = useStore();

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [deliveryNote, setDeliveryNote] = React.useState("");
  const [orderNote, setOrderNote] = React.useState("");

  const total = cart.reduce((acc, i) => acc + (parseFloat(String(i.price).replace(/[^0-9.]/g, "")) || 0) * (i.quantity || 1), 0);

  const placeOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill in name, phone and address.");
      return;
    }

    const firstItemName = cart[0]?.name ?? "ORDER";
    const header = `ORDER - ${String(firstItemName).toUpperCase()}`;

    const itemsText = cart
      .map((it) => {
        const qty = it.quantity || 1;
        const priceNum = parseFloat(String(it.price).replace(/[^0-9.]/g, "")) || 0;
        return `${qty}x ${it.name} (GH₵ ${priceNum.toFixed(2)})`;
      })
      .join("\n");

    const text = `${header}\n\nCustomer Details:\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n${deliveryNote ? `\nDelivery Note: ${deliveryNote}` : ""}\n${orderNote ? `\nOrder Note: ${orderNote}` : ""}\n\nOrder Items:\n\n${itemsText}\n\nTotal: GH₵ ${total.toFixed(2)}`;

    const waNumber = toInternational(TARGET_WA_NUMBER_LOCAL);
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 pb-28 md:p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Customer Details</h3>
          <div className="space-y-3">
            <input className="w-full p-3 md:p-4 border border-input rounded-md bg-transparent text-foreground placeholder:text-muted-foreground text-base md:text-lg" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="w-full p-3 md:p-4 border border-input rounded-md bg-transparent text-foreground placeholder:text-muted-foreground text-base md:text-lg" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <textarea rows={3} className="w-full p-3 md:p-4 border border-input rounded-md bg-transparent text-foreground placeholder:text-muted-foreground text-sm md:text-base" placeholder="Delivery address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <textarea rows={2} className="w-full p-3 md:p-4 border border-input rounded-md bg-transparent text-foreground placeholder:text-muted-foreground text-sm md:text-base" placeholder="Delivery note (optional)" value={deliveryNote} onChange={(e) => setDeliveryNote(e.target.value)} />
            <textarea rows={2} className="w-full p-3 md:p-4 border border-input rounded-md bg-transparent text-foreground placeholder:text-muted-foreground text-sm md:text-base" placeholder="Order note (optional)" value={orderNote} onChange={(e) => setOrderNote(e.target.value)} />
          </div>
        </div>

        <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Order Summary</h3>
          <div className="space-y-3">
            {cart.length === 0 && <div className="text-muted-foreground">Your cart is empty.</div>}
            {cart.map((it) => (
              <div key={it.name} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{it.name}</div>
                  <div className="text-sm text-muted-foreground">x{it.quantity || 1}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">GH₵ {(parseFloat(String(it.price).replace(/[^0-9.]/g, "")) || 0).toFixed(2)}</div>
                </div>
              </div>
            ))}

            <div className="pt-3 border-t flex items-center justify-between">
              <div className="font-medium">Total</div>
              <div className="font-bold">GH₵ {total.toFixed(2)}</div>
            </div>

            <div className="hidden md:flex gap-2 mt-4">
              <Button variant="ghost" onClick={() => navigate(-1)}>Back</Button>
              <Button variant="gold" onClick={placeOrder} disabled={cart.length === 0}>Place Order on WhatsApp</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky summary bar */}
      <div className="fixed bottom-0 left-0 right-0 p-3 md:hidden bg-card border-t">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm text-muted-foreground">Total</div>
            <div className="font-bold">GH₵ {total.toFixed(2)}</div>
          </div>
          <div className="flex-1">
            <Button className="w-full" variant="gold" onClick={placeOrder} disabled={cart.length === 0}>Place Order on WhatsApp</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
