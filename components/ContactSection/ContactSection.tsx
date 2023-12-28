import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ContactForm } from "./ContactForm";
import { PhoneItem } from "./PhoneItem";
import { EmailItem } from "./EmailItem";
import { WhatsappItem } from "./WhatsappItem";

import { loaderProp } from "@/lib/utils";

export const ContactSection = ({
  title,
  phone_text_1,
  phone_text_2,
  email_text,
  whatsapp_text,
  facebook_link,
  instagram_link,
  youtube_link,
  linkedin_link,
  mercado_libre_link,
  name_and_lastname_placeholder,
  phone_placeholder,
  email_placeholder,
  subject_placeholder,
  message_placeholder,
}) => {
  return (
    <div className="bg-white pt-28 pb-12 px-10 lg:px-28 flex gap-4 lg:gap-10 flex-col lg:flex-row w-full ">
      {/* Vista Mobile */}
      {/* Título de la página que se muestra solo en Mobile según el diseño */}
      <h2 className="block lg:hidden text-ov-primaryLight font-bold text-2xl mb-4">
        Contacto
      </h2>

      {/* Textos con info de Teléfono, Email y Whatsapp */}
      <div className="flex lg:hidden flex-col gap-4 w-full">
        <PhoneItem phone_text_1={phone_text_1} phone_text_2={phone_text_2} />
        <EmailItem email_text={email_text} />
        <WhatsappItem whatsapp_text={whatsapp_text} />
      </div>

      {/* Items de Redes Sociales */}
      <div className="flex lg:hidden flex-row gap-6 my-8">
        {facebook_link ? (
          <Link href={`${facebook_link}`} target="_blank">
            <Image
              width={10}
              height={10}
              objectFit="fill"
              loader={loaderProp}
              className="h-10 w-10"
              alt="Link a Facebook de Ovnisa"
              src={`/assets/contacto/ruido-ovnisa-contacto-icono-facebook-desktop.svg`}
            />
          </Link>
        ) : null}
        {instagram_link ? (
          <Link href={`${instagram_link}`} target="_blank">
            <Image
              width={10}
              height={10}
              objectFit="fill"
              loader={loaderProp}
              className="h-10 w-10"
              alt="Link a Instagram de Ovnisa"
              src={`/assets/contacto/ruido-ovnisa-contacto-icono-instagram-desktop.svg`}
            />
          </Link>
        ) : null}
        {youtube_link ? (
          <Link href={`${youtube_link}`} target="_blank">
            <Image
              width={10}
              height={10}
              objectFit="fill"
              loader={loaderProp}
              className="h-10 w-10"
              alt="Link a Youtube de Ovnisa"
              src={`/assets/contacto/ruido-ovnisa-contacto-icono-youtube-desktop.svg`}
            />
          </Link>
        ) : null}
        {linkedin_link ? (
          <Link href={`${linkedin_link}`} target="_blank">
            <Image
              width={10}
              height={10}
              objectFit="fill"
              loader={loaderProp}
              className="h-10 w-10"
              alt="Link a Linkedin de Ovnisa"
              src={`/assets/contacto/ruido-ovnisa-contacto-icono-linkedin-desktop.svg`}
            />
          </Link>
        ) : null}
        {mercado_libre_link ? (
          <Link href={`${mercado_libre_link}`} target="_blank">
            <Image
              width={10}
              height={10}
              objectFit="fill"
              loader={loaderProp}
              className="h-10 w-10"
              alt="Link a Mercado Libre de Ovnisa"
              src={`/assets/contacto/ruido-ovnisa-contacto-icono-meli-desktop.svg`}
            />
          </Link>
        ) : null}
      </div>
      {/* Vista Mobile */}
      <div className="w-full shadow-contact px-8 lg:px-20 py-8 lg:py-24 rounded-3xl">
        <div className="flex flex-row gap-32">
          {/* Vista Desktop */}
          <div className="hidden lg:flex flex-col gap-6 w-2/5">
            <h2 className="text-ov-primaryLight font-bold text-2xl lg:text-4xl mb-4">
              {title}
            </h2>
            <PhoneItem
              phone_text_1={phone_text_1}
              phone_text_2={phone_text_2}
            />
            <EmailItem email_text={email_text} />
            <WhatsappItem whatsapp_text={whatsapp_text} />
            <div className="flex flex-row gap-8 mt-4">
              {facebook_link ? (
                <Link href={`${facebook_link}`} target="_blank">
                  <Image
                    width={10}
                    height={10}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-10 w-10"
                    alt="Link a Facebook de Ovnisa"
                    src={`/assets/contacto/ruido-ovnisa-contacto-icono-facebook-desktop.svg`}
                  />
                </Link>
              ) : null}
              {instagram_link ? (
                <Link href={`${instagram_link}`} target="_blank">
                  <Image
                    width={10}
                    height={10}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-10 w-10"
                    alt="Link a Instagram de Ovnisa"
                    src={`/assets/contacto/ruido-ovnisa-contacto-icono-instagram-desktop.svg`}
                  />
                </Link>
              ) : null}
              {youtube_link ? (
                <Link href={`${youtube_link}`} target="_blank">
                  <Image
                    width={10}
                    height={10}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-10 w-10"
                    alt="Link a Youtube de Ovnisa"
                    src={`/assets/contacto/ruido-ovnisa-contacto-icono-youtube-desktop.svg`}
                  />
                </Link>
              ) : null}
              {linkedin_link ? (
                <Link href={`${linkedin_link}`} target="_blank">
                  <Image
                    width={10}
                    height={10}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-10 w-10"
                    alt="Link a Linkedin de Ovnisa"
                    src={`/assets/contacto/ruido-ovnisa-contacto-icono-linkedin-desktop.svg`}
                  />
                </Link>
              ) : null}
              {mercado_libre_link ? (
                <Link href={`${mercado_libre_link}`} target="_blank">
                  <Image
                    width={10}
                    height={10}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-10 w-10"
                    alt="Link a Mercado Libre de Ovnisa"
                    src={`/assets/contacto/ruido-ovnisa-contacto-icono-meli-desktop.svg`}
                  />
                </Link>
              ) : null}
            </div>
          </div>
          {/* Vista Desktop */}
          <div className="w-full lg:w-3/5">
            <h2 className="block lg:hidden text-ov-primaryLight font-bold text-2xl mb-8">
              {title}
            </h2>

            <ContactForm
              name_and_lastname_placeholder={name_and_lastname_placeholder}
              phone_placeholder={phone_placeholder}
              email_placeholder={email_placeholder}
              subject_placeholder={subject_placeholder}
              message_placeholder={message_placeholder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
