import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <ul className="nav">
      <li className="nav__item">
        <Link href="/" to="/" className="nav__link">
          Inicio
        </Link>
      </li>

      <li className="nav__item">
        <Link href="#" to="/productos/catalogo" className="nav__link">
          Catálogo
        </Link>
        <ul className="nav__sublinks">
          <li className="nav__inside">
            <Link
              href="productos/catalogo"
              to="/productos/catalogo"
              className="nav__link"
            >
              Ver todo
            </Link>
          </li>
          <li className="nav__inside">
            <Link
              href="productos/gorros"
              to="/productos/gorros"
              className="nav__link"
            >
              Gorros
            </Link>
          </li>
          <li className="nav__inside">
            <Link
              href="productos/mitones"
              to="/productos/mitones"
              className="nav__link"
            >
              Mitones
            </Link>
          </li>
          <li className="nav__inside">
            <Link
              href="productos/gorro-y-mitones"
              to="/productos/gorro-y-mitones"
              className="nav__link"
            >
              Gorro y mitones
            </Link>
          </li>
          <li className="nav__inside">
            <Link
              href="productos/polerones"
              to="/productos/polerones"
              className="nav__link"
            >
              Polerones
            </Link>
          </li>
          <li className="nav__inside">
            <Link
              href="productos/poleras"
              to="/productos/poleras"
              className="nav__link"
            >
              Poleras
            </Link>
          </li>
        </ul>
      </li>

      <li className="nav__item">
        <a
          href="https://www.instagram.com/tuganativewear/"
          target="blank"
          className="nav__link"
        >
          Instagram
        </a>
      </li>
    </ul>
  );
}
