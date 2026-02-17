import Form from "../Form/Form";
import { register as resgistrator } from "../../utils/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const registerSchema = yup.object({
  name: yup
    .string("Completa este campo")
    .required("Escribe tu nombre")
    .trim()
    .min(2, "El nombre debe tener mínimo dos caracteres")
    .max(20, "El título debe tener máximo veinte caracteres"),
  lastname: yup
    .string("Completa este campo")
    .required("Escribe tus apellidos")
    .trim()
    .min(9, "Escribe tus dos apellidos")
    .max(25, "Tus apellidos no deben exeder los veinticinco caracteres"),
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

export default function Register(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: { name: "", lastname: "" },
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  async function handleRegisterSubmit(data) {
    try {
      await resgistrator(data.email, data.password, data.name, data.lastname);
      props.handleSuccesRegisterOpen();
    } catch (error) {
      props.handleErrorRegisterOpen();
      console.log(error);
    }

    reset();
  }

  return (
    <Form
      name="register"
      title="Regístrate"
      textRequired="Campos requeridos (*)"
      buttonText="Regístrate"
      linkText="¿Ya eres miembro? Inicia sesión aquí"
      linkTo="/iniciar-sesión"
      onSubmit={handleSubmit(handleRegisterSubmit)}
    >
      <input
        type="text"
        className="form__input"
        placeholder="Nombre *"
        id="name-input"
        {...register("name")}
      />
      <span className="form__input-error">{errors.name?.message}</span>
      <input
        type="text"
        className="form__input"
        placeholder="Apellidos *"
        id="lastname-input"
        {...register("lastname")}
      />
      <span className="form__input-error">{errors.lastname?.message}</span>
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
    </Form>
  );
}
