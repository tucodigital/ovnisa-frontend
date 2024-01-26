import { loaderProp } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ContactMainMenuItemContent {
  icon: String;
  url?: String;
  alt?: string;
}

export const ContactMainMenuItemMobile = ({
  icon,
  url,
  alt,
}: ContactMainMenuItemContent) => {
  if (url)
    return (
      <Link href={`${url}`} target="_blank">
        <Image
          width={18}
          height={18}
          objectFit="fill"
          loader={loaderProp}
          alt={alt ? alt : "icono"}
          src={`${icon}`}
        />
      </Link>
    );

  return (
    <div className="flex flex-row gap-2">
      <Image
        width={18}
        height={18}
        objectFit="fill"
        loader={loaderProp}
        alt={alt ? alt : "icono"}
        src={`${icon}`}
      />
    </div>
  );
};
