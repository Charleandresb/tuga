import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import { cartContext } from "../../contexts/CartProvider";
import api from "../../utils/api";
import cloudinaryUrl from "../../utils/cloudinaryUrl";

export default function ProductDetail({ onSideCartClick }) {
  const [product, setProduct] = useState([]);
  const [variant, setVariant] = useState([]);
  const [variants, setVariants] = useState([]);
  const [spiner, setSpiner] = useState(true);
  const { addToCart, cart } = useContext(cartContext);
  const { productSku } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      const { product, variant } = await api.selectedProduct(productSku);
      setProduct(product);
      setVariant(variant);

      const variantResponse = await api.productVariants(product._id);
      setVariants(variantResponse);
    }

    getProduct();
  }, [productSku]);

  console.log(variant);
  console.log(variants);

  function handleAddItem() {
    addToCart({
      sku: variant.sku,
      productId: product._id,
      name: product.name,
      images: product.images,
      size: variant.size,
      price: variant.price,
      stock: variant.stock,
      quantity: 1,
    });

    onSideCartClick();
  }

  const cartItem = cart.find((item) => item.sku === variant.sku);

  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const availableStock = variant.stock - quantityInCart;

  function handleSizeChange(newSku) {
    navigate(`/comprar/${newSku}`, {
      replace: true,
    });
  }

  const price = variant
    ? new Intl.NumberFormat("es-Cl", {
        style: "currency",
        currency: "CLP",
      }).format(variant.price)
    : "";

  useEffect(() => {
    setTimeout(() => {
      setSpiner(false);
    }, 3000);
  }, []);

  return (
    <>
      {spiner ? (
        <Preloader />
      ) : (
        <div className="product">
          <div className="product__grid">
            <div className="product__image-container">
              <img
                src={cloudinaryUrl(product.images, 1080)}
                alt={product.name}
                className="product__image"
              />
            </div>
            <h3 className="product__title">{product.name}</h3>
            <p className="product__description">{product.description}</p>
            <p className="product__sku">{variant.sku}</p>
            <p className="product__showcase">En vitrina: {availableStock}</p>
            <p className="product__in-cart">En carrito: {quantityInCart}</p>
            <p className="product__price">{price}</p>
            <div className="product__sizes">
              {variants.map((v) => (
                <button
                  key={v.sku}
                  className={
                    v.sku === variant.sku
                      ? "product__size-active"
                      : "product__size"
                  }
                  disabled={v.stock <= 0}
                  onClick={() => handleSizeChange(v.sku)}
                >
                  {v.size}
                  {/* {v.stock === 0 && " Agotado"}
                  {v.stock === 0 ? "Agotado" : v.size} */}
                </button>
              ))}
            </div>
            <p className="product__stock">Stock disponible: {variant.stock}</p>
            <button
              className="product__addButton"
              onClick={handleAddItem}
              disabled={availableStock <= 0}
            >
              {variant.stock <= 0 ? "Agotado" : "Agregar al carrito"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
