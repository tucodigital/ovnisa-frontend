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
        <div className="flex flex-row items-center justify-end gap-2">
          <Image
            width={15}
            height={15}
            objectFit="fill"
            loader={loaderProp}
            alt={alt ? alt : "icono"}
            src={`${icon}`}
          />
          <div className="font-semibold text-white transition duration-300 text-xs xl:text-sm">
            {text}
          </div>
        </div>
      </Link>
    );

  return (
    <div className="flex flex-row items-center justify-end gap-2">
      <Image
        width={15}
        height={15}
        objectFit="fill"
        loader={loaderProp}
        alt={alt ? alt : "icono"}
        src={`${icon}`}
      />
      <div className="font-semibold text-white hover:text-white transition duration-300 text-xs xl:text-sm">
        {text}
      </div>
    </div>
  );
};
