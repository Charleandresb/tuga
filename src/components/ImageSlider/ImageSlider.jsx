import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import cloudinaryUrl from "../../utils/cloudinaryUrl";
import { useNavigate } from "react-router-dom";
import "./ImageSlider.css";

const images = [
  {
    src: cloudinaryUrl("img-banner_xiwz4z", 2000),
    title: "Gorros de lana",
    description: "Producto hecho a mano 100% lana natural",
    type: "gorros",
  },
  {
    src: "https://storage.googleapis.com/chile-travel-cdn/2024/08/b739f120-todo-lo-que-debes-saber-sobre-las-torres-del-paine.jpg",
    title: "¡Pronto lanzamiento!",
    description: "Nuestra web en construcción se estrenará este 2026",
    type: "catalogo",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  function handleCardClick(card) {
    navigate(`productos/${card.type}`);
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(nextImage, 4000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, isHovered]);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      className="slider-container"
      {...handlers}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((item, index) => (
          <div className="slide" key={index}>
            <img
              src={item.src}
              alt={`Slide ${index}`}
              className="slider-image"
              onClick={() => handleCardClick(item)}
            />
            <div className="slide-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="nav-button left" onClick={prevImage}>
        ‹
      </button>
      <button className="nav-button right" onClick={nextImage}>
        ›
      </button>

      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToImage(index)}
          >
            ●
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
