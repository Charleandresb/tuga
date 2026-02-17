import closeIcon from "../../images/CloseIcon.svg";
import arrow from "../../images/arrow.png";
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";

export default function sidebar(props) {
  return (
    <div className={`sidebar ${props.isOpen && "sidebar_open"}`}>
      <img
        className="sidebar__close-icon"
        src={closeIcon}
        onClick={props.onClose}
      />

      <div className="sidebar__menu-container">
        <ul className="sidebar__menu">
          <li className="sidebar__list">
            <Link
              href="/"
              to="/"
              className="sidebar__link"
              onClick={props.onClose}
            >
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
                    href="productos/catalogo"
                    to="/productos/catalogo"
                    className="sidebar__sublink"
                    onClick={props.onClose}
                  >
                    Ver todo
                  </Link>
                </li>

                <li className="sidebar__li">
                  <Link
                    href="productos/cuadernos"
                    to="/productos/cuadernos"
                    className="sidebar__sublink"
                    onClick={props.onClose}
                  >
                    Gorros
                  </Link>
                </li>

                <li className="sidebar__li">
                  <Link
                    href="productos/mitones"
                    to="/productos/mitones"
                    className="sidebar__sublink"
                    onClick={props.onClose}
                  >
                    Mitones
                  </Link>
                </li>

                <li className="sidebar__li">
                  <Link
                    href="productos/gorro-y-mitones"
                    to="/productos/gorro-y-mitones"
                    className="sidebar__sublink"
                    onClick={props.onClose}
                  >
                    Gorro y mitones
                  </Link>
                </li>

                <li className="sidebar__li">
                  <Link
                    href="productos/estuches"
                    to="/productos/estuches"
                    className="sidebar__sublink"
                    onClick={props.onClose}
                  >
                    Polerones
                  </Link>
                </li>

                <li className="sidebar__li">
                  <Link
                    href="productos/poleras"
                    to="/productos/poleras"
                    className="sidebar__sublink"
                    onClick={props.onClose}
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
              onClick={props.onClose}
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
