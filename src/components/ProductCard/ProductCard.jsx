export default function ProductCard({
  images,
  name,
  price,
  onCardClick,
  card,
}) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={images} alt={name} className="card__image" />
      <div className="card__info">
        <h3 className="card__title">{name}</h3>
        <p className="card__price">{price}</p>
      </div>
    </div>
  );
}
