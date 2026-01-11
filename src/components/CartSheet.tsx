import React, { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import useStore from "@/hooks/use-store";
import { useToast } from "@/hooks/use-toast";
import PaymentModal from "@/components/PaymentModal";

const CartSheet: React.FC = () => {
  const { cart, openCart, setOpenCart, removeFromCart } = useStore();

  const total = cart.reduce((acc, i) => acc + parseFloat(String(i.price).replace(/[^0-9.]/g, "")) * (i.quantity || 1), 0);
  const { toast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Sheet open={openCart} onOpenChange={setOpenCart}>
      <SheetContent side="right" className="w-[380px]">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>

        <div className="mt-4 space-y-4">
          {cart.length === 0 && <div className="text-muted-foreground">Your cart is empty.</div>}
          {cart.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-md" />
              <div className="flex-1">
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-muted-foreground">{item.price} · x{item.quantity || 1}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{item.price}</div>
                <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.name)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t pt-4 flex items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground">Total</div>
            <div className="font-display text-lg font-bold">GH₵ {total.toFixed(2)}</div>
          </div>
          <Button
            variant="gold"
            onClick={() => {
              if (cart.length === 0) {
                toast({
                  title: "No products in cart",
                  description: "Please add items to your cart before checking out.",
                });
                return;
              }
              setModalOpen(true);
            }}
          >
            Checkout
          </Button>
        </div>
        <PaymentModal open={modalOpen} onClose={() => setModalOpen(false)} items={cart} />
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
