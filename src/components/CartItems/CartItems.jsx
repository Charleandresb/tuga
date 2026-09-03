import { useContext } from "react";
import { cartContext } from "../../contexts/CartProvider";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import cloudinaryUrl from "../../utils/cloudinaryUrl";

function CartItems({ variant = "page", onClose }) {
  const { cart, addProductQuantity, removeProductQuantity, removeFromCart } =
    useContext(cartContext);
  const navigate = useNavigate();

  const isSideCart = variant === "sidecart";
  const itemClass = isSideCart ? "cartitem cartitem--side" : "cartitem";

  console.log(cart);

  return (
    <>
      {cart.map((item) => {
        const itemSubtotal = item.price * item.quantity;

        return (
          <div key={item.sku} className={itemClass}>
            <img
              src={cloudinaryUrl(item.images, 150)}
              className="cartitem__image"
              alt={item.name}
              onClick={() => {
                navigate(`/comprar/${item.sku}`);
                onClose();
              }}
            />
            <div className="cartitem__info">
              <p className="cartitem__name">{item.name}</p>
              <p className="cartitem__size">Talla: {item.size}</p>
              <p className="cartitem__price">
                {new Intl.NumberFormat("es-Cl", {
                  style: "currency",
                  currency: "CLP",
                }).format(item.price)}
              </p>
            </div>

            <p className="cartitem__subtotal">
              {new Intl.NumberFormat("es-Cl", {
                style: "currency",
                currency: "CLP",
              }).format(itemSubtotal)}
            </p>
            <div className="cartitem__buttons">
              <div className="cartitem__buttons-box">
                <button
                  className="cartitem__remove-button"
                  onClick={() => removeProductQuantity(item.sku)}
                >
                  –
                </button>
                <p className="cartitem__quantity">{item.quantity}</p>
                <button
                  className="cartitem__add-button"
                  disabled={item.quantity >= item.stock}
                  onClick={() => addProductQuantity(item.sku)}
                >
                  +
                </button>
              </div>
              <Trash2
                className="cartitem__empty-button"
                onClick={() => removeFromCart(item.sku)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CartItems;
