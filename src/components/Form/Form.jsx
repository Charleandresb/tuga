import { Link } from "react-router-dom";

export default function Form(props) {
  return (
    <div className="form">
      <div className="form__container">
        <form
          action=""
          className="form__elements"
          onSubmit={props.onSubmit}
          name={props.name}
          noValidate
        >
          <h3 className="form__title">{props.title}</h3>
          {props.children}
          <p className="form__required">{props.textRequired}</p>
          <button className="form__button">{props.buttonText}</button>
          <Link to={props.linkTo} className="form__login-register">
            {props.linkText}
          </Link>
        </form>
      </div>
    </div>
  );
}
