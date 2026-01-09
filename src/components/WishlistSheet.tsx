import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import useStore from "@/hooks/use-store";

const WishlistSheet: React.FC = () => {
  const { wishlist, openWishlist, setOpenWishlist, removeFromWishlist, addToCart } = useStore();

  return (
    <Sheet open={openWishlist} onOpenChange={setOpenWishlist}>
      <SheetContent side="right" className="w-[380px]">
        <SheetHeader>
          <SheetTitle>Wishlist</SheetTitle>
        </SheetHeader>

        <div className="mt-4 space-y-4">
          {wishlist.length === 0 && <div className="text-muted-foreground">Your wishlist is empty.</div>}
          {wishlist.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-md" />
              <div className="flex-1">
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-muted-foreground">{item.price}</div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Button variant="magenta" size="sm" onClick={() => addToCart(item)}>
                  Add to cart
                </Button>
                <Button variant="ghost" size="sm" onClick={() => removeFromWishlist(item.name)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default WishlistSheet;
