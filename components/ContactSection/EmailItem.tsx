import React from "react";

export const EmailItem = ({email_text}) => {

    return (
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
    );
};