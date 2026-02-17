import ProductCard from "../ProductCard/ProductCard";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import cloudinaryUrl from "../../utils/cloudinaryUrl";

export default function ProductTypeList(props) {
  const [cards, setCards] = useState([]);
  const [spiner, setSpiner] = useState(true);
  const { productType } = useParams();

  useEffect(() => {
    async function getCards() {
      const response = await api.productTypeList(productType);
      setCards(response);
    }

    getCards();
  }, [productType]);

  const typeProductTitle =
    productType.charAt(0).toUpperCase() +
    productType.slice(1).replace(/-/g, " ");

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
        <div className="cards">
          <h2 className="cards__title">{typeProductTitle}</h2>
          <div className="cards__grid">
            {cards.map((card) => (
              <ProductCard
                key={card._id}
                images={cloudinaryUrl(card.images, 400)}
                name={card.name}
                price={new Intl.NumberFormat("es-Cl", {
                  style: "currency",
                  currency: "CLP",
                }).format(card.minPrice)}
                onCardClick={props.onCardClick}
                card={card}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
