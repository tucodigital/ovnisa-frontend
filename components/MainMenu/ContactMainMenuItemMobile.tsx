import Link from "next/link";

interface ContactMainMenuItemContent {
  icon: String;
  url?: String;
}

export const ContactMainMenuItemMobile = ({
  icon,
  url,
}: ContactMainMenuItemContent) => {
  if (url)
    return (
      <Link href={`${url}`} target="_blank">
        <img src={`${icon}`} />
      </Link>
    );

  return (
    <div className="flex flex-row gap-2">
      <img src={`${icon}`} />
    </div>
  );
};
