import React from "react";

export const WhatsappItem = ({whatsapp_text}) => {

    return (
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
    );
};