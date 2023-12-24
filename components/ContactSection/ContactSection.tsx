import React from "react";

import Image from "next/image";
import Link from "next/link";
import { loaderProp } from "@/lib/utils";
import { ContactForm } from "./ContactForm";

// (+54 011) 4253-1184 | (+54 02229) 45-4004

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
    <div className="bg-white py-28 px-10 lg:px-28 flex gap-4 lg:gap-10 flex-col lg:flex-row w-full ">
      {/* Título de la página que se muestra solo en Mobile */}
      <h2 className="block lg:hidden text-ov-primaryLight font-bold text-2xl mb-4">
        Contacto
      </h2>
      <div className="flex lg:hidden flex-col gap-4 w-full">
        <div className="flex flex-row gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.5"
            height="26.5"
            viewBox="0 0 26.5 26.5"
          >
            <g
              id="ruido-ovnisa-icono-footer-celular-desktop"
              transform="translate(-496.25 87.75)"
            >
              <path
                id="Path_821"
                data-name="Path 821"
                d="M5.941,4h5.882l2.941,7.353-3.676,2.206a16.176,16.176,0,0,0,7.353,7.353l2.206-3.676L28,20.176v5.882A2.941,2.941,0,0,1,25.059,29,23.529,23.529,0,0,1,3,6.941,2.941,2.941,0,0,1,5.941,4"
                transform="translate(494 -91)"
                fill="none"
                stroke="#001748"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </g>
          </svg>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-lg text-ov-primary">{phone_text_1}</p>
            <p className="font-bold text-lg text-ov-primary">{phone_text_2}</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27.08"
            height="20.944"
            viewBox="0 0 27.08 20.944"
          >
            <g
              id="ruido-ovnisa-icono-footer-mail-desktop"
              transform="translate(-385.96 86.75)"
            >
              <path
                id="Path_815"
                data-name="Path 815"
                d="M3,7.778A2.778,2.778,0,0,1,5.778,5H25.222A2.778,2.778,0,0,1,28,7.778V21.667a2.778,2.778,0,0,1-2.778,2.778H5.778A2.778,2.778,0,0,1,3,21.667Z"
                transform="translate(384 -91)"
                fill="none"
                stroke="#001748"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Path_816"
                data-name="Path 816"
                d="M3,7l12.5,8.333L28,7"
                transform="translate(384 -90.222)"
                fill="none"
                stroke="#001748"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </g>
          </svg>

          <p className="font-bold text-lg text-ov-primary">{email_text}</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 20.129 20.095"
          >
            <g
              id="ruido-ovnisa-footer-whatsapp-mobile"
              transform="translate(-441.013 88.733)"
            >
              <path
                id="Path_818"
                data-name="Path 818"
                d="M3,21.375,4.684,17.5a9.188,9.188,0,1,1,3.471,2.96L3,21.375"
                transform="translate(439 -91)"
                fill="none"
                stroke="#001748"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Path_819"
                data-name="Path 819"
                d="M9,10.031a.51.51,0,0,0,1.021,0V9.01A.51.51,0,0,0,9,9.01v1.021a5.1,5.1,0,0,0,5.1,5.1h1.021a.51.51,0,1,0,0-1.021H14.1a.51.51,0,1,0,0,1.021"
                transform="translate(439.125 -90.886)"
                fill="none"
                stroke="#001748"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </g>
          </svg>

          <p className="font-bold text-lg text-ov-primary">{whatsapp_text}</p>
        </div>
      </div>
      <div className="flex lg:hidden flex-row gap-6 my-8">
        {facebook_link ? (
          <Link href={`${facebook_link}`} target="_blank">
            <img
              className="h-10"
              src="/assets/contacto/ruido-ovnisa-contacto-icono-facebook-desktop.svg"
            />
          </Link>
        ) : null}
        {instagram_link ? (
          <Link href={`${instagram_link}`} target="_blank">
            <img
              className="h-10"
              src="/assets/contacto/ruido-ovnisa-contacto-icono-instagram-desktop.svg"
            />
          </Link>
        ) : null}
        {youtube_link ? (
          <Link href={`${youtube_link}`} target="_blank">
            <img
              className="h-10"
              src="/assets/contacto/ruido-ovnisa-contacto-icono-youtube-desktop.svg"
            />
          </Link>
        ) : null}
        {linkedin_link ? (
          <Link href={`${linkedin_link}`} target="_blank">
            <img
              className="h-10"
              src="/assets/contacto/ruido-ovnisa-contacto-icono-linkedin-desktop.svg"
            />
          </Link>
        ) : null}
        {mercado_libre_link ? (
          <Link href={`${mercado_libre_link}`} target="_blank">
            <img
              className="h-10"
              src="/assets/contacto/ruido-ovnisa-contacto-icono-meli-desktop.svg"
            />
          </Link>
        ) : null}
      </div>
      <div className="w-full shadow-contact px-8 lg:px-20 py-8 lg:py-24 rounded-3xl">
        <div className="flex flex-row gap-32">
          <div className="hidden lg:flex flex-col gap-6 w-2/5">
            <h2 className="text-ov-primaryLight font-bold text-2xl lg:text-4xl mb-4">
              {title}
            </h2>
            <div className="flex flex-row gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26.5"
                height="26.5"
                viewBox="0 0 26.5 26.5"
              >
                <g
                  id="ruido-ovnisa-icono-footer-celular-desktop"
                  transform="translate(-496.25 87.75)"
                >
                  <path
                    id="Path_821"
                    data-name="Path 821"
                    d="M5.941,4h5.882l2.941,7.353-3.676,2.206a16.176,16.176,0,0,0,7.353,7.353l2.206-3.676L28,20.176v5.882A2.941,2.941,0,0,1,25.059,29,23.529,23.529,0,0,1,3,6.941,2.941,2.941,0,0,1,5.941,4"
                    transform="translate(494 -91)"
                    fill="none"
                    stroke="#001748"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                </g>
              </svg>
              <p className="font-bold text-xl text-ov-primary">
                {phone_text_1} | {phone_text_2}
              </p>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.08"
                height="20.944"
                viewBox="0 0 27.08 20.944"
              >
                <g
                  id="ruido-ovnisa-icono-footer-mail-desktop"
                  transform="translate(-385.96 86.75)"
                >
                  <path
                    id="Path_815"
                    data-name="Path 815"
                    d="M3,7.778A2.778,2.778,0,0,1,5.778,5H25.222A2.778,2.778,0,0,1,28,7.778V21.667a2.778,2.778,0,0,1-2.778,2.778H5.778A2.778,2.778,0,0,1,3,21.667Z"
                    transform="translate(384 -91)"
                    fill="none"
                    stroke="#001748"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                  <path
                    id="Path_816"
                    data-name="Path 816"
                    d="M3,7l12.5,8.333L28,7"
                    transform="translate(384 -90.222)"
                    fill="none"
                    stroke="#001748"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                </g>
              </svg>

              <p className="font-bold text-xl text-ov-primary">{email_text}</p>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 20.129 20.095"
              >
                <g
                  id="ruido-ovnisa-footer-whatsapp-mobile"
                  transform="translate(-441.013 88.733)"
                >
                  <path
                    id="Path_818"
                    data-name="Path 818"
                    d="M3,21.375,4.684,17.5a9.188,9.188,0,1,1,3.471,2.96L3,21.375"
                    transform="translate(439 -91)"
                    fill="none"
                    stroke="#001748"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                  <path
                    id="Path_819"
                    data-name="Path 819"
                    d="M9,10.031a.51.51,0,0,0,1.021,0V9.01A.51.51,0,0,0,9,9.01v1.021a5.1,5.1,0,0,0,5.1,5.1h1.021a.51.51,0,1,0,0-1.021H14.1a.51.51,0,1,0,0,1.021"
                    transform="translate(439.125 -90.886)"
                    fill="none"
                    stroke="#001748"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                </g>
              </svg>

              <p className="font-bold text-xl text-ov-primary">
                {whatsapp_text}
              </p>
            </div>
            <div className="flex flex-row gap-8 mt-4">
              {facebook_link ? (
                <Link href={`${facebook_link}`} target="_blank">
                  <img
                    className="h-10"
                    src="/assets/contacto/ruido-ovnisa-contacto-icono-facebook-desktop.svg"
                  />
                </Link>
              ) : null}
              {instagram_link ? (
                <Link href={`${instagram_link}`} target="_blank">
                  <img
                    className="h-10"
                    src="/assets/contacto/ruido-ovnisa-contacto-icono-instagram-desktop.svg"
                  />
                </Link>
              ) : null}
              {youtube_link ? (
                <Link href={`${youtube_link}`} target="_blank">
                  <img
                    className="h-10"
                    src="/assets/contacto/ruido-ovnisa-contacto-icono-youtube-desktop.svg"
                  />
                </Link>
              ) : null}
              {linkedin_link ? (
                <Link href={`${linkedin_link}`} target="_blank">
                  <img
                    className="h-10"
                    src="/assets/contacto/ruido-ovnisa-contacto-icono-linkedin-desktop.svg"
                  />
                </Link>
              ) : null}
              {mercado_libre_link ? (
                <Link href={`${mercado_libre_link}`} target="_blank">
                  <img
                    className="h-10"
                    src="/assets/contacto/ruido-ovnisa-contacto-icono-meli-desktop.svg"
                  />
                </Link>
              ) : null}
            </div>
          </div>
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
