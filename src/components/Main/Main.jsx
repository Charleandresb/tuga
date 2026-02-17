import cloudinaryUrl from "../../utils/cloudinaryUrl";
import ImageSlider from "../ImageSlider/ImageSlider";
import { useNavigate } from "react-router-dom";

const images = [
  {
    src: cloudinaryUrl("beanie-grey-foto_qtmezc", 550),
    title: "Gorros",
    type: "gorros",
  },
  {
    src: cloudinaryUrl("mitten-obispo_xmjzdf", 550),
    title: "Mitones",
    type: "mitones",
  },
  {
    src: cloudinaryUrl("tshirt-cs93-women_jyl6se", 550),
    title: "Poleras",
    type: "poleras",
  },
];

export default function Main() {
  const navigate = useNavigate();

  function handleCardClick(card) {
    navigate(`productos/${card.type}`);
  }

  return (
    <div className="hero">
      <ImageSlider />
      <div className="hero__category">
        {images.map((item, index) => (
          <div className="hero__category-container" key={index}>
            <div
              className="hero__category-overlay"
              onClick={() => handleCardClick(item)}
            ></div>
            <img
              src={item.src}
              alt={item.title}
              className="hero__category-image"
            />
            <div className="hero__category-title">
              <h3 className="hero__category-text">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
