import closeIcon from "../../images/CloseIcon.svg";
import arrow from "../../images/arrow.png";
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";

export default function sidebar({ isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <div className="sidebar__overlay" onClick={onClose}></div>

      <div className="sidebar__panel">
        <img
          className="sidebar__close-icon"
          src={closeIcon}
          onClick={onClose}
        />

        <ul className="sidebar__menu">
          <li className="sidebar__list">
            <Link href="/" to="/" className="sidebar__link" onClick={onClose}>
              Inicio
            </Link>
          </li>

          <li className="sidebar__list">
            <a href="#" className="sidebar__link">
              Catálogo
              <img src={arrow} alt="" className="sidebar__arrow" />
              <input type="checkbox" className="sidebar__check" />
            </a>

            <div className="sidebar__content">
              <ul className="sidebar__submenu">
                <li className="sidebar__li">
                  <Link
                    href="#"
                    to="/productos/catalogo"
                    className="sidebar__sublink"
                    onClick={onClose}
                  >
                    Ver todo
                  </Link>
                </li>

                <li className="sidebar__li">
                  <Link
                    href="productos/gorros"
                    to="/productos/gorros"
                    className="sidebar__sublink"
                    onClick={onClose}
                  >
                    Gorros
                  </Link>
                </li>

                <li className="sidebar__li">
                  <Link
                    href="productos/mitones"
                    to="/productos/mitones"
                    className="sidebar__sublink"
                    onClick={onClose}
                  >
                    Mitones
                  </Link>
                </li>

                <li className="sidebar__li">
                  <Link
                    href="productos/gorro-y-mitones"
                    to="/productos/gorro-y-mitones"
                    className="sidebar__sublink"
                    onClick={onClose}
                  >
                    Gorro y mitones
                  </Link>
                </li>

                <li className="sidebar__li">
                  <Link
                    href="productos/polerones"
                    to="/productos/polerones"
                    className="sidebar__sublink"
                    onClick={onClose}
                  >
                    Polerones
                  </Link>
                </li>

                <li className="sidebar__li">
                  <Link
                    href="productos/poleras"
                    to="/productos/poleras"
                    className="sidebar__sublink"
                    onClick={onClose}
                  >
                    Poleras
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="sidebar__list">
            <a
              href="https://www.instagram.com/tuganativewear/"
              target="blank"
              className="sidebar__link"
              onClick={onClose}
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
