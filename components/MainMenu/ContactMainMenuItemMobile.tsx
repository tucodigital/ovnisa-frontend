import Link from "next/link";

interface ContactMainMenuItemContent {
  icon: String;
  url?: String;
  alt?:string;
}

export const ContactMainMenuItemMobile = ({
  icon,
  url,
  alt
}: ContactMainMenuItemContent) => {
  if (url)
    return (
      <Link href={`${url}`} target="_blank">
        <img src={`${icon}`} alt={alt ? alt : "icono"} />
      </Link>
    );

  return (
    <div className="flex flex-row gap-2">
      <img src={`${icon}`} alt={alt ? alt : "icono"} />
    </div>
  );
};
