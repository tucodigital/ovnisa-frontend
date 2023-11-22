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
      <div className="text-white font-bold text-lg hover:underline underline-offset-4">{text}</div>
    </Link>
  );
};
