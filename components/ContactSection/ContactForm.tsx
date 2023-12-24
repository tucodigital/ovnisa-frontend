import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
/* import FormLoader from "./FormLoader"; */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ContactFormLoader from "./ContactFormLoader";

const schema = yup
  .object({
    nombre: yup.string().required("El nombre y apellido son obligatorios"),
    email: yup
      .string()
      .email("El email ingresado no es válido")
      .required("El email es obligatorio"),
    telefono: yup.string().required("El Teléfono es obligatorio"),
    motivo: yup.string().required("El Motivo de contacto es obligatorio"),
    mensaje: yup.string().required("El mensaje es obligatorio"),
  })
  .required();

type Inputs = {
  nombre: string;
  email: string;
  telefono: string;
  motivo: string;
  mensaje: string;
};

export const ContactForm = ({
  name_and_lastname_placeholder,
  phone_placeholder,
  email_placeholder,
  subject_placeholder,
  message_placeholder,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsLoaded(true);
      const response = await axios.post("/api/contact", data);
      if (response.status === 200) {
        setMessage(response.data.message);
        setIsLoaded(false);
        reset();
        setTimeout(() => {
          setMessage("");
        }, 5000);
      }
      if (response.status === 500) {
        console.error("pasando por 500");
        setMessage(response.data.message);
        setIsLoaded(false);
        setTimeout(() => {
          setMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      setMessage("El mensaje no pudo enviarse, por favor reintente nuevamente");
      setIsLoaded(false);
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <>
      {isLoaded ? (
        <div className="h-96">
          <ContactFormLoader />
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              className="p-3 border shadow-lg rounded-lg w-full"
              type="text"
              placeholder={name_and_lastname_placeholder}
              {...register("nombre", { required: true })}
            />
            {errors.nombre?.message && (
              <p className="text-sm text-ov-primary font-bold mt-2">
                {errors.nombre?.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <input
              className="p-3 border shadow-lg rounded-lg w-full"
              type="number"
              placeholder={phone_placeholder}
              {...register("telefono", { required: true })}
            />
            {errors.telefono?.message && (
              <p className="text-sm text-ov-primary font-bold mt-2">
                {errors.telefono?.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <input
              className="p-3 border shadow-lg rounded-lg w-full"
              type="text"
              placeholder={email_placeholder}
              {...register("email", { required: true })}
            />
            {errors.email?.message && (
              <p className="text-sm text-ov-primary font-bold mt-2">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <input
              className="p-3 border shadow-lg rounded-lg w-full"
              type="text"
              placeholder={subject_placeholder}
              {...register("motivo", {})}
            />
            {errors.motivo?.message && (
              <p className="text-sm text-ov-primary font-bold mt-2">
                {errors.motivo?.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <textarea
              className="p-3 border shadow-lg rounded-lg w-full h-48 lg:h-96"
              placeholder={message_placeholder}
              {...register("mensaje", { required: true })}
            />
            {errors.mensaje?.message && (
              <p className="text-sm text-ov-primary font-bold mt-2">
                {errors.mensaje?.message}
              </p>
            )}
            {message && (
              <p className="text-center text-black font-bold mt-2">{message}</p>
            )}
          </div>
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-gradient-to-b from-ov-primaryLight to-ov-primary text-white px-16 py-4 rounded-full hover:to-blue-800"
            >
              Enviar
            </button>
          </div>
        </form>
      )}
    </>
  );
};
