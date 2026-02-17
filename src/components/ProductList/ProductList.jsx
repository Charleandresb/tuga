import ProductCard from "../ProductCard/ProductCard";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import cloudinaryUrl from "../../utils/cloudinaryUrl";

export default function ProductList(props) {
  const [cards, setCards] = useState([]);
  const [spiner, setSpiner] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCards() {
      const response = await api.productList();
      setCards(response);
    }

    getCards();
  }, []);

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
          <h2 className="cards__title">Catálogo Tuga</h2>
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
