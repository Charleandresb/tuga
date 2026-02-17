import React from "react";
import Form from "../Form/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const finalizePurchaseSchema = yup.object({
  email: yup
    .string("Completa este campo")
    .email("Escribe un correo válido")
    .required("Escribe tu correo electrónico")
    .trim(),
  country: yup
    .string("completa este campo")
    .required("Selecciona tu país")
    .trim(),
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
  city: yup
    .string("Completa este campo")
    .required("Escribe tu ciudad")
    .trim()
    .min(4, "Escribe tu cuidad")
    .max(30, "Escribe únicamente tu cuidad"),
  direction: yup
    .string("Completa este campo")
    .required("Escribe tu dirección")
    .trim(),
  residence: yup
    .string("Completa este campo")
    .required(
      "Escribe en que tipo de residencia vives, casa, departamento, etc."
    )
    .trim()
    .min(4, "Escribe tu tipo de residencia")
    .max(15, "Escribe únicamente tu tipo de residencia"),
  postalcode: yup.number(),
  commune: yup
    .string("Completa este campo")
    .required("Escribe tu comuna")
    .trim()
    .min(4, "Escribe tu comuna")
    .max(15, "Escribe únicamente tu comuna"),
  region: yup
    .string("Completa este campo")
    .required("Selecciona tu región")
    .trim(),
  phoneNumber: yup.number(),
});

export default function FinalizePurchase() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(finalizePurchaseSchema),
    mode: "onChange",
  });

  async function handleFinalizePurchaseSubmit(data) {
    console.log(data);
  }

  return (
    <Form
      name="finalizar-compra"
      title="Finalizar compra"
      textRequired="Campos requeridos (*)"
      buttonText="Pagar"
      onSubmit={handleSubmit(handleFinalizePurchaseSubmit)}
    >
      <input
        type="text"
        className="form__input"
        placeholder="Correo electrónico *"
        id="email-input"
        {...register("email")}
      />
      <span className="form__input-error">{errors.email?.message}</span>

      <input
        type="radio"
        id="Chile"
        name="País"
        value="Chile"
        className="form__input"
        {...register("country")}
      />
      <label for="Chile">Chile</label>
      <span className="form__input-error">{errors.country?.message}</span>

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
        type="text"
        className="form__input"
        placeholder="Apellidos *"
        id="city-input"
        {...register("city")}
      />
      <span className="form__input-error">{errors.city?.message}</span>
    </Form>
  );
}
