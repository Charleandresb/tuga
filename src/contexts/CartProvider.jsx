import { createContext, useState, useMemo, useEffect } from "react";
import api from "../utils/api";

export const cartContext = createContext();
const { Provider } = cartContext;

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    if (!savedCart) return [];

    const parsedCart = JSON.parse(savedCart);
    const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30;
    const expired = Date.now() - parsedCart.updatedAt > THIRTY_DAYS;

    if (expired) {
      localStorage.removeItem("cart");
      return [];
    }
    return parsedCart.items || [];
  });

  useEffect(() => {
    async function reviewCart() {
      if (cart.length === 0) return;

      try {
        const validatedCart = await api.syncCart(cart);
        setCart(validatedCart.items);
      } catch (error) {
        console.error("Error, sincronizando carrito...", error);
      }
    }

    reviewCart();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify({
        items: cart,
        updatedAt: Date.now(),
      }),
    );
  }, [cart]);

  function addToCart(item) {
    setCart((state) => {
      const existing = state.find((i) => i.sku === item.sku);

      if (existing) {
        const updatedItem = {
          ...existing,
          quantity: existing.quantity + item.quantity,
        };
        const filteredState = state.filter((i) => i.sku !== item.sku);

        return [updatedItem, ...filteredState];
      }

      return [item, ...state];
    });
  }

  function addProductQuantity(sku) {
    setCart((state) =>
      state.map((item) =>
        item.sku === sku ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function removeProductQuantity(sku) {
    setCart((state) =>
      state
        .map((item) =>
          item.sku === sku ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(sku) {
    setCart((state) => state.filter((item) => item.sku !== sku));
  }

  function clearCart() {
    setCart([]);
  }

  const productCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  );

  const contextValue = {
    cart,
    productCount,
    totalPrice,
    addToCart,
    addProductQuantity,
    removeProductQuantity,
    removeFromCart,
    clearCart,
  };

  return <Provider value={contextValue}>{children}</Provider>;
}

export default CartProvider;
