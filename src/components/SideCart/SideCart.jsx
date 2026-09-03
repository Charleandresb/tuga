import { useContext } from "react";
import { cartContext } from "../../contexts/CartProvider";
import closeIcon from "../../images/CloseIcon.svg";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CartItems from "../CartItems/CartItems";

export default function SideCart({ isOpen, onClose }) {
  const { cart, totalPrice, productCount } = useContext(cartContext);
  const navigate = useNavigate();

  const subtotal = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(totalPrice);

  return (
    <div className={`sidecart ${isOpen ? "sidecart--open" : ""}`}>
      <div className="sidecart__overlay" onClick={onClose}></div>

      <div className="sidecart__panel">
        <div className="sidecart__header">
          <h3 className="sidecart__title">Carro de compras ({productCount})</h3>
          <img
            className="sidecart__close-icon"
            src={closeIcon}
            onClick={onClose}
          />
        </div>

        {!cart.length ? (
          <div className="cartEmpty">
            <ShoppingCart className="cartEmpty__icon" />
            <h2 className="cartEmpty__text">Tu carrito está vacío</h2>
          </div>
        ) : (
          <>
            <div className="sidecart__items-container">
              <CartItems variant="sidecart" onClose={onClose} />
            </div>

            <div className="sidecart__footer">
              <div className="sidecart__subtotal-cont">
                <h3 className="sidecart__subtotal-text">S U B T O T A L</h3>
                <p className="sidecart__subtotal-price">{subtotal}</p>
              </div>
              <button
                className="sidecart__pay-button"
                onClick={() => navigate("/página-en-desarrollo")}
              >
                FINALIZAR COMPRA
              </button>
              <button
                className="sidecart__view-cart-btn"
                onClick={() => {
                  navigate("/carrito");
                  onClose();
                }}
              >
                Ver carrito completo
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
