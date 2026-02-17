import Form from "../Form/Form";
import { login } from "../../utils/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object({
  email: yup
    .string("Completa este campo")
    .email("Escribe un correo válido")
    .required("Escribe tu correo electrónico")
    .trim(),
  password: yup
    .string("Completa este campo")
    .required("Escribe un contraseña")
    .trim()
    .min(8, "La contraseña debe tener mínimo ocho caracteres"),
});

export default function Login() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: { name: "", lastname: "" },
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  async function handleLoginSubmit(data) {
    try {
      await login(data.email, data.password);
      setError(false);
      navigate("/");
    } catch (error) {
      setError(true);
      console.log(error);
    }

    reset();
  }

  return (
    <Form
      name="login"
      title="Iniciar sesión"
      textRequired="Campos requeridos (*)"
      buttonText="Iniciar sesión"
      linkText="¿Aún no eres miembro? Regístrate aquí"
      linkTo="/registro"
      onSubmit={handleSubmit(handleLoginSubmit)}
    >
      <input
        type="email"
        className="form__input"
        placeholder="Correo electrónico *"
        id="email-input"
        {...register("email")}
      />
      <span className="form__input-error">{errors.email?.message}</span>
      <input
        type="password"
        className="form__input"
        placeholder="Contraseña *"
        id="password-input"
        {...register("password")}
      />
      <span className="form__input-error">{errors.password?.message}</span>
      {error && (
        <p className="form__error-message">Correo o contraseña incorrectos</p>
      )}
    </Form>
  );
}
