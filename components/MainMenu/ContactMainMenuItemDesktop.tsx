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
          <div className="text-sm font-semibold text-gray-300 hover:text-white transition duration-300">
            {text}
          </div>
        </div>
      </Link>
    );

  return (
    <div className="flex flex-row gap-2">
      <img src={`${icon}`} />
      <div className=" font-semibold text-sm text-gray-300 hover:text-white transition duration-300">
        {text}
      </div>
    </div>
  );
};
