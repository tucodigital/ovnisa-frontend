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
          <img src={`${icon}`} />
          <div className="text-white text-sm font-semibold hover:text-sky-300">
            {text}
          </div>
        </div>
      </Link>
    );

  return (
    <div className="flex flex-row gap-2">
      <img src={`${icon}`} />
      <div className="text-white font-semibold text-sm hover:text-sky-300">{text}</div>
    </div>
  );
};
