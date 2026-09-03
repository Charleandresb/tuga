import { useContext } from "react";
import { cartContext } from "../../contexts/CartProvider";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import cloudinaryUrl from "../../utils/cloudinaryUrl";
import CartItems from "../CartItems/CartItems";

function Cart() {
  const { cart, productCount, totalPrice } = useContext(cartContext);
  const navigate = useNavigate();

  const policy = [
    {
      title: "ENVÍOS",
      text: "Revisa nuestra información de envíos, como tiempos de entrega y despachos",
      link: "aquí",
    },
    {
      title: "CAMBIOS",
      text: "Cuentas con 60 días para realizar cambios desde que recibes tu pedido",
      link: "Política de Cambios",
    },
    {
      title: "AYUDA",
      text: "Contáctanos para más información",
      link: "aquí",
    },
  ];

  console.log(cart);

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
    <div className="cart">
      <div className="cart__container">
        <h5 className="cart__count-text">Total de Productos: {productCount}</h5>
        <CartItems />
      </div>
      <div className="cart__subtotal">
        <div className="cart__subtotal-cont">
          <h3 className="cart__subtotal-text">S U B T O T A L</h3>
          <p className="cart__subtotal-price">{total}</p>
        </div>
        <button
          className="cart__pay-button"
          onClick={() => navigate("/página-en-desarrollo")}
        >
          FINALIZAR COMPRA
        </button>
        <div className="cart__policy">
          {policy.map((item) => (
            <div key={item.title} className="cart__policy-cont">
              <h3 className="cart__policy-title">{item.title}</h3>
              <p className="cart__policy-text">{item.text}</p>
              <p className="cart__policy-link">{item.link}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
