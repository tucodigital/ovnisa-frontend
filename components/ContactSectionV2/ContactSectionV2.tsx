import React from "react";
import Link from "next/link";

import { ContactForm } from "./ContactForm";
import { PhoneItem } from "./PhoneItem";
import { EmailItem } from "./EmailItem";
import { LocationItem } from "./LocationItem";

export const ContactSectionV2 = ({
  info_title,
  location_title,
  location_text,
  phone_title,
  phone_text_1,
  phone_text_2,
  email_title,
  email_text,
  networks_title,
  facebook_link,
  instagram_link,
  youtube_link,
  linkedin_link,
  contact_form_title,
  name_placeholder,
  phone_placeholder,
  email_placeholder,
  subject_placeholder,
  message_placeholder,
}) => {
  return (
    <div className="-mt-0 pb-12 px-4 lg:px-28 flex gap-4 lg:gap-10 flex-col lg:flex-row z-10 w-full lg:w-5/6 ">
      {/* Vista Mobile */}
      {/* Título de la página que se muestra solo en Mobile según el diseño */}
      <h2 className="block lg:hidden text-black font-bold text-2xl mb-4 pt-8">
        Contacto
      </h2>

      {/* Textos con info de Teléfono, Email y Whatsapp */}
      <div className="flex lg:hidden flex-col gap-4 w-full">
        <LocationItem
          location_title={location_title}
          location_text={location_text}
        />
        <EmailItem email_title={email_title} email_text={email_text} />
        <PhoneItem
          phone_title={phone_title}
          phone_text_1={phone_text_1}
          phone_text_2={phone_text_2}
        />
      </div>

      {/* Items de Redes Sociales */}
      <div className="flex lg:hidden flex-row gap-6 my-8">
        {facebook_link ? (
          <Link href={`${facebook_link}`} target="_blank">
            <div className="">
              <div className="h-8 w-8 bg-ov-primary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ) : null}
        {instagram_link ? (
          <Link href={`${instagram_link}`} target="_blank">
            <div className="">
              <div className="h-8 w-8 bg-ov-primary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ) : null}
        {linkedin_link ? (
          <Link href={`${linkedin_link}`} target="_blank">
            <div className="">
              <div className="h-8 w-8 bg-ov-primary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ) : null}
        {youtube_link ? (
          <Link href={`${youtube_link}`} target="_blank">
            <div className="">
              <div className="h-8 w-8 bg-ov-primary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ) : null}
      </div>
      {/* Vista Mobile */}

      {/* Vista Desktop */}
      <div className="w-full lg:px-20 py-4 lg:py-24 rounded-3xl bg-white lg:-mt-36">
        <div className="flex flex-row gap-32">
          <div className="hidden lg:flex flex-col gap-8 w-2/5">
            <h2 className="text-black font-bold text-xl lg:text-3xl mb-4">
              {info_title}
            </h2>
            <LocationItem
              location_title={location_title}
              location_text={location_text}
            />
            <EmailItem email_title={email_title} email_text={email_text} />
            <PhoneItem
              phone_title={phone_title}
              phone_text_1={phone_text_1}
              phone_text_2={phone_text_2}
            />
            <p className="text-black font-bold py-4">{networks_title}</p>
            <div className="flex flex-row gap-2 mt-4">
              {facebook_link ? (
                <Link href={`${facebook_link}`} target="_blank">
                  <div className="">
                    <div className="h-8 w-8 bg-ov-primary rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ffffff"
                          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ) : null}
              {instagram_link ? (
                <Link href={`${instagram_link}`} target="_blank">
                  <div className="">
                    <div className="h-8 w-8 bg-ov-primary rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ffffff"
                          d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ) : null}
              {linkedin_link ? (
                <Link href={`${linkedin_link}`} target="_blank">
                  <div className="">
                    <div className="h-8 w-8 bg-ov-primary rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ffffff"
                          d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ) : null}
              {youtube_link ? (
                <Link href={`${youtube_link}`} target="_blank">
                  <div className="">
                    <div className="h-8 w-8 bg-ov-primary rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ffffff"
                          d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ) : null}
            </div>
          </div>
          {/* Vista Desktop */}
          <div className="w-full lg:w-3/5 bg-white">
            <h2 className="text-black font-bold text-xl lg:text-3xl mb-4">
              {contact_form_title}
            </h2>

            <ContactForm
              name_and_lastname_placeholder={name_placeholder}
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
