import Link from "next/link";
import { loaderProp } from "@/lib/utils";
import Image from "next/image";

interface ContactMainMenuItemContent {
  text: String;
  icon: String;
  url?: String;
  alt?: string;
}

export const ContactMainMenuItemDesktop = ({
  text,
  icon,
  url,
  alt,
}: ContactMainMenuItemContent) => {
  if (url)
    return (
      <Link href={`${url}`} target="_blank">
        <div className="flex flex-row gap-2">
          <Image
            width={20}
            height={20}
            objectFit="fill"
            loader={loaderProp}
            alt={alt ? alt : "icono"}
            src={`${icon}`}
          />
          <div className="text-sm font-semibold text-gray-300 hover:text-white transition duration-300">
            {text}
          </div>
        </div>
      </Link>
    );

  return (
    <div className="flex flex-row gap-2">
      <Image
        width={20}
        height={20}
        objectFit="fill"
        loader={loaderProp}
        alt={alt ? alt : "icono"}
        src={`${icon}`}
      />
      <div className=" font-semibold text-sm text-gray-300 hover:text-white transition duration-300">
        {text}
      </div>
    </div>
  );
};
