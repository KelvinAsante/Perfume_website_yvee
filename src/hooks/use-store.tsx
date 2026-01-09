import React from "react";

export type ProductItem = {
  name: string;
  category: string;
  price: string;
  image: string;
  quantity?: number;
};

type Store = {
  cart: ProductItem[];
  wishlist: ProductItem[];
  openCart: boolean;
  openWishlist: boolean;
  addToCart: (p: ProductItem) => void;
  removeFromCart: (name: string) => void;
  addToWishlist: (p: ProductItem) => void;
  removeFromWishlist: (name: string) => void;
  isInWishlist: (name: string) => boolean;
  setOpenCart: (v: boolean) => void;
  setOpenWishlist: (v: boolean) => void;
};

const STORAGE_KEY = "yn_store_v1";

const initial: Store = {
  cart: [],
  wishlist: [],
  openCart: false,
  openWishlist: false,
  addToCart: () => {},
  removeFromCart: () => {},
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishlist: () => false,
  setOpenCart: () => {},
  setOpenWishlist: () => {},
};

const StoreContext = React.createContext<Store>(initial);

function readStorage(): { cart: ProductItem[]; wishlist: ProductItem[] } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { cart: [], wishlist: [] };
    return JSON.parse(raw);
  } catch (e) {
    return { cart: [], wishlist: [] };
  }
}

function writeStorage(state: { cart: ProductItem[]; wishlist: ProductItem[] }) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    // ignore
  }
}

export const StoreProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const stored = React.useMemo(readStorage, []);

  const [cart, setCart] = React.useState<ProductItem[]>(stored.cart || []);
  const [wishlist, setWishlist] = React.useState<ProductItem[]>(stored.wishlist || []);
  const [openCart, setOpenCart] = React.useState(false);
  const [openWishlist, setOpenWishlist] = React.useState(false);

  React.useEffect(() => writeStorage({ cart, wishlist }), [cart, wishlist]);

  const addToCart = (p: ProductItem) => {
    setCart((prev) => {
      const found = prev.find((x) => x.name === p.name);
      if (found) {
        return prev.map((x) => (x.name === p.name ? { ...x, quantity: (x.quantity || 1) + 1 } : x));
      }
      return [...prev, { ...p, quantity: 1 }];
    });
  };

  const removeFromCart = (name: string) => setCart((prev) => prev.filter((p) => p.name !== name));

  const addToWishlist = (p: ProductItem) => {
    setWishlist((prev) => (prev.some((x) => x.name === p.name) ? prev : [...prev, p]));
  };

  const removeFromWishlist = (name: string) => setWishlist((prev) => prev.filter((p) => p.name !== name));

  const isInWishlist = (name: string) => wishlist.some((p) => p.name === name);

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        openCart,
        openWishlist,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        setOpenCart,
        setOpenWishlist,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export function useStore() {
  return React.useContext(StoreContext);
}

export default useStore;
