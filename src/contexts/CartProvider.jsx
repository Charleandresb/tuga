import { createContext, useState, useMemo } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   const cartFromStorage = localStorage.getItem("cart");
  //   const addCountFromStorage = localStorage.getItem("addQuantity");
  //   const removeCountFromStorage = localStorage.getItem("removeQuantity");
  //   if (cartFromStorage) {
  //     setCart(JSON.parse(cartFromStorage));
  //   }
  //   if (addCountFromStorage) {
  //     setProductCount(Number(addCountFromStorage));
  //   } else {
  //     setProductCount(Number(removeCountFromStorage));
  //   }
  // }, []);

  function addToCart(item) {
    setCart((state) => {
      const existing = state.find((i) => i.sku === item.sku);

      if (existing) {
        return state.map((i) =>
          i.sku === item.sku
            ? { ...i, quantity: i.quantity + item.quantity }
            : i,
        );
      }

      return [...state, item];
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
