import Logo from "../../images/logotugawhite.png";
import Navigation from "../Navigation/Navigation";
import { CircleUserRound, ShoppingCart, Search, Menu } from "lucide-react";
import { cartContext } from "../../contexts/CartProvider";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useHeaderScroll } from "../../utils/useHeaderScroll";

export default function Header({
  userName,
  loggedIn,
  onSideBarClick,
  onSideCartClick,
}) {
  const { productCount } = useContext(cartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const hidden = useHeaderScroll();

  function handleOnAcountClick() {
    if (loggedIn === true) {
      navigate("/perfil");
    } else {
      navigate("/iniciar-sesión");
    }
  }

  function handleSideCartClick() {
    if (location.pathname === "/carrito") {
      navigate("/carrito");
    } else {
      onSideCartClick();
    }
  }

  return (
    <div className={`header ${hidden ? "header--hidden" : ""}`}>
      <Menu className="header__menu-icon" onClick={onSideBarClick} />
      <img
        className="header__logo"
        src={Logo}
        alt="Logo"
        onClick={() => navigate("/")}
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
          <ShoppingCart className="header__bag" onClick={handleSideCartClick} />
          <div
            className={
              productCount <= 0
                ? "header__bag-counter-container"
                : "header__bag-counter-container--up"
            }
          >
            <span className="header__bag-counter">{productCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
