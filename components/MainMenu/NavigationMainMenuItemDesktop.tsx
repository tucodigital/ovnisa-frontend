import Link from "next/link";

interface NavigationMainMenuItemContent {
  text: String;
  url: String;
}

export const NavigationMainMenuItemDesktop = ({
  text,
  url,
}: NavigationMainMenuItemContent) => {
  return (
    <Link href={`${url}`}>
      <div className="text-white font-semibold text-lg">{text}</div>
    </Link>
  );
};
