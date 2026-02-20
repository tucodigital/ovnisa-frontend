import React from "react";

export const EmailItem = ({ email_title, email_text }) => {
  return (
    <div className="flex flex-row gap-4">
      {/* Reemplazar por icono */}
      <div className="">
        <div className="h-14 w-14 bg-ov-primary rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10"
            viewBox="0 0 24 24"
          >
            <title>email-outlined</title>
            <path
              fill="#ffffff"
              fill-rule="evenodd"
              d="m4.2 5.2l7.56 5.67a.4.4 0 0 0 .48 0L19.8 5.2zm16.6.75l-7.84 5.88a1.6 1.6 0 0 1-1.92 0L3.2 5.95V18.8h17.6zM3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-black font-bold">{email_title}</p>
        <p className="text-gray-500 text-sm">{email_text}</p>
      </div>
    </div>
  );
};
