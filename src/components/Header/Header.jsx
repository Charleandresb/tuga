import Logo from "../../images/logotugawhite.png";
import Navigation from "../Navigation/Navigation";
import { CircleUserRound, ShoppingCart, Search, Menu } from "lucide-react";
import { cartContext } from "../../contexts/CartProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useHeaderScroll } from "../../utils/useHeaderScroll";

export default function Header({ userName, loggedIn, onSideBarClick }) {
  const { productCount } = useContext(cartContext);
  const navigate = useNavigate();
  const hidden = useHeaderScroll();

  function handleOnLogoClick() {
    navigate("/");
  }

  function handleOnAcountClick() {
    if (loggedIn === true) {
      navigate("/perfil");
    } else {
      navigate("/iniciar-sesión");
    }
  }

  function handleOnBagClick() {
    navigate("/carrito");
  }

  return (
    <div className={`header ${hidden ? "header--hidden" : ""}`}>
      <Menu className="header__menu-icon" onClick={onSideBarClick} />
      <img
        className="header__logo"
        src={Logo}
        alt="Logo"
        onClick={handleOnLogoClick}
      />
      <div className="header__nav">
        <Navigation className="header__navigation" />
      </div>
      <div className="header__icons-right">
        <div className="header__search">
          <Search className="header__search-icon" />
        </div>
        <div className="header__acount-container" onClick={handleOnAcountClick}>
          <CircleUserRound
            className="header__acount"
            onClick={handleOnAcountClick}
          />
          {loggedIn ? <p className="header__acount-name">{userName}</p> : null}
        </div>
        <div className="header__icon-bag">
          <ShoppingCart className="header__bag" onClick={handleOnBagClick} />
          <div className="header__bag-counter-container">
            <span className="header__bag-counter">{productCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
