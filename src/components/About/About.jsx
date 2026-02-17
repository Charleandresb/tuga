export default function About() {
  return (
    <div className="about">
      <div className="about__container">
        <img src={Tienda} alt="Foto de la tienda" className="about__image" />
        <div className="about__leyend">
          <h4 className="about__title">Nuestra misión</h4>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut
            nulla maxime, inventore fuga, quod enim deserunt aspernatur modi
            facere voluptates! Nobis similique rerum ducimus omnis dignissimos
            quos nostrum doloribus? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ipsa excepturi inventore iusto temporibus pariatur
            deleniti, tempora, atque quos dolores reiciendis ea eos molestias
            nesciunt totam repellat fugit! Ullam, molestias itaque. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Velit sapiente maxime
            corporis vero sed. Quia vitae nobis doloribus quibusdam esse? Enim,
            quibusdam animi? Tempore eveniet ratione nulla odit aliquam laborum.
          </p>
          <img src={iso} alt="isotipo icono" className="about__iso" />
        </div>
      </div>
    </div>
  );
}
