import React from "react";

export const PhoneItem = ({phone_text_1, phone_text_2}) => {

    return (
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
    );
};