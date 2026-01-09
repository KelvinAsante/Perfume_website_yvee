import React from "react";
import { Button } from "@/components/ui/button";
import type { ProductItem } from "@/hooks/use-store";

type Props = {
  open: boolean;
  onClose: () => void;
  items: ProductItem[];
};

const MOMO_NUMBER = "0551870049";
const WHATSAPP_NUMBER = "233547498244"; // without +

const PaymentModal: React.FC<Props> = ({ open, onClose, items }) => {
  const [method, setMethod] = React.useState<"momo" | "bank">("momo");

  React.useEffect(() => {
    if (!open) setMethod("momo");
  }, [open]);

  if (!open) return null;

  const productListText = items
    .map((it) => `${it.name}${it.quantity && it.quantity > 1 ? ` x${it.quantity}` : ""}`)
    .join(", ");

  const imageUrls = items
    .map((it) => {
      try {
        return new URL(String(it.image), window.location.origin).href;
      } catch (e) {
        return String(it.image);
      }
    })
    .join(" \n");

  const sendWhatsApp = (via: "momo" | "bank") => {
    const methodText = via === "momo" ? `Mobile Money to ${MOMO_NUMBER}` : `Bank transfer`;
    const text = `I have paid via ${methodText} for the following items: ${productListText}.\nImages:\n${imageUrls}\nPlease confirm and send your account number.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg bg-background rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Choose Payment Method</h3>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <input id="pm-momo" name="pm" type="radio" checked={method === "momo"} onChange={() => setMethod("momo")} />
            <label htmlFor="pm-momo" className="font-medium">Mobile Money</label>
          </div>
          <div className="flex items-center gap-3">
            <input id="pm-bank" name="pm" type="radio" checked={method === "bank"} onChange={() => setMethod("bank")} />
            <label htmlFor="pm-bank" className="font-medium">Bank Account</label>
          </div>

          {method === "momo" ? (
            <div className="bg-card p-4 rounded-md">
              <div className="font-medium">Mobile Money Number</div>
              <div className="text-foreground/80 mb-2">{MOMO_NUMBER}</div>
              <div className="text-sm text-muted-foreground mb-3">Note: Send the exact amount and include your name and product.</div>
              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => navigator.clipboard?.writeText(MOMO_NUMBER)}>Copy Number</Button>
                <Button variant="magenta" onClick={() => sendWhatsApp("momo")}>Send Proof on WhatsApp</Button>
              </div>
            </div>
          ) : (
            <div className="bg-card p-4 rounded-md">
              <div className="font-medium">Bank Account</div>
              <div className="text-foreground/80 mb-1">Account Name: YVEE NOIR</div>
              <div className="text-foreground/80 mb-1">Account Number: 0000000000</div>
              <div className="text-foreground/80 mb-2">Bank: Your Bank Name</div>
              <div className="text-sm text-muted-foreground mb-3">After payment, send proof and product image on WhatsApp.</div>
              <div className="flex gap-2">
                <Button variant="magenta" onClick={() => sendWhatsApp("bank")}>Send Proof on WhatsApp</Button>
              </div>
            </div>
          )}

          <div className="text-right mt-4">
            <Button variant="ghost" onClick={onClose}>Close</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
