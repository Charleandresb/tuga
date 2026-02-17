import { useContext } from "react";
import { cartContext } from "../../contexts/CartProvider";
import { ShoppingCart } from "lucide-react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import cloudinaryUrl from "../../utils/cloudinaryUrl";

function Cart() {
  const {
    cart,
    productCount,
    totalPrice,
    addProductQuantity,
    removeProductQuantity,
    removeFromCart,
    clearCart,
  } = useContext(cartContext);

  const navigate = useNavigate();

  function handleBuy() {
    navigate("/página-en-desarrollo");
  }

  function handleImageClick(sku) {
    navigate(`/comprar/${sku}`);
  }

  const total = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(totalPrice);

  if (!cart.length)
    return (
      <div className="cartEmpty">
        <ShoppingCart className="cartEmpty__icon" />
        <h2 className="cartEmpty__text">Tu carrito está vacío</h2>
      </div>
    );
  return (
    <section className="cart">
      <div className="cart__container">
        <div className="cart__header">
          <div className="cart__count">
            <ShoppingCart className="cart__count-icon" />
            <h5 className="cart__count-text">
              Total de productos: {productCount}
            </h5>
          </div>
          <div className="cart__header-titles">
            <p className="cart__product">Producto</p>
            <p className="cart__name">Nombre</p>
            <p className="cart__price">Precio</p>
            <p className="cart__quantity">Cantidad</p>
          </div>
        </div>
        {cart.map((item) => {
          return (
            <div key={item.sku} className="cart__product-grid">
              <img
                src={cloudinaryUrl(item.images, 150)}
                className="cart__grid-image"
                alt={item.name}
                onClick={() => handleImageClick(item.sku)}
              />
              <p className="cart__grid-name">
                {item.name} ({item.size})
              </p>
              <p className="cart__grid-price">
                {new Intl.NumberFormat("es-Cl", {
                  style: "currency",
                  currency: "CLP",
                }).format(item.price)}
              </p>
              <p className="cart__grid-quantity">{item.quantity}</p>
              <div className="cart__grid-buttons">
                <p
                  className="cart__remove-button"
                  onClick={() => removeProductQuantity(item.sku)}
                >
                  –
                </p>
                <p
                  className="cart__add-button"
                  onClick={() => addProductQuantity(item.sku)}
                >
                  +
                </p>
                <Trash2
                  className="cart__empty-button"
                  onClick={() => removeFromCart(item.sku)}
                />
              </div>
            </div>
          );
        })}

        <div className="cart__total">
          <h3 className="cart__total-text">Total: {total}</h3>
        </div>
        <div className="cart__button-container">
          <button className="cart__clear-button" onClick={() => clearCart()}>
            Vaciar carrito
          </button>
          <button className="cart__pay-button" onClick={handleBuy}>
            Proceder al pago
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
