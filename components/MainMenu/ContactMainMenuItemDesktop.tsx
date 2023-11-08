import Link from "next/link";

interface ContactMainMenuItemContent {
  text: String;
  icon: String;
  url?: String;
}

export const ContactMainMenuItemDesktop = ({
  text,
  icon,
  url,
}: ContactMainMenuItemContent) => {
  if (url)
    return (
      <Link href={`${url}`} target="_blank">
        <div className="flex flex-row gap-2">
          <img
            className=""
            src={`${icon}`}
          />
          <div className="text-white text-sm">
            {text}
          </div>
        </div>
      </Link>
    );

  return (
    <div className="flex flex-row gap-2">
          <img
            className=""
            src={`${icon}`}
          />
          <div className="text-white text-sm">
            {text}
          </div>
        </div>
  );
};
